import React from "react";
import { Briefcase } from "lucide-react";

export default function Internships() {
  const internships = [
    {
      role: "Full Stack Trainee Intern",
      company: "Softpro India, Noida",
      duration: "Feb 2025 – Jun 2025",
      description:
        "Designed and developed the **NOU e-Gyan Portal** using Python Django. Implemented features like user authentication, course management, and dynamic dashboards."
    },
    {
      role: "Intern - Application Developer",
      company: "Universal Weather & Aviation, Gurugram",
      duration: "Jan 2023 – Jun 2023",
      description:
        "Worked on **Asset Management System**, assisting in development and optimization of internal applications for efficient asset tracking and reporting."
    }
  ];

  return (
    <section id="internships" className="py-20 px-6 bg-gray-50">
      {/* 🔥 Heading styled like About/Education */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Internships
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded"></div>
        <p className="text-gray-600 mt-3">Hands-on Experience & Industry Exposure</p>
      </div>

      {/* Internship Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {internships.map((intern, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Top section with icon */}
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-7 h-7 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-900">{intern.role}</h3>
            </div>

            <p className="text-gray-700 font-medium">{intern.company}</p>
            <p className="text-sm text-gray-500 italic">{intern.duration}</p>

            <p className="mt-4 text-gray-600 leading-relaxed">{intern.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
