import "../App.css";
import git from "../assets/githubIcon.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import TypeWriter from "typewriter-effect";

function SocialLink({ href, icon, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={alt} className="w-20 h-20 mx-2" />
    </a>
  );
}

export const About = () => {
  return (
    <>
      <div className="text-center">
        <div>
          <p className="text-lg font-semibold">Hello, I'm</p>
          <p className="work-sans-bold  text-5xl text-yellow-950 border-amber-950 ">
            SHARAN SIDH Jr
          </p>
          <div className="mt-3 ">
            <div className="text-lg font-semibold ">And I'm a </div>

            <TypeWriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Software Engineer",
                  "Network Engineer",
                  "Cloud Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
                cursor: "|",
                cursorClassName: "text-gray-700 text-6xl font-semibold",
                wrapperClassName:
                  "work-sans-bold  text-5xl inline-block text-indigo-700",
              }}
            />
          </div>

          {/* <span className='mt-3 work-sans-bold text-6xl text-indigo-700 '>{text}</span> */}

          <p className="comfortaa-weight mt-5 text-2xl ">
            Passionate software developer skilled in building efficient,
            scalable applications. Always eager to learn, solve real-world
            problems, and create meaningful user experiences.
          </p>
        </div>

        <div className="flex justify-center mt-5 border-t-2 w-1/2 mx-auto pt-5">
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
    </>
  );
};
