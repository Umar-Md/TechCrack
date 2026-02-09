import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  Terminal,
  Rocket,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const ProjectVault = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase">
            TechCrack Repository
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white mt-6 uppercase tracking-tighter italic">
            The <span className="text-cyan-500">Vault.</span>
          </h1>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto font-medium text-sm leading-relaxed uppercase tracking-widest">
            Our full inventory of source code is private. Explore our project
            categories below and contact us to view specific demos or purchase
            access.
          </p>
        </div>

        {/* The Two Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* CATEGORY 1: MINI PROJECTS */}
          <div className="relative group bg-[#050505] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Terminal size={120} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-8">
                <Terminal size={32} />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic mb-2">
                Mini Projects
              </h3>
              <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                Essential Tier
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Focused on single-core functionalities and lightweight logic.
                These are high-quality, clean-code foundations designed for
                academic submissions, API testing, or micro-utility tools.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Single API Integration",
                  "Frontend Focused",
                  "Basic Logic Flow",
                  "Academic Documentation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-500 text-[11px] font-bold uppercase tracking-wider"
                  >
                    <ShieldCheck size={14} className="text-cyan-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CATEGORY 2: MAJOR PROJECTS */}
          <div className="relative group bg-[#050505] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Rocket size={120} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-8">
                <Rocket size={32} />
              </div>
              <h3 className="text-3xl font-black text-white uppercase italic mb-2">
                Major Projects
              </h3>
              <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                Enterprise Tier
              </p>

              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Full-stack industrial applications. These ecosystems include
                advanced security, multi-user role management, database
                normalization, and administrative control panels. Ready for
                final-year projects or business ventures.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "Full-Stack (MERN/PERN)",
                  "Admin Control Panels",
                  "Secure User Auth",
                  "Database Schema Design",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-500 text-[11px] font-bold uppercase tracking-wider"
                  >
                    <ShieldCheck size={14} className="text-cyan-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Call to Action */}
        <div className="text-center bg-cyan-500/5 border border-cyan-500/10 p-12 rounded-[3rem] backdrop-blur-sm">
          <h2 className="text-3xl font-black text-white uppercase italic mb-4">
            Ready to Explore?
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto">
            Contact us via WhatsApp or Email to request the live catalog, view
            project demos, or inquire about pricing for source code access.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="group flex items-center gap-4 bg-cyan-500 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <MessageSquare size={18} />
              Contact for Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVault;