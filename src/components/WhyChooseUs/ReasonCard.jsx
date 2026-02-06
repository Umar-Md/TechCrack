import React from 'react';

export const ReasonCard = ({ title, desc, icon: Icon }) => (
  <div className="group p-8 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300">
    <div className="mb-5 inline-flex p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:scale-110 transition-transform">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);