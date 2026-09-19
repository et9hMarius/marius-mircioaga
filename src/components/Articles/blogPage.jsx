import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../reveal";
import Breadcrumbs from "../Breadcrumbs";
import { articlePaths, pageMeta } from "../../seo";
import { formatDate } from "../formatDate";

// Article index. Titles, summaries and dates come from src/seo.js so the
// list, the article pages, the RSS feed and the sitemap never disagree.
const BlogPage = () => {
  const articles = articlePaths
    .map((path) => ({ path, ...pageMeta[path] }))
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

  return (
    <div className="blog-page">
      <div className="blog-page-inner">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Articles" }]} />
        <h1>
          Latest <span>Articles</span>
        </h1>
        <p className="intro">
          Practical guides on web development, custom software, mobile apps and
          SEO, written by Marius Mircioaga.
        </p>
      </div>

      {articles.map((article, index) => (
        <Reveal key={article.path} direction={index % 2 === 0 ? "left" : "right"}>
          <article className="item-article">
            <h2>
              <Link to={article.path}>{article.headline}</Link>
            </h2>
            <p>
              <Link to={article.path}>{article.description}</Link>
            </p>
            <p className="date">
              Published on:{" "}
              <time dateTime={article.datePublished}>
                {formatDate(article.datePublished)}
              </time>
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
};

export default BlogPage;
