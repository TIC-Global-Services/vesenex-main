"use client";

import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import RadialDotPattern from "../Reusable/WaveDots";
import Image, { StaticImageData } from "next/image";

interface WhyItem {
  icon: string | StaticImageData;
  desc: string;
}

interface WhyProps {
  items: WhyItem[];
}

const WhyChooseVesenex = () => {
  const items: WhyItem[] = [
    {
      icon: "/Icons/why-us/lock1.svg",
      desc: "We are a proud framework-based service provider with proven security models and no guesswork.",
    },
    {
      icon: "/Icons/why-us/lock2.svg",
      desc: "Built for Australian SMBs– we navigate local compliance with precision",
    },
    {
      icon: "/Icons/why-us/signal.svg",
      desc: "Our automation-first approach enables faster detection.",
    },
    {
      icon: "/Icons/why-us/people.svg",
      desc: "We assign you a dedicated cyber advisor as your single point of contact for all your cybersecurity needs",
    },
    {
      icon: "/Icons/why-us/binary-process.svg",
      desc: "We offer a quick onboarding process with a phased approach that breaks down complexity into a smooth process and saves time.",
    },
  ];
  return (
    <Layout>
      <div className="bg-black rounded-[16px] min-h-screen my-4 flex flex-col items-center px-4 md:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
          <h1 className="text-[32px] md:text-[55px] text-[#EBEBED] leading-tight">
            Why Choose <br />
            <span className="text-[#525960]">Vesenex?</span>
          </h1>

          <Link
            href="/contact"
            className="bg-white text-[#374151] px-6 flex items-center justify-center text-sm py-3 font-medium rounded-full hover:bg-gray-200 transition whitespace-nowrap"
          >
            View Services
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mt-12">
          {/* Block 1 */}
          <div className="relative flex flex-col">
            <div className="border border-[#525960] h-52 p-6 flex flex-col justify-center relative overflow-hidden group">
              <Image src={items[0].icon} alt="icon" width={20} height={20} className="w-12 h-12 mb-5" />
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[0]?.desc}
              </p>
            </div>

            <div className="border border-[#525960] h-52 hidden md:block">
              <RadialDotPattern />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col">
            <div className="border border-[#525960] h-52">
              <RadialDotPattern />
            </div>

            <div className="border border-[#525960] h-52 p-6 flex flex-col justify-center relative overflow-hidden group">
             <Image src={items[1].icon} alt="icon" width={20} height={20} className="w-12 h-12 mb-5" />
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[1]?.desc}
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col">
            <div className="border border-[#525960] h-52 p-6 flex flex-col justify-center relative overflow-hidden group">
             <Image src={items[2].icon} alt="icon" width={20} height={20} className="w-12 h-12 mb-5" />
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[2]?.desc}
              </p>
            </div>

            <div className="border border-[#525960] h-52 p-6 flex flex-col justify-center relative overflow-hidden group">
              <Image src={items[3].icon} alt="icon" width={20} height={20} className="w-12 h-12 mb-5" />
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[3]?.desc}
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col">
            <div className="border border-[#525960] h-52">
              <RadialDotPattern />
            </div>

            <div className="border border-[#525960] h-52 p-6 flex flex-col justify-center relative overflow-hidden group">
             <Image src={items[4].icon} alt="icon" width={20} height={20} className="w-12 h-12 mb-5" />
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10">
                {items[4]?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyChooseVesenex;
