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
      
      {/* CLEAN OVERLAY: 
          Removed the 'inset-80' divs that created the dark center.
          This single line ensures the video is slightly dimmed globally for text contrast.
      */}
      <div className="absolute inset-0 bg-black/20" /> 
    </div>
  );
};

export default BackgroundVideo;