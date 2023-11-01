import React from "react";
import ProjectCard from "./projectCard";

import "./sectionThree.scss";
import Reveal from "./reveal";

const cards = [
  {
    keyId: 1,
    id: "importdinchina",
    image: "/images/projects/1.png",
    title: "Landing Page",
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
    id: "attiva",
    image: "/images/projects/2.png",
    title: "CRUD Application",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "Python", "MySQL"],
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
    id: "vintello",
    image: "/images/projects/3.png",
    title: "E-Commerce Application",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "CSharp", "MySQL"],
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
  {
    keyId: 4,
    id: "ceoclubscrm",
    image: "/images/projects/4.png",
    title: "CRM Application",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "CSharp", "MySQL"],
    description:
      "A CRM application is a must for any business. It helps you manage your customers and their data. All your data in one place, easily accessible and manageable.",
    tags: [
      "CRM",
      "User Friendly",
      "Admin Panel",
      "Responsive",
      "Data Management",
    ],
  },

  {
    keyId: 5,
    id: "pathfinder",
    image: "/images/projects/5.png",
    title: "Data Visualizer",
    tech_icons: ["HTML", "React", "JS", "CSS", "SASS", "Python"],
    description:
      "A data visualizer is a great way to showcase your data. It helps you understand your data better and makes it easier to analyze it.",
    tags: ["Data Visualization", "Interactive", "Responsive"],
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
