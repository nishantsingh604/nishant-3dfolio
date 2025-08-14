import React from "react";

const About = () => {
  return (
    <div className="z-10  pt-18 pb-20 text-center md:mt-36 md:text-left  isolate  w-180 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 -ml-10 ">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium mb-10">Who am I? </h1>
        <div className="flex flex-col items-start">
          <p className="text-5xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to Crafting
          </p>
          <div></div>
          <p>Web Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default About;
