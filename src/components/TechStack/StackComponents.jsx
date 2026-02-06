import React from 'react';
import { motion } from 'framer-motion';

// Function 1: A single Tech Card
export const TechCard = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-md transition-all"
  >
    <div className={`p-2 rounded-lg bg-black/40 ${color}`}>
      <Icon size={20} />
    </div>
    <span className="text-sm font-bold tracking-wide text-gray-200">{name}</span>
  </motion.div>
);

// Function 2: A Category Wrapper
export const StackGroup = ({ title, children }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-500/80">
        {title}
      </h3>
      <div className="h-px flex-1 bg-linear-to-r from-cyan-500/20 to-transparent" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {children}
    </div>
  </div>
);