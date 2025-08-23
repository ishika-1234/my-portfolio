import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden py-24 px-6 bg-gradient-to-b from-white via-fuchsia-50 to-purple-50"
    >
      {/* soft blobs in background */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl animate-pulse" />

      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
            <span className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
        </div>

        {/* main card */}
        <div className="grid items-center gap-10 rounded-3xl border border-white/60 bg-white/70 p-10 shadow-2xl backdrop-blur-md ring-1 ring-black/5 md:grid-cols-[320px,1fr] transition hover:shadow-purple-200/70">

          {/* avatar + animated border ring */}
          <div className="mx-auto md:mx-0">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-fuchsia-400 via-purple-400 to-indigo-400 opacity-30 blur-xl" />
              <div className="relative h-48 w-48 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <img
                    src="/my-pic.png"
                    alt="Ishika Gupta"
                    className="w-full h-full object-cover object-center"
                  />

                </div>
              </div>
            </div>
          </div>

          {/* text + chips */}
          <div>
            <p className="text-lg leading-relaxed text-gray-700">
              Hey! <span className="text-2xl">👋</span> I’m{" "}
              <span className="font-semibold text-fuchsia-600">Ishika Gupta</span> — a{" "}
              <span className="font-semibold text-indigo-600">
                Frontend & Full-stack Developer
              </span>{" "}
              from Ghaziabad. I recently completed my MCA and am passionate about building{" "}
              <span className="font-medium text-purple-700">
                responsive, user-friendly, and modern web applications
              </span>. I enjoy learning new technologies, solving problems, and turning ideas into real projects.
            </p>

            {/* skill chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap",
                "React.js",
                "MySQL",
                "Python",
                "Django",
                "GitHub",
                "VS Code",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-purple-50 px-4 py-1.5 text-sm text-fuchsia-700 hover:scale-105 hover:shadow-md transition"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* highlights / focus areas */}
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-5 shadow hover:shadow-lg transition ring-1 ring-gray-200">
                <div className="text-3xl">🚀</div>
                <p className="mt-2 font-semibold text-gray-800">Learning & Growth</p>
                <p className="text-sm text-gray-600">Always exploring new technologies & improving skills</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-5 shadow hover:shadow-lg transition ring-1 ring-gray-200">
                <div className="text-3xl">🎨</div>
                <p className="mt-2 font-semibold text-gray-800">Creative UI</p>
                <p className="text-sm text-gray-600">Designing clean, modern, and user-friendly interfaces</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 p-5 shadow hover:shadow-lg transition ring-1 ring-gray-200">
                <div className="text-3xl">🤝</div>
                <p className="mt-2 font-semibold text-gray-800">Collaboration</p>
                <p className="text-sm text-gray-600">Enjoy working in teams and sharing knowledge</p>
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/ishika-gupta-b6a7b9211/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg hover:scale-105 hover:shadow-purple-300/60 transition"
              >
                Connect on LinkedIn
                <span>↗</span>
              </a>
              <a
                href="mailto:logicalishika@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-800 shadow hover:bg-gray-50 hover:scale-105 transition"
              >
                Say Hello ✉️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
