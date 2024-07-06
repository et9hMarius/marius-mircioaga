import React from "react";
import Reveal from "../reveal";
import Card from "./card";

import { useTranslation } from "react-i18next";

const SectionTwo = () => {
  const { i18n } = useTranslation();
  const cardData = [
    {
      title: i18n.t("title1"),
      image: "/images/card-web.png",
      description: i18n.t("description1"),
    },
    {
      title: i18n.t("title2"),
      image: "/images/card-database.png",
      description: i18n.t("description2"),
    },
    {
      title: i18n.t("title3"),
      image: "/images/card-cloud.png",
      description: i18n.t("description3"),
    },
    {
      title: i18n.t("title4"),
      image: "/images/card-ai.png",
      description: i18n.t("description4"),
    },
    {
      title: i18n.t("title5"),
      image: "/images/card-ml.png",
      description: i18n.t("description5"),
    },
    {
      title: i18n.t("title6"),
      image: "/images/card-mobile.png",
      description: i18n.t("description6"),
    },
  ];

  return (
    <div className="section-two">
      <div className="container">
        <div className="content">
          <Reveal direction={"left"}>
            <h1 className="subtitle">
              {i18n.t("mele")}{" "}
              <span className="orange">{i18n.t("skills")}</span>
            </h1>
            <h1 className="title">{i18n.t("whatido")}</h1>
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

export default SectionTwo;
