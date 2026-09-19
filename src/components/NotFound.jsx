import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Rendered for any route App.js doesn't know. The host serves the SPA shell
// with a 200 for unknown URLs, so the noindex tag is what keeps search engines
// from indexing them (Google's documented fix for single-page-app soft 404s).
const NotFound = () => (
  <>
    <Helmet>
      <title>Page not found — Marius Mircioaga</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="not-found">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist or has moved.</p>
      <p>
        <Link to="/">Back to the home page</Link> ·{" "}
        <Link to="/projects">Projects</Link> · <Link to="/articles">Articles</Link>
      </p>
    </div>
  </>
);

export default NotFound;
