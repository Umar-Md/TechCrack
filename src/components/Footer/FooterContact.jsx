import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const FooterContact = () => (
  <div>
    <h4 className="text-white font-bold   text-[12px] mb-6 opacity-50">Connect</h4>
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <Mail className="text-cyan-500 shrink-0" size={18} />
        <div className="text-m">
          <p className="text-gray-500  text-[12px] font-bold ">Direct Email</p>
          <a href="mailto:contact@techcrack.com" className="text-gray-300 hover:text-cyan-400 transition-colors">contact@techcrack.com</a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Instagram className="text-cyan-500 shrink-0" size={18} />
        <div className="text-m">
          <p className="text-gray-500  text-[12px] font-bold ">Social Media</p>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">@techcrack_official</a>
        </div>
      </div>
    </div>
  </div>
);

export default FooterContact;