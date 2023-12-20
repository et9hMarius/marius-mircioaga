import React, { useEffect, useState } from "react";
import Hexagon from "./hexagon";

const HexagonContainer = () => {
  const [hexagons, setHexagons] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      garbageCollect();
      const key = Date.now().toString();
      const timestamp = Date.now();
      const hexagon = <Hexagon key={key} />;
      setHexagons((prevHexagons) => [
        ...prevHexagons,
        { hexagon, key, timestamp },
      ]);
    }, Math.random() * 1000 + 500);

    return () => clearInterval(intervalId);
  }, []);

  const garbageCollect = () => {
    const now = Date.now();
    setHexagons((prevHexagons) =>
      prevHexagons.filter(({ timestamp }) => now - timestamp <= 5000)
    );
  };

  return (
    <div className="hexagon-container">
      {hexagons.map(({ hexagon, key }) => (
        <div key={key}>{hexagon}</div>
      ))}
    </div>
  );
};

export default HexagonContainer;
