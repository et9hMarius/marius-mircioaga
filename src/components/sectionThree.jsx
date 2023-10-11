import React from "react";
import ProjectCard from "./projectCard";

import "./sectionThree.scss";
import Reveal from "./reveal";

const cards = [
  {
    keyId: 1,
    id: "example_landing_page",
    image: "/images/projects/1.png",
    title: "Example Landing Page",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS"],
    description:
      "A proper landing page is a must for any business and can make or break the first impression. It is designed to be sleek, user-friendly, and responsive.",

    tags: [
      "Sleek Design",
      "User-Centric UI",
      "Optimized Performance",
      "Responsive",
    ],
  },
  {
    keyId: 2,
    id: "example_crud_app",
    image: "/images/projects/2.png",
    title: "Example CRUD App",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "Python", "MongoDB"],
    description:
      "Easily handle and showcase your data. It features a user-friendly interface and incorporates a database as well as an admin panel for smooth data management.",
    tags: [
      "CRUD",
      "Responsive",
      "Interactive",
      "Admin Panel",
      "Database Integration",
    ],
  },
  {
    keyId: 3,
    id: "example_e-commerce_app",
    image: "/images/projects/3.png",
    title: "Example E-Commerce App",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "NodeJS", "MySQL"],
    description:
      "A fully functional e-commerce website with an admin panel. Make your business stand out with a user-friendly and responsive website.",
    tags: [
      "E-Commerce",
      "User Friendly",
      "Integrated Services",
      "Responsive",
      "Admin Panel",
    ],
  },
];

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
              return <ProjectCard key={card.id} {...card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
