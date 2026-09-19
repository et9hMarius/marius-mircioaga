// Runs after `react-scripts build`. Renders every route to static HTML so
// crawlers and link previews get the real text and per-route head tags without
// running JavaScript, checks each page against a few SEO invariants, then
// writes sitemap.xml, feed.xml and llms.txt. In the browser, index.js still
// mounts with createRoot, which replaces the prerendered markup, so the page
// behaves exactly as before once the bundle loads.
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildDir = path.join(root, "build");
const bundle = path.join(root, "node_modules", ".cache", "prerender", "ssr.cjs");

// Bundle the app for Node. Styles only matter in the browser, so they're dropped.
await build({
  entryPoints: [path.join(root, "src", "ssr.js")],
  outfile: bundle,
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  loader: { ".js": "jsx", ".css": "empty", ".scss": "empty" },
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "warning",
});

const {
  render,
  paths,
  pageMeta,
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  PERSON,
  ORGANIZATION,
  articlePaths,
  projectPaths,
} = createRequire(import.meta.url)(bundle);

const problems = [];
const warnings = [];
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
const escapeXml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const inBuild = (publicPath) =>
  fs.existsSync(path.join(buildDir, decodeURIComponent(publicPath.split("?")[0])));

// --- Metadata checks ---------------------------------------------------------
const titles = new Set();
const descriptions = new Set();
for (const p of paths) {
  const meta = pageMeta[p];
  if (!meta) {
    problems.push(`src/seo.js has no entry for route ${p}`);
    continue;
  }
  if (titles.has(meta.title)) problems.push(`Duplicate title on ${p}`);
  if (descriptions.has(meta.description)) problems.push(`Duplicate description on ${p}`);
  titles.add(meta.title);
  descriptions.add(meta.description);
  if (!isoDate.test(meta.dateModified || "")) problems.push(`${p}: dateModified must be YYYY-MM-DD`);
  if ((meta.type === "article" || meta.type === "project") && !isoDate.test(meta.datePublished || "")) {
    problems.push(`${p}: datePublished must be YYYY-MM-DD`);
  }
  if (meta.type === "article" && !meta.headline) problems.push(`${p}: articles need a headline`);
  if (meta.image && !inBuild(meta.image.src)) problems.push(`${p}: image ${meta.image.src} is not in build/`);
  if (meta.image && (!meta.image.width || !meta.image.height || !meta.image.alt)) {
    problems.push(`${p}: image needs width, height and alt`);
  }
  if (meta.title.length > 65) warnings.push(`${p}: title is ${meta.title.length} chars (aim for 60 or fewer)`);
  if (meta.description.length > 165) warnings.push(`${p}: description is ${meta.description.length} chars (aim for 160 or fewer)`);
  if (meta.description.length < 70) warnings.push(`${p}: description is only ${meta.description.length} chars`);
}
for (const p of Object.keys(pageMeta)) {
  if (!paths.includes(p)) problems.push(`src/seo.js has an entry for ${p} but App.js has no such route`);
}

const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("build/index.html is already prerendered; run `npm run build`");
}

// --- Render + page checks ----------------------------------------------------
const pages = new Map();
for (const p of paths) {
  if (!pageMeta[p]) continue;
  const { html, head, styles } = render(p);
  // Empty styles here means antd resolved its own copy of @ant-design/cssinjs;
  // keep the devDependency on the same version antd uses.
  if (/class="[^"]*\bant-/.test(html) && !styles) {
    problems.push(`${p}: no antd styles extracted`);
  }

  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) problems.push(`${p}: expected exactly one <h1>, found ${h1Count}`);

  const imagesWithoutAlt = html.match(/<img\b(?![^>]*\balt=)[^>]*>/g) || [];
  if (imagesWithoutAlt.length) {
    problems.push(`${p}: ${imagesWithoutAlt.length} <img> without alt, e.g. ${imagesWithoutAlt[0].slice(0, 90)}`);
  }

  const missingImages = [...html.matchAll(/<img\b[^>]*\bsrc="(\/[^"]+)"/g)]
    .map((m) => m[1])
    .filter((src) => !inBuild(src));
  if (missingImages.length) problems.push(`${p}: image not in build/: ${[...new Set(missingImages)].join(", ")}`);

  const jsonLd = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (jsonLd.length !== 1) {
    problems.push(`${p}: expected one JSON-LD block, found ${jsonLd.length}`);
  } else {
    try {
      const graph = JSON.parse(jsonLd[0][1])["@graph"];
      if (!Array.isArray(graph) || graph.length === 0) problems.push(`${p}: JSON-LD has no @graph`);
    } catch (error) {
      problems.push(`${p}: JSON-LD does not parse: ${error.message}`);
    }
  }

  if (!head.includes(`rel="canonical" href="${SITE_URL}${p}"`)) problems.push(`${p}: canonical tag missing or wrong`);
  if (!/<meta[^>]*name="description"/.test(head)) problems.push(`${p}: meta description missing`);
  if (!/<meta[^>]*property="og:image"/.test(head)) problems.push(`${p}: og:image missing`);

  pages.set(
    p,
    template
      .replace(/<title>.*?<\/title>/s, () => head + styles)
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
  );
}

