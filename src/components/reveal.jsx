import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Reveal({ children, direction }) {
  const getOffset = (direction) => {
    switch (direction) {
      case "left":
        return {
          x: "-10vw",
        };

      case "right":
        return {
          x: "10vw",
        };

      case "top":
        return {
          y: "-10vh",
        };
      case "bottom":
        return {
          y: "10vh",
        };
      default:
        return {
          x: 0,
          y: 0,
        };
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-30%",
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            ...getOffset(direction),
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{ type: "spring", stiffness: 50, delay: 0.25 }}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
