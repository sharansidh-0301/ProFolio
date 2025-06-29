import "../App.css";
import git from "../assets/TechIcons/githubIcon.png";
import linkedin from "../assets/TechIcons/linkedin.png";
import gmail from "../assets/TechIcons/gmail.png";
import TypeWriter from "typewriter-effect";

function SocialLink({ href, icon, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mx-2">
      <img
        src={icon}
        alt={alt}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform duration-200 hover:scale-110"
      />
    </a>
  );
}

export const About = () => {
  return (
    <div className="text-center px-2 sm:px-4 md:px-8 py-6">
      <div>
        <p className="text-base sm:text-lg font-semibold">Hello, I'm</p>
        <p className="work-sans-bold text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-slate-800 drop-shadow mb-2">
          SHARAN SIDH Jr
        </p>
        <div className="mt-2 sm:mt-3">
          <div className="text-base sm:text-lg font-semibold">And I'm a</div>
          <TypeWriter
            options={{
              strings: [
                "Full Stack Developer",
                "Software Engineer",
                "AI Learner",
                "Network Engineer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              cursor: "|",
              cursorClassName:
                "text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800 drop-shadow",
              wrapperClassName:
                "work-sans-bold text-xl sm:text-2xl md:text-4xl inline-block text-indigo-700 drop-shadow",
            }}
          />
        </div>
        <p className="comfortaa-weight mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl">
          Passionate software developer skilled in building efficient,
          scalable applications. Always eager to learn, solve real-world
          problems, and create meaningful user experiences.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-6 border-t-2 w-full mx-auto pt-5 gap-4">
        <SocialLink
          href="https://github.com/sharansidh-0301"
          icon={git}
          alt="GitHub"
        />
        <SocialLink
          href="https://www.linkedin.com/in/sharansidh0301/"
          icon={linkedin}
          alt="LinkedIn"
        />
        <SocialLink
          href="mailto:sharansidh0301@gmail.com"
          icon={gmail}
          alt="Gmail"
        />
      </div>
    </div>
  );
};