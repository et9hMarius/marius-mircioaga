import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar />
        "test"
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        "test"
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
