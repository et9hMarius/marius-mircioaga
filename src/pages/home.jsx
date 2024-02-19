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
      <section id="section_one" ref={sectionOneRef}>
        <SectionOne />
      </section>
      <section id="section_two" ref={sectionTwoRef}>
        <SectionTwo />
      </section>
      <section id="section_three" ref={sectionThreeRef}>
        <SectionThree />
      </section>
      <section id="section_four" ref={sectionFourRef}>
        <SectionFour />
      </section>
      <section id="contact" ref={sectionFiveRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
