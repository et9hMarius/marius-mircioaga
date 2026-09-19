import React from "react";
import { Image, Divider } from "antd";
import Breadcrumbs from "../Breadcrumbs";

const ZenkoAi = () => {
  const path = "/images/projects/zenkoai/";
  return (
    <div className="project-page zenkoai">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: "Zenko AI" },
        ]}
      />
      <div className="header">
        <h1 className="title h-plain">Zenko AI</h1>
        <p className="subtitle h-plain">
          A Chatbot AI Developed During a Hackathon
        </p>
      </div>
      <div className="main_picture">
        <Image
          src={path + "4.png"}
          alt="Zenko AI chat window answering questions about a festival, next to a meditating robot illustration"
        />
      </div>
      <Divider />
      <div className="content">
        <div className="img_text left">
          <div className="text_box">
            <h2 className="title align-right h-plain">Overview</h2>
            <div className="text align-justify">
              Zenko AI is a chatbot designed to provide information about a
              festival. Trained with data from the festival, it can answer user
              questions about the festival's events, bus and train schedules,
              and other relevant information. The chatbot also supports GPS
              functionality.
            </div>
          </div>
          <div className="image_wrapper">
            <img
              src={path + "1.png"}
              alt="Zenko AI chat locating a kebab stand and the nearest bathroom from the user's GPS position"
              loading="lazy"
            />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "2.png"} alt="Zenko AI answering a fire-emergency question in French and an organiser question in Romanian" />
          </div>
          <div className="text_box">
            <h2 className="title h-plain">Features</h2>
            <div className="text">
              <ul>
                <li>— Provides detailed information about festival events.</li>
                <li>— Offers real-time bus and train schedules.</li>
                <li>— Answers any user queries related to the festival.</li>
                <li>— GPS support for location-based information.</li>
                <li>— User-friendly interface for easy interaction.</li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="img_text left">
          <div className="text_box">
            <h2 className="title align-right h-plain">Technologies</h2>
            <div className="text align-right">
              <ul>
                <li>React —</li>
                <li>Node.js —</li>
                <li>Python —</li>
                <li>OpenAI ChatGPT —</li>
                <li>HTML/CSS —</li>
                <li>Ant Design —</li>
              </ul>
            </div>
          </div>
          <div className="image_wrapper">
            <Image
              src={path + "3.png"}
              alt="Zenko AI mobile chat panel answering how often bus 102 runs on Saturday"
            />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "4.png"} alt="Zenko AI chat window answering questions about a festival, next to a meditating robot illustration" />
          </div>
          <div className="text_box">
            <h2 className="title h-plain">Challenges</h2>
            <div className="text">
              <ul>
                <li>
                  — Integrating diverse data sources to provide accurate
                  information.
                </li>
                <li>— Ensuring real-time updates for schedules and events.</li>
                <li>
                  — Developing a seamless user interface for effective
                  interaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Divider />
        <div className="header">
          <p className="subtitle h-plain">
            Zenko AI was created during a hackathon and continues to enhance the
            festival experience for attendees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZenkoAi;
