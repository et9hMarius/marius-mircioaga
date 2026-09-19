import React from "react";
import { useState, useEffect } from "react";

import cards from "../../assets/projects";
import Reveal from "../reveal";
import Breadcrumbs from "../Breadcrumbs";

import { useTranslation } from "react-i18next";

const changeCardsRowed = (width) => {
  let cardsPerRow = 3;
  if (width < 1200) {
    cardsPerRow = 2;
  }
  if (width < 800) {
    cardsPerRow = 1;
  }
  const temp = [];
  let row = [];
  for (let i = 0; i < cards.length; i++) {
    row.push(cards[i]);
    if (row.length === cardsPerRow) {
      temp.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    temp.push(row);
  }

  return temp;
};

const ProjectList = () => {
  const { i18n } = useTranslation();
  // No window while prerendering; 1200 gives the desktop layout.
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 1200 : window.innerWidth
  );
  const [cardsRowed, setCardsRowed] = useState(changeCardsRowed(width));
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const temp = changeCardsRowed(width);
    setCardsRowed(temp);
  }, [width]);

  return (
    <div className="projectList">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects" }]} />
      <div className="header">
        <p className="subtitle h-plain">
          {i18n.t("all")} <span className="purple">{i18n.t("mele2")}</span>
        </p>
        <h1 className="title h-plain">{i18n.t("projects")}</h1>
      </div>
      <div className="projects-cards">
        {cardsRowed &&
          cardsRowed.map((row, index) => {
            return (
              <Reveal key={index} direction="bottom">
                <div className="projects-cards-row" key={index}>
                  {row.map((card) => {
                    return (
                      <div className="projects-card" key={card.id}>
                        <div className="image-wrapper">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                              card.link ? card.link : `/projects/${card.id}`
                            }
                          >
                            <img
                              src={card.image}
                              alt={card.alt || card.title}
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
