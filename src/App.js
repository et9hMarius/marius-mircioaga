import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import ScrollToTop from "./components/scrollToTop";

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
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
