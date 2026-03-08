import React from 'react';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from './ProjectData';
import { ProjectsHeader } from './ProjectsHeader';

const Projects = () => {
  return (
    <section id="projects" className="relative z-20 py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Unified Header with the Button */}
        <ProjectsHeader />

        {/* Project Carousel */}
        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROJECTS_DATA.map((project) => (
            <div key={project.id} className="min-w-[85%] snap-start md:min-w-[48%] lg:min-w-[38%]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
