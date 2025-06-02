import React from 'react'

export const NavBar = () => {
  return (
    <>
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">Profolio</div>
            <ul className="flex space-x-4">
                <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="text-white hover:text-gray-400">About</a></li>
                <li><a href="#project" className="text-white hover:text-gray-400">Projects</a></li>
                <li><a href="#footer" className="text-white hover:text-gray-400">Contact</a></li>
            </ul>
            </div>
        </nav>
    </>
  )
}
