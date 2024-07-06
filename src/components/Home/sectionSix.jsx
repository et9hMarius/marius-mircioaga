import React from "react";
import Reveal from "../reveal";
import Globe from "./globe";

import { useTranslation } from "react-i18next";

const SectionSix = () => {
  const { i18n } = useTranslation();
  const servicesData = [
    i18n.t("service1"),
    i18n.t("service2"),
    i18n.t("service3"),
    i18n.t("service4"),
    i18n.t("service5"),
    i18n.t("service6"),
    i18n.t("service7"),
    i18n.t("service8"),
    i18n.t("service9"),
  ];

  return (
    <div className="section-six">
      <div className="container">
        <div className="content">
          <Reveal direction={"bottom"}>
            <div className="title gradient">{i18n.t("servicesoffered")}</div>
            <div className="underline" />
          </Reveal>
          <div className="services">
            {servicesData.map((service, index) => (
              <Reveal key={index} direction={"bottom"}>
                <div className="service">
                  <span className="bullet gradient">{index + 1 + ". "}</span>
                  {service}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction={"bottom"}>
            <div className="worldwide">
              <div className="worldwide-text">
                {i18n.t("worldwide")}
                <img src="/images/flags.png" alt="Flags" width={300} />
              </div>
              <div className="globe-wrapper" style={{ opacity: 0.75 }}>
                <Globe />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
