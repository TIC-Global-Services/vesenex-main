"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpotlightReveal() {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const words = el.innerText.split(" ");
    el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");
    const spans = el.querySelectorAll(".word");

    gsap.set(spans, { opacity: 0.05, y: 20 });

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      ease: "cubic-bezier(0.4,0,0.2,1)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className=" bg-black">
      <section
        ref={sectionRef}
        className="
          relative 
          min-h-dvh 
          bg-black 
          flex flex-col items-center justify-center 
          text-center 
          overflow-hidden 
          px-4 sm:px-6 md:px-8
        "
      >
        {/* TEXT */}
        <div
          ref={textRef}
          className="
            relative 
            text-white 
            font-semibold 
            max-w-xl sm:max-w-2xl md:max-w-3xl 
            px-2 sm:px-4 md:px-6 
            leading-relaxed
            text-[clamp(1.1rem,3vw,2rem)]
            z-10
          "
        >
          At Vesenex, we help Australian businesses stay secure in a
          digital-first world. As a trusted MSSP, we deliver tailored cyber
          protection with 24/7 monitoring, threat detection, and rapid response
          powered by our expert SOC team and global best practices.
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative bg-black px-6 py-24 overflow-hidden md:h-screen flex flex-col items-center justify-center">

        <div className="relative z-10 md:min-w-5xl h-[70dvh] mx-auto text-center flex flex-col items-center justify-center">

          {/* Blue corner decorations */}

          {/* top-left */}
          <div className="absolute top-10 left-10 w-20 h-20 border-l-3 border-t-3 border-blue-500"></div>
          <div className="absolute top-14 left-14 w-16 h-16 border-l-2 border-t-2 border-blue-500"></div>

          {/* top-right */}
          <div className="absolute top-10 right-10 w-20 h-20 border-r-3 border-t-3 border-blue-500"></div>
          <div className="absolute top-14 right-14 w-16 h-16 border-r-2 border-t-2 border-blue-500"></div>

          {/* bottom-left */}
          <div className="absolute bottom-10 left-10 w-20 h-20 border-l-3 border-b-3 border-blue-500"></div>
          <div className="absolute bottom-14 left-14 w-16 h-16 border-l-2 border-b-2 border-blue-500"></div>

          {/* bottom-right */}
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r-3 border-b-3 border-blue-500"></div>
          <div className="absolute bottom-14 right-14 w-16 h-16 border-r-2 border-b-2 border-blue-500"></div>

          <p className="text-[#ACABB2] text-sm md:text-base tracking-wider uppercase">
            Founded by
          </p>

          <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            Naveen Kumar
          </h1>

          <p className=" max-w-2xl mx-auto text-[#ACABB2] text-base md:text-lg leading-relaxed px-4">
            A cybersecurity specialist with a master’s in cybersecurity, Vesenex
            is driven by a core belief that security must be proactive,
            measurable, and business-aligned. Every engagement is built for fast
            onboarding, measurable risk reduction, and transparent reporting —
            so you always know exactly how we’re protecting your business.
          </p>
        </div>
      </section>
    </div>
  );
}
