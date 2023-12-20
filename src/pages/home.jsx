import React from "react";
import SectionOne from "../components/Home/sectionOne";
import SectionTwo from "../components/Home/sectionTwo";

import { useRef } from "react";
import Sidebar from "../components/sidebar";
import SectionFour from "../components/Home/sectionFour";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ProjectCard from "../components/Home/projectCard";
import SectionThree from "../components/Home/sectionThree";
const Home = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);

  return (
    <>
      <Sidebar
        refs={[sectionOneRef, sectionTwoRef, sectionFourRef, sectionFiveRef]}
      />
      <div ref={sectionOneRef}>
        <SectionOne />
      </div>
      <div ref={sectionTwoRef}>
        <SectionTwo />
      </div>
      <div ref={sectionThreeRef}>
        <SectionThree />
      </div>
      <div ref={sectionFourRef}>
        <SectionFour />
      </div>
      <div ref={sectionFiveRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
