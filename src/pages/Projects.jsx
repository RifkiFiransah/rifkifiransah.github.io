import React from "react";
import { experience } from "../data/experience";
import ProjectCard from "../components/ProjectCard";
// import bgPattern from "../assets/common-bg.svg"; 
export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative min-h-screen pt-5 pb-10 bg-section"
      // style={{
      //   backgroundImage: `url(${bgPattern})`,
      //   backgroundRepeat: "repeat",
      //   backgroundSize: "540px 450px", 
      //   backgroundPosition: "center top",
      //   backgroundBlendMode: "normal",
      // }}
    >
      {/* overlay untuk mengatur opacity background */}
      <div 
        className="absolute inset-0 pointer-events-none bg-surface/80"
      />

      {/* header */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto mb-10 text-center">
        <h2 className="pt-20 mb-4 text-3xl font-bold text-ink">Projects</h2>
        <span className="block w-16 h-1 mx-auto mb-4 bg-ink"></span>
        <p className="text-ink/70">
          Here are some of the projects I've worked on recently. Click on any project to learn more about it.
        </p>
      </div>

      {/* project grid */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((exp, index) => (
            <ProjectCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}