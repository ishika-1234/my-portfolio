import React from "react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      
      {/* Floating Gradient Circles (Background Decoration) */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Content */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Hi, I'm <span className="text-yellow-300">Ishika Gupta</span> 👩‍💻
      </h1>
      
      <p className="text-lg md:text-2xl mb-6 max-w-2xl animate-fadeIn">
        A passionate <span className="font-semibold text-yellow-200">Frontend & Fullstack Developer</span>  
       &nbsp; specialized in <span className="text-yellow-300">React, Django, and Python</span>.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/ishika-gupta-b6a7b9211/"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/ishika-1234"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition transform hover:scale-105"
        >
          🌟 GitHub
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 animate-bounce">
        <span className="text-sm tracking-widest">Scroll Down ⬇️</span>
      </div>
    </section>
  );
}
