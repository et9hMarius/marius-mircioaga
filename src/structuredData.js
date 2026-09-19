// JSON-LD for every route, built from the single source of truth in
// src/seo.js so the markup always matches the visible page. Each page emits
// one @graph: the site, the person and the company on every page, plus the
// node for the page itself and (off the home page) a breadcrumb trail.
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_CREATED,
  PERSON,
  ORGANIZATION,
  pageMeta,
  articlePaths,
  absoluteUrl,
} from "./seo";
import projects from "./assets/projects";

const WEBSITE_ID = `${SITE_URL}/#website`;

const imageObject = (image) =>
  image && {
    "@type": "ImageObject",
    url: absoluteUrl(image.src),
    width: image.width,
    height: image.height,
    ...(image.alt ? { caption: image.alt } : {}),
  };

const personNode = () => ({
  "@type": "Person",
  "@id": PERSON["@id"],
  name: PERSON.name,
  givenName: PERSON.givenName,
  familyName: PERSON.familyName,
  jobTitle: PERSON.jobTitle,
  description: PERSON.description,
  url: PERSON.url,
  image: imageObject(PERSON.image),
  email: `mailto:${PERSON.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: PERSON.address.locality,
    addressRegion: PERSON.address.region,
    addressCountry: PERSON.address.country,
  },
  sameAs: PERSON.sameAs,
  knowsAbout: PERSON.knowsAbout,
  worksFor: { "@id": ORGANIZATION["@id"] },
});

const organizationNode = () => ({
  "@type": "Organization",
  "@id": ORGANIZATION["@id"],
  name: ORGANIZATION.name,
  alternateName: ORGANIZATION.alternateName,
  url: ORGANIZATION.url,
  description: ORGANIZATION.description,
  founder: { "@id": PERSON["@id"] },
});

const websiteNode = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON["@id"] },
});

// Short author/publisher reference: the @id plus the two fields Google asks
// for on articles, so the node stands on its own if the graph isn't merged.
const personRef = () => ({
  "@type": "Person",
  "@id": PERSON["@id"],
  name: PERSON.name,
  url: PERSON.url,
});

// Breadcrumb trail for a route, mirroring the visible <Breadcrumbs>.
export function breadcrumbsFor(path) {
  const meta = pageMeta[path];
  const crumbs = [{ name: "Home", href: "/" }];
  const navName = (p) => pageMeta[p].navName || pageMeta[p].headline;
  if (path.startsWith("/projects/")) crumbs.push({ name: navName("/projects"), href: "/projects" });
  if (path.startsWith("/articles/")) crumbs.push({ name: navName("/articles"), href: "/articles" });
  if (path !== "/") crumbs.push({ name: meta.navName || meta.headline || meta.title });
  return crumbs;
}

const breadcrumbNode = (path) => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(path)}#breadcrumb`,
  itemListElement: breadcrumbsFor(path).map((crumb, index, all) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    ...(index < all.length - 1 ? { item: absoluteUrl(crumb.href) } : {}),
  })),
});

const listItem = (position, name, url) => ({
  "@type": "ListItem",
  position,
  name,
  url,
});

function pageNode(path) {
  const meta = pageMeta[path];
  const url = absoluteUrl(path);
  const base = {
    "@id": url,
    url,
    name: meta.headline || meta.title,
    description: meta.description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    dateModified: meta.dateModified,
  };

  switch (meta.type) {
    case "profile":
      return {
        "@type": "ProfilePage",
        ...base,
        name: meta.title,
        dateCreated: SITE_CREATED,
        primaryImageOfPage: imageObject(PERSON.image),
        mainEntity: { "@id": PERSON["@id"] },
      };

    case "collection": {
      const items =
        path === "/articles"
          ? articlePaths
              .map((p) => ({ p, ...pageMeta[p] }))
              .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
              .map((a, i) => listItem(i + 1, a.headline, absoluteUrl(a.p)))
          : // Every thumbnail /projects renders, in the order it renders them.
            projects.map((project, i) =>
              listItem(
                i + 1,
                project.title || project.alt.split(" — ")[0],
                project.link || absoluteUrl(`/projects/${project.id}`)
              )
            );
      return {
        "@type": "CollectionPage",
        ...base,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items,
        },
      };
    }

    case "project":
      return {
        "@type": "WebPage",
        ...base,
        datePublished: meta.datePublished,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: imageObject(meta.image),
        mainEntity: {
          "@type": "CreativeWork",
          "@id": `${url}#work`,
          name: meta.headline,
          description: meta.description,
          url,
          image: imageObject(meta.image),
          creator: personRef(),
          keywords: meta.keywords.join(", "),
        },
      };

    case "article":
      return {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        url,
        headline: meta.headline,
        description: meta.description,
        image: [absoluteUrl(meta.image.src)],
        datePublished: meta.datePublished,
        dateModified: meta.dateModified,
        author: personRef(),
        publisher: personRef(),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
        articleSection: "Web development",
        keywords: meta.keywords.join(", "),
      };

    default:
      throw new Error(`Unknown page type "${meta.type}" for ${path}`);
  }
}

export function buildJsonLd(path) {
  const graph = [websiteNode(), personNode(), organizationNode(), pageNode(path)];
  if (path !== "/") graph.push(breadcrumbNode(path));
  return { "@context": "https://schema.org", "@graph": graph };
}
