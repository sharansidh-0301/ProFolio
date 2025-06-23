import React, { useState } from "react";
import auro from '../assets/ACHIVEMENTS/auro/certi.jpg';
import momentum from '../assets/ACHIVEMENTS/sih/momentum.jpg';
import ideathon from '../assets/ACHIVEMENTS/ideathon/certificate1.jpg';
import mec from '../assets/ACHIVEMENTS/mec/pic11.jpg';
import vec from '../assets/ACHIVEMENTS/vec/pic.jpg';
import isro from '../assets/ACHIVEMENTS/ISRO/team.jpeg';
import candid from '../assets/ACHIVEMENTS/sih/candid.jpg';
import interview1 from '../assets/ACHIVEMENTS/sih/interview1.jpg';
import interview2 from '../assets/ACHIVEMENTS/sih/interview2.jpg';
import poster from '../assets/ACHIVEMENTS/sih/poster.jpg';
import review from '../assets/ACHIVEMENTS/sih/review.jpeg';
import review2 from '../assets/ACHIVEMENTS/sih/review2.jpeg';
import isro2 from '../assets/ACHIVEMENTS/ISRO/isro1.jpeg';
import isro3 from '../assets/ACHIVEMENTS/ISRO/team2.jpeg';
import './Tech.css';

// Example: Add an `extraImgs` array for each achievement if you want more images in the slider
export const Achievements = () => {
  const data = [
     {
  img: momentum,
  extraImgs: [
    momentum, review, review2 ,interview2, interview1, poster, candid, 
    
  ],
  title: "SIH 2023 Finalist",
  content: "Finalist in Smart India Hackathon 2023 (Hardware Edition)",
  details:
    "Represented IFET College of Engineering as a finalist in Smart India Hackathon 2023 (Hardware Edition), held at Galgotias University, Noida, New Delhi. The 5-day event took place from December 19 to 24, 2023. Our team developed and demonstrated a working prototype of the 'Sewage Gas Monitoring and Neutralization System' – a solution designed to detect harmful gases in sewage pipelines and neutralize them using automated embedded control. The project was recognized for its real-world impact, efficiency, and scalability.",
},
  {
    img: ideathon,
    extraImgs: [
      ideathon,
      "/pictures/Achievements/IFET/ideathon_certificate.jpg",
    ],
    title: "Ideathon Winner",
    content: "2nd Prize – Ideathon at IFET College of Engineering",
    details:
      "Won 2nd prize at the Ideathon organized by IFET College of Engineering. The event was a 1-day inter-college competition involving over 100+ teams. I presented an innovative project titled 'Sustainable Orchards by Integrating AI and Blockchain', focusing on transforming agriculture through intelligent automation, disease prediction, and blockchain-enabled traceability for apple orchards.",
  },
  {
    img: mec,
    extraImgs: [
      mec,
      "/pictures/Achievements/MEC/sewage_certificate.jpg",
    ],
    title: "Paper Presentation Winner",
    content: "1st Prize – Paper Presentation at Mailam Engineering College",
    details:
      "Secured 1st prize in a 1-day national-level symposium conducted at Mailam Engineering College on March 20, 2025. Presented the project 'Sewage Gas Monitoring and Neutralization System', which detects harmful gases using sensors and neutralizes them with an automated embedded mechanism. Appreciated for its real-world impact and system reliability.",
  },
  {
    img: vec,
    extraImgs: [
      vec,
    ],
    title: "Paper Presentation – VEC",
    content: "3rd Prize – Paper Presentation at Velammal Engineering College, Ambattur",
    details:
      "Awarded 3rd prize at a 1-day symposium hosted by Velammal Engineering College, Ambattur. Presented the project 'FIR Fencing System', an IoT-based intrusion detection system that instantly sends FIR alerts upon unauthorized entry. The concept stood out for its smart public safety application and rapid response mechanism.",
  },
  {
    img: auro,
    extraImgs: [
      auro,

    ],
    title: "Digital Marketing Intern – AURO",
    content: "15-Day Internship at AURO Creative Studio, Puducherry",
    details:
      "Completed a 15-day internship in digital marketing at AURO Creative Studio, Puducherry. Gained hands-on experience in SEO optimization, social media planning, and creative content development. Each task sharpened my communication and brand strategy skills. Mr. Karn Parekh, Co-Founder, appreciated my commitment and gifted me a thoughtful token of appreciation on successful completion.",
  },
  {
    img: isro,
    extraImgs: [
      isro,
      isro2,isro3,
    ],
    title: "ISRO Panel Member",
    content: "Panelist – ISRO Project Explanation Event at IFET",
    details:
      "Appointed as a panel member for a 3-day ISRO exhibition event conducted at IFET College of Engineering from October 4 to 6, 2023. I represented the team in explaining ISRO’s satellite, rover, and propulsion-related projects to students, faculty, and dignitaries. The event was organized to ignite interest in space science and innovation among young learners.",
  }
  ];

  const [openIdx, setOpenIdx] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);

  React.useEffect(() => {
  if (openIdx !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => { document.body.style.overflow = "auto"; };
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
   <div
    className="relative max-w-9xl w-[90vw] h-[42rem] bg-white/80 backdrop-blur-2xl rounded-xl shadow-2xl border-4 border-purple-300 p-0 overflow-hidden animate-[fadeIn_0.3s_ease] flex"
    style={{ minHeight: "32rem" }}
  >
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
      <div className="flex flex-col md:flex-row w-full h-full overflow-y-auto">
        {/* Image Slider */}
        <div
          className="relative flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-white to-indigo-100 p-10 h-full"
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
            className="w-[52rem] h-[32rem] max-w-full max-h-[60vh] object-cover rounded-2xl shadow-2xl border-4 border-white transition-all duration-500"
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
        <div className="flex-1 flex flex-col justify-center p-10 h-full overflow-y-auto">
          {/* Achievement Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow text-lg font-semibold tracking-wide">
              {data[openIdx].title}
            </span>
          </div>
          <h3 className="text-3xl font-extrabold text-purple-700 mb-4 text-center drop-shadow">{data[openIdx].content}</h3>
          <p className="text-gray-700 text-center mb-6 text-lg">{data[openIdx].details}</p>
          <div className="flex justify-center gap-4">
            <button
              className="mt-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg text-lg font-bold hover:scale-105 hover:from-purple-700 hover:to-indigo-600 transition-all duration-200"
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