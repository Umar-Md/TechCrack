import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SERVICES_LIST } from './ServiceData';

const ServicesHeader = () => (
  <div className="mb-16">
    <span className="text-cyan-500 font-mono text-sm tracking-[0.5em] uppercase">Capabilities</span>
    <h1 className="text-6xl font-black text-white mt-2 uppercase tracking-tighter">
      Our <span className="text-cyan-500">Services</span>
    </h1>
    <p className="text-gray-400 mt-4 max-w-xl">
      We provide end-to-end technical solutions designed to scale your startup from 0 to 1.
    </p>
  </div>
);

const Services = () => {
  return (
    <section className="relative z-20 min-h-screen bg-black pt-40 pb-24 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;