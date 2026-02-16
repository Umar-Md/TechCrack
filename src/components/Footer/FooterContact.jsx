import React from 'react';
import { Mail, InstagramIcon } from 'lucide-react';

const FooterContact = () => (
  <div>
    <h4 className="text-white font-bold text-[12px] mb-6 opacity-50">Connect</h4>
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <Mail className="text-cyan-500 shrink-0" size={18} />
        <div className="text-m">
          <p className="text-gray-500 text-[12px] font-bold ">Direct Email</p>
          <a href="mailto:buildscaletechnology@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">buildscaletechnology@gmail.com</a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        {/* Changed from Instagram to InstagramIcon to match your import */}
        <InstagramIcon className="text-cyan-500 shrink-0" size={18} />
        <div className="text-m">
          <p className="text-gray-500 text-[12px] font-bold ">Social Media</p>
          <a 
            href="https://www.instagram.com/buildnscale.tech/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            @techcrack_official
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default FooterContact;