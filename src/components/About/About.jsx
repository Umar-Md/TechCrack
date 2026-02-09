import React from 'react';
import { WhoWeAreContent, TechGrid } from './AboutSections';
import { GlassSection } from './AboutCards';

const AboutPageHeader = () => (
  <div className="mb-16">
    <span className="text-cyan-500 font-mono text-m ">Discovery</span>
    <h1 className="text-6xl font-black text-white mt-2 ">Our Story</h1>
  </div>
);

const About = () => {
  return (
    <section className="relative z-20 min-h-screen bg-black pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <AboutPageHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <WhoWeAreContent />
          <GlassSection title="Technologies We Use">
            <TechGrid />
          </GlassSection>
        </div>
      </div>
    </section>
  );
};

export default About;