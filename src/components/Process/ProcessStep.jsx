import React from 'react';
import { motion } from 'framer-motion';

export const ProcessStep = ({ id, title, desc, icon: Icon }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="group relative flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/2 transition-all hover:bg-white/5"
  >
    {/* Step Number Background */}
    <span className="absolute right-4 top-4 text-4xl font-black text-gray-600 group-hover:text-cyan-500/10 transition-colors">
      {id}
    </span>

    <div className="shrink-0 p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
      <Icon size={24} />
    </div>

    <div className="relative z-10">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{desc}</p>
    </div>
  </motion.div>
);