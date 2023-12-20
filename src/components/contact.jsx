import React, { useEffect } from "react";
import Reveal from "./reveal";
import { useState } from "react";
import { Button, ConfigProvider, Form, Input, notification } from "antd";
import emailjs from "@emailjs/browser";

function Contact() {
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
                <span className="purple">Contact</span> me
              </div>
              <div className="title">Let's get in touch</div>
            </Reveal>
            <Reveal direction={"bottom"}>
              <div className="underline" />
            </Reveal>
          </div>
          <Reveal direction={"bottom"}>
            <div className="info">
              <div className="row">
                <div className="title">Marius Mircioaga</div>{" "}
                <div
                  style={{
                    marginTop: -15,
                    marginBottom: 30,
                  }}
                >
                  <a
                    target="_blank"
                    href="mailto:mariusmircioaga@gmail.com?subject=Project%20Collaboration%20Inquiry&body=Hi%20Marius%2C%0A%0A%0A"
                  >
                    mariusmircioaga@gmail.com
                  </a>
                </div>
                <div className="desc">
                  <div>
                    <img src={"/images/romania.png"} alt="Romanian flag" />
                    <a href="tel:+40770770365">+40 770 770 365</a>
                  </div>
                  <span className="grey">or through</span>
                  <div>
                    {/* https://wa.me/40770770365 */}
                    <img src={"/images/whatsapp.png"} alt="Whatsapp logo" />
                    <a target="_blank" href="https://wa.me/40770770365">
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </Reveal>
          <Reveal direction={"bottom"}>
            <div className="info">
              <div className="row">
                <div className="title">leave me a message</div>
              </div>
            </div>
            {/* "token": {
    "colorPrimary": "#b40fff",
    "colorInfo": "#b40fff"
  } */}
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
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
