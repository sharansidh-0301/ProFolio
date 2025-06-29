import { useState, useEffect } from "react";



const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#tech" },
  { name: "Projects", href: "#project" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#footer" },
];

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const handleNavClick = (name, href) => {
  setActive(name);
  setMenuOpen(false);
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (href && href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

  return (
    <>
      <nav
        className={`fixed w-full z-30 top-0 left-0 transition-all duration-300 bg-gray-800 
        ${scrolled ? "shadow-lg" : "shadow-none"}`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo/Heading */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent tracking-tight drop-shadow hover:scale-110 transition-transform duration-300 cursor-pointer">
            PortFolio
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.name, link.href)}
                  className={`relative px-2 py-1 cursor-pointer font-semibold transition-colors duration-200
                    ${active === link.name
                      ? "text-emerald-700"
                      : "text-gray-300"}
                    group`}
                  style={{ letterSpacing: "0.5px" }}
                >
                  {link.name}
                  {/* Unique hover underline */}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded
                      bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400
                      transition-all duration-300
                      scale-x-0 group-hover:scale-x-100
                      origin-left
                      ${active === link.name ? "scale-x-100" : ""}
                    `}
                  ></span>
                </button>
              </li>
            ))}
          </ul>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-emerald-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-7 h-7 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
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
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-br from-white/95 via-emerald-50/90 to-sky-100/90 backdrop-blur-xl shadow transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-60 py-2" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.name, link.href)}
                  className={`block py-2 font-semibold transition-colors duration-200
                    ${active === link.name
                      ? "text-emerald-700"
                      : "text-slate-700"}
                    `}
                >
                  {link.name}
                </button>
              </li>
            ))}
            
          </ul>
        </div>
      </nav>
      {/* Extra spacing for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};