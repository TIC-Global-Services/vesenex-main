"use client";
import React, { useRef } from "react";
import {
  CYberProtection1,
  CYberProtection2,
  CYberProtection3,
} from "../Reusable/Images";
import Image from "next/image";

export const CyberSecurityContents = [
  {
    id: 1,
    title: "Always-On Protection",
    desc: "24/7 monitoring, threat hunting, and incident response, so that you focus on running your business.",
    img: CYberProtection1,
  },
  {
    id: 2,
    title: "Compliance-Ready",
    desc: "Aligned to ASD Essential Eight, NIST, and ISO 27001. We know that compliance isn't just a checklist; it instead shapes your entire security posture.",
    img: CYberProtection2,
  },
  {
    id: 3,
    title: "Scalable Solutions",
    desc: "From 10 to 10,000 endpoints, our services grow with your business without slowing you down.",
    img: CYberProtection3,
  },
];

const CyberProtection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full py-32 text-center relative bg-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0C0D0E] font-medium">
        End to End <span className="text-primary">Cyber Protection</span>
      </h1>

      {/* ------- MOBILE SCROLL + ARROWS -------- */}
      <div className="relative w-full lg:hidden">
        {/* Scrollable Wrapper */}
        <div
          ref={scrollRef}
          className="
            flex gap-5 overflow-x-auto scrollbar-hide px-4 py-4
            snap-x snap-mandatory scroll-smooth ml-4 lg:ml-0
          "
        >
          {CyberSecurityContents.map((item) => (
            <div
              key={item.id}
              className="
                flex-shrink-0 snap-start 
                w-[300px] sm:w-[330px]  
                bg-[#101010] rounded-[30px] px-6 py-10 shadow-lg 
                hover:shadow-xl transition-all duration-300
              "
            >
              <Image
                src={item.img}
                alt={item.title}
                width={240}
                height={260}
                className="object-contain w-full h-52 rounded-md"
                style={{
                  borderBottom: "1px solid",
                  borderImageSource:
                    "linear-gradient(91.8deg, #131315 13.93%, #0921B0 26.14%, #324EEF 51.3%, #0921B0 66.17%, #131315 91.84%)",
                  borderImageSlice: 1,
                }}
              />

              <div className="py-3 text-start">
                <h1 className="text-xl font-medium text-[#EBEBED]">
                  {item.title}
                </h1>
                <p className="text-[#D6D9DC] text-sm leading-[20px] font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" lg:hidden absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className=" bg-black/80 text-white p-1 w-10 h-10 rounded-full shadow-md z-10"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className=" bg-black/80 text-white p-1 w-10 h-10 rounded-full shadow-md z-10"
        >
          →
        </button>
      </div>

      {/* ------- DESKTOP GRID -------- */}
      <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl text-white">
        {CyberSecurityContents.map((item) => (
          <div
            key={item.id}
            className="
              flex flex-col items-start bg-[#101010] w-full 
              rounded-[30px] shadow-lg hover:shadow-xl 
              transition-all duration-300 px-6 py-10 space-y-4 
            "
          >
            <Image
              src={item.img}
              alt={item.title}
              width={240}
              height={160}
              className="object-contain w-full h-52 rounded-md"
              style={{
                borderBottom: "1px solid",
                borderImageSource:
                  "linear-gradient(91.8deg, #131315 13.93%, #0921B0 26.14%, #324EEF 51.3%, #0921B0 66.17%, #131315 91.84%)",
                borderImageSlice: 1,
              }}
            />

            <div className="py-3 text-start">
              <h1 className="text-2xl font-medium text-[#EBEBED]">
                {item.title}
              </h1>
              <p className="text-[#D6D9DC] text-[16px] leading-[21px] font-light">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberProtection;