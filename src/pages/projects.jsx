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
