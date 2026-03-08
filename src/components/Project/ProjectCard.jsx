import React, { useRef } from 'react';
import { Play } from 'lucide-react';

export const ProjectCard = ({ name, description, tech, videoUrl, imageUrl, previewText }) => {
  const videoRef = useRef(null);
  const hasVideo = Boolean(videoUrl);

  // Play video on hover, pause on leave
  const handleMouseEnter = () => {
    if (hasVideo) {
      videoRef.current?.play();
    }
  };
  const handleMouseLeave = () => {
    if (hasVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-cyan-500/50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Preview Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
        {hasVideo ? (
          <>
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
          </>
        ) : (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        )}
        <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-3 py-1 text-[11px] font-semibold text-cyan-300 backdrop-blur-sm">
          {previewText || name}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
