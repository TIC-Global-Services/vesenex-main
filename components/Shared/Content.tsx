"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface ContentProps {
  text: string;
}

const Content: React.FC<ContentProps> = ({ text }) => {
  const containerRef = useRef(null);
  const blackPanelRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    // Initial states
    gsap.set(blackPanelRef.current, { scaleX: 1 });
    gsap.set(textRef.current, { scale: 1 });
    gsap.set(linkRef.current, { opacity: 0, y: 40 });

    // Black panel reveal
    tl.to(
      blackPanelRef.current,
      {
        scaleX: 0,
        transformOrigin: "center center",
        ease: "power2.inOut",
        duration: 1,
      },
      0.2
    );

    // Text scaling effect
    tl.to(
      textRef.current,
      {
        scale: 1.2,
        ease: "power2.inOut",
        duration: 2,
      },
      0
    );

    // Button fade-in
    tl.to(
      linkRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      1.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Black Panel */}
      <div
        ref={blackPanelRef}
        className="absolute top-0 left-0 w-full h-full bg-black z-20"
      />

      {/* Text */}
      <h1
        ref={textRef}
        className="
          relative text-md md:text-3xl max-w-lg md:max-w-4xl  font-semibold z-30 
          mt-10 text-center px-10
          mix-blend-difference
          text-white
        "
      >
        {text}
      </h1>

      {/* Contact Button */}
      <Link
        ref={linkRef}
        href="/contact"
        className="bg-primary text-white px-5 py-3 rounded-full z-30 mt-10"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default Content;
