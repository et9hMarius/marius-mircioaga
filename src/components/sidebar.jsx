import React, { useEffect } from "react";
import { useState } from "react";
import "./sidebar.scss";
import { useWindowScroll } from "@uidotdev/usehooks";
const Sidebar = ({ refs }) => {
  const [active, setActive] = useState(0);
  const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (refs && refs.length > 0) {
      refs.forEach((ref, index) => {
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            setActive(index);
          }
        }
      });
    }
  }, [x, y]);

  return (
    <div className="sidebar desktop">
      {refs &&
        refs.length > 0 &&
        refs.map((ref, index) => (
          <div
            key={index}
            onClick={() => {
              ref.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {active == index ? (
              <img width={20} src={"/images/diamond_filled.png"} />
            ) : (
              <img width={20} src={"/images/diamond_empty.png"} />
            )}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
