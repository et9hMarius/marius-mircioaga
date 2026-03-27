import React from "react";
import SectionOne from "../components/Home/sectionOne";
import SectionTwo from "../components/Home/sectionTwo";

import { useRef } from "react";
import Sidebar from "../components/sidebar";
import SectionFour from "../components/Home/sectionFour";
import SectionFive from "../components/Home/sectionFive";
import Contact from "../components/contact";
import Footer from "../components/footer";
import SectionThree from "../components/Home/sectionThree";
import SectionSix from "../components/Home/sectionSix";
import SectionMeetMe from "../components/Home/sectionMeetMe";

const Home = () => {
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);
  const sectionMeetMeRef = useRef(null);
  const sectionFourRef = useRef(null);
  const sectionFiveRef = useRef(null);
  const sectionSixRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <h1
        style={{
          zoom: 0.001,
          opacity: 0,
          position: "absolute",
          top: -1000,
          display: "none",
        }}
      >
        Marius Mircioaga - Full-Stack Web Developer
      </h1>
      <h2
        style={{
          zoom: 0.001,
          display: "none",
          opacity: 0,
          position: "absolute",
          top: -1000,
        }}
      >
        Full-stack web development, cloud infrastructure, and software
        engineering. Custom web applications, e-commerce platforms, mobile apps,
        and AI integrations. Based in Bucharest, serving clients worldwide. CEO
        at ArchDevs.
      </h2>

      <Sidebar
        refs={[
          sectionOneRef,
          sectionTwoRef,
          sectionMeetMeRef,
          sectionSixRef,
          sectionFiveRef,
          sectionFourRef,
          contactRef,
        ]}
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
      <section id="section_meetme" ref={sectionMeetMeRef}>
        <SectionMeetMe />
      </section>
      <section id="section_six" ref={sectionSixRef}>
        <SectionSix />
      </section>
      <section id="section_five" ref={sectionFiveRef}>
        <SectionFive />
      </section>
      <section id="section_four" ref={sectionFourRef}>
        <SectionFour />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default Home;
