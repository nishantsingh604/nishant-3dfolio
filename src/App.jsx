import React from "react";
import Navbard from "./sections/Navbar";
import Hero from "./sections/Hero";

// import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
// import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbard />
        <Hero />
      </div>

      <Projects />
      <Experience />
<Contact />
    </>
  );
};

export default App;
