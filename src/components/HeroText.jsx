import DecryptedText from "./DecryptedText";

const HeroText = () => {
  return (
    <div className="relative z-10 mt-40 px-16 py-14 -ml-10 max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#1e1e2fcc] to-[#0f0f1fcc] shadow-2xl ring-1 ring-white/10 backdrop-blur-lg">
      <div className="flex flex-col -pr-30 items-start space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Developer
          </span>
          <br />
          <span className="text-white ml-7 relative -top-2">Designer</span>
        </h1>

        <p className="text-2xl md:text-3xl font-medium text-neutral-300">
          Hi, I am <span className="text-white font-semibold">Nishant.</span>
        </p>

        <div className="text-lg md:text-2xl text-neutral-200 max-w-3xl ">
          <DecryptedText
            text="I'm a full-stack developer and designer creating AI-enhanced solutions and crafting thoughtful user experiences."
            speed={60}
            maxIterations={20}
            characters="ABCD1234!?"
            className="font-medium"
            // parentClassName="all-letters"
            // encryptedClassName="encrypted"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
