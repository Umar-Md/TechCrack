import React from 'react';
import bgVideo from '../../assets/videos/bgvid.mp4';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="h-full w-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      
      {/* Visual Overlay to ensure text pops */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      <div className="absolute inset-0 bg-black/20" /> 
    </div>
  );
};

export default BackgroundVideo;