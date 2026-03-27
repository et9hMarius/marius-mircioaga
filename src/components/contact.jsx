import React, { useEffect } from "react";
import Reveal from "./reveal";
import { Form, notification } from "antd";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

function Contact() {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const onFinish = (values) => { // eslint-disable-line no-unused-vars
    emailjs
      .send(
        "service_mk3vl0f",
        "template_v1rx03i",
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message
            ? values.message.replaceAll("\n", "<br/>")
            : "",
        },
        "8B5uvMDU1hYV9E0Zw"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        notification.success({
          message: "Message Sent",
          description: "Your message has been sent successfully.",
        });
        form.resetFields();
      })
      .catch((err) => {
        console.log("FAILED...", err);
        notification.error({
          message: "Message Failed",
          description: "Something went wrong, please try again later.",
        });
      });
  };

  useEffect(() => {
    //rerender on form values reset
  }, [form]);
  return (
    <div className="contact">
      <div className="container">
        <div className="content">
          <div className="center">
            <Reveal direction={"bottom"}>
              <div className="subtitle">
                <span className="purple">{i18n.t("contact")}</span>{" "}
                {i18n.t("me")}
              </div>
              <div className="title">{i18n.t("getintouch")}</div>
              <div className="subttile" style={{ marginBottom: 10 }}>
                {i18n.t("foranyinquiries")}
              </div>
            </Reveal>
            <Reveal direction={"bottom"}>
              <div className="underline" />
            </Reveal>
          </div>
          <Reveal direction={"bottom"}>
            <div className="info">
              <div className="row">
                <div className="desc-card-wrapper">
                  <div
                    className="desc"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        "mailto:mariusmircioaga@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Marius%2C%0A%0A%0A"
                      );
                    }}
                  >
                    <img src={"/images/envelope.png"} alt="Envelope icon" />
                    <h2> {i18n.t("emailaddress")}</h2>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:mariusmircioaga@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Marius%2C%0A%0A%0A"
                    >
                      mariusmircioaga@gmail.com
                    </a>
                  </div>
                </div>
                <span className="grey">{i18n.t("orthrough")}</span>
                <div className="desc-card-wrapper-2">
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/marius-mircioaga-b92307299"
                    >
                      <img src={"/images/linkedin.png"} alt="LinkedIn logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
