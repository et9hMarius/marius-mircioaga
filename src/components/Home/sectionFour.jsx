import React from "react";
import Reveal from "../reveal";
import Card from "./card";

const cardData = [
  {
    title: "Academic Background",
    image: "/images/school.png",
    description:
      "I am a student at the University Politehnica of Bucharest. Starting as a self-taught programmer, I have since completed serveral courses and certifications.",
  },
  {
    title: "Work Experience",
    image: "/images/work.png",
    description:
      "Over the years,I have gained valuable work experience as a software developer with companies from both local and European markets.",
  },
  {
    title: "Extra-Curricular Activities",
    image: "/images/extra.png",
    description:
      "In addition to my work experience, I've been actively involved in extracurricular activities, both within and outside the IT domain.",
  },
  {
    title: "Philosophy",
    image: "/images/philosophy.png",
    description:
      "I believe that the key to success is to never stop learning. I love embracing new technologies and innovative problem-solving techniques.",
  },
];

const SectionFour = () => {
  return (
    <div className="section-four">
      <div className="container">
        <div className="content">
          <Reveal direction={"left"}>
            <div className="subtitle">
              My <span className="orange">about</span>
            </div>
            <div className="title">Who I am</div>
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
