import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import { RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import ScrollToTop from "./components/scrollToTop";
import Seo from "./components/seo";
import NotFound from "./components/NotFound";
import CeoClubsCRM from "./components/Projects/ceoclubscrm";
import Contact from "./components/contact";
import { Analytics } from "@vercel/analytics/react";
import BlogPage from "./components/Articles/blogPage";
import Article1 from "./components/Articles/full-stack-web-development-services";
import Article2 from "./components/Articles/custom-web-development-solutions";
import Article3 from "./components/Articles/affordable-web-development-packages";
import Article4 from "./components/Articles/innovative-digital-solutions";
import Article5 from "./components/Articles/mobile-app-development-specialists";
import Article6 from "./components/Articles/seo-friendly-website-development";
import Article7 from "./components/Articles/high-quality-web-development-services";
import ZenkoAi from "./components/Projects/zenkoai";
import { ThemeProvider } from "./context/ThemeContext";

// Every route renders the same chrome around one <main> landmark.
const page = (content) => (
  <>
    <ScrollToTop />
    <Seo />
    <Navbar />
    <main>{content}</main>
  </>
);

// Every path here needs an entry in src/seo.js (the prerender step enforces
// it). Routes are case-sensitive so /Projects lands on the not-found page
// (noindex) instead of rendering a duplicate of /projects. The "*" route is
// the not-found page and is prerendered to build/404.html.
export const routes = [
  { path: "/", element: page(<Home />) },
  { path: "/projects", element: page(<Projects />) },
  {
    path: "/projects/ceoclubscrm",
    element: page(
      <>
        <CeoClubsCRM />
        <Contact />
      </>
    ),
  },
  {
    path: "/projects/zenkoai",
    element: page(
      <>
        <ZenkoAi />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles",
    element: page(
      <>
        <BlogPage />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/full-stack-web-development-services",
    element: page(
      <>
        <Article1 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/custom-web-development-solutions",
    element: page(
      <>
        <Article2 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/affordable-web-development-packages",
    element: page(
      <>
        <Article3 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/innovative-digital-solutions",
    element: page(
      <>
        <Article4 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/mobile-app-development-specialists",
    element: page(
      <>
        <Article5 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/seo-friendly-website-development",
    element: page(
      <>
        <Article6 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/high-quality-web-development-services",
    element: page(
      <>
        <Article7 />
        <Contact />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <main>
          <NotFound />
        </main>
      </>
    ),
  },
].map((route) => (route.path === "*" ? route : { ...route, caseSensitive: true }));

// The router comes from the caller: a browser router in index.js, a memory
// router when prerendering (src/ssr.js).
function App({ router }) {
  return (
    <ThemeProvider>
      <div className="App" id="app">
        <Analytics />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
