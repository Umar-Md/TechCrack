import React from 'react';
import GlassCard from './GlassCard';
import { ArrowUpRight, Zap } from 'lucide-react';

const ProjectCard = ({ title, price, type, tech }) => {
  const isMajor = type === "Major";

  return (
    <GlassCard className="group transition-all hover:border-cyan-500/50 hover:shadow-cyan-500/10">
      <div className="flex justify-between items-start mb-4">
        <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-tighter ${isMajor ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
          <Zap size={10} /> {type} Project
        </span>
        <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">Premium source code with full documentation and setup guide.</p>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase text-gray-500 font-bold">Price</p>
          <p className="text-xl font-black text-white">{price}</p>
        </div>
        <button className="rounded-lg bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-all">
          Details
        </button>
      </div>

      {/* Tech Badges */}
      <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
        {tech.map((t) => (
          <span key={t} className="text-[9px] font-mono text-gray-400">{t}</span>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;