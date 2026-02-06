import React from 'react';
import { motion } from 'framer-motion';

export const ServiceCard = ({ title, desc, icon: Icon, recommended }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-cyan-500/50 cursor-pointer"
  >
    {recommended && (
      <span className="absolute top-4 right-4 bg-cyan-500 text-black text-[9px] font-black uppercase px-2 py-1 rounded">
        Recommended
      </span>
    )}
    
    <div className="mb-6 inline-flex p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
      <Icon size={24} />
    </div>

    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);