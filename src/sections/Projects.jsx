import About from "../components/About";
import Lanyard from "../components/Lanyard/Lanyard";

const Projects = () => {
  return (
    <section
      className="w-full bg-white flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{
        margin: 0,
        padding: 0,
        minHeight: "60vh" // shorter height
      }}
    >
      {/* Lanyard Column */}
      <div
        className="flex justify-center items-center"
        style={{
          flex: "0 0 40%",
          width: "100%",
          height: "100%",
          pointerEvents: "auto"
        }}
      >
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* About Column */}
      <div
        className="flex justify-center items-center"
        style={{
          flex: "0 0 60%",
          width: "100%",
          height: "100%"
        }}
      >
        <About />
      </div>
    </section>
  );
};

export default Projects;
