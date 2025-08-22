import React from "react";
import { BentoGridThirdDemo } from "./../components/Bento";
import TrueFocus from "@/components/TrueFocus";

const Experience = () => {
  return (
    <section
      className="w-full bg-black flex flex-col items-center justify-center overflow-hidden px-4 py-12"
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
        <TrueFocus
          sentence="Some Projects"
          manualMode={true}
          blurAmount={5}
          borderColor="blue"
          animationDuration={1}
          pauseBetweenAnimations={0.5}
        />
      </h2>

      {/* Grid below heading */}
      <div className="w-full max-w-6xl">
        <BentoGridThirdDemo />
        
      </div>
    </section>
    
  );
};

export default Experience;
