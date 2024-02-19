import React from "react";
import Reveal from "../reveal";
import Card from "./card";

const cardData = [
  {
    title: "Full-Stack Web Developer",
    image: "/images/card-web.png",
    description:
      "Building websites and web applications using JavaScript, React, HTML, CSS, Node.js, Express and more.",
  },
  {
    title: "Database Administrator",
    image: "/images/card-database.png",
    description:
      "Designing and maintaining databases using SQL and NoSQL. Comfotable with MySQL, PostgreSQL, MongoDB and more.",
  },
  {
    title: "Cloud Architect",
    image: "/images/card-cloud.png",
    description:
      "Deploying and maintaining applications in the cloud using AWS, GCP and Azure. Can configure a Linux server from scratch.",
  },
  {
    title: "Git Version Control Manager",
    image: "/images/card-git.png",
    description:
      "Proficient in code management and maintenance through Git, with extensive experience in GitHub and GitLab.",
  },
  {
    title: "Data Scientist",
    image: "/images/card-ml.png",
    description:
      "Analyzing data and building machine learning models using Python, NumPy, Pandas, Matplotlib, Scikit-Learn and more.",
  },
  {
    title: "Effective Talker & Collaborator",
    image: "/images/card-networking.png",
    description:
      "Open-minded and receptive, adept at effective communication with clients and colleagues, and a skilled listener.",
  },
];

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="container">
        <div className="content">
          <Reveal direction={"left"}>
            <h1 className="subtitle">
              My <span className="orange">skills</span>
            </h1>
            <h1 className="title">What I do</h1>
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
