import React from 'react';

const FooterBottom = () => (
  <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-gray-600 text-[12px] ">
      © {new Date().getFullYear()} TechCrack Solutions.
    </p>
    <div className="flex gap-8">
      <a href="#" className="text-gray-600 hover:text-white text-[12px] transition-colors">Privacy</a>
      <a href="#" className="text-gray-600 hover:text-white text-[12px] transition-colors">Terms</a>
    </div>
  </div>
);

export default FooterBottom;