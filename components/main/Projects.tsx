import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis Proyectos
      </h1>
      <div className="h-full w-full justify-center flex flex-col md:flex-row gap-10 px-10 z-[50]">
        <a href="https://electricautomaticchile.com" >
          <ProjectCard
            src=""
            title="Electricautomaticchile"
            description="Automatización en electricidad"
          />
        </a>
        <a href="https://fundacionalzamora.org" >
          <ProjectCard
            src=""
            title="Fundación Alzamora"
            description="Sin fines de lucros y ayuda a la comunidad"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
