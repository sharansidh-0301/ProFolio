import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">PortFolio</div>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#tech" className="text-white hover:text-gray-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#project" className="text-white hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#footer" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-gray-800 px-4 pb-4 pt-2 space-y-2">
            <li>
              <a
                href=""
                className="block text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="block text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="block text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="block text-white hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};
