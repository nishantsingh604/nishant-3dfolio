"use client";

import React from "react";
import BubbleMenu from './BubbleMenu';

const navItems = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" }
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" }
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" }
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" }
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" }
  }
];


const ContactSection = () => {
  return (
    <section className="w-full bg-white mt-8  pb-4.5 flex flex-col md:flex-row items-start md:items-center justify-center gap-8 px-6 md:px-16 py-12">
      {/* Left side (Image placeholder 40%) */}
      <div className="w-full md:w-2/5 flex items-center justify-center">
        <div className="w-full h-60 md:h-96 rounded-xl flex items-center justify-center">
          <img src="/PFP.png" alt="" className="h-100 rounded-3xl " />
        </div>
      </div>

      {/* Right side (Info 60%) */}
      <div className="w-full md:w-3/5">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in touch</h2>
        <p className="text-gray-600 mb-8 max-w-lg">
          Don’t be a stranger — slide into my inbox like it’s a DM. Whether it’s
          big ideas, random thoughts, or just a meme, I’m all ears 👂✨{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          {/* <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Collaborate</h3>
            <a
              href="mailto:collaborate@example.com"
              className="text-indigo-600"
            >
              collaborate@example.com
            </a>
            <p className="text-gray-600">+1 (555) 905-2345</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Press</h3>
            <a href="mailto:press@example.com" className="text-indigo-600">
              press@example.com
            </a>
            <p className="text-gray-600">+1 (555) 905-3456</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Join our team</h3>
            <a href="mailto:careers@example.com" className="text-indigo-600">
              careers@example.com
            </a>
            <p className="text-gray-600">+1 (555) 905-4567</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Say hello</h3>
            <a href="mailto:hello@example.com" className="text-indigo-600">
              hello@example.com
            </a>
            <p className="text-gray-600">+1 (555) 905-5678</p>
          </div> */}
          <div className="relative flex items-center justify-center min-h-[200px]">
            <BubbleMenu
              items={navItems}
              menuAriaLabel="Toggle navigation"
              menuBg="black"
              menuContentColor="white"
              useFixedPosition={false} // ✅ keep it relative
              animationEase="back.out(1.5)"
              animationDuration={0.5}
              staggerDelay={0.12}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
