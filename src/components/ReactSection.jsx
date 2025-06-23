import React, { useState } from "react";
import "./Tech.css";

const projects = [
  {
    title: "QR-Code Generator",
    description: "A QR code generator built with React and QR Code API.",
    Codelink: "https://github.com/sharansidh-0301/QR-Code-Generator",
    Sitelink: "https://qr-codess-generator.netlify.app",
    tech: ["React", "API", "Tailwind"],
  },
  {
    title: "BMI Calculator",
    description: "A simple BMI calculator built with React.",
    Codelink: "https://github.com/sharansidh-0301/BMI-Calculator",
    Sitelink: "https://bmi-calciii.netlify.app/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Strong Password Generator",
    description: "A password generator that creates strong passwords.",
    Codelink: "https://github.com/sharansidh-0301/Password-Generator",
    Sitelink: "https://passwords-generator-v1.netlify.app/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Debugging Dare",
    description: "A fun and challenging debugging platform where users can practice and solve Python/Django-related bugs.",
    Codelink: "https://github.com/sharansidh-0301/Debugging-dare",
    tech: ["Django", "Python", "Tailwind"],
  },
  {
    title: "Weather App",
    description: "A weather forecasting app that shows real-time weather updates using API integration.",
    Codelink: "https://github.com/sharansidh-0301/REACT/tree/main/Weather%20App",
    tech: ["React", "Tailwind", "API"],
  },
  {
    title: "Login Page",
    description: "A responsive login page UI with validation built using HTML, CSS, and JavaScript.",
    Codelink: "https://github.com/sharansidh-0301/Login_page",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Java ATM Machine",
    description: "A simple command-line based ATM system built in Java using Eclipse IDE.",
    Codelink: "https://github.com/sharansidh-0301/JAVA-PROJECTS/tree/main/ATM_MACHINE",
    tech: ["Java", "Eclipse"],
  },
  {
    title: "Words Calculator",
    description: "A lightweight tool to count words, characters, and lines in a given text input.",
    Codelink: "https://github.com/sharansidh-0301/Words_calculator",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Blog Post Site",
    description: "A clean and minimal blog layout using Tailwind CSS for static content presentation.",
    Codelink: "https://github.com/sharansidh-0301/Tailwind-CSS/tree/main/BLog-post-site",
    tech: ["Tailwind"],
  },
  {
    title: "Currency Converter",
    description: "A currency converter that fetches live exchange rates and converts between currencies.",
    Codelink: "https://github.com/sharansidh-0301/REACT/tree/main/CURRENCY%20CONVERTER",
    tech: ["React", "Tailwind", "API"],
  },
  {
    title: "Digital Clock",
    description: "A real-time digital clock displaying hours, minutes, and seconds using React.",
    Codelink: "https://github.com/sharansidh-0301/REACT/tree/main/Digital%20Clock",
    tech: ["React", "Tailwind"],
  }
];

// Custom filter options in fixed order
const filterOptions = [
  "React",
  "Django",
  "Tailwind",
  "JavaScript",
  "Java",
  "API"
];

function ProjectCard({ title, description, Codelink, Sitelink, tech }) {
  return (
    <div className="bg-white/95 p-6 rounded-2xl shadow-lg flex flex-col h-full border border-slate-100
      transition-transform duration-300 ease-out
      hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-200">
      <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold">
            {t}
          </span>
        ))}
      </div>
      <p className="text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex justify-between items-center mt-auto gap-2">
        <a
          href={Codelink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 bg-amber-900 text-white rounded-lg shadow hover:bg-amber-700 transition"
        >
          Source
        </a>
        {Sitelink && (
          <a
            href={Sitelink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}

export const ReactSection = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.map(t => t.toLowerCase()).includes(selectedTech.toLowerCase()));

  return (
    <div id="project" className="react-section py-12 px-2 sm:px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mt-8 mb-10 text-slate-800 drop-shadow">
          Featured Projects
        </h2>
        {/* Filter Box */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-semibold shadow transition-all ${
              selectedTech === "All"
                ? "bg-indigo-400 text-white scale-105"
                : "bg-white text-indigo-700 border border-slate-200 hover:bg-slate-50"
            }`}
            onClick={() => setSelectedTech("All")}
          >
            All
          </button>
          {filterOptions.map((tech) => (
            <button
              key={tech}
              className={`px-4 py-2 rounded-full font-semibold shadow transition-all ${
                selectedTech === tech
                  ? "bg-indigo-400 text-white scale-105"
                  : "bg-white text-indigo-700 border border-slate-200 hover:bg-slate-50"
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-500 py-10">
              No projects found for <span className="font-bold">{selectedTech}</span>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};