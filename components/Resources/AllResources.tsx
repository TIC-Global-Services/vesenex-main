import React from "react";
import ResourceCard from "./ResourceCard";
import { ResourceData } from "./ResourceData";

const AllResources = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center py-20 px-6 overflow-hidden">

      <div className="absolute w-[700px] h-[700px] -top-[20%] -left-[20%] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.65)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute  top-1/2 -translate-y-1/2 -right-[50%] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.65)_0%,rgba(0,0,0,0)_70%)] w-full h-full z-10"></div>

      {/* Title */}
      <h1 className="font-medium text-5xl text-white py-20 relative z-10">
        Resources
      </h1>

      {/* Blog + Search Row */}
      <div className="w-full px-10 flex items-center justify-between relative z-10 gap-2 z-20">

        {/* Blog Pill */}
        <div className="rounded-full bg-gradient-to-r from-[#666666] to-[#2b2b2b] p-[2px] w-fit">
          <div className="bg-[#151416] px-5 py-2 rounded-full flex items-center gap-2">
            <span className="text-white text-sm">Blog</span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md rounded-full bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] p-[2px]">
          <div className="bg-[#151416] rounded-full px-4 py-2 flex items-center gap-3">
            {/* Search Icon */}
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm text-gray-300 w-full placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className=" px-4 md:px-10 z-20">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
          {ResourceData.map((resource, index)=>(
            <ResourceCard key={index} title={resource.title} desc={resource.desc} image={resource.image} link={resource.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllResources;
