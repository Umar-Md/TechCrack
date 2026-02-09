import React from "react";
import ResumeHero from "./ResumeHero";
import ResumeScanner from "./ResumeScanner";

const ResumeAI = () => {
  const CHECKER_URL = "https://www.resumescorechecker.com";

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <ResumeHero />
        <ResumeScanner redirectUrl={CHECKER_URL} />
      </div>
    </div>
  );
};

export default ResumeAI;
