import React from "react";
import { Link } from "react-router-dom";

// Visible breadcrumb trail. The matching BreadcrumbList JSON-LD is built from
// the same route in src/structuredData.js.
const Breadcrumbs = ({ items }) => (
  <nav aria-label="Breadcrumb" className="breadcrumbs">
    <ol>
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <li key={item.href || item.name} aria-current={last ? "page" : undefined}>
            {index > 0 && (
              <span aria-hidden="true" className="breadcrumb-sep">
                ›
              </span>
            )}
            {last || !item.href ? (
              <span>{item.name}</span>
            ) : (
              <Link to={item.href}>{item.name}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
