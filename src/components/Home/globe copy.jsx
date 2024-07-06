import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";
import { useScroll, animated } from "@react-spring/web";

extend({ OBJLoader });

const GlobeModel = ({ url }) => {
  const { scrollY } = useScroll();
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scrollY.get() / 100;
    }
  });

  const obj = useLoader(OBJLoader, url);
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: "#fc5b3b",
        metalness: 0.1,
        roughness: 0.5,
      });
    }
  });
  return <primitive object={obj} />;
};

const Globe = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[-100, 0, -100]} intensity={222} color={"white"} /> */}
      <directionalLight position={[0, 10, 0]} intensity={3} />
      <GlobeModel url="/globe.obj" />
      <OrbitControls />
    </Canvas>
  );
};

export default Globe;
