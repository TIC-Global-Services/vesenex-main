"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DigitalIcon1,
  DigitalIcon2,
  DigitalIcon3,
  DigitalIcon4,
  DigitalIcon5,
  DigitalImage1,
  DigitalImage2,
  DigitalImage3,
  DigitalImage4,
  DigitalImage5,
} from "../Reusable/Images";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const DigitalAssetsContent = [
  {
    icon: DigitalIcon1,
    title: "Managed Detection & Response (MDR)",
    desc: "24/7 monitoring, investigation, and automated response across cloud, endpoints, and networks.",
    link: "#",
    image: DigitalImage1,
  },
  {
    icon: DigitalIcon2,
    title: "Vulnerability Management & Threat hunting",
    desc: "Spot weaknesses before attackers do. Continuous scanning, prioritization, and remediation guidance to keep your systems airtight.",
    link: "#",
    image: DigitalImage2,
  },
  {
    icon: DigitalIcon3,
    title: "Endpoint security",
    desc: "Continuous endpoint monitoring, rapid detection, and automated response to stop threats at the source.",
    link: "#",
    image: DigitalImage3,
  },
  {
    icon: DigitalIcon4,
    title: "Cyber awareness training.",
    desc: "Engaging, role-based learning to reduce risky behaviours.",
    link: "#",
    image: DigitalImage4,
  },
  {
    icon: DigitalIcon5,
    title: "Phishing & email security.",
    desc: "Protect against BEC, spoofing, and malicious email threats.",
    link: "#",
    image: DigitalImage5,
  },
];

const DigitalAssets = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0 || !pinWrapperRef.current) return;

    const setupTimeout = setTimeout(() => {
      // Kill any existing ScrollTriggers first
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill());
      scrollTriggersRef.current = [];
      
      ScrollTrigger.refresh();

      // Set all cards initial position
      cards.forEach((card) => {
        gsap.set(card, {
          y: window.innerHeight,
          scale: 1,
          transformOrigin: "center top",
        });
      });

      // First card visible
      gsap.set(cards[0], { y: 0, scale: 0.9 });

      // Create timeline with proper pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "top top",
          end: () => `+=1300`,
          pin: pinWrapperRef.current,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          id: "digital-assets-pin",
        },
      });

      if (tl.scrollTrigger) {
        scrollTriggersRef.current.push(tl.scrollTrigger);
      }

      // Card stacking animation
      cards.forEach((card, index) => {
        if (index === 0) return;

        const label = `card${index}`;
        const spacing = index === 1 ? 0.2 : 1.2;

        // Add label with spacing
        tl.add(label, `+=${spacing}`);

        // Slide current card up
        tl.fromTo(
          card,
          { y: window.innerHeight, scale: 1 },
          {
            y: 0,
            scale: 0.9,
            duration: 1.5,
            ease: "power2.inOut",
          },
          label
        );

        // Stack previous cards
        for (let i = 0; i < index; i++) {
          const stackOffset = (index - i) * 10;
          const stackScale = Math.max(0.7, 0.9 - (index - i) * 0.05);

          tl.to(
            cards[i],
            {
              y: -stackOffset,
              scale: stackScale,
              duration: 1.5,
              ease: "power2.inOut",
            },
            label
          );
        }
      });

      // Force refresh after setup
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, 150);

    return () => {
      clearTimeout(setupTimeout);
      scrollTriggersRef.current.forEach((trigger) => trigger?.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white">

      {/* This is the pinned wrapper */}
      <div ref={pinWrapperRef} className="relative w-full h-screen">
        <div className="w-full h-full flex flex-col">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#0C0D0E] font-medium text-center mb-6 md:mb-10 px-4 pt-10">
            Securing Every Layer of <br />
            <span className="text-primary">Your Digital Assets.</span>
          </h1>

          <div
            ref={cardsContainerRef}
            className="relative w-full flex-1 flex flex-col items-center justify-start px-2 sm:px-4"
          >
            {DigitalAssetsContent.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="absolute top-10 rounded-2xl shadow-lg w-full max-w-6xl bg-[linear-gradient(261.12deg,#F1F2F3_12.24%,#E2E4E5_99.23%)] px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-14 lg:py-16"
                style={{
                  zIndex: index + 1,
                  transformOrigin: "top center",
                }}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                  {/* Left Section */}
                  <div className="flex-1">
                    {/* <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5"
                    /> */}

                    <h3 className="text-2xl sm:text-3xl md:text-[40px] max-w-md lg:text-[48px] leading-tight font-medium text-[#0C0D0E] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-6 max-w-md text-sm sm:text-base">
                      {item.desc}
                    </p>

                    <Link
                      href={item.link}
                      className="inline-block text-black bg-white font-medium px-4 py-2 sm:px-5 sm:py-3 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-colors"
                    >
                      View Services
                    </Link>
                  </div>

                  {/* Right Image Section */}
                  <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[360px] h-auto object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add spacing after the pinned section */}
      <div className="h-20 md:h-32" />
    </section>
  );
};

export default DigitalAssets;