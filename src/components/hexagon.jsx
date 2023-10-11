import React, { useState, useEffect } from "react";
import "./hexagon.scss";
const Hexagon = () => {
  const size = Math.random() * 50 + 30;
  const rotation = Math.random() * 360;
  const marginLeft = Math.random() * 100;

  return (
    <img
      id={`hex-${size}-${rotation}`}
      className="hexagon"
      style={{
        marginLeft: `${marginLeft}%`,
        width: `${size}px`,
        transform: `rotate(${rotation}deg)`,
      }}
      src="/images/hexagon.png"
    ></img>
  );
};

export default Hexagon;
