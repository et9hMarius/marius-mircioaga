import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App, { routes } from "./App";
import "./i18n/config.ts";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);

reportWebVitals();
