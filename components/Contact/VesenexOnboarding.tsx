"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

const VesenexOnboarding = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const step1 = useRef<HTMLDivElement>(null);
  const step2 = useRef<HTMLDivElement>(null);
  const step3 = useRef<HTMLDivElement>(null);
  const step4 = useRef<HTMLDivElement>(null);

  const [paths, setPaths] = useState({ p1: "", p2: "", p3: "" });

  const calculatePaths = () => {
    if (!svgRef.current) return;

    const svgBox = svgRef.current.getBoundingClientRect();

    const getPos = (el: HTMLDivElement | null) => {
      if (!el) return { x: 0, y: 0 };
      const r = el.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - svgBox.left,
        y: r.top + r.height / 2 - svgBox.top,
      };
    };

    const c1 = getPos(step1.current);
    const c2 = getPos(step2.current);
    const c3 = getPos(step3.current);
    const c4 = getPos(step4.current);

    const p1 = `M ${c1.x} ${c1.y} L ${c2.x} ${c1.y} L ${c2.x} ${c2.y}`;
    const p2 = `M ${c2.x} ${c2.y} L ${c3.x} ${c2.y} L ${c3.x} ${c3.y}`;
    const p3 = `M ${c3.x} ${c3.y} L ${c4.x} ${c3.y} L ${c4.x} ${c4.y}`;

    setPaths({ p1, p2, p3 });
  };

  useEffect(() => {
    calculatePaths();
    window.addEventListener("resize", calculatePaths);
    return () => window.removeEventListener("resize", calculatePaths);
  }, []);

  // Animate ONLY when visible
  useEffect(() => {
    if (!svgRef.current || !sectionRef.current) return;

    const allPaths = svgRef.current.querySelectorAll("path");

    gsap.set(allPaths, { drawSVG: "0%" });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80%", // when 80% of screen reached
      once: true, // animation runs only once
      onEnter: () => {
        gsap.to(allPaths, {
          drawSVG: "100%",
          duration: 1.6,
          stagger: 0.25,
          ease: "power2.inOut",
        });
      },
    });
  }, [paths]);
  return (
    <div
      ref={sectionRef}
      className="relative min-h-[60dvh] flex flex-col items-center justify-center py-20 px-6"
    >
      <h1 className="font-medium text-3xl md:text-5xl text-center">
        Vesenex 4 steps onboarding approach:
      </h1>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 py-10 md:py-20 justify-items-center w-full md:px-10">
        <div
          ref={step1}
          className="max-w-xs bg-[#EDECEE] rounded-lg p-4 shadow-[inset_0_4px_8px_rgba(109,109,113,0.25)] md:h-1/2 z-20"
        >
          <h1 className="text-2xl font-medium">
            <span className="text-primary">Step 1</span> – Lock In Your Details
          </h1>
          <p className="text-gray-700">Fill the quick form...</p>
        </div>

        <div
          ref={step2}
          className="max-w-xs bg-[#EDECEE] rounded-lg p-4 shadow-[inset_0_4px_8px_rgba(109,109,113,0.25)] md:mt-40 md:h-1/2 z-20"
        >
          <h1 className="text-2xl font-medium">
            <span className="text-primary">Step 2</span> – Threat-Free Kickoff
            Call
          </h1>
          <p className="text-gray-700">We connect...</p>
        </div>

        <div
          ref={step3}
          className="max-w-xs bg-[#EDECEE] rounded-lg p-4 shadow-[inset_0_4px_8px_rgba(109,109,113,0.25)] md:h-1/2 z-20"
        >
          <h1 className="text-2xl font-medium">
            <span className="text-primary">Step 3</span> – Your Defence
            Blueprint
          </h1>
          <p className="text-gray-700">We craft...</p>
        </div>

        <div
          ref={step4}
          className="max-w-xs bg-[#EDECEE] rounded-lg p-4 shadow-[inset_0_4px_8px_rgba(109,109,113,0.25)] md:mt-40 md:h-1/2 z-20"
        >
          <h1 className="text-2xl font-medium">
            <span className="text-primary">Step 4</span> – Always-On Protection
          </h1>
          <p className="text-gray-700">Monitoring...</p>
        </div>

        {/* SVG Connectors */}
        <svg
          ref={svgRef}
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        >
          <path d={paths.p1} />
          <path d={paths.p2} />
          <path d={paths.p3} />
        </svg>
      </div>
    </div>
  );
};

export default VesenexOnboarding;
