// Runs after `react-scripts build`. Renders every route to static HTML so
// crawlers and link previews get the real text and per-route meta tags without
// running JavaScript, then writes sitemap.xml. In the browser, index.js still
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

const { render, paths, pageMeta, SITE_URL } =
  createRequire(import.meta.url)(bundle);

// Every route needs its own title and description.
const titles = new Set();
const descriptions = new Set();
for (const p of paths) {
  const meta = pageMeta[p];
  if (!meta) throw new Error(`src/seo.js has no entry for route ${p}`);
  if (titles.has(meta.title)) throw new Error(`Duplicate title on ${p}`);
  if (descriptions.has(meta.description)) {
    throw new Error(`Duplicate description on ${p}`);
  }
  titles.add(meta.title);
  descriptions.add(meta.description);
}

const template = fs.readFileSync(path.join(buildDir, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("build/index.html is already prerendered; run `npm run build`");
}

for (const p of paths) {
  const { html, head, styles } = render(p);
  // Empty styles here means antd resolved its own copy of @ant-design/cssinjs;
  // keep the devDependency on the same version antd uses.
  if (/class="[^"]*\bant-/.test(html) && !styles) {
    throw new Error(`No antd styles extracted for ${p}`);
  }
  const page = template
    .replace(/<title>.*?<\/title>/s, () => head + styles)
    .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`);
  const file = path.join(buildDir, p, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
  console.log(`Prerendered ${p}`);
}

const urls = paths
  .map((p) => `  <url>\n    <loc>${SITE_URL}${p}</loc>\n  </url>`)
  .join("\n");
fs.writeFileSync(
  path.join(buildDir, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    `${urls}\n</urlset>\n`
);
console.log(`Wrote sitemap.xml with ${paths.length} URLs`);
