"use client";

import React from "react";
// import BubbleMenu from './BubbleMenu';
import { FloatingDock } from './ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconFileCv,
  IconHome,
  IconMail,
  
} from "@tabler/icons-react";

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#"
    },

    {
      title: "CV",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1E9MyjEBsj6udmYjtcw0M0atTJNsL5Li6/view"
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagramFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/nishantsingh604/"
    },

    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:nishantrohilla28@gmail.com"
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/nishantsingh604/"
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/nishantsingh604"
    }
  ];

const ContactSection = () => {
  return (
    <section className="w-full bg-white mt-8  pb-4.5 flex flex-col md:flex-row items-start md:items-center justify-center gap-8 px-6 md:px-16 py-12">
      {/* Left side (Image placeholder 40%) */}
      <div className="w-full md:w-2/5 flex ml-30 items-center justify-center">
        <div className="w-full h-60 md:h-96 rounded-xl flex items-center justify-center">
          <img src="/PFP.png" alt="" className="h-100 rounded-3xl " />
        </div>
      </div>

      {/* Right side (Info 60%) */}
      {/* Right side (Info 60%) */}
      <div className="w-full ml-15 md:w-3/5">
        <h2 className="text-3xl font-bold -mt-5 text-gray-900  mb-2">Get in touch</h2>
        <p className="text-gray-600 mb-8 mt-2 max-w-lg">
          Don’t be a stranger — slide into my inbox like it’s a DM. Whether it’s
          big ideas, random thoughts, or just a meme, I’m all ears 👂✨
        </p>

        <div className="w-auto mt-7 ml-10 inline-flex">
          <FloatingDock mobileClassName="translate-y-4" items={links} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
