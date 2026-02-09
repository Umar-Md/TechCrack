import React from 'react';
import { MousePointer2 } from 'lucide-react';

const ResumeHero = () => {
  return (
    <div className="text-center mb-24">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        <span className="text-[10px] text-cyan-500 font-mono uppercase tracking-[0.2em]">System Status: Online</span>
      </div>
      
      <h1 className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
        ATS <span className="text-cyan-500">CRACKER.</span>
      </h1>
      
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <p className="max-w-md text-gray-500 text-xs leading-loose uppercase tracking-[0.15em] text-center md:text-left">
          Your resume is a piece of <span className="text-white font-bold">Technical Documentation.</span> 
          If the schema is wrong, the recruiter's system won't compile your profile.
        </p>
        <div className="h-px w-12 bg-white/20 hidden md:block"></div>
        <p className="max-w-md text-gray-500 text-xs leading-loose uppercase tracking-[0.15em] text-center md:text-right">
          We use AI diagnostics to ensure your <span className="text-white font-bold">Major Projects</span> 
          are indexed correctly for high-tier engineering roles.
        </p>
      </div>
    </div>
  );
};

export default ResumeHero;