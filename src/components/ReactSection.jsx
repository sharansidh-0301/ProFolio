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
  // Add more projects here
];

const allTech = [
  ...new Set(projects.flatMap((p) => p.tech)),
];

function ProjectCard({ title, description, Codelink, Sitelink, tech }) {
  return (
    <div className="pro-box bg-gradient-to-br from-indigo-50 via-white to-purple-100 p-6 rounded-2xl shadow-xl flex flex-col h-full border border-purple-100
      transition-transform  duration-300 ease-out
      hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/60">
      <h3 className="text-xl font-bold mb-2 text-indigo-700">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 bg-purple-200 text-purple-700 rounded-full text-xs font-semibold">
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
          className="px-4 py-1 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
        >
          Source
        </a>
        <a
          href={Sitelink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
        >
          Live
        </a>
      </div>
    </div>
  );
}

export const ReactSection = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(selectedTech));

  return (
<div id="project" className="react-section py-12 px-2 sm:px-4 md:px-8 ">      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mt-8 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow">
          React Projects
        </h2>
        {/* Filter Box */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            className={`px-4 py-2 rounded-full font-semibold shadow transition-all ${
              selectedTech === "All"
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-105"
                : "bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50"
            }`}
            onClick={() => setSelectedTech("All")}
          >
            All
          </button>
          {allTech.map((tech) => (
            <button
              key={tech}
              className={`px-4 py-2 rounded-full font-semibold shadow transition-all ${
                selectedTech === tech
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-105"
                  : "bg-white text-indigo-700 border border-indigo-200 hover:bg-indigo-50"
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