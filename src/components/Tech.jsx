import Django from '../assets/Django.png';
import git from '../assets/GitHub.png';
import Java from '../assets/Java.png';
import JS from '../assets/JavaScript.png';
import MongoDB from '../assets/MongoDB.png';
import MySQL from '../assets/MySQL.png';
import Python from '../assets/Python.png';
import react from '../assets/React.png';
import Node from '../assets/Node.js.png';
import npm from '../assets/NPM.png'
import Tailwind from '../assets/Tailwind.png';
import Vite from '../assets/Vite.js.png';
import Eclipse from '../assets/Eclipse.png';
import Linux from '../assets/Linux.png';
import VSCode from '../assets/VSCode.png';

import '../index.css'

function TechItem({ src, alt, name }) {
  return (
    <div className="w-50  bg-emerald-200 tech-item py-2 pr-5 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
      <div className=" flex items-center justify-around hover:scale-105 transition-transform duration-300">
        <img src={src} alt={alt} className=" tech-icon w-13 h-13" />
        <p className='text-xl'>{name}</p>
      </div>
    </div>
  );
}

export const Tech = () => {
  return (
    <>
    <div className="absolute skill-section transform items-center p-15 translate-y-190 w-full">
        <div className="p-6 rounded-lg  mx-auto  ">
            <h2 className="text-3xl font-bold text-center mb-20">Technologies I Work With</h2>
            <div className="tech grid md:grid-cols-2 lg:grid-cols-5 gap-15">
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
                <TechItem src={VSCode} alt="VS Code" name="VS Code" />
            </div>
        </div>
    </div>
    </>
  )
}
