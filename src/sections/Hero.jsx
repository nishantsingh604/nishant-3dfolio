import React, { useEffect } from "react";
import HeroText from "./../components/HeroText";
// import DotGrid from "./../components/DotGrid";
import DarkVeil from './../components/DarkVeil';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1
        }}
      >
        <DarkVeil />
        {/* <DotGrid
          dotSize={10}
          gap={15}
          activeColor="#FFFFFF"
          baseColor="black"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        /> */}
      </div>
      <HeroText />
      <spline-viewer
        url="https://prod.spline.design/agc6o22yhhaOc0mq/scene.splinecode"
        className="z-10  pt-0 pl-25 pb-1 text-center md:mt-27 md:text-left  isolate  w-120 h-125 "
      ></spline-viewer>
    
      </section>
  );
};

export default Hero;
