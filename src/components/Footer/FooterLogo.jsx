import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

const FooterLogo = () => (
  <div className="flex flex-col gap-4">
    <h2 className="text-2xl font-black text-white italic">
      Tech<span className="text-cyan-500">Crack.</span>
    </h2>
    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
      The future of digital development. High-performance apps for
      high-performance teams.
    </p>
    <div className="flex gap-4 mt-2">
      <a
        href="https://www.instagram.com/buildnscale.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Instagram
          className="text-gray-500 hover:text-cyan-500 cursor-pointer transition-colors"
          size={18}
        />
      </a>
    </div>
  </div>
);

export default FooterLogo;
