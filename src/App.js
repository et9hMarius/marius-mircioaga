import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import { RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import ScrollToTop from "./components/scrollToTop";
import Seo from "./components/seo";
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

export const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Projects />
      </>
    ),
  },
  {
    path: "/projects/ceoclubscrm",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <CeoClubsCRM />
        <Contact />
      </>
    ),
  },
  {
    path: "/projects/zenkoai",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <ZenkoAi />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <BlogPage />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/full-stack-web-development-services",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article1 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/custom-web-development-solutions",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article2 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/affordable-web-development-packages",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article3 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/innovative-digital-solutions",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article4 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/mobile-app-development-specialists",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article5 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/seo-friendly-website-development",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article6 />
        <Contact />
      </>
    ),
  },
  {
    path: "/articles/high-quality-web-development-services",
    element: (
      <>
        <ScrollToTop />
        <Seo />
        <Navbar />
        <Article7 />
        <Contact />
      </>
    ),
  },
];

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
