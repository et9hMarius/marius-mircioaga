// Server entry for the prerender step (scripts/prerender.mjs): renders one
// route to HTML, plus the head tags <Seo /> produced for it and the antd
// styles the page uses (antd injects its CSS at runtime, so without these the
// prerendered markup would show unstyled until the bundle loads).
import { renderToString } from "react-dom/server";
import { createMemoryRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import "./i18n/config.ts";
import App, { routes } from "./App";

export {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  PERSON,
  ORGANIZATION,
  pageMeta,
  articlePaths,
  projectPaths,
} from "./seo";

// The catch-all route (NotFound) has no URL of its own to prerender.
export const paths = routes
  .map((route) => route.path)
  .filter((path) => !path.includes("*"));

export function render(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  const cache = createCache();
  const html = renderToString(
    <StyleProvider cache={cache}>
      <App router={router} />
    </StyleProvider>
  );
  const helmet = Helmet.renderStatic();
  return {
    html,
    head:
      helmet.title.toString() +
      helmet.meta.toString() +
      helmet.link.toString() +
      helmet.script.toString(),
    styles: extractStyle(cache),
  };
}
