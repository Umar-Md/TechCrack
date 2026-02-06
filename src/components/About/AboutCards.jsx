import React from 'react';
import { motion } from 'framer-motion';

export const TechBadge = ({ name }) => (
  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
    {name}
  </span>
);

export const GlassSection = ({ children, title }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden"
  >
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[100px]" />
    {title && <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{title}</h3>}
    {children}
  </motion.div>
);