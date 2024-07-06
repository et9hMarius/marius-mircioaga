import React, { useEffect } from "react";
import Reveal from "./reveal";
import { useState } from "react";
import { Button, ConfigProvider, Form, Input, notification } from "antd";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

function Contact() {
  const { i18n } = useTranslation();
  const [form] = Form.useForm();
  const onFinish = (values) => {
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
                {/* <div className="title">Marius Mircioaga</div>{" "} */}
                <div className="desc-card-wrapper">
                  <div className="desc">
                    <img src={"/images/envelope.png"} alt="Envelope icon" />
                    <h2> {i18n.t("emailaddress")}</h2>
                    <a
                      target="_blank"
                      href="mailto:contact@mariusmircioaga.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Marius%2C%0A%0A%0A"
                    >
                      contact@mariusmircioaga.com
                    </a>
                  </div>
                  <div className="desc">
                    <img src={"/images/phone.png"} alt="Phone icon" />
                    <h2> {i18n.t("phonenum")} </h2>
                    <div>
                      <img
                        style={{
                          height: "1.5em",
                          marginBottom: "-0.4em",
                          marginRight: "0.5em",
                        }}
                        src={"/images/romania.png"}
                        alt="Romanian flag"
                      />
                      <a href="tel:+40770770365">+40 770 770 365</a>
                    </div>
                  </div>
                </div>
                <span className="grey">{i18n.t("orthrough")}</span>
                <div className="desc-card-wrapper-2">
                  <div>
                    {/* https://wa.me/40770770365 */}
                    <a target="_blank" href="https://wa.me/40770770365">
                      <img src={"/images/whatsapp.png"} alt="Whatsapp logo" />
                    </a>
                  </div>
                  {/* instagram */}
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/_mimarius/"
                    >
                      <img src={"/images/instagram.png"} alt="Instagram logo" />
                    </a>
                  </div>
                  {/* linkedin */}
                  <div>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/marius-mircioaga-b92307299"
                    >
                      <img src={"/images/linkedin.png"} alt="Linkedin logo" />
                    </a>
                  </div>

                  {/* facebook */}
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/mariuscristian.mircioaga/"
                    >
                      <img src={"/images/facebook.png"} alt="Facebook logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </Reveal>
          {/* <Reveal direction={"bottom"}>
            <div className="info">
              <div className="row">
                <div className="title">leave me a message</div>
              </div>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#b40fff",
                  colorInfo: "#b40fff",
                },
              }}
            >
              <Form form={form} onFinish={onFinish}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input size="large" placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input size="large" placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea
                    size="large"
                    placeholder="Message"
                    style={{ height: 200 }}
                  />
                </Form.Item>
                <Form.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </Reveal> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
