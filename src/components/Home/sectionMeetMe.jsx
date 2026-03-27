import React from "react";
import Reveal from "../reveal";
import { useTranslation } from "react-i18next";

const SectionMeetMe = () => {
  const { i18n } = useTranslation();

  return (
    <div className="section-meetme">
      <div className="container">
        <div className="content">
          <Reveal direction="bottom">
            <div className="meetme-card">
              <div className="subtitle">{i18n.t("archdevs_subtitle")}</div>
              <div className="title gradient">ArchDevs</div>
              <div className="underline" />
              <p className="description light">
                {i18n.t("archdevs_desc")}
              </p>
              <a
                href="https://www.archdevs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                {i18n.t("archdevs_cta")}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionMeetMe;
