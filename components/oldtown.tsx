"use client";
import React, { useRef, useEffect } from "react";

const VideoHeader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4; // Set playback rate to 2x
    }
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/phuket.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6">
        <div className="text-white text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            PHUKET
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            We would like to present Phuket Tourism Data Dashboard for the
            public
          </p>

          {/* Button */}
          <button className="bg-orange-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl lg:text-2xl hover:bg-orange-600 transition duration-300">
            See it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
