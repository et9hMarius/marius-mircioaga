import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";

import { Image, Tooltip } from "antd";
import { Link } from "react-router-dom";

import Reveal from "../reveal";

const iconMapping = {
  React: <FontAwesomeIcon icon={faReact} />,
  CSS: <FontAwesomeIcon icon={faCss3Alt} />,
  SASS: <FontAwesomeIcon icon={faSass} />,
  HTML: <FontAwesomeIcon icon={faHtml5} />,
  JS: <FontAwesomeIcon icon={faSquareJs} />,
  NodeJS: <FontAwesomeIcon icon={faNodeJs} />,
  Python: <FontAwesomeIcon icon={faPython} />,
  MySQL: <FontAwesomeIcon icon={faDatabase} />,
  MongoDB: <FontAwesomeIcon icon={faDatabase} />,
  CSharp: <FontAwesomeIcon icon={faC} />,
};

const ProjectCard = ({
  keyId,
  id,
  image,
  title,
  tech_icons,
  description,
  tags,
  link,
}) => {
  if (!tags) tags = [];

  if (!tech_icons) tech_icons = [];

  return (
    <Reveal direction={keyId % 2 === 0 ? "right" : "left"}>
      <div>
        <div className={"proj_card" + (keyId % 2 === 0 ? " right" : "")}>
          <div className="image">
            <Image src={image} alt="" />
          </div>
          <div className="content_card">
            <div className="title_card">{title}</div>
            <div className="tech-icons">
              {tech_icons.map((tech, index) => (
                <Tooltip key={index} title={tech}>
                  <div key={index} className="tech-icon">
                    {iconMapping[tech]}
                  </div>
                </Tooltip>
              ))}
            </div>
            <div className="tags">
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="description">{description}</div>

            <div className="see_more">
              {link ? (
                <a target="_blank" href={link}>
                  See More
                </a>
              ) : (
                <a target="_blank" href={`/projects/${id}`}>
                  See More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
