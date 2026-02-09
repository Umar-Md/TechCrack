import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import the hook

export const ProjectsHeader = () => {
  const navigate = useNavigate(); // 2. Initialize navigation

  return (
    <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex-1">
        <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase">
          Marketplace
        </span>
        <h2 className="text-5xl font-black text-white mt-2 uppercase tracking-tighter">
          Featured <span className="text-cyan-500">Projects</span>
        </h2>
      </div>

      <button 
        // 3. Set the destination path
        onClick={() => navigate('/projectshowcase')} 
        className="group flex items-center gap-3 bg-cyan-500 text-black px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:bg-cyan-400 active:scale-95"
      >
        <ShoppingBag size={18} />
        Browse Project Store
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};