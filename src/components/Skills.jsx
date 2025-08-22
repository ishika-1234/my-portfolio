import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMysql,
  SiPython,
  SiDjango,
  SiGithub,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600 w-10 h-10" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-600 w-10 h-10" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 w-10 h-10" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-10 h-10" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-500 w-10 h-10" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 w-10 h-10" /> },
    { name: "Python", icon: <SiPython className="text-green-500 w-10 h-10" /> },
    { name: "Django", icon: <SiDjango className="text-gray-800 w-10 h-10" /> },
    { name: "GitHub", icon: <SiGithub className="text-black w-10 h-10" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      {/* 🔥 Heading same as About */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="mt-2 h-1 w-20 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            {skill.icon}
            <p className="mt-3 text-lg font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
