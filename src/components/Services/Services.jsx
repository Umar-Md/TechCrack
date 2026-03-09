import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SERVICES_LIST } from './ServiceData';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ServicesHeader = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-6">

      {/* LEFT SIDE */}
      <div>
        <span className="text-cyan-500 font-mono text-sm">
          Capabilities
        </span>

        <h1 className="text-5xl md:text-6xl font-black text-white mt-2">
          Our <span className="text-cyan-500">Services</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl">
          We help students with academic projects and help businesses build scalable modern applications.
        </p>
      </div>


      {/* RIGHT SIDE CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleContactClick}
        className="
          h-fit
          px-6 py-3
          rounded-xl
          border border-cyan-500
          text-cyan-400
          font-semibold
          hover:bg-cyan-500
          hover:text-black
          transition-all
          duration-300
        "
      >
        Discuss Your Requirement {"\u2192"}
      </motion.button>

    </div>
  );
};


const Services = () => {
  return (
    <section className="relative z-20 min-h-screen bg-black pt-40 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        <ServicesHeader />

        {/* SERVICES GRID */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">
          {SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default Services;

