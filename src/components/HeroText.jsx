import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <div className="z-10  pt-15 pb-25 text-center md:mt-36 md:text-left  isolate  w-180 rounded-xl bg-black/70 shadow-lg ring-1 ring-black/5 -ml-10 ">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-blue-300 -mb-7 block">Developer</span>
          <span className="text-white block ml-9">Designer</span>
        </h1>

        {/* Subtitle */}
        {/* <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Hi! I'm <span className="font-bold">Tajmirul</span>. A creative
          Frontend Developer with
          <span className="font-bold"> 3+ years</span> of experience in building
          <span className="italic"> high-performance</span>,
          <span className="italic"> scalable</span>, and
          <span className="italic"> responsive</span> web solutions.
        </p> */}
        <div className="flex flex-col items-start">
          <p className="text-4xl font-medium mt-6 text-neutral-300">
            Hi, I am <span  className="text-white">Nishant </span>
          </p>
          <div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <p className="text-4xl mt-10 font-medium text-neutral-300">
              I'm a full-stack developer and designer creating AI-enhanced
              solutions and crafting thoughtful user experiences.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      {/* <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Nishant
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroText;
