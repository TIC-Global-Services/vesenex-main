"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const firstTextRef = useRef<HTMLDivElement | null>(null);
  const secondTextRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const totalFrames = 150;

  const getFrame = (i: number) =>
    `/seq/iceberg/${String(i + 1).padStart(4, "0")}.webp`;

  const seq = { frame: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    contextRef.current = ctx;

    canvas.width = 1920;
    canvas.height = 1080;

    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    // Preload ALL images with progress tracking
    const preloadPromises = Array.from({ length: totalFrames }, (_, i) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
          resolve();
        };

        img.onerror = () => {
          console.error(`Failed to load frame ${i + 1}`);
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
          resolve(); // Continue even if one image fails
        };

        img.src = getFrame(i);
        images[i] = img;
      });
    });

    // Wait for ALL images to load
    Promise.all(preloadPromises).then(() => {
      setIsReady(true);
      initializeAnimation();
    });

    const render = () => {
      const img = imagesRef.current[seq.frame];
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

    const initializeAnimation = () => {
      // Kill any existing ScrollTriggers
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Render first frame immediately
      render();

      // Reset text visibility
      gsap.set(firstTextRef.current, { opacity: 1, visibility: "visible" });
      gsap.set(secondTextRef.current, { opacity: 0, visibility: "hidden" });

      // UNIFIED TIMELINE (Canvas + Text)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2160", // This controls how long the pin lasts
          scrub: 1,
          pin: true,
          pinSpacing: true, // This ensures space is added for the pinned element
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          id: "hero-section", // Add ID for debugging
          onUpdate: (self) => {
            // Optional: log progress for debugging
            // console.log("Hero scroll progress:", self.progress);
          },
          onLeave: () => {
            // Ensure final frame is rendered when leaving
            seq.frame = totalFrames - 1;
            render();
          },
          onEnterBack: () => {
            // Reset to first frame when scrolling back up
            seq.frame = 0;
            render();
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger;

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
        0.25
      );

      tl.to(
        secondTextRef.current,
        {
          opacity: 1,
          visibility: "visible",
          duration: 0.6,
          ease: "power2.out",
        },
        ">-0.2"
      );

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    };

    // Cleanup
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
      imagesRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative overflow-hidden bg-gradient-to-b from-[#F8FAFF] to-[#8C8F95]"
    >
      {/* Loading indicator */}
      {!isReady && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            <div className="text-white text-2xl font-medium mb-4">
              Loading Experience
            </div>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <div className="text-white text-sm mt-2">{loadingProgress}%</div>
          </div>
        </div>
      )}

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
        left-1/2 top-[20%] -translate-x-1/2 w-full"
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
