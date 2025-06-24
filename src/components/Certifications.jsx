import React, { useState } from "react";
import ccna1 from '../assets/Certifications/ccna1.png';
import ccna2 from '../assets/Certifications/ccna2.png';
import excel from '../assets/Certifications/excel.png';
import sql from '../assets/Certifications/skillrack.png';
import iot from '../assets/Certifications/iot.jpg';
const certificates = [
   {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "June 2025",
    img: ccna2,
    link: "https://www.netacad.com/certificates?issuanceId=9fd860a4-2bfe-4e5b-95ae-146b198840a8",
    description: "Completed the second course in the CCNA series with 70 hours of hands-on training in switching, routing protocols, and wireless technologies under instructor Arunkumar M.",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "July 2024",
    img: ccna1,
    link: "https://www.netacad.com/certificates?issuanceId=b659d016-b1e2-4f0f-999f-3cbc598aa4dd",
    description: "Successfully completed foundational networking course covering network architecture, protocols, and models under instructor Matilda S.",
  },
  {
    title: "SQL Fundamentals - Skillrack",
    issuer: "Skillrack",
    date: "2024",
    img: sql,
    link: "https://www.skillrack.com/faces/candidate/certificates.xhtml",
    description: "Learned SQL basics, including query writing, table creation, and relational database handling with hands-on tasks.",
  },
  {
    title: "Using Basic Formulas and Functions in Microsoft Excel",
    issuer: "Coursera",
    date: "2024",
    img: excel,
    link: "https://coursera.org/verify/excel-formulas-functions",
    description: "Completed a practical course on Microsoft Excel to perform calculations, apply formulas, and automate tasks using core spreadsheet features.",
  },
  {
  title: "Inplant Training on Industry 4.0 and Embedded Systems",
  issuer: "TVS Training & Services Ltd",
  date: "February 2025",
  img: iot,
  description: "Completed a 10-day inplant training focused on Industry 4.0 concepts and Embedded Systems, including 8051 microcontroller architecture, electronics fundamentals, IoT device interfacing, and real-time applications.",
}
];

export const Certifications = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="w-full py-16 px-2 sm:px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-indigo-700 tracking-tight">
          <span className="text-4xl font-extrabold text-center mt-8 mb-10 text-slate-800 drop-shadow">Certifications</span>
        </h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-indigo-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] cursor-pointer"
              onClick={() => setOpenIdx(idx)}
            >
              {/* Issuer Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 w-50 text-center py-2 bg-gradient-to-r from-amber-950 to-red-400 text-white rounded-full shadow text-xs font-bold tracking-wide border-2 border-white">
                  {cert.issuer}
                </span>
              </div>
              {/* Certificate Image */}
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-xl border-2 border-indigo-100 shadow mb-4"
              />
              {/* Card Content */}
              <h3 className="text-lg font-bold  mb-1 text-center">{cert.title}</h3>
              <span className="text-xs text-slate-400 mb-2">{cert.date}</span>
              <p className="text-gray-600 text-center text-sm mb-3 line-clamp-3">{cert.description}</p>
              <button
                className="mt-2 px-4 py-1 cursor-pointer bg-gradient-to-r bg-red-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-purple-500 transition"
                onClick={e => {
                  e.stopPropagation();
                  window.open(cert.link, "_blank");
                }}
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
    {openIdx !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2">
    <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-3xl w-full h-[38rem] flex flex-col items-center overflow-hidden border border-indigo-100 animate-[fadeIn_0.3s_ease]">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-3xl text-slate-400 hover:text-indigo-600 z-10"
        onClick={() => setOpenIdx(null)}
        aria-label="Close"
      >
        &times;
      </button>
      {/* Certificate Image Large */}
      <div className="w-full flex justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 md:p-10"
           style={{ height: "18rem" }}>
        <img
          src={certificates[openIdx].img}
          alt={certificates[openIdx].title}
          className="max-h-full max-w-full object-contain rounded-2xl border-2 border-indigo-100 shadow-lg"
          style={{ height: "100%", width: "auto" }}
        />
      </div>
      {/* Details */}
      <div className="w-full flex-1 px-6 pb-8 flex flex-col items-center justify-center">
        <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mt-4 mb-2 text-center">{certificates[openIdx].title}</h3>
        <div className="text-center text-slate-500 text-base mb-2">
          <span className="font-semibold">{certificates[openIdx].issuer}</span>
          {certificates[openIdx].date && <> &middot; {certificates[openIdx].date}</>}
        </div>
        <p className="text-gray-700 text-center mb-6 text-base md:text-lg max-w-2xl">{certificates[openIdx].description}</p>
        <a
          href={certificates[openIdx].link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition text-lg font-semibold"
        >
          Open Certificate
        </a>
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
};