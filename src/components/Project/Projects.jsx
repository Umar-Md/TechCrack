import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from './ProjectData';
import { ProjectsHeader } from './ProjectsHeader';

const Projects = () => {
  // Using spread to double data for display if list is short
  const displayProjects = [...PROJECTS_DATA, ...PROJECTS_DATA];

  return (
    <section id="projects" className="relative z-20 py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Unified Header with the Button */}
        <ProjectsHeader />

        {/* Project Grid */}
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