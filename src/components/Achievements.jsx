import React, { useState } from "react";
import auro from '../assets/ACHIVEMENTS/auro/certi.jpg';
import momentum from '../assets/ACHIVEMENTS/sih/momentum.jpg';
import ideathon from '../assets/ACHIVEMENTS/ideathon/certificate1.jpg';
import mec from '../assets/ACHIVEMENTS/mec/pic11.jpg';
import vec from '../assets/ACHIVEMENTS/vec/pic.jpg';
import isro from '../assets/ACHIVEMENTS/ISRO/team.jpeg';
import './Tech.css';

// Example: Add an `extraImgs` array for each achievement if you want more images in the slider
export const Achievements = () => {
  const data = [
    {
      img: momentum,
      extraImgs: [
        momentum,
        "/pictures/Achievements/MEC/certificate2.jpg", // Example: add more related images
      ],
      title: "SIH'2023 Finalist",
      content: "Shortlisted to SIH-2023 Grand Final Hardware Edition",
      details:
        "During my internship at AURO, I led a team project that improved workflow efficiency by 30%. I received recognition for my leadership and technical skills.",
    },
    {
      img: ideathon,
      extraImgs: [
        ideathon,
        "/pictures/Achievements/MEC/certificate2.jpg",
      ],
      title: "Ideathon Winner",
      content: "Won 2nd Prize in Ideathon (Idea Presentation)",
      details:
        "Presented an innovative idea at Ideathon and secured the 2nd prize among 100+ teams.",
    },
    {
      img: mec,
      extraImgs: [
        mec,
        "/pictures/Achievements/MEC/certificate2.jpg",
      ],
      title: "Paper Presentation",
      content: "Won 1st Prize in Paper Presentation",
      details:
        "Awarded 1st prize for presenting a technical paper at MEC Symposium.",
    },
    {
      img: vec,
      extraImgs: [
        vec,
        "/pictures/Achievements/MEC/certificate2.jpg",
      ],
      title: "Paper Presentation",
      content: "Won 3rd Prize in Paper Presentation",
      details:
        "Achieved 3rd prize for an impactful paper presentation at VEC.",
    },
    {
      img: auro,
      extraImgs: [
        auro,
        "/pictures/Achievements/MEC/certificate2.jpg",
      ],
      title: "Best Intern",
      content: "Appreciated as Best intern at AURO.",
      details:
        "During my internship at AURO, I led a team project that improved workflow efficiency by 30%. I received recognition for my leadership and technical skills.",
    },
    {
      img: isro,
      extraImgs: [
        isro,
        mec,
      ],
      title: "ISRO Presentation",
      content: "Won 2nd Prize in Adzap",
      details:
        "Secured 2nd place in the Adzap event for creative marketing strategies.",
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);

  // Reset slider when modal opens
  React.useEffect(() => {
    setSlideIdx(0);
  }, [openIdx]);

  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-4xl font-extrabold text-center mt-8 mb-10 text-slate-800 drop-shadow">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {data.map((d, idx) => (
          <div key={idx} className="bg-white/50 backdrop-blur rounded-xl shadow-xl p-6 w-100 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img src={d.img} alt={d.title} className="w-100 h-60 object-cover rounded-lg mb-3 shadow" />
            <h3 className="text-lg font-semibold mb-1">{d.title}</h3>
            <p className="text-gray-600 mb-2 text-center">{d.content}</p>
            <button
              className="text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-full shadow hover:from-purple-600 hover:to-indigo-600 transition-all"
              onClick={() => setOpenIdx(idx)}
            >
              Click to learn more
            </button>
          </div>
        ))}
      </div>

      {openIdx !== null && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2"
    tabIndex={-1}
    onKeyDown={e => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowLeft" && data[openIdx].extraImgs?.length > 1)
        setSlideIdx(prev => prev === 0 ? data[openIdx].extraImgs.length - 1 : prev - 1);
      if (e.key === "ArrowRight" && data[openIdx].extraImgs?.length > 1)
        setSlideIdx(prev => prev === data[openIdx].extraImgs.length - 1 ? 0 : prev + 1);
    }}
    autoFocus
  >
    <div className="relative w-full max-w-6xl bg-white/80 backdrop-blur-2xl rounded-xl shadow-2xl border-4 border-purple-300 p-0 overflow-hidden animate-[fadeIn_0.3s_ease]">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-4xl text-purple-400 hover:text-purple-700 transition z-10"
        onClick={() => setOpenIdx(null)}
        aria-label="Close"
      >
        &times;
      </button>
      {/* Share Button */}
      <button
        className="absolute top-4 left-4 text-xl bg-white/70 hover:bg-purple-100 text-purple-700 rounded-full px-4 py-2 shadow transition z-10"
        onClick={() => {
          navigator.clipboard.writeText(
            `${data[openIdx].title}\n${data[openIdx].details}`
          );
          alert("Achievement copied to clipboard!");
        }}
        aria-label="Share"
      >
        <span role="img" aria-label="Share">🔗</span>
      </button>
      {/* Modal Content */}
      <div className="flex flex-col md:flex-row">
        {/* Image Slider */}
        <div
          className="relative flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100 p-10"
          onTouchStart={e => (window._touchStartX = e.touches[0].clientX)}
          onTouchEnd={e => {
            const dx = e.changedTouches[0].clientX - window._touchStartX;
            if (dx > 50 && data[openIdx].extraImgs?.length > 1)
              setSlideIdx(prev => prev === 0 ? data[openIdx].extraImgs.length - 1 : prev - 1);
            if (dx < -50 && data[openIdx].extraImgs?.length > 1)
              setSlideIdx(prev => prev === data[openIdx].extraImgs.length - 1 ? 0 : prev + 1);
          }}
        >
          {/* Slider Controls */}
          {data[openIdx].extraImgs && data[openIdx].extraImgs.length > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-purple-100 text-purple-700 rounded-full p-4 shadow transition"
                onClick={() =>
                  setSlideIdx(prev =>
                    prev === 0
                      ? data[openIdx].extraImgs.length - 1
                      : prev - 1
                  )
                }
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-purple-100 text-purple-700 rounded-full p-4 shadow transition"
                onClick={() =>
                  setSlideIdx(prev =>
                    prev === data[openIdx].extraImgs.length - 1
                      ? 0
                      : prev + 1
                  )
                }
                aria-label="Next image"
              >
                &#8594;
              </button>
            </>
          )}
          <img
            src={data[openIdx].extraImgs ? data[openIdx].extraImgs[slideIdx] : data[openIdx].img}
            alt={data[openIdx].title}
            className="w-[28rem] h-[28rem] max-w-full max-h-[60vh] object-cover rounded-2xl shadow-2xl border-4 border-white transition-all duration-500"
            style={{ animation: "fadeIn .4s" }}
          />
          {/* Dots */}
          {data[openIdx].extraImgs && data[openIdx].extraImgs.length > 1 && (
            <div className="flex gap-2 mt-4">
              {data[openIdx].extraImgs.map((_, i) => (
                <span
                  key={i}
                  className={`w-4 h-4 rounded-full border-2 border-purple-400 ${i === slideIdx ? "bg-purple-600" : "bg-purple-200"} inline-block cursor-pointer`}
                  onClick={() => setSlideIdx(i)}
                />
              ))}
            </div>
          )}
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col justify-center p-10">
          {/* Achievement Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow text-lg font-semibold tracking-wide">
              {data[openIdx].title}
            </span>
          </div>
          <h3 className="text-5xl font-extrabold text-purple-700 mb-6 text-center drop-shadow">{data[openIdx].content}</h3>
          <p className="text-gray-700 text-center mb-8 text-2xl">{data[openIdx].details}</p>
          {/* Add more info or links here if needed */}
          <div className="flex justify-center gap-4">
            <button
              className="mt-2 px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg text-xl font-bold hover:scale-105 hover:from-purple-700 hover:to-indigo-600 transition-all duration-200"
              onClick={() => setOpenIdx(null)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};