import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from './ProjectData';

const Projects = () => {
  // Duplicate data to fill the grid as requested
  const displayProjects = [...PROJECTS_DATA, ...PROJECTS_DATA];

  return (
    <section id="projects" className="relative z-20 py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase">Marketplace</span>
          <h2 className="text-5xl font-black text-white mt-2 uppercase tracking-tighter">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;