import React from 'react';
import { REASONS } from './ReasonData';
import { ReasonCard } from './ReasonCard';

const WhyChooseHeader = () => (
  <div className="max-w-3xl mb-16">
    <span className="text-cyan-500 font-mono text-s ">The Edge</span>
    <h2 className="text-5xl font-black text-white mt-4  ">
      Why Partner With <span className="text-cyan-500">TechCrack?</span>
    </h2>
    <p className="text-gray-400 mt-6 text-lg font-light">
      We bridge the gap between complex engineering and aesthetic design, 
      delivering digital products that don't just work—they dominate.
    </p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="relative z-20 py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <WhyChooseHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.id} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 