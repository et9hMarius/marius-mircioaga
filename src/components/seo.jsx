import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_IMAGE,
  PERSON,
  pageMeta,
  absoluteUrl,
} from "../seo";
import { buildJsonLd } from "../structuredData";

// Route-specific head tags: title, description, canonical, robots hints,
// Open Graph, Twitter card and JSON-LD. Everything comes from src/seo.js;
// the prerender step writes the result into each static page.
const Seo = () => {
  const { pathname } = useLocation();
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const meta = pageMeta[path];
  if (!meta) return null;

  const url = SITE_URL + path;
  const image = meta.image || DEFAULT_IMAGE;
  const imageUrl = absoluteUrl(image.src);
  const isArticle = meta.type === "article";
  const isProfile = meta.type === "profile";
  const ogType = isArticle ? "article" : isProfile ? "profile" : "website";
  const jsonLd = JSON.stringify(buildJsonLd(path));

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content={String(image.width)} />
      <meta property="og:image:height" content={String(image.height)} />
      <meta property="og:image:alt" content={image.alt} />
      {isProfile && (
        <meta property="profile:first_name" content={PERSON.givenName} />
      )}
      {isProfile && (
        <meta property="profile:last_name" content={PERSON.familyName} />
      )}
      {isArticle && (
        <meta property="article:published_time" content={meta.datePublished} />
      )}
      {isArticle && (
        <meta property="article:modified_time" content={meta.dateModified} />
      )}
      {isArticle && <meta property="article:author" content={PERSON.url} />}
      {isArticle &&
        meta.keywords.map((keyword) => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={image.alt} />

      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
};

export default Seo;
