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
      }
    });

    gsap.fromTo(".top-light", { opacity: 0, y: -80 }, {
      opacity: 0.6,
      y: 0,
      duration: 1.6,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });

    gsap.fromTo(".radial-light", { scale: 0.8, opacity: 0 }, {
      scale: 1,
      opacity: 0.7,
      duration: 1.5,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });

    gsap.to(".radial-light", {
      opacity: 0.55,
      scale: 1.03,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });

    gsap.to(".top-light", {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "cubic-bezier(0.4,0,0.2,1)",
    });
  }, []);

  return (
    <div className=" bg-black">
      <section
        ref={sectionRef}
        className="
          relative 
          min-h-[120vh] 
          bg-black 
          flex flex-col items-center justify-center 
          text-center 
          overflow-hidden 
          px-4 sm:px-6 md:px-8
        "
      >
        {/* TOP HORIZONTAL LIGHT (unchanged gradient) */}
        <div
          className="
            top-light absolute pointer-events-none
            top-0 left-1/2 -translate-x-1/2
            w-[80%] sm:w-[60%] md:w-[40%]
            h-[60vh] sm:h-[80vh] md:h-screen
            blur-2xl rounded-b-full
            bg-[linear-gradient(to_bottom,rgba(80,130,255,0.9)_0%,rgba(80,130,255,0.4)_40%,rgba(0,0,0,0)_100%)]
          "
        ></div>

        {/* BLUE CENTER GRADIENT (untouched) */}
        <div
          className="
            absolute inset-0 
            w-[80%] sm:w-[60%] md:w-1/2 mx-auto
            opacity-0 
            transition-opacity
            duration-700
            [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]
            bg-gradient-to-b 
            from-blue-800/40 via-blue-900/20 to-black
          "
        ></div>

        {/* RADIAL GLOW (unchanged gradient) */}
        <div
          className="
            radial-light absolute 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-[45%]
            opacity-70
            w-[700px] h-[700px]
            sm:w-[900px] sm:h-[900px]
            md:w-[1100px] md:h-[1100px]
            bg-[radial-gradient(circle,rgba(0,102,255,0.6)_0%,rgba(0,0,0,0)_70%)]
          "
        ></div>

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
      <section className="bg-black px-6 sm:px-10 md:px-16 py-20 ">
        <div className="min-h-[60vh] max-w-xl mx-auto text-center flex flex-col items-center justify-center space-y-4">
          <p className="text-[#ACABB2] text-sm sm:text-base">Founded by</p>

          <h1 className="text-white font-bold text-[clamp(2rem,6vw,3.2rem)]">
            Naveen Kumar
          </h1>

          <p className="text-[#ACABB2] text-sm sm:text-base leading-relaxed">
            A cybersecurity specialist with a master’s in cybersecurity, Vesenex
            is built on the belief that security must be proactive, measurable,
            and business-aligned…
          </p>
        </div>
      </section>
    </div>
  );
}
