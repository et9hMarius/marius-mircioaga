import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three-stdlib";
import { useScroll, animated } from "@react-spring/three";
extend({ OBJLoader });

const GlobeModel = ({ url }) => {
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

const SpinningGlobe = ({ url }) => {
  const { scrollY } = useScroll();
  const globeRef = useRef();
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.x = scrollY.get() / 1000;
      globeRef.current.rotation.y = scrollY.get() / 1000;
    }
  });

  return (
    <animated.mesh ref={globeRef} position={[0, 0, -90]} rotation={[0, 0, 45]}>
      <GlobeModel url={url} />
    </animated.mesh>
  );
};

const Globe = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      {/* <pointLight position={[-100, 0, -100]} intensity={222} color={"white"} /> */}
      <directionalLight position={[0, 10, 0]} intensity={2} />
      <SpinningGlobe url="globe.obj" />
    </Canvas>
  );
};

export default Globe;
