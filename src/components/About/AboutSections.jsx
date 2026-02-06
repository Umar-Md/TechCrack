import React from 'react';
import { TechBadge } from './AboutCards';

export const WhoWeAreContent = () => (
  <div className="space-y-4">
    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
      Who We <span className="text-cyan-500">Are</span>
    </h2>
    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
      TechCrack is a forward-thinking digital collective dedicated to 
      building high-performance web ecosystems. We blend aesthetic 3D 
      interfaces with robust full-stack architectures to help startups 
      crack the code of modern digital presence.
    </p>
  </div>
);

export const TechGrid = () => {
  const techs = ["React", "Three.js", "Vite", "Tailwind", "Node.js", "Framer Motion", "PostgreSQL", "Python"];
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {techs.map((t) => (
        <TechBadge key={t} name={t} />
      ))}
    </div>
  );
};