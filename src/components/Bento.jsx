"use client";
// import { cn } from "@/lib/utils";
import React from "react";
// import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { LinkPreview } from "./ui/link-preview";
// import { PinContainer } from "./ui/3d-pin";



export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        // <PinContainer key={i} title={item.title} href={item.link}>
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={twMerge("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        // </PinContainer>
      ))}
    </BentoGrid>
  );
}


const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-200 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2
      }
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2
      }
    }
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%"
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%"
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
    }
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%"
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 }
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      {" "}
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border  border-neutral-200 flex flex-col items-center justify-center"
      >
        {" "}
        <img
          src="/PFP.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />{" "}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {" "}
          Anne of Green Gables{" "}
        </p>{" "}
        <p className="border border-red-500 bg-red-100 mb-5 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {" "}
          Happy{" "}
        </p>{" "}
      </motion.div>{" "}
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        {" "}
        <img
          src="/PFP.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 mt-2 w-10"
        />{" "}
        <p className="sm:text-sm  text-xs text-center font-semibold text-neutral-500 mt-4">
          {" "}
          I want something like Gone Girl{" "}
        </p>{" "}
        <p className="border border-green-500 bg-green-100 mb-5 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4 ">
          {" "}
          Thriller{" "}
        </p>{" "}
      </motion.div>{" "}
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        {" "}
        <img
          src="/PFP.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />{" "}
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          {" "}
          American Psycho{" "}
        </p>{" "}
        <p className="border border-orange-500 mb-5 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          {" "}
          Dark and Anger{" "}
        </p>{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  };
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          https://www.youtube.com/watch?v=dQw4w9WgXcQ
        </p>
        <img
          src="/PFP.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <p className="text-xs text-neutral-500">
          Rick Astley’s “Never Gonna Give You Up” is a hit 1987 pop song that
          became iconic worldwide and later famous again as the “rickroll”
          internet meme.
        </p>
      </motion.div>
    </motion.div>
  );
};const items = [
  {
    title: (
      <LinkPreview
        url="https://github.com/nishantsingh604/jobsensai"
        className="flex items-center gap-2"
      >
        <span className="font-bold">JobSensAi</span>
      </LinkPreview>
    ),

    description: (
      <span className="text-sm">
        This simplifies job hunting with smart AI-driven resume building,
        personalized career coaching, and seamless user onboarding. W Get hired,
        the smart way!
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  },
  {
    title: (
      <LinkPreview
        url="https://github.com/nishantsingh604/picscreen"
        className="flex items-center gap-2"
      >
        <span className="font-bold">PicScreen</span>
      </LinkPreview>
    ),

    description: (
      <span className="text-sm">
        A full-stack platform to record screens, securely upload, and instantly
        share videos; with simple tools, cloud storage, and link-based sharing
        for effortless content creation and distribution.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },
  {
    title: (
      <LinkPreview
        url="https://github.com/nishantsingh604/instamart-revamp"
        className="flex items-center gap-2"
      >
        <span className="font-bold">Instamart-Revamp</span>
      </LinkPreview>
    ),

    description: (
      <span className="text-sm">
        This is a UI/UX front-end redesign project taken up as a challenge of
        Swiggy Instamart's desktop website, made with pure HTML, CSS, and
        vanilla JavaScript.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  },
  {
    title: (
      <span className="flex items-center gap-2">
        <LinkPreview
          url="https://github.com/nishantsingh604/Panne-App"
          className="flex items-center gap-2"
        >
          <span className="font-bold">Panne</span>
        </LinkPreview>
        <LinkPreview
          url="https://github.com/nishantsingh604/panne-picks"
          className="flex items-center gap-2"
        >
          <span className="font-bold">& Panne-Picks</span>
        </LinkPreview>
      </span>
    ),

    description: (
      <span className="text-sm">
        Panne is a modern, scalable, and efficient library solution designed to
        streamline book borrowing, user management, and administrative
        workflows. Built with cutting-edge technologies, this system provides an
        intuitive experience for both students and administrators.
        <br></br>Panne-Picks is an extension tool for the recent project
        "Panne". It uses ai, ml and llm to recommend books based on different
        analysis methods.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    title: (
      <LinkPreview
        url="https://github.com/nishantsingh604/yt-summarizer"
        className="flex items-center gap-2"
      >
        <span className="font-bold">Yt-Summarizer</span>
      </LinkPreview>
    ),

    description: (
      <span className="text-sm">
        YouTube Summarizer quickly turns YouTube videos into short, readable
        summaries using AI—just paste a link and get the gist in seconds.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
  }
  // // 🚀 New Projects from Resume / GitHub
  // {
  //   title: "SJF CPU Scheduler",
  //   description: (
  //     <span className="text-sm">
  //       Web-based simulator for Shortest Job First scheduling, built with HTML,
  //       CSS & JS. Visualizes process execution & turnaround times.
  //     </span>
  //   ),
  //   header: <SkeletonOne />,
  //   className: "md:col-span-1",
  //   icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  // },
  // // {
  // //   title: "Banker's Algorithm in Java",
  // //   description: (
  // //     <span className="text-sm">
  // //       Implementation of Banker's Algorithm for deadlock avoidance with
  // //       real-time allocation & safety checks.
  // //     </span>
  // //   ),
  // //   header: <SkeletonTwo />,
  // //   className: "md:col-span-1",
  // //   icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  // // },
  // // {
  // //   title: "AeroMate.AI",
  // //   description: (
  // //     <span className="text-sm">
  // //       Voice-powered travel assistant that helps find cheap flights, check visa
  // //       rules, and explore destinations. Built with AI + WordPress.
  // //     </span>
  // //   ),
  // //   header: <SkeletonThree />,
  // //   className: "md:col-span-1",
  // //   icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  // // }
];
