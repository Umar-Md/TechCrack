import React from 'react';
import { TECH_CATEGORIES } from './StackData';
import { TechCard, StackGroup } from './StackComponents';

const TechStackHeader = () => (
  <div className="mb-16">
    <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase">Core</span>
    <h2 className="text-5xl font-black text-white mt-2 uppercase tracking-tighter">
      Engineered <span className="text-cyan-500">Stack</span>
    </h2>
  </div>
);

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative z-20 py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <TechStackHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {TECH_CATEGORIES.map((category) => (
            <StackGroup key={category.title} title={category.title}>
              {category.items.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </StackGroup>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;