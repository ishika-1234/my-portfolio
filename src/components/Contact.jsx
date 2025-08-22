import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* 🔥 Heading like About/Education */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Contact Me
        </h2>
        <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded"></div>
        <p className="text-gray-400 mt-3">Let’s connect and build something amazing!</p>
      </div>

      {/* Contact Card */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12">
        <div className="space-y-6 text-center">
          {/* Email */}
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-purple-400" />
            <a
              href="mailto:logicalishika@gmail.com"
              className="text-lg text-purple-300 hover:underline"
            >
              logicalishika@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone className="w-6 h-6 text-purple-400" />
            <span className="text-lg text-purple-300">+91 7417449691</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-6 h-6 text-purple-400" />
            <span className="text-lg text-purple-300">Ghaziabad, India</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition"
            >
              <Linkedin className="w-6 h-6 text-purple-300" />
            </a>
            <a
              href="https://github.com/ishika-1234"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition"
            >
              <Github className="w-6 h-6 text-purple-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
