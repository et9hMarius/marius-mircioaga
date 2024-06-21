import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import ScrollToTop from "./components/scrollToTop";
import CeoClubsCRM from "./components/Projects/ceoclubscrm";
import Contact from "./components/contact";

import BlogPage from "./components/Articles/blogPage";
import Article1 from "./components/Articles/full-stack-web-development-services";
import Article2 from "./components/Articles/custom-web-development-solutions";
import Article3 from "./components/Articles/affordable-web-development-packages";
import Article4 from "./components/Articles/innovative-digital-solutions";
import Article5 from "./components/Articles/mobile-app-development-specialists";
import Article6 from "./components/Articles/seo-friendly-website-development";
import Article7 from "./components/Articles/high-quality-web-development-services";
import ZenkoAi from "./components/Projects/zenkoai";
/*
full-stack-web-development-services
custom-web-development-solutions
affordable-web-development-packages
innovative-digital-solutions
mobile-app-development-specialists
seo-friendly-website-development
high-quality-web-development-services
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
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
        <Navbar />
        <Article7 />
        <Contact />
      </>
    ),
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
