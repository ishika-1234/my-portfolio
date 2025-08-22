import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Internships from "./components/Internships"; // ✅ Added
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Internships /> {/* ✅ Added */}
      <Contact />
    </div>
  );
}

export default App;
