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

export { SITE_URL, pageMeta } from "./seo";

export const paths = routes.map((route) => route.path);

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
      helmet.link.toString(),
    styles: extractStyle(cache),
  };
}
