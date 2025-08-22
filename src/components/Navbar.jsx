import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center px-8 py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-opacity-90"
      }`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide">
        Ishika <span className="text-yellow-300">Gupta</span>
      </h1>

      {/* Menu Links */}
      <div className="space-x-6 text-lg font-medium">
        {["About", "Skills", "Education", "Internships", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white hover:text-yellow-300 transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          )
        )}
      </div>
    </nav>
  );
}
