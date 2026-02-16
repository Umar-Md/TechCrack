import React from 'react';
import PdfStore from './PdfStore';

const Resources = () => {
  return (
    <div className="w-full bg-black py-20" id="resources">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Interview <span className="text-cyan-500">Resources</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Master your next technical interview with our curated guides.
          </p>
        </div>
        
        {/* This renders the grid of 4 PDFs */}
        <PdfStore />
      </div>
    </div>
  );
};

export default Resources;