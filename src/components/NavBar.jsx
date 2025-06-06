import { useState } from "react" ;


export const NavBar = () => {

  return (
    <>
        <nav className="fixed w-full z-20 top-0 start-0 bg-gray-800 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">PortFolio</div>
            <ul className="flex space-x-4  ">
                <li><a href="" className="text-white hover:text-gray-400">Home</a></li>
                <li><a href="#tech" className="text-white hover:text-gray-400">Skills</a></li>
                <li><a href="#project" className="text-white hover:text-gray-400">Projects</a></li>
                <li><a href="#footer" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
            </div>
        </nav>
    </>
  )
}
