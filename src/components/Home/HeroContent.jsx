import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Branding = () => (
  <header>
    <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl uppercase">
      Tech<span className="text-cyan-500">Crack</span>
    </h1>
    <p className="mt-4 text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase md:text-lg">
      Cracking the Code of the Future
    </p>
  </header>
);

const Description = () => (
  <p className="mx-auto mt-6 max-w-xl text-base text-gray-300 md:text-lg leading-relaxed font-light">
    Empowering startups with high-performance Fullstack Development, 
    Technical SEO, and a marketplace for elite-tier coding projects.
  </p>
);

const Actions = () => (
  <div className="mt-10 flex justify-center">
    <Link to="/services">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#b3cfe5", color: "#000000" }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-3 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-8 py-4 text-xs font-black uppercase tracking-widest text-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]"
      >
        View Capabilities
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </Link>
  </div>
);

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-20"
    >
      <Branding />
      <Description />
      <Actions />
    </motion.div>
  );
};

export default HeroContent;