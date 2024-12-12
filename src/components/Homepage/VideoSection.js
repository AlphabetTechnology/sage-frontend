"use client";
import React, { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#video-section");
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + sectionHeight;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        const progress = (scrollPosition - sectionTop) / sectionHeight;
        const newWidth = 80 + 20 * (1 - progress); // Calculate width from progress
        setWidth(newWidth);
      } else if (scrollPosition > sectionBottom) {
        setWidth(80); // Fix width at 80% after leaving the section
      } else if (scrollPosition < sectionTop) {
        setWidth(100); // Reset width to 100% before entering the section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div
      id="video-section"
      className="w-full h-screen transition-all duration-300 ease-out" // Smooth transitions
      style={{ width: `${width}%` }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        autoPlay
        loop
        muted
      >
        <source src="/homepageDental.mp4" alt="video" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