for (const warning of warnings) console.warn(`SEO warning: ${warning}`);
if (problems.length) {
  for (const problem of problems) console.error(`SEO check failed: ${problem}`);
  process.exit(1);
}

for (const [p, page] of pages) {
  const file = path.join(buildDir, p, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`Prerendered ${p}`);
}

// --- 404.html ----------------------------------------------------------------
// vercel.json rewrites unknown URLs to this file, so crawlers that don't run
// JavaScript see the not-found page (noindex, no canonical) instead of the
// prerendered home page.
{
  const { html, head, styles } = render("/__not-found__");
  if (!/<meta[^>]*name="robots"[^>]*content="noindex"/.test(head)) {
    throw new Error("404 page is missing the noindex robots tag");
  }
  if (/rel="canonical"/.test(head)) {
    throw new Error("404 page must not carry a canonical tag");
  }
  fs.writeFileSync(
    path.join(buildDir, "404.html"),
    template
      .replace(/<title>.*?<\/title>/s, () => head + styles)
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
  );
  console.log("Prerendered 404.html");
}

// --- sitemap.xml -------------------------------------------------------------
// Google uses <lastmod> when it is accurate and ignores changefreq/priority.
const urls = paths
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${pageMeta[p].dateModified}</lastmod>\n  </url>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(buildDir, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `${urls}\n</urlset>\n`
);
console.log(`Wrote sitemap.xml with ${paths.length} URLs`);

// --- feed.xml (RSS 2.0 of the articles, newest first) -----------------------
const articles = articlePaths
  .map((p) => ({ path: p, ...pageMeta[p] }))
  .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
const rfc822 = (date) => new Date(`${date}T00:00:00Z`).toUTCString();
const latestUpdate = articles.map((a) => a.dateModified).sort().pop();
const items = articles
  .map(
    (a) =>
      `    <item>\n` +
      `      <title>${escapeXml(a.headline)}</title>\n` +
      `      <link>${SITE_URL}${a.path}</link>\n` +
      `      <guid isPermaLink="true">${SITE_URL}${a.path}</guid>\n` +
      `      <description>${escapeXml(a.description)}</description>\n` +
      `      <pubDate>${rfc822(a.datePublished)}</pubDate>\n` +
      `      <dc:creator>${escapeXml(PERSON.name)}</dc:creator>\n` +
      (a.keywords || []).map((k) => `      <category>${escapeXml(k)}</category>\n`).join("") +
      `    </item>`
  )
  .join("\n");
fs.writeFileSync(
  path.join(buildDir, "feed.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">\n' +
    `  <channel>\n` +
    `    <title>${escapeXml(SITE_NAME)} — Articles</title>\n` +
    `    <link>${SITE_URL}/articles</link>\n` +
    `    <description>${escapeXml(pageMeta["/articles"].description)}</description>\n` +
    `    <language>en</language>\n` +
    `    <lastBuildDate>${rfc822(latestUpdate)}</lastBuildDate>\n` +
    `    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>\n` +
    `${items}\n` +
    `  </channel>\n` +
    `</rss>\n`
);
console.log(`Wrote feed.xml with ${articles.length} items`);

// --- llms.txt (https://llmstxt.org) ------------------------------------------
// Google ignores this file; Perplexity reads it. It costs nothing to keep in
// sync with the metadata, so it's generated rather than hand-written.
const line = (p) =>
  `- [${pageMeta[p].headline || pageMeta[p].title}](${SITE_URL}${p}): ${pageMeta[p].description}`;
const llms = [
  `# ${SITE_NAME}`,
  ``,
  `> ${SITE_DESCRIPTION}`,
  ``,
  `${PERSON.description}`,
  ``,
  `- Based in ${PERSON.address.locality}, Romania; works with clients worldwide.`,
  `- Founder of ${ORGANIZATION.name} (${ORGANIZATION.alternateName}): ${ORGANIZATION.url}`,
  `- Contact: ${PERSON.email}`,
  `- Profiles: ${PERSON.sameAs.join(", ")}`,
  `- Skills: ${PERSON.knowsAbout.join(", ")}`,
  ``,
  `## Pages`,
  ``,
  line("/"),
  line("/projects"),
  line("/articles"),
  ``,
  `## Projects`,
  ``,
  ...projectPaths.map(line),
  ``,
  `## Articles`,
  ``,
  ...articles.map((a) => line(a.path)),
  ``,
  `## Optional`,
  ``,
  `- [Sitemap](${SITE_URL}/sitemap.xml): every indexable URL with its last-modified date.`,
  `- [RSS feed](${SITE_URL}/feed.xml): the articles as RSS 2.0.`,
  ``,
].join("\n");
fs.writeFileSync(path.join(buildDir, "llms.txt"), llms);
console.log("Wrote llms.txt");
