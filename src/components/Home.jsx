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
        <div className="fixed inset-0 flex items-center  bg-white/30 backdrop-blur-sm  justify-center z-50">
          <div
            onClick={toggleModal}
            className="fixed inset-0 w-full h-full top-0 left-0 right-0 bottom-0"
          ></div>
          <div className="absolute bg-white p-6 max-w-md w-full ">
            <h1 className="text-2xl font-semibold mb-4">About Me</h1>
            <p lassName="text-gray-600 mb-4">
              Hello Every One This is Sharan Sidh
            </p>
            <button
              onClick={toggleModal}
              className="relative left-96 -top-24 bg-white-500 text-black  px-4 py-2 cursor-pointer hover:bg-red-500   hover:text-white transition duration-100"
            >
              X
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
            <p className="aladin-regular text-3xl">
              {" "}
              <span className=" border-t-2"> BE </span>- ECE{" "}
              <span className="font-medium">(Hons)</span>
            </p>
            <p className="aubrey-regular text-3xl">2022 - 2026 </p>
          </div>
          {/* <h1 className="text-3xl font-bold text-center mb-2">Hello, I'm Sharan Sidh</h1> */}
          {/* <p className="text-center text-gray-600 mb-4">A passionate web developer with a knack for creating beautiful and functional websites.</p> */}

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

          {/* <div className="section">
                <h2 className="text-2xl font-semibold mt-6 mb-4">About Me</h2>
                <p className="text-gray-600">I am a web developer with experience in building responsive and user-friendly websites. I love coding and am always eager to learn new technologies.</p>
            </div> */}
        </div>
      </div>
    </>
  );
};
