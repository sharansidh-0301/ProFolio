import Sidh from "../assets/MyPics/sidh.jpg";
import Sidh_pdf from "../assets/Sidh.pdf";
import { useState } from "react";

export const Home = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (!modal) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
   {modal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2">
    {/* Modal Overlay */}
    <div
      onClick={toggleModal}
      className="absolute inset-0 w-full h-full cursor-pointer"
    ></div>
    {/* Modal Content */}
    <div className="relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-3xl w-full p-0 overflow-hidden animate-[fadeIn_0.3s_ease] border border-indigo-100 flex flex-col md:flex-row items-stretch">
      {/* Left: Profile & Quick Info */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-indigo-100">
        <img
          src={Sidh}
          alt="Sharan Sidh"
          className="w-28 h-28 object-cover rounded-full border-4 border-indigo-200 shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-indigo-700 mb-1 text-center">SHARANSIDH Jr</h1>
        <span className="text-sm text-slate-500 mb-2 text-center">B.E. ECE (Hons), 2022–2026</span>
        <span className="text-xs text-slate-400 mb-4 text-center">Villupuram, India</span>
        <div className="flex gap-3 mb-4">
          <a href="mailto:sharan.sidh@email.com" className="text-indigo-500 hover:text-indigo-700" aria-label="Email">
            <i className="fas fa-envelope text-lg"></i>
          </a>
          <a href="https://github.com/sharansidh-0301" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700" aria-label="GitHub">
            <i className="fab fa-github text-lg"></i>
          </a>
          <a href="https://linkedin.com/in/sharansidh" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-lg"></i>
          </a>
        </div>
        <a
          href={Sidh_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-500 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-600 transition text-sm font-semibold mb-2"
        >
          Download CV
        </a>
        <button
          onClick={toggleModal}
          className="px-5 py-2 cursor-pointer bg-slate-200 text-indigo-700 rounded-xl shadow hover:bg-red-500 hover:text-white transition text-sm font-semibold"
        >
          Close
        </button>
      </div>
      {/* Right: Timeline & Details */}
      <div className="flex-1 flex flex-col justify-center px-6 py-8">
        {/* Timeline */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-indigo-600 mb-3">Journey</h2>
          <ol className="relative border-l-2 border-indigo-100 pl-6">
            <li className="mb-6">
              <div className="absolute -left-3 top-1 w-5 h-5 bg-indigo-400 rounded-full border-2 border-white shadow"></div>
              <span className="text-sm text-slate-500">2022–2026</span>
              <div className="font-semibold text-indigo-700">B.E. Electronics And Communication Engineering (Hons)</div>
              <div className="text-xs text-slate-500">IFET College Of Engineering, Villupuram</div>
            </li>
            <li className="mb-6">
              <div className="absolute -left-3 top-1 w-5 h-5 bg-purple-400 rounded-full border-2 border-white shadow"></div>
              <span className="text-sm text-slate-500">2020–2022</span>
              <div className="font-semibold text-indigo-700">Higher Secondary</div>
              <div className="text-xs text-slate-500">Vivekanda Hr Sec School, Sholavandan, Madurai</div>
            </li>
            <li>
              <div className="absolute -left-3 top-1 w-5 h-5 bg-amber-400 rounded-full border-2 border-white shadow"></div>
              <span className="text-sm text-slate-500">2019–2020</span>
              <div className="font-semibold text-indigo-700">SSLC</div>
              <div className="text-xs text-slate-500">Saraswathi Matric Hr Sec School, Villupuram</div>
            </li>
          </ol>
        </div>
        {/* Skills & Interests */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600 mb-1">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">React</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Django</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Tailwind CSS</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Java</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">Python</span>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-1">Interests</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Product Development</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Web Developement</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">IoT</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">AI Model Training</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Tech Communities</span>
          </div>
        </div>
      </div>
      {/* Close Button for mobile */}
      <button
        className="absolute  top-4 right-4 text-2xl text-slate-400 hover:text-red-500 transition-all duration-200 z-10 md:hidden"
        onClick={toggleModal}
        aria-label="Close"
      >
        <span className="inline-block transition-transform duration-200 hover:rotate-90">&times;</span>
      </button>
    </div>
  </div>
)}
      <div
        id="home"
        className=" bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md"
      >
        <div className="body ">
          <div className="flex items-center justify-center mb-6 ">
            <img src={Sidh} alt="Profile" className=" rounded-md " />
          </div>
          <div className="degree text-center mb-4">
            <p className="aladin-regular    text-3xl">
              {" "}
              <span className="  border-t-2"> BE </span>- ECE{" "}
              <span className="font-medium">(Hons)</span>
            </p>
            <p className="aubrey-regular text-3xl">2022 - 2026 </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleModal}
              className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              About Me
            </button>
            <a
              href={Sidh_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-gray-100 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
