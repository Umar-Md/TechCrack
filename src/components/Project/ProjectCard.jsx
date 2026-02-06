import React, { useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';

export const ProjectCard = ({ name, description, tech, videoUrl, demoLink }) => {
  const videoRef = useRef(null);

  // Play video on hover, pause on leave
  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div 
      className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-cyan-500/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Preview Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
        <video 
          ref={videoRef}
          src={videoUrl}
          muted 
          loop 
          playsInline
          className="h-full w-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:hidden">
          <Play className="text-white/50" size={48} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
              {t}
            </span>
          ))}
        </div>

        <a 
          href={demoLink}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
        >
          View Demo <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};