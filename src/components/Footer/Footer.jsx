import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="relative z-20 bg-black border-t border-white/10 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FooterLogo />
          <FooterLinks />
          <FooterContact />
          
          {/* Availability Card */}
          <div className="bg-white/3 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-500 text-xs font-mono uppercase tracking-widest">Available for hire</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Accepting project inquiries for 2026. Let's build something epic.
            </p>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;