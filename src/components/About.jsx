import React from "react";

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "Express.js",
    "React.js",
    "PHP",
    "Laravel",
    "Codeigniter",
    "GIT & GitHub",
    "REST APIs",
    "Database MySQL",
  ];

  return (
    <section id="about" className="min-h-screen py-10 bg-section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="pt-20 mb-4 text-3xl font-bold text-ink">About Me</h2>
        <span className="block w-16 h-1 mx-auto mb-4 bg-ink"></span>
        <p className="text-ink/70">
          I'm a web developer passionate about crafting beautiful and functional
          digital experiences. My focus is on creating responsive,
          high-performance, and user-friendly web applications that make a real
          impact.
        </p>
      </div>

      <div className="max-w-6xl px-4 py-20 mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink">Get to know me</h3>

            <p className="mb-4 leading-relaxed text-ink/80 max-w-prose">
              I'm a <strong>focused web developer</strong> who builds
              responsive, performant, and user-friendly web applications. I
              enjoy collaborating with designers and backend engineers to ship
              polished, production-ready features. See some examples in the{" "}
              <a href="#projects" className="underline text-primary">
                Projects
              </a>{" "}
              section.
            </p>

            <p className="mb-6 leading-relaxed text-ink/80 max-w-prose">
              I also share practical tips and tutorials about modern web
              development to help the developer community. Connect with me on{" "}
              <a href="https://www.linkedin.com/in/muhammad-rifki-firansah-670109249" className="underline text-primary">
                LinkedIn
              </a>{" "}
              or follow on{" "}
              <a href="https://www.instagram.com/505mrifkif.nt/" className="underline text-primary">
                Instagram
              </a>
              .
            </p>

            <p className="mb-6 leading-relaxed text-ink/80 max-w-prose">
              I'm open to new opportunities, freelance work, and collaborations.
              If you have a project or role that matches my skills, I'd love to
              hear about it.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3 font-semibold tracking-wide text-white uppercase transition rounded-lg shadow-md bg-primary hover:bg-primary-dark"
              aria-label="Contact me"
            >
              Contact Me
            </a>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-ink">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium border-2 chip border-primary text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
