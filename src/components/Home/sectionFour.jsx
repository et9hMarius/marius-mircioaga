import React from "react";
import Reveal from "../reveal";
import Card from "./card";
import { useTranslation } from "react-i18next";

const SectionFour = () => {
  const { i18n } = useTranslation();
  const cardData = [
    {
      title: i18n.t("title41"),
      image: "/images/school.png",
      description: i18n.t("description41"),
    },
    {
      title: i18n.t("title42"),
      image: "/images/work.png",
      description: i18n.t("description42"),
    },
    {
      title: i18n.t("title43"),
      image: "/images/extra.png",
      description: i18n.t("description43"),
    },
    {
      title: i18n.t("title44"),
      image: "/images/philosophy.png",
      description: i18n.t("description44"),
    },
  ];

  return (
    <div className="section-four">
      <div className="container">
        <div className="content">
          <Reveal direction={"left"}>
            <div className="subtitle">
              {i18n.t("meu")} <span className="orange">{i18n.t("about")}</span>
            </div>
            <div className="title">{i18n.t("whoami")}</div>
            <div className="underline" />
          </Reveal>
          <div className="cards">
            {cardData.map((card, index) => {
              if (index % 2 === 0) {
                return (
                  <div className="row" key={index}>
                    <Reveal direction={"bottom"}>
                      <Card {...card} />
                    </Reveal>
                    <Reveal direction={"bottom"}>
                      <Card {...cardData[index + 1]} />
                    </Reveal>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
