"use client";
import React from "react";

const VideoHeader: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full"
            src="https://www.youtube.com/embed/FzyyeYax6X4?autoplay=1&mute=1&loop=1&playlist=FzyyeYax6X4&controls=0&showinfo=0&rel=0&enablejsapi=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

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
