import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ResourceCardProps {
  title: string;
  desc: string;
  image: string | StaticImageData;
  link: string;
}

const ResourceCard = ({ title, desc, image, link }: ResourceCardProps) => {
  return (
    <div className=" py-20">
      {/* Inner Surface */}
      <div className="bg-[#141316] rounded-xl p-6 space-y-5">
        {/* Blog Badge */}
        <div className="w-fit rounded-lg bg-gradient-to-br from-[#666666] to-[#1a1a1a] p-[2px] py-1">
          <span className="bg-[#141316] px-6 py-2 rounded-lg text-sm text-gray-200 w-full h-full">
            Blog
          </span>
        </div>

        {/* Title */}
        <h1 className="font-medium text-3xl md:text-5xl text-white leading-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm">{desc}</p>

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg w-full object-cover"
        />

        {/* View More Button */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 p-[2px] rounded-full bg-gradient-to-r from-[#666666] to-[#1a1a1a] text-white text-sm hover:opacity-90 transition"
        >
          <div className=" w-full h-full bg-[#141316] px-6 py-2 rounded-full">View More</div>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
