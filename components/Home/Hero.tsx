"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);

  const totalFrames = 150;
  const getFramePath = (index: number) =>
    `/seq/iceberg/${String(index + 1).padStart(4, "0")}.webp`;

  useEffect(() => {
    // PREVENT BROWSER AUTO SCROLL RESTORATION (THIS IS CRITICAL)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas resolution
    canvas.width = 1920;
    canvas.height = 1080;

    const images: HTMLImageElement[] = [];
    const imageSeq: { frame: number } = { frame: 0 };
    let imagesLoaded = 0;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    // Draw current frame
    const drawFrame = (frame: number) => {
      const img = images[frame];
      if (!img?.complete || img.naturalWidth === 0) return;

      const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
      );
      const x = canvas.width / 2 - (img.naturalWidth * scale) / 2;
      const y = canvas.height / 2 - (img.naturalHeight * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        x,
        y,
        img.naturalWidth * scale,
        img.naturalHeight * scale
      );
    };

    // Main setup after all images loaded
    const initAnimation = () => {
      // Get saved scroll position
      const savedScroll = sessionStorage.getItem("heroScrollPos");
      const targetScroll = savedScroll ? parseInt(savedScroll, 10) : 0;

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${2160}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          onUpdate: (self) => {
            const frame = Math.min(
              totalFrames - 1,
              Math.floor(self.progress * totalFrames)
            );
            if (imageSeq.frame !== frame) {
              imageSeq.frame = frame;
              drawFrame(frame);
            }
          },
          onRefresh: (self) => {
            const frame = Math.min(
              totalFrames - 1,
              Math.floor(self.progress * totalFrames)
            );
            imageSeq.frame = frame;
            drawFrame(frame);
          },
        },
      });

      scrollTriggerInstance = tl.scrollTrigger!;

      // Animate frame sequence
      tl.to(imageSeq, {
        frame: totalFrames - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

      // Text fade out/in
      if (firstTextRef.current && secondTextRef.current) {
        tl.to(firstTextRef.current, { opacity: 0, duration: 0.2 }, 0.2);
        tl.to(secondTextRef.current, { opacity: 1, duration: 0.6 }, 0.35);
      }

      // Final refresh to ensure correct calculations
      ScrollTrigger.refresh();

      // Restore scroll position AFTER pinning is active
      if (targetScroll > 0) {
        setTimeout(() => {
          window.scrollTo(0, targetScroll);
          setTimeout(() => ScrollTrigger.refresh(), 150);
        }, 100);
      }
    };

    // Preload all images
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(i);

      img.onload = () => {
        images[i] = img;
        imagesLoaded++;

        // Show first frame immediately
        if (i === 0) drawFrame(0);

        // When all loaded → initialize animation
        if (imagesLoaded === totalFrames) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              initAnimation();
            });
          });
        }
      };

      img.onerror = () => {
        imagesLoaded++;
        console.warn(`Failed to load frame ${i + 1}`);
      };
    }

    // Save scroll position before leaving page
    const saveScrollPosition = () => {
      sessionStorage.setItem("heroScrollPos", String(window.scrollY));
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    // Cleanup
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
      scrollTriggerInstance?.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFF] to-[#8C8F95]"
    >
      {/* Canvas for image sequence */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* First Text - Visible at start */}
      <div
        ref={firstTextRef}
        className="absolute text-center left-1/2 top-[20%] -translate-x-1/2 w-full
                   xl:text-[64px] lg:text-[60px] md:text-[40px] text-[30px]
                   font-medium leading-[121%]"
      >
        <div className="text-primary">Engineering Resilient Security</div>
        <div className="md:-mt-3 text-black">for a Safer Tomorrow</div>
      </div>

      {/* Second Text - Appears during scroll */}
      <div
        ref={secondTextRef}
        className="absolute z-20 text-center text-white opacity-0
                   xl:text-[80px] lg:text-[70px] md:text-[60px] text-[30px]
                   font-medium lg:leading-[81px] whitespace-nowrap
                   left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        Security that goes <br /> deeper than you think
      </div>
    </section>
  );
};

export default Hero;
