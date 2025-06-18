import auro from "../pictures/Achievements/AURO/Auro.jpg";
import Ideathon from "../pictures/Achievements/Ideathon/certificate.jpg";
import MEC1 from "../pictures/Achievements/MEC/certificate1.jpg";
import MEC2 from "../pictures/Achievements/MEC/certificate2.jpg";
import VEC from "../pictures/Achievements/VEC/prize.jpg";
import "../App.css";
import React, { useState } from "react";

export const Achievements = () => {
  // const data = [
  //     {
  //         icon:"aa",
  //         heading:"aaa",
  //         subHeading:"bbb",
  //         content:`Appreciated as Best intern`,
  //         img: auro,
  //         year:"1212"
  //     },
  //     {
  //         icon:"aa",
  //         heading:"aaa",
  //         subHeading:"bbb",
  //         img:Ideathon,
  //         content:`Won 2nd Prize in Ideathon (Idea Presentation)`,
  //         year:"1212"
  //     },
  //     {
  //         icon:"aa",
  //         heading:"aaa",
  //         subHeading:"bbb",
  //         img: MEC1,
  //         content:`Won 1st Prize in Paper Presentation`,
  //         year:"1212"
  //     },
  //     {
  //         icon:"aa",
  //         heading:"aaa",
  //         subHeading:"bbb",
  //         img:MEC2,
  //         content:`Won 2nd Prize in Adzap`,
  //         year:"1212"
  //     },
  //     {
  //         icon:"aa",
  //         heading:"aaa",
  //         subHeading:"bbb",
  //         img:VEC,
  //         content:`Won 3rd Prize in Paper Presentatiom`,
  //         year:"1212"
  //     }
  // ]

  const achievements = [
    {
      img: auro,
      title: "Hackathon Finalist",
      organization: "Smart India Hackathon-2023",
      description:
        "Shortlisted among 1,028 teams from 50,000+ participants for the Grand Finale ( Hardware Edition ) in Noida,  New Delhi.",
      date: "2023",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
    },
    {
      img: auro,
      title: "Paper Presentation Winner",
      organization: "National Level Symposium",
      description:
        "Awarded 1st prize in a National-Level Technical Symposium at Mailam Engineering College, Mailam.",
      date: "2025",
      icon: "🚀",
      color: "from-purple-400 to-pink-500",
    },
    {
      img: auro,
      title: "Ideathon Winner",
      organization: "Tech Corp",
      description:
        "Successfully led a team of 8 developers on enterprise-level projects",
      date: "2020-2023",
      icon: "👥",
      color: "from-indigo-400 to-purple-500",
    },
    {
      img: auro,
      title: "Open Source Contributor",
      organization: "GitHub",
      description:
        "Contributed to 15+ open source projects with over 500 stars combined",
      date: "2022-2023",
      icon: "⭐",
      color: "from-blue-400 to-cyan-500",
    },
    {
      img: auro,
      title: "Certified Cloud Architect",
      organization: "AWS",
      description:
        "Achieved AWS Solutions Architect Professional certification",
      date: "2022",
      icon: "☁️",
      color: "from-green-400 to-emerald-500",
    },

    {
      img: auro,
      title: "Published Article",
      organization: "Tech Blog",
      description:
        "Published technical articles with 10k+ views on modern web development",
      date: "2023",
      icon: "📝",
      color: "from-pink-400 to-rose-500",
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <section
        id="achievements"
        className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Milestones and recognitions that mark my journey in technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 hover:bg-slate-800/70"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <div className="text-purple-400 font-medium mb-3">
                    {achievement.organization}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {achievement.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                      {achievement.date}
                    </span>

                    {/* Hover indicator */}
                    <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 rounded-full"></div>
                  </div>

                  {/* Additional info on hover */}
                  <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <button
                        onClick={() => setOpenIdx(idx)}
                        className="text-sm text-purple-300 cursor-pointer"
                      >
                        Click to learn more
                      </button>

                      {/* Unique Modal */}
                      {openIdx !== null && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
                          <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-lg w-full animate-fade-in">
                            <button
                              className="absolute top-3 right-3 text-2xl text-purple-400 hover:text-purple-700 transition"
                              onClick={() => setOpenIdx(null)}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            <div className="flex flex-col items-center">
                              <img
                                src={achievement[openIdx].icon}
                                alt={achievement[openIdx].title}
                                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-xl shadow mb-4 border-4 border-purple-200"
                              />
                              <h3 className="text-2xl font-bold text-purple-700 mb-2 text-center">
                                {achievement[openIdx].title}
                              </h3>
                              <p className="text-gray-700 text-center mb-4">
                                {data[openIdx].details}
                              </p>
                              <button
                                className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                                onClick={() => setOpenIdx(null)}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className='flex flex-col items-center '>
    <p className='text-4xl mb-4 font-sans font-bold text-violet-800'>Achievements</p>
    <hr className='w-30 border-2 border-yellow-800 ' />
    <p className='mt-4 text-xl font-serif' >Milestones and recognitions that mark my journey in technology</p>
    </div>
    <div className='flex justify-center'>
        <div className='mt-20 grid grid-cols-3 gap-6'  >
            {data.map((d,index)=>(
                <div key={index} >
                    <div className='w-80 h-60 rounded-xl  bg-transparent border-2 border-amber-100'>

                    </div>

                </div>
            ))}
        </div>

    </div>
     */}
    </>
  );
};
