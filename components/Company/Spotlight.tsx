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

    /* --- WORD SPLIT --- */
    const words = el.innerText.split(" ");
    el.innerHTML = words.map((w) => `<span class="word">${w}</span>`).join(" ");
    const spans = el.querySelectorAll(".word");

    gsap.set(spans, { opacity: 0.05, y: 20 });

    /* --- TEXT REVEAL ANIMATION --- */
    gsap.to(spans, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,
        pin: true,
      },
    });

    /* ---------------------------------------- */
    /*   EXTRA LIGHT ANIMATIONS (NO UI CHANGES) */
    /* ---------------------------------------- */

    /* --- TOP TUBE LIGHT DROP + Fade --- */
    gsap.fromTo(
      ".top-light",
      { opacity: 0, y: -80 },
      {
        opacity: 0.6,
        y: 0,
        duration: 1.6,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      }
    );

    /* --- RADIAL FLOOR GLOW SCALE-UP --- */
    gsap.fromTo(
      ".radial-light",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 0.7,
        duration: 1.5,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      }
    );

    /* --- SUBTLE BREATHING EFFECT --- */
    gsap.to(".radial-light", {
      opacity: 0.55,
      scale: 1.03,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    });

    /* --- Gentle vertical motion for realism --- */
    gsap.to(".top-light", {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[120dvh] bg-black flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* --- TOP HORIZONTAL LIGHT --- */}
        <div
          className="top-light pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-screen 
       bg-[linear-gradient(to_bottom,rgba(80,130,255,0.9)_0%,rgba(80,130,255,0.4)_40%,rgba(0,0,0,0)_100%)]
       blur-2xl rounded-b-full opacity-60"
        ></div>

        {/* --- CENTER BLUE FADE AREA --- */}
        <div
          className="bg absolute w-1/2 mx-auto inset-0 
          bg-gradient-to-b from-blue-800/40 via-blue-900/20 to-black
          transition-opacity duration-700 
          [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] 
          opacity-0"
        ></div>

        {/* --- RADIAL BOTTOM GLOW --- */}
        <div className="radial-light bg-[radial-gradient(circle,rgba(0,102,255,0.6)_0%,rgba(0,0,0,0)_70%)] absolute top-1/2 -translate-y-[45%]  left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-70"></div>

        {/* --- TEXT --- */}
        <div
          ref={textRef}
          className="relative text-4xl font-semibold leading-relaxed text-white max-w-3xl px-10 z-10"
        >
          At Vesenex, we help Australian businesses stay secure in a
          digital-first world. As a trusted MSSP, we deliver tailored cyber
          protection with 24/7 monitoring, threat detection, and rapid response
          powered by our expert SOC team and global best practices.
        </div>
      </section>

      <section className=" bg-black">
        <div className=" min-h-screen flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-2 ">
          <p className=" text-[#ACABB2]">Founded by</p>
          <h1 className=" text-5xl font-bold text-white">Naveen Kumar</h1>
          <p className=" text-[#ACABB2]">
            A cybersecurity specialist with a master’s in cybersecurity, Vesenex
            is driven by a core belief that security must be proactive,
            measurable, and business-aligned. Every engagement is built for fast
            onboarding, measurable risk reduction, and transparent reporting – so
            you always know exactly how we’re protecting your business.
          </p>
        </div>
      </section>
    </>
  );
}
