import React from "react";
import Navbard from "./sections/Navbar";
import Hero from "./sections/Hero";

import Projects from "./sections/About";
import Experience from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbard />
        <Hero />
      </div>

      {/* Sections with IDs */}
      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
