import React, { useState } from "react";
import auro from '../assets/ACHIVEMENTS/auro/certi.jpg';
import momentum from '../assets/ACHIVEMENTS/sih/momentum.jpg';

export const Achievements = () => {
  const data = [
    {
      img: momentum,
      title: "SIH'2023 Finalist",
      content: "Appreciated as Best intern at AURO.",
      details:
        "During my internship at AURO, I led a team project that improved workflow efficiency by 30%. I received recognition for my leadership and technical skills.",
    },{
      img: auro,
      title: "Best Intern",
      content: "Appreciated as Best intern at AURO.",
      details:
        "During my internship at AURO, I led a team project that improved workflow efficiency by 30%. I received recognition for my leadership and technical skills.",
    },
    {
      img: "/pictures/Achievements/Ideathon/certificate.jpg",
      title: "Ideathon Winner",
      content: "Won 2nd Prize in Ideathon (Idea Presentation)",
      details:
        "Presented an innovative idea at Ideathon and secured the 2nd prize among 100+ teams.",
    },
    {
      img: "/pictures/Achievements/MEC/certificate1.jpg",
      title: "Paper Presentation",
      content: "Won 1st Prize in Paper Presentation",
      details:
        "Awarded 1st prize for presenting a technical paper at MEC Symposium.",
    },
    {
      img: "/pictures/Achievements/MEC/certificate2.jpg",
      title: "Adzap",
      content: "Won 2nd Prize in Adzap",
      details:
        "Secured 2nd place in the Adzap event for creative marketing strategies.",
    },
    {
      img: "/pictures/Achievements/VEC/prize.jpg",
      title: "Paper Presentation",
      content: "Won 3rd Prize in Paper Presentation",
      details:
        "Achieved 3rd prize for an impactful paper presentation at VEC.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700 text-center">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {data.map((d, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4 w-100 flex flex-col items-center">
            <img src={d.img} alt={d.title} className="w-100 h-55 object-cover rounded-lg mb-3" />
            <h3 className="text-lg font-semibold mb-1">{d.title}</h3>
            <p className="text-gray-600 mb-2">{d.content}</p>
            <div
              className="text-sm text-purple-300 hover:underline cursor-pointer"
              onClick={() => setOpenIdx(idx)}
            >
              Click to learn more
            </div>
          </div>
        ))}
      </div>

      {/* Modal rendered ONCE, outside the map */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-purple-600 text-2xl"
              onClick={() => setOpenIdx(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img src={data[openIdx].img} 
            alt={data[openIdx].title} 
            className="w-500 h-75 object-cover rounded-xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-purple-700 mb-2">{data[openIdx].title}</h3>
            <p className="text-gray-700 mb-4">{data[openIdx].details}</p>
            <div className="text-center">
              <button
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                onClick={() => setOpenIdx(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};