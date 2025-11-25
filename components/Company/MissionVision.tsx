"use client";

import Image from "next/image";
import React, { useState } from "react";
import { gsap } from "gsap";

const MissionVision = () => {
  const content = [
    {
      badge: "Our Mission",
      title: "Building Stronger, Safer Businesses in a AI-Digital World",
      desc: "We are working to make enterprise-grade cybersecurity accessible, practical, and scalable for Australian businesses. Vesenex’s playbook for change empowers them to operate with confidence in an Artificial Intelligence digital-first world.",
      img: "/images/company/mission.jpg",
    },
    {
      badge: "Our Vision",
      title: "Shaping a Future Where Breaches are Predicted, Prevented, and Mitigated",
      desc: "We are working to make enterprise-grade cybersecurity accessible, practical, and scalable for Australian businesses. Vesenex’s playbook for change empowers them to operate with confidence in an Artificial Intelligence digital-first world.",
      img: "/images/company/vision.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (index + 1) % content.length;
    animateChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 1 + content.length) % content.length;
    animateChange(newIndex);
  };

  const animateChange = (newIndex: number) => {
    gsap.fromTo(
      ".mv-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    setIndex(newIndex);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-20 py-20 px-5">
      {/* --- SECTION CONTENT --- */}
      <div className="flex flex-col lg:flex-row items-center justify-around w-full gap-10 mv-content">
        
        {/* --- LEFT TEXT --- */}
        <div className="max-w-xl space-y-6 text-center lg:text-left">
          <span className="px-3 py-2 rounded-md border border-gray-600">
            {content[index].badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold pt-4">
            {content[index].title}
          </h2>
          <p className="text-gray-600">{content[index].desc}</p>
        </div>

        {/* --- RIGHT IMAGE --- */}
        <div>
          <Image
            src={content[index].img}
            alt=""
            width={500}
            height={500}
            className="aspect-square rounded-lg object-cover w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>

      {/* --- ARROWS --- */}
      <div className="flex items-center space-x-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center  transition cursor-pointer"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition cursor-pointer"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default MissionVision;
