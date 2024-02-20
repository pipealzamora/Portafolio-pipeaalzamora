import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full justify-center flex flex-col md:flex-row gap-10 px-10 z-[50]">
        <a href="https://localhost/" >
          <ProjectCard
            src="/coming-soon.png"
            title="Electricautomaticchile"
            description="Automatización en electricidad"
          />
        </a>
        <a href="https://localhost/" >
          <ProjectCard
            src="/coming-soon.png"
            title="Fundación Alzamora"
            description="Sin fines de lucro"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
