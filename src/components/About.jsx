import React from "react";

const About = () => {
  return (
    <div className="z-10 pt-10 pb-20 text-center md:mt-5 md:text-left isolate w-full max-w-3xl space-y-8 -translate-y-6">
      {/* Top full-width card */}
      <div className="p-8 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 h-60 md:h-72 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Who am I?</h2>
        <p className="text-neutral-300 text-lg">
          A Developer dedicated to crafting meaningful and high-performing web
          solutions.
        </p>
      </div>

      {/* Bottom two cards in 60:40 ratio */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left card (60%) */}
        <div className="flex-1 md:basis-[60%] p-8 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 h-60 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
          <p className="text-neutral-300 text-lg">
            I specialize in building interactive websites and applications,
            blending creativity with functionality.
          </p>
        </div>

        {/* Right card (40%) */}
        <div className="flex-1 md:basis-[40%] p-8 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 h-60 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
          <p className="text-neutral-300 text-lg">
            Focused on clean code, user-centered design,  and delivering projects
            that exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
