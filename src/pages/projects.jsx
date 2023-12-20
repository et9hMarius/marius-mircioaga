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
      <div ref={sectionOneRef}>
        <ProjectList />
      </div>
      <div ref={sectionTwoRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
