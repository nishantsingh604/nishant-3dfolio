import React from "react";
import { TechStack } from "./TechStack";

const About = () => {
  return (
    <div className="z-10 pt-10 pb-20 text-center md:mt-5 md:text-left isolate w-full max-w-3xl space-y-8 -translate-y-6">
      {/* Top full-width card */}
      <div className="p-8 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 h-60 md:h-72 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-4">Who am I?</h2>
        <h3 className="text-2xl text-blue-300 font-semibold mb-4">
          Hi, I am Nishant.
        </h3>
        <p className="text-neutral-300 text-lg">
          A full-stack and software developer passionate about building
          impactful digital experiences. I specialize in designing and
          developing applications and web solutions that are not only functional
          and efficient but also intuitive. I aim to transform ideas into
          reliable products that deliver real value.
        </p>
      </div>

      {/* Bottom two cards in 60:40 ratio */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left card (60%) */}
        <div className="flex-1 md:basis-[60%] rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 flex flex-col space-y-4 p-6">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/78hujWzY8epF4h0iH0cV3x?utm_source=generator"
            width="100%"
            height="152" // use Spotify’s "compact" height
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media;  picture-in-picture"
            loading="lazy"
          />

          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2laMVTiQTHjW4EVLPY7Vic?utm_source=generator"
            width="100%"
            height="152" // match compact height
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          />
        </div>
{/* Right card (40%) */}
<div className="flex-1 md:basis-[40%] p-8 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 flex flex-col relative overflow-hidden">
  <h2 className="text-3xl font-semibold mt-2">My Tech Stack</h2>

  {/* Orbiting semicircle */}
  <div className="absolute bottom-0 w-full h-full">
    <div className="w-full h-full "></div>
    <div className="absolute -inset-45 flex justify-center items-end">
      <TechStack />
    </div>
  </div>
</div>
      </div>
    </div>
  );
};
export default About;
