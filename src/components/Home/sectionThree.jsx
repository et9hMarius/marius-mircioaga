import React from "react";
import ProjectCard from "./projectCard";

import Reveal from "../reveal";

import cards from "../../assets/projects";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="container">
        <div className="content">
          <Reveal direction="left">
            <div className="subtitle">
              My <span className="purple">work</span>
            </div>
            <div className="title"> Some of my projects</div>
            <div className="underline" />
          </Reveal>
          <div className="project-cards">
            {cards.map((card) => {
              return card.show ? <ProjectCard key={card.id} {...card} /> : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
