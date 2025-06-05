import Sidh from '../assets/sidh.jpg'
import Sidh_pdf from '../assets/Sidh.pdf'
export const Home = () => {
  return (
    <>
        <div className=' bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md'>
         <div className="body ">
            <div className="flex items-center justify-center mb-6 ">
                <img src={Sidh} alt="Profile" className=" rounded-md " />
            </div>
            <div className="degree text-center mb-4">
              <hr className='relative w-9 left-23  ' />
        <p className='aladin-regular text-3xl'> BE - ECE  (Honour)</p>
        <p className='aubrey-regular text-3xl'>2022 - 2026  </p>
    </div>
            {/* <h1 className="text-3xl font-bold text-center mb-2">Hello, I'm Sharan Sidh</h1> */}
            {/* <p className="text-center text-gray-600 mb-4">A passionate web developer with a knack for creating beautiful and functional websites.</p> */}
            <div className="flex justify-center space-x-4">
                <a href="#project" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">About Me</a>
                <a href={Sidh_pdf} target="_blank" rel="noopener noreferrer" className="bg-red-600 text-gray-100 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">Download CV</a>
            </div>
            
            {/* <div className="section">
                <h2 className="text-2xl font-semibold mt-6 mb-4">About Me</h2>
                <p className="text-gray-600">I am a web developer with experience in building responsive and user-friendly websites. I love coding and am always eager to learn new technologies.</p>
            </div> */}
         </div>
            
        </div>
        
    </>
  )
}
