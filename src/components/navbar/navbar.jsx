import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../context/ThemeContext";

const languages = [
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
  { code: "fr", label: "FR" },
];

function Navbar() {
  const [show, setShow] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.substring(1));
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const langRef = useRef(null);

  useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

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
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                PORTFOLIO
              </Link>
            </div>
          </div>
          <div className="nav-controls">
            <div className="lang-switcher" ref={langRef}>
              <button
                className="lang-toggle"
                onClick={() => setLangOpen(!langOpen)}
                aria-label="Switch language"
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={
                        "lang-option" +
                        (i18n.language === lang.code ? " active" : "")
                      }
                      onClick={() => switchLanguage(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </button>
          </div>
          <ul className="right desktop">
            <li>
              <Link className={active === "" ? "active" : ""} to="/">
                {i18n.t("nav_home")}
              </Link>
            </li>
            <li>
              <Link
                className={active === "projects" ? "active" : ""}
                to="/projects"
              >
                {i18n.t("nav_projects")}
              </Link>
            </li>
            <li>
              <Link
                className={active === "contact" ? "active" : ""}
                onClick={() => {
                  const contact =
                    document.getElementsByClassName("contact")[0];
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {i18n.t("nav_contact")}
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
                <Link className={active === "" ? "active" : ""} to="/">
                  {i18n.t("nav_home")}
                </Link>
              </li>
              <li>
                <Link
                  className={active === "projects" ? "active" : ""}
                  to="/projects"
                >
                  {i18n.t("nav_projects")}
                </Link>
              </li>
              <li>
                <Link
                  className={active === "contact" ? "active" : ""}
                  onClick={() => {
                    const contact =
                      document.getElementsByClassName("contact")[0];
                    if (contact) {
                      contact.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {i18n.t("nav_contact")}
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
