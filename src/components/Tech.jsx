import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaLinux,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiEclipseide,
  SiAnaconda,
} from "react-icons/si";
import "./Tech.css";
import "../index.css";
const techList = [
  { icon: <FaJava className="text-red-700" />, name: "Java" },  
  { icon: <FaPython className="text-yellow-500" />, name: "Python" },
  { icon: <FaReact className="text-sky-500" />, name: "React" },
  { icon: <SiDjango className="text-green-800" />, name: "Django" },
  { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <SiMysql className="text-blue-700" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <FaGithub className="text-white" />, name: "GitHub" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaNodeJs className="text-green-700" />, name: "Node.js" },
  { icon: <FaNpm className="text-red-600" />, name: "NPM" },
  { icon: <SiVite className="text-purple-500" />, name: "Vite.js" },
  { icon: <SiEclipseide className="text-yellow-200" />, name: "Eclipse" },
  { icon: <FaLinux className="text-green-600 " />, name: "Linux" },    
  { icon: <SiAnaconda className="text-green-700" />, name: "Anaconda" },
];


function TechItem({ icon, name, idx }) {
  return (
    <div
      className={`tech-card group relative flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl
        bg-slate-900 overflow-hidden
        transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-10`}
      style={{
        animation: `fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both`,
        animationDelay: `${idx * 0.07 + 0.1}s`,
      }}
      title={name}
    >
      <span className="relative z-10 text-5xl mb-2 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 text-emerald-100">
        {icon}
      </span>
      <span className="relative z-10 text-base font-semibold text-emerald-100  transition-all duration-300">
        {name}
      </span>
      {/* Animated border glow on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-400 group-hover:shadow-[0_0_24px_4px_rgba(16,185,129,0.25)] transition-all duration-300"></span>
    </div>
  );
}


export const Tech = () => {
  return (
    <div className="relative py-16 px-2 sm:px-4 md:px-8 overflow-hidden" id="tech">
      {/* Modern radial gradient background */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100 via-sky-100 to-white dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900 transition-colors duration-500"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mt-8 mb-10 text-slate-800 drop-shadow ">
          Technologies I Work With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 md:gap-10">
          {techList.map((tech, idx) => (
            <TechItem key={tech.name} icon={tech.icon} name={tech.name} idx={idx} />
          ))}
        </div>
      </div>
      {/* Animations and custom styles */}
      <style>
        {`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .tech-card {
          box-shadow: 0 2px 16px 0 rgba(16,185,129,0.08);
        }
        .tech-card:hover {
          box-shadow: 0 8px 32px 0 rgba(16,185,129,0.18), 0 2px 16px 0 rgba(16,185,129,0.08);
          border-color: #10b981;
        }
        `}
      </style>
    </div>
  );
};