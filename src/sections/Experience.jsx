import React from 'react'
import { BentoGridThirdDemo } from './../components/Bento';

const Experience = () => {
  return (
    <section
      className="w-full bg-black flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{
        margin: 0,
        padding: 0,
        minHeight: "100vh" // shorter height
      }}
    >
        <BentoGridThirdDemo />
     </section>  
  );
}

export default Experience