import React from "react";
import { Image, Divider } from "antd";

const ZenkoAi = () => {
  const path = "/images/projects/zenkoai/";
  return (
    <div className="project-page zenkoai">
      <div className="header">
        <div className="title">Zenko AI</div>
        <div className="subtitle">
          A Chatbot AI Developed During a Hackathon
        </div>
      </div>
      <div className="main_picture">
        <Image src={path + "4.png"} alt="Zenko AI main interface" />
      </div>
      <Divider />
      <div className="content">
        <div className="img_text left">
          <div className="text_box">
            <div className="title align-right">Overview</div>
            <div className="text align-justify">
              Zenko AI is a chatbot designed to provide information about a
              festival. Trained with data from the festival, it can answer user
              questions about the festival's events, bus and train schedules,
              and other relevant information. The chatbot also supports GPS
              functionality.
            </div>
          </div>
          <div className="image_wrapper">
            <img src={path + "1.png"} alt="Zenko AI Overview" />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "2.png"} alt="Zenko AI Features" />
          </div>
          <div className="text_box">
            <div className="title">Features</div>
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
            <div className="title align-right">Technologies</div>
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
            <Image src={path + "3.png"} alt="Zenko AI Technologies" />
          </div>
        </div>
        <Divider />
        <div className="img_text right">
          <div className="image_wrapper">
            <Image src={path + "4.png"} alt="Zenko AI Challenges" />
          </div>
          <div className="text_box">
            <div className="title">Challenges</div>
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
          <div className="subtitle">
            Zenko AI was created during a hackathon and continues to enhance the
            festival experience for attendees.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZenkoAi;
