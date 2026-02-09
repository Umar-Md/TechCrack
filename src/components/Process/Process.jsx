import React from 'react';
import { PROCESS_STEPS } from './ProcessData';
import { ProcessStep } from './ProcessStep';

const Process = () => {
  return (
    <section id="process" className="relative z-20 py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-cyan-500 font-mono text-xs  ">Workflow</span>
          <h2 className="text-5xl font-black text-white mt-4 ">
            Our <span className="text-cyan-500">Process</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.id} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;