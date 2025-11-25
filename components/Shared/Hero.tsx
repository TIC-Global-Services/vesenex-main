import React from "react";
import { StaticImageData } from "next/image";

interface HeroVideoProps {
  webVideo: string | StaticImageData;
  mobileVideo: string | StaticImageData;
  title?: string;
  description?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({
  webVideo,
  mobileVideo,
  title,
  description,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Desktop Video */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={typeof webVideo === "string" ? webVideo : webVideo.src} type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={typeof mobileVideo === "string" ? mobileVideo : mobileVideo.src} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold">
          {title}
        </h1>

        {description && (
          <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroVideo;
