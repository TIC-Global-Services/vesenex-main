import Layout from "@/layout/Layout";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface GridItem {
  name: string;
  desc: string;
  img: StaticImageData | string;
}

interface GridLayoutProps {
  title: string | React.ReactNode;
  items: GridItem[];
}

const GridLayout: React.FC<GridLayoutProps> = ({ title, items }) => {
  return (
    <Layout>
      <div className="w-full py-6 md:py-10 px-2 md:px-6">
        {/* First Row - Title + 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 md:mb-10">
          <h1 className="text-3xl md:text-[55px] text-[#0C0D0E] font-medium mb-10 text-start max-w-md">
            {title}
          </h1>

          {items.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="rounded-[16px] shadow-md bg-[#0C0D0E] p-6 flex flex-col items-start border"
            >
              {typeof item.img === "string" ? (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full aspect-4/3 object-cover mb-4 select-none rounded-[8px]"
                />
              ) : (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full aspect-4/3 object-cover mb-4 select-none rounded-[8px]"
                />
              )}
              <h2 className="text-[28px] text-[#F1F2F3] font-medium mt-2">
                {item.name}
              </h2>
              <p className="text-[#D6D9DC] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.slice(2, 5).map((item, index) => (
            <div
              key={index}
              className="rounded-[16px] shadow-md bg-[#0C0D0E] p-6 flex flex-col items-start border"
            >
              {typeof item.img === "string" ? (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full aspect-4/3 object-cover mb-4 select-none rounded-[8px]"
                />
              ) : (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={600}
                  className="w-full aspect-4/3 object-cover mb-4 select-none rounded-[8px]"
                />
              )}
              <h2 className="text-[28px] text-[#F1F2F3] font-medium mt-2">
                {item.name}
              </h2>
              <p className="text-[#D6D9DC] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GridLayout;
