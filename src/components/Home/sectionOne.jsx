import React, { useEffect } from "react";
import HexagonContainer from "./hexagonContainer";
import Reveal from "../reveal";
import { motion, useAnimation, Keyframes } from "framer-motion";

import { useWindowScroll } from "@uidotdev/usehooks";

function SectionOne() {
  const [{ x, y }, scrollTo] = useWindowScroll();

  const hexagonAnimation = useAnimation();
  const hexagonVariants = {
    initial: {
      y: 0,
      x: 0,
    },
    animate: {
      y: y / 5 + 30,
      transition: {
        duration: 0.5,
      },
    },

    bop: {
      x: [0, 10, 0, -10, 0],
      marginTop: [0, 10, 0, -10, 0],

      transition: {
        duration: 10,
        repeat: Infinity,
      },
    },
  };
  useEffect(() => {
    hexagonAnimation.start("animate");
    hexagonAnimation.start("bop");
  }, [y, hexagonAnimation]);

  return (
    <div className="section-one">
      <div className="container">
        <div className="content">
          <div className="binary">
            01001101 01100001 01110010 01101001 01110101 01110011 00100000
            01001101 01101001 01110010 01100011 01101001 01101111 01100001
            01100111 01100001
          </div>
          <Reveal direction={"left"}>
            <div className="left">
              <div className="generator">
                <HexagonContainer />
              </div>
              <div className="subtitle light">
                Hi, <span className="purple">I’m</span>
              </div>
              <h1 className="title">MARIUS MIRCIOAGA</h1>
              <div className="underline" />
              <h2 className="subtitle light">
                Versatile <span className="purple">Full-Stack Web</span> &{" "}
                <span className="purple">Software</span> Developer
              </h2>

              <p className="description light">
                Dedicated student and open-minded developer, committed to
                lifelong learning, ensuring client satisfaction through
                unyielding persistence.
              </p>
            </div>
          </Reveal>
          <Reveal direction={"right"}>
            <div className="right">
              <motion.div
                className="hexagon"
                variants={hexagonVariants}
                initial="initial"
                animate={hexagonAnimation}
              >
                <img width={430} src="/images/hexagon.png" alt="" />
              </motion.div>
              <img
                width={430}
                className="marius"
                src="/images/marius.png"
                alt="marius"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
