import React from 'react';
import ResumeHero from './ResumeHero';
import ResumeScanner from './ResumeScanner';

const ResumeAI = () => {
  const CHECKER_URL = "https://www.resumescorechecker.com";

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ResumeHero />
        <ResumeScanner redirectUrl={CHECKER_URL} />
        
        {/* Subtle Footer Note */}
        <p className="mt-12 text-center text-[9px] text-gray-700 uppercase tracking-[0.5em]">
          Powered by TechCrack Engineering Diagnostics
        </p>
      </div>
    </div>
  );
};

export default ResumeAI;