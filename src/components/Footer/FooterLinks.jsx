import React from 'react';
import { ChevronRight } from 'lucide-react';

const FooterLinks = () => {
  const links = ['Home', 'Services', 'Process', 'Contact'];
  return (
    <div>
      <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 opacity-50">Navigation</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-500 text-sm flex items-center gap-2 group transition-all">
              <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;