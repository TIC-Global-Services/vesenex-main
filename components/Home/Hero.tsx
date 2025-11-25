"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstTextRef = useRef<HTMLDivElement | null>(null);
  const secondTextRef = useRef<HTMLDivElement | null>(null);

  const totalFrames = 150;
  const images: HTMLImageElement[] = [];

  const getFrame = (i: number) =>
    `/seq/vesenex/${String(i + 1).padStart(1, "1")}.webp`;

  const seq = { frame: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    contextRef.current = ctx;

    canvas.width = 1920;
    canvas.height = 1080;

    // Preload images
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrame(i);
      images.push(img);
    }

    const render = () => {
      const img = images[seq.frame];
      if (!img || !img.complete) return;

      const canvas = canvasRef.current;
      const context = contextRef.current;
      if (!canvas || !context) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      if (iw === 0 || ih === 0) return;

      const scale = Math.max(cw / iw, ch / ih);
      const x = cw / 2 - (iw * scale) / 2;
      const y = ch / 2 - (ih * scale) / 2;

      context.clearRect(0, 0, cw, ch);
      context.drawImage(img, 0, 0, iw, ih, x, y, iw * scale, ih * scale);
    };

    // Wait for first image then run GSAP
    images[0].onload = () => {
      render();

      // Reset text visibility
      gsap.set(firstTextRef.current, { opacity: 1, visibility: "visible" });
      gsap.set(secondTextRef.current, { opacity: 0, visibility: "hidden" });

      // UNIFIED TIMELINE (Canvas + Text)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
        },
      });

      // FRAME-BY-FRAME CANVAS ANIMATION
      tl.to(seq, {
        frame: totalFrames - 1,
        snap: "frame",
        ease: "none",
        onUpdate: render,
        duration: 1,
      });

      // TEXT SEQUENCE
      tl.to(
        firstTextRef.current,
        {
          opacity: 0,
          visibility: "hidden",
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.25 // starts early
      );

      tl.to(
        secondTextRef.current,
        {
          opacity: 1,
          visibility: "visible",
          duration: 0.6,
          ease: "power2.out",
        },
        ">-0.2" // overlap slight
      );
    };

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* FIRST TEXT */}
      <div
        ref={firstTextRef}
        className="absolute z-0 text-center text-white
        xl:text-[64px] lg:text-[60px] md:text-[40px] text-[30px]
        font-medium leading-[121%]
        left-1/2 top-[25%] -translate-x-1/2  w-full"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div className="text-primary">Engineering Resilient Security</div>
        <div className="md:mt-2 text-black">for a Safer Tomorrow</div>
      </div>

      {/* SECOND TEXT */}
      <div
        ref={secondTextRef}
        className="absolute z-20 text-center text-white
        xl:text-[80px] lg:text-[70px] md:text-[60px] text-[30px]
        font-medium lg:leading-[81px] whitespace-nowrap
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <div>
          Security that goes <br /> deeper than you think
        </div>
      </div>
    </section>
  );
};

export default Hero;
