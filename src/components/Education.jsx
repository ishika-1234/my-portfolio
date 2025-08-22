import React from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "MCA",
      institution: "APJ Abdul Kalam Technical University",
      year: "2023 – 2025",
    },
    {
      degree: "BCA",
      institution: "Chaudhary Charan Singh University (CCSU)",
      year: "2020 – 2023",
    },
    {
      degree: "10th & 12th",
      institution: "BK Maheshwari Girls Intercollege",
      year: "2018 – 2020",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-100">
      {/* 🔥 Heading styled like About Me */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Education
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded"></div>
        <p className="text-gray-600 mt-3">My Academic Journey & Achievements</p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-pink-400"></div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-[46%] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-pink-500 w-6 h-6" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                <p className="text-gray-700 mt-2">{edu.institution}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.year}</p>
              </div>

              {/* Circle in center */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 border-4 border-white rounded-full shadow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
