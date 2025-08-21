import React from 'react'
import { BentoGridThirdDemo } from './../components/Bento';
// import ExpandableCardDemo from './../components/expandable-card-demo-standard';
// import ExpandableCardDemo from './../components/expandable-card-demo-grid';

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
        {/* <ExpandableCardDemo /> */}

     </section>  
  );
}

export default Experience