import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import { PERSON, pageMeta } from "../../seo";
import { formatDate } from "../formatDate";

// Shared frame for every article: breadcrumbs, the <h1> (the same headline
// the BlogPosting JSON-LD uses), a byline with machine-readable dates, and
// the hero image. The article body is passed as children.
const ArticleLayout = ({ path, children }) => {
  const meta = pageMeta[path];
  if (!meta) throw new Error(`src/seo.js has no entry for ${path}`);
  const updated = meta.dateModified && meta.dateModified !== meta.datePublished;

  return (
    <article className="articlePage">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: meta.headline },
        ]}
      />
      <header className="article-header">
        <h1>{meta.headline}</h1>
        <p className="article-meta">
          By{" "}
          <a href={PERSON.url} rel="author">
            {PERSON.name}
          </a>
          {" · "}
          Published{" "}
          <time dateTime={meta.datePublished}>
            {formatDate(meta.datePublished)}
          </time>
          {updated && (
            <>
              {" · "}
              Updated{" "}
              <time dateTime={meta.dateModified}>
                {formatDate(meta.dateModified)}
              </time>
            </>
          )}
        </p>
      </header>
      <img
        src={meta.image.src}
        alt={meta.image.alt}
        width={meta.image.width}
        height={meta.image.height}
        fetchpriority="high"
      />
      {children}
    </article>
  );
};

export default ArticleLayout;
