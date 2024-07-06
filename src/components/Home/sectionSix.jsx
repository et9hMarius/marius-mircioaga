import React from "react";
import Reveal from "../reveal";
import Globe from "./globe";

const servicesData = [
  "Full-stack Web Design & Development",
  "E-commerce Development",
  "Mobile App Development (iOS & Android)",
  "Fully Customizable Solutions",
  "Server Management & Maintenance",
  "Migration Services",
  "Enhancements and Additions to Existing Code",
  "Third-party API Integration",
  "Need something more specific? Let's talk!",
];

const SectionSix = () => {
  return (
    <div className="section-six">
      <div className="container">
        <div className="content">
          <Reveal direction={"bottom"}>
            <div className="title gradient">Services Offered</div>
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
                Serving clients worldwide.
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
