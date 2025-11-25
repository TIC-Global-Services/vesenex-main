"use client";

import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";
import RadialDotPattern from "../Reusable/WaveDots";

interface WhyItem {
  title: string;
  desc: string;
}

interface WhyProps {
  items: WhyItem[];
}

const Why: React.FC<WhyProps> = ({ items }) => {
  return (
    <Layout>
      <div className="bg-black rounded-[16px] min-h-screen mt-4 flex flex-col items-center px-4 md:px-8 py-16 md:py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
          <h1 className="text-[32px] md:text-[55px] text-[#EBEBED] leading-tight">
            Why <span className="text-[#525960]">Vesenex</span>?
          </h1>

          <Link
            href="/contact"
            className="bg-white text-[#374151] px-6 flex items-center justify-center text-sm py-3 font-medium rounded-full hover:bg-gray-200 transition whitespace-nowrap"
          >
            Connect for more
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mt-12">
          {/* Block 1 */}
          <div className="relative flex flex-col">
            <div className="border border-[#525960] h-[367px] p-6 flex flex-col justify-center relative overflow-hidden group">
             
              <h1 className="text-[28px] text-white font-medium leading-tight mb-3 relative z-10 pointer-events-none">
                {items[0]?.title}
              </h1>
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[0]?.desc}
              </p>
            </div>

            <div className="border border-[#525960] h-[224px]">
              <RadialDotPattern />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col mt-20">
            <div className="border border-[#525960] h-[224px] hidden md:block">
              <RadialDotPattern />
            </div>

            <div className="border border-[#525960] h-[367px] p-6 flex flex-col justify-center relative overflow-hidden group">
             
              <h1 className="text-[28px] text-white font-medium mb-3 relative z-10 pointer-events-none">
                {items[1]?.title}
              </h1>
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[1]?.desc}
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col">
            <div className="border border-[#525960] h-[367px] p-6 flex flex-col justify-center relative overflow-hidden group">
             
              <h1 className="text-[28px] text-white font-medium leading-tight mb-3 relative z-10 pointer-events-none">
                {items[2]?.title}
              </h1>
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[2]?.desc}
              </p>
            </div>

            <div className="border border-[#525960] h-[367px] p-6 flex flex-col justify-center relative overflow-hidden group">
             
              <h1 className="text-[28px] text-white font-medium leading-tight mb-3 relative z-10 pointer-events-none">
                {items[3]?.title}
              </h1>
              <p className="text-[#A0A0A3] text-[20px] leading-tight relative z-10 pointer-events-none">
                {items[3]?.desc}
              </p>
            </div>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col">
            <div className="border border-[#525960] h-[224px]">
              <RadialDotPattern />
            </div>

            <div className="border border-[#525960] h-[367px] p-6 flex flex-col justify-center relative overflow-hidden group">
             
              <h1 className="text-[28px] text-white font-medium leading-tight mb-3 relative z-10">
                {items[4]?.title}
              </h1>
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

export default Why;
