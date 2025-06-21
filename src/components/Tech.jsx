import Django from "../assets/TechIcons/Django.png";
import git from "../assets/TechIcons/GitHub.png";
import Java from "../assets/TechIcons/Java.png";
import JS from "../assets/TechIcons/JavaScript.png";
import MongoDB from "../assets/TechIcons/MongoDB.png";
import MySQL from "../assets/TechIcons/MySQL.png";
import Python from "../assets/TechIcons/Python.png";
import react from "../assets/TechIcons/React.png";
import Node from "../assets/TechIcons/Node.js.png";
import npm from "../assets/TechIcons/NPM.png";
import Tailwind from "../assets/TechIcons/Tailwind.png";
import Vite from "../assets/TechIcons/Vite.js.png";
import Eclipse from "../assets/TechIcons/Eclipse.png";
import Linux from "../assets/TechIcons/Linux.png";
import Anaconda from "../assets/TechIcons/Anaconda.png";
import "./Tech.css";
import "../index.css";

function TechItem({ src, alt, name }) {
  return (
    <div className="tech-box bg-emerald-200 py-4 px-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center space-x-4">
      <img src={src} alt={alt} className="w-12 h-12 object-contain" />
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}

export const Tech = () => {
  return (
    <div className="skill-section py-8 px-2 sm:px-4 md:px-8" id="tech">
      <div className="rounded-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-8 mb-8 sm:mt-12 sm:mb-12">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          <TechItem src={JS} alt="JavaScript" name="JavaScript" />
          <TechItem src={react} alt="React" name="React" />
          <TechItem src={Node} alt="Node.js" name="Node.js" />
          <TechItem src={npm} alt="NPM" name="NPM" />
          <TechItem src={Python} alt="Python" name="Python" />
          <TechItem src={Django} alt="Django" name="Django" />
          <TechItem src={MongoDB} alt="MongoDB" name="MongoDB" />
          <TechItem src={MySQL} alt="MySQL" name="MySQL" />
          <TechItem src={Tailwind} alt="Tailwind CSS" name="Tailwind CSS" />
          <TechItem src={git} alt="GitHub" name="GitHub" />
          <TechItem src={Java} alt="Java" name="Java" />
          <TechItem src={Vite} alt="Vite.js" name="Vite.js" />
          <TechItem src={Eclipse} alt="Eclipse" name="Eclipse" />
          <TechItem src={Linux} alt="Linux" name="Linux" />
          <TechItem src={Anaconda} alt="Anaconda" name="Anaconda" />
        </div>
      </div>
    </div>
  );
};
