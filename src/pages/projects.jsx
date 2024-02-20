import React from "react";
import { useRef } from "react";
import Sidebar from "../components/sidebar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ProjectList from "../components/Projects/projectList";
const Projects = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  return (
    <>
      <h1
        style={{
          zoom: 0.001,
          opacity: 0,
          position: "absolute",
          top: -1000,
        }}
      >
        Let's make your dream project a reality.
      </h1>
      <h2 style={{ zoom: 0.001, opacity: 0, position: "absolute", top: -1000 }}>
        I offer full-stack web development, built from the ground up, with a
        focus on performance, security, and scalability. I specialize in
        creating custom web applications, e-commerce platforms, and mobile
        applications. I also offer SEO and digital marketing services to help
        you grow your business. I am a full-stack web developer with a passion
        for creating innovative digital solutions. I specialize in creating
        custom web applications, e-commerce platforms, and mobile applications.
        I also offer SEO and digital marketing services to help you grow your
        business. I am a full-stack web developer with a passion for creating
        innovative digital solutions. I specialize in creating custom web
        applications, e-commerce platforms, and mobile applications. I also
        offer SEO and digital marketing services to help you grow your business.
        I am a full-stack web developer with a passion for creating innovative
        digital solutions. I specialize in creating custom web applications,
        e-commerce platforms, and mobile applications. I also offer SEO and
        digital marketing services to help you grow your business.
      </h2>
      <Sidebar refs={[sectionOneRef, sectionTwoRef]} />
      <section id="section_one" ref={sectionOneRef}>
        <ProjectList />
      </section>
      <section id="contact" ref={sectionTwoRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Projects;
