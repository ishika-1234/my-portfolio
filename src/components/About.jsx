import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* ✅ Image Fix */}
          <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8">
            <img
              src="/my-pic.png"
              alt="Ishika Gupta"
              className="w-full h-full object-cover object-center rounded-full shadow-lg"
            />

          </div>

          {/* About Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg leading-relaxed mb-4">
              Hi, I’m <span className="font-semibold">Ishika Gupta</span>,
              a passionate Full Stack Developer with expertise in{" "}
              <span className="font-semibold">
                HTML, CSS, Bootstrap, JavaScript, React.js, Python & Django
              </span>
              . I love creating modern, responsive, and user-friendly websites.
            </p>
            <p className="text-lg leading-relaxed">
              I have completed my <span className="font-semibold">BCA</span> and{" "}
              <span className="font-semibold">MCA</span>, along with internships
              in Python and Django. Currently, I am exploring{" "}
              <span className="font-semibold">Full Stack Development</span> to
              build scalable and innovative applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
