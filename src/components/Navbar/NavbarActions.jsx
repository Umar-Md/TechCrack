import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const NavLogo = () => (
  <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter text-white">
    <div className="h-9 w-9 bg-cyan-500 rounded-xl flex items-center justify-center">
      <Rocket size={20} className="text-black" />
    </div>
    <span>TECH<span className="text-cyan-500">CRACK</span></span>
  </Link>
);

export const HireButton = () => (
  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-transparent text-white px-7 py-2.5 rounded-full text-[14px] font-black hover:bg-cyan-600 transition-all shadow-[0_0_20px_rgba(6,182,212,0.8)]"
    >
      Contact Us
    </motion.button>
  </Link>
);