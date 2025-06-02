import Sidh from '../assets/sidh.jpg'
export const Home = () => {
  return (
    <>
        <div className='absolute top-1/2 mt-9 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-md w-full'>
         <div className="body ">
            <div className="flex items-center justify-center mb-6">
                <img src={Sidh} alt="Profile" className=" rounded-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-center mb-2">Hello, I'm Sharan Sidh</h1>
            <p className="text-center text-gray-600 mb-4">A passionate web developer with a knack for creating beautiful and functional websites.</p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Projects</a>
                <a href="#contact" className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition duration-300">Contact Me</a>
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
