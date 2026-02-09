import React from 'react';
import { Upload, ExternalLink, Cpu, FileCheck, ShieldCheck } from 'lucide-react';

const ResumeScanner = () => {
  // Your requested link
  const TAILER_RESUME_URL = "https://tailerresume.com/";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative group">
        {/* Glow Effect behind the scanner */}
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative bg-[#050505] border-white/10 rounded-[3rem] p-12 md:p-20 flex flex-col items-center border-dashed border-2 group-hover:border-cyan-500/40 transition-all duration-500">
          
          <div className="w-20 h-20 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-500 mb-8 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <Cpu size={40} className="animate-pulse" />
          </div>

          <h3 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tighter text-center">
            Initialize <span className="text-cyan-500">ATS Scan</span>
          </h3>
          
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-12 text-center max-w-sm leading-loose">
            Upload your technical draft to TailerResume to identify architectural flaws in your profile.
          </p>

          <a 
            href={TAILER_RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-4 bg-cyan-500 text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-400 transition-all shadow-[0_10px_40px_rgba(6,182,212,0.2)] active:scale-95"
          >
            <Upload size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
            Check Score on TailerResume
            <ExternalLink size={16} />
          </a>

          {/* Verification Badges */}
          <div className="mt-16 pt-8 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-3 gap-6">
             <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
               <ShieldCheck size={14} className="text-cyan-500" /> Secure Link
             </div>
             <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
               <ShieldCheck size={14} className="text-cyan-500" /> AI Diagnostic
             </div>
             <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-gray-500 uppercase tracking-widest col-span-2 md:col-span-1">
               <ShieldCheck size={14} className="text-cyan-500" /> ATS Optimized
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScanner;