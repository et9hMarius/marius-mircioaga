import React from "react";
import { useState, useEffect } from "react";

import cards from "../../assets/projects";
import Reveal from "../reveal";

const changeCardsRowed = (width) => {
  let cardsPerRow = 3;
  if (width < 1200) {
    cardsPerRow = 2;
  }
  if (width < 800) {
    cardsPerRow = 1;
  }
  const temp = [];
  let row = [];
  for (let i = 0; i < cards.length; i++) {
    row.push(cards[i]);
    if (row.length === cardsPerRow) {
      temp.push(row);
      row = [];
    }
  }
  if (row.length > 0) {
    temp.push(row);
  }

  return temp;
};

const ProjectList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [cardsRowed, setCardsRowed] = useState(changeCardsRowed(width));
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    const temp = changeCardsRowed(width);
    setCardsRowed(temp);
  }, [width]);

  return (
    <div className="projectList">
      <div className="header">
        <div className="subtitle">
          All <span className="purple">my</span>
        </div>
        <div className="title">Projects</div>
      </div>
      <div className="projects-cards">
        {cardsRowed &&
          cardsRowed.map((row, index) => {
            return (
              <Reveal key={index} direction="bottom">
                <div className="projects-cards-row" key={index}>
                  {row.map((card) => {
                    return (
                      <div className="projects-card" key={card.id}>
                        <div className="image-wrapper">
                          <a
                            target="_blank"
                            href={
                              card.link ? card.link : `/projects/${card.id}`
                            }
                          >
                            <img src={card.image} alt="" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectList;
