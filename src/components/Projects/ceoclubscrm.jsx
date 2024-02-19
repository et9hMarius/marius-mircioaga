import React from "react";
import { Image, Divider } from "antd";

const CeoClubsCRM = () => {
  const path = "/images/projects/ceoclubs/";
  return (
    <div className="project-page ceoclubscrm">
      <div className="header">
        <div className="title">CEO Clubs CRM</div>
        <div className="subtitle">
          A Customer Relationship Management for CEO Clubs
        </div>
      </div>
      <div className="main_picture">
        <Image src={path + "main.png"} alt="" />
      </div>
      <Divider />
      <div className="content">
        <div className="img_text left">
          <div className="text_box ">
            <div className="title align-right">Overview</div>
            <div className="text align-justify">
              CEO Clubs CRM is a Customer Relationship Management system for CEO
              Clubs. It is a web application that allows CEO Clubs to manage
              their members, events, and other information.
            </div>
            <div className="text align-justify">
              It also serves as the backend for the CEO Clubs mobile app. The
              mobile app is used by members to view events, register for events,
              and view other members.
            </div>
          </div>
          <div className="image_wrapper">
            <img src={path + "1.png"} alt="project" />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "2.png"} alt="project" />
          </div>
          <div className="text_box">
            <div className="title">Features</div>
            <div className="text">
              <ul>
                <li>
                  — CRUD operations for members, events, memberships, partners,
                  guests etc.
                </li>
                <li>
                  — Search and filtering for viewing the before mentioned
                  entities.
                </li>
                <li>
                  — Dashboard for viewing statistics and other important data.
                </li>
                <li>
                  — Changable platform settings such as the enteties types,
                  email templates etc.
                </li>
                <li>
                  — Mini-forum for staff to communicate with each other on
                  certain entities.
                </li>
                <li>
                  — Rich text editor for creating and editing notifications. And
                  in-depth html editor for creating and editing email templates.
                </li>
                <li>— Acts as a backend for the CEO Clubs mobile app.</li>
                <li>— Autmated data backup and task scheduling.</li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="img_text left">
          <div className="text_box">
            <div className="title align-right">Technologies</div>
            <div className="text align-right ">
              <ul>
                <li>dotNET —</li>
                <li> React —</li>
                <li> NextJS —</li>
                <li> MySQL —</li>
                <li> HTML —</li>
                <li>SASS —</li>
                <li>Ant Design —</li>
              </ul>
            </div>
          </div>
          <div className="image_wrapper">
            <Image src={path + "3.png"} alt="project" />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "4.png"} alt="project" />
          </div>
          <div className="text_box">
            <div className="title">Challenges</div>
            <div className="text">
              <ul>
                <li>
                  — The biggest challenge was the complexity of the project.
                  There were many different entities and relationships between
                  them.
                </li>
                <li>
                  — Another challenge was the amount of features that needed to
                  be implemented.
                </li>
                <li>
                  — The last challenge was the amount of data that needed to be
                  migrated from the old system to the new one.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="header">
          <div className="subtitle">
            The CRM is currently being used by{" "}
            <a className="purple" href="https://ceoclubsromania.org">
              CEO Clubs
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoClubsCRM;
