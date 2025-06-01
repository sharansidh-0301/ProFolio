import Django from '../assets/django.png';
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

function TechItem({ src, alt, name }) {
  return (
    <div className="tech-item">
      <div className="flex flex-col items-center">
        <img src={src} alt={alt} className="tech-icon w-20 h-20" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export const Tech = () => {
  return (
    <>
    <div className="skill-section">
        <div className="absolute right-1/20 top-1/7 p-6 rounded-lg shadow-md w-1/2 mx-auto bg-white/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-center mb-6">Technologies I Work With</h2>
            <div className="tech grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
        </div>
    </div>
    </>
  )
}
