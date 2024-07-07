import React, { useEffect, useState } from "react";
import ProjectCard from "./projectCard";
import Reveal from "../reveal";
import cardsRaw from "../../assets/projects";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const { i18n } = useTranslation();
  const [cards, setCards] = useState(cardsRaw);

  useEffect(() => {
    if (i18n.language === "ro") {
      const temp = cardsRaw.map((card) => {
        // Create a copy of the card object
        var tempCard = { ...card };
        // Update the copy with the Romanian descriptions
        tempCard.description = card.description_ro;
        tempCard.title = card.title_ro;
        return tempCard;
      });
      setCards(temp);
    } else {
      setCards(cardsRaw);
    }
  }, [i18n.language]);

  return (
    <div className="section-three">
      <div className="container">
        <div className="content">
          <Reveal direction="left">
            <div className="subtitle">
              {i18n.t("mea")} <span className="purple">{i18n.t("work")}</span>
            </div>
            <div className="title"> {i18n.t("someofmyprojects")}</div>
            <div className="underline" />
          </Reveal>
          <div className="project-cards">
            {cards.map((card) => {
              return card.show ? <ProjectCard key={card.id} {...card} /> : null;
            })}
          </div>
          <Reveal direction="bottom">
            <div className="view-more">
              <a target="_blank" href="/projects">
                <div className="view-more-button">{i18n.t("allprojects")}</div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
