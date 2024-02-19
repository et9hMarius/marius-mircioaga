import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.substring(1));

  useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);

  return (
    <div className="navbar">
      <div className="container">
        <nav className={"nav" + (show ? " mobile-height" : "")}>
          <div className="logo">
            <img
              className="logo-img"
              width={40}
              height={40}
              src={"/images/logo.png"}
              alt="logo"
            />
            <div className="logo-text">
              <Link
                onClick={() => {
                  window.scrollTo(0, 0); //todo buggy ?
                }}
              >
                PORTFOLIO
              </Link>
            </div>
          </div>
          <ul className="right desktop">
            <li>
              <Link className={active == "" ? "active" : ""} to="/">
                home
              </Link>
            </li>
            <li>
              <Link
                className={active == "projects" ? "active" : ""}
                to="/projects"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                className={active == "contact" ? "active" : ""}
                onClick={() => {
                  const contact = document.getElementsByClassName("contact")[0];
                  contact.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                contact
              </Link>
            </li>
          </ul>

          <ul className="right mobile">
            <div>
              <img
                onClick={() => setShow(!show)}
                className={"hamburger" + (show ? " active" : "")}
                width={30}
                src={"/images/menu.png"}
                alt="menu"
              />
            </div>
            <div className={"menu" + (show ? " show" : "")}>
              <li>
                <Link className={active == "" ? "active" : ""} to="/">
                  home
                </Link>
              </li>
              <li>
                <Link
                  className={active == "projects" ? "active" : ""}
                  to="/projects"
                >
                  projects
                </Link>
              </li>
              <li>
                <Link
                  className={active == "contact" ? "active" : ""}
                  onClick={() => {
                    const contact =
                      document.getElementsByClassName("contact")[0];
                    contact.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  contact
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
