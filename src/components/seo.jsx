import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { SITE_URL, pageMeta } from "../seo";

// Route-specific head tags. Site-wide tags (og:image, twitter:card, JSON-LD)
// live in public/index.html.
const Seo = () => {
  const { pathname } = useLocation();
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const meta = pageMeta[path];
  if (!meta) return null;

  const url = SITE_URL + path;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default Seo;
