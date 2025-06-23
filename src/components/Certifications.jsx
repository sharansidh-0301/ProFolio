import React, { useState } from "react";

const certificates = [
   {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "June 2025",
    img: "/certificates/ccna-switching-routing.jpg",
    link: "https://www.netacad.com/certificates?issuanceId=9fd860a4-2bfe-4e5b-95ae-146b198840a8",
    description: "Completed the second course in the CCNA series with 70 hours of hands-on training in switching, routing protocols, and wireless technologies under instructor Arunkumar M.",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "July 2024",
    img: "/certificates/ccna-intro.jpg",
    link: "https://www.netacad.com/certificates?issuanceId=b659d016-b1e2-4f0f-999f-3cbc598aa4dd",
    description: "Successfully completed foundational networking course covering network architecture, protocols, and models under instructor Matilda S.",
  },
  {
    title: "SQL Fundamentals - Skillrack",
    issuer: "Skillrack",
    date: "2024",
    img: "/certificates/sql-skillrack.jpg",
    link: "https://www.skillrack.com/faces/candidate/certificates.xhtml",
    description: "Learned SQL basics, including query writing, table creation, and relational database handling with hands-on tasks.",
  },
  {
    title: "Using Basic Formulas and Functions in Microsoft Excel",
    issuer: "Coursera",
    date: "2024",
    img: "/certificates/excel-formulas.jpg",
    link: "https://coursera.org/verify/excel-formulas-functions",
    description: "Completed a practical course on Microsoft Excel to perform calculations, apply formulas, and automate tasks using core spreadsheet features.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-indigo-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.025] cursor-pointer"
              onClick={() => setOpenIdx(idx)}
            >
              {/* Issuer Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-950 to-red-400 text-white rounded-full shadow text-xs font-bold tracking-wide border-2 border-white">
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
                className="mt-2 px-4 py-1 bg-gradient-to-r bg-red-500 text-white rounded-lg shadow hover:from-indigo-500 hover:to-purple-500 transition"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2">
            <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 max-w-md w-full animate-[fadeIn_0.3s_ease] border border-indigo-100">
              <button
                className="absolute top-3 right-3 text-2xl text-slate-400 hover:text-indigo-600"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={certificates[openIdx].img}
                alt={certificates[openIdx].title}
                className="w-56 h-56 object-cover rounded-xl mx-auto mb-4 border-2 border-indigo-100 shadow"
              />
              <h3 className="text-2xl font-bold text-indigo-700 mb-2 text-center">{certificates[openIdx].title}</h3>
              <div className="text-center text-slate-500 text-sm mb-2">
                {certificates[openIdx].issuer} &middot; {certificates[openIdx].date}
              </div>
              <p className="text-gray-700 text-center mb-4">{certificates[openIdx].description}</p>
              <div className="flex justify-center">
                <a
                  href={certificates[openIdx].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow hover:from-indigo-600 hover:to-purple-600 transition"
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