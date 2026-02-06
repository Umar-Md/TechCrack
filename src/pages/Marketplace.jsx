import React from 'react';
import ProjectCard from '../components/ui/ProjectCard';
import { motion } from 'framer-motion';

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-black pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white">TECH <span className="text-cyan-500">VAULT</span></h1>
          <p className="text-gray-500 mt-2">Premium source code for developers and startups.</p>
        </header>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {projects.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard 
                title={item.title}
                price={item.price}
                type={item.type}
                tech={item.tech}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;