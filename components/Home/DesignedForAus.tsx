"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AustraliaMap from "./AustralianMap";

const DesignedForAus = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      image: "/images/home/designed-for-aus/1.png",
      desc: "Most organizations don’t realize they’ve been breached until the damage is already done.",
    },
    {
      image: "/images/home/designed-for-aus/2.png",
      desc: "A single cyber incident can lead to data loss, customer distrust, and long-term growth.",
    },
    {
      image: "/images/home/designed-for-aus/3.png",
      desc: "Vesenex delivers the same level of protection used by large enterprises — without the complexity.",
    },
    {
      image: "/images/home/designed-for-aus/4.png",
      desc: "Our defense model is powered by global frameworks and intelligent automation to detect, respond, and recover faster.",
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative px-6 py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side – Title + Map */}
        <div
         
        >
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Cybersecurity Designed for{" "}
            <span className="text-primary">Australian Businesses</span>
          </h1>

          <AustraliaMap />
        </div>

        {/* Right Side – Conditional Carousel / Marquee */}
        <div className="relative">
          {/* Desktop: Vertical Marquee */}
          <div className="hidden lg:block h-[750px] relative">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />

            <div className="h-full overflow-hidden">
              <div className="animate-marquee-vertical flex flex-col gap-8">
                {[...cards, ...cards, ...cards].map((item, idx) => (
                  <Card key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Horizontal Carousel with Arrows */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full"
                >
                  <Card {...cards[index]} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className=" absolute -bottom-20 left-1/2 -translate-x-1/2  flex items-center justify-center gap-4">
              {/* Arrows */}
              <button
                onClick={prevSlide}
                className=" bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className=" bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation for Desktop Marquee */}
      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Extracted Card Component for reuse
const Card = ({ image, desc }: { image: string; desc: string }) => (
  <div className="flex-shrink-0 w-full max-w-md mx-auto">
    <div className="group overflow-hidden rounded-3xl bg-[#1A191F] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt="Feature"
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <p className="text-[#D6D9DC] text-lg leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

export default DesignedForAus;
