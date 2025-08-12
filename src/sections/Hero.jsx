import React from "react";
import HeroText from "./../components/HeroText";
import DotGrid from "./../components/DotGrid";

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
      </div>

      {/* Foreground content */}
      <HeroText />
    </section>
  );
};

export default Hero;
