import React from "react";
import HeroText from "./../components/HeroText";
import DotGrid from "./../components/DotGrid";
import { Room } from "../components/Room";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const Hero = () => {
  return (
    <section className=" flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      {/* DotGrid full-page background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1
        }}
      >
        <DotGrid
          dotSize={10}
          gap={15}
          activeColor="#FFFFFF"
          baseColor="black"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

      {/* Foreground content */}
      </div>
      <HeroText />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Room scale={0.087} position={[2.48,-0.60,0]} />
          <OrbitControls />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
