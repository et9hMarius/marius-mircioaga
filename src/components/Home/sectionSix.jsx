import React, { Suspense, lazy } from "react";
import Reveal from "../reveal";

import { useTranslation } from "react-i18next";

// three.js is most of the bundle; load it only once this section renders in the browser.
const Globe = lazy(() => import("./globe"));

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
            <h2 className="title gradient h-plain">{i18n.t("servicesoffered")}</h2>
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
                <img
                  src="/images/flags.png"
                  alt="Flags of Belgium, France, the United States, the United Kingdom and Romania"
                  width={300}
                  height={53}
                  loading="lazy"
                />
              </div>
              <div className="globe-wrapper" style={{ opacity: 0.75 }}>
                <Suspense fallback={null}>
                  <Globe />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
