import React from "react";

const Human = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Subtle blue radial glows – top-left & bottom-right */}
      <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,transparent_70%)] pointer-events-none opacity-50" />
      <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.5)_0%,transparent_70%)] pointer-events-none opacity-50" />

      <div className=" border-y border-gray-900 md:px-20 py-24">
        <div className=" w-1 h-[80%] border-r border-gray-900 absolute top-1/2 -translate-y-1/2" />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Human <span className="text-primary">Element</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-[#ACABB2] leading-relaxed">
            Vesenex isn’t here to just “deliver a service” and disappear — we
            are your go-to cyber partners. Each of our clients gets a trusted
            cyber advisor who knows their job inside out, detects risks before
            they blow up, and stays one step ahead.
          </p>
        </div>
        <div className=" w-1 h-[80%] border-l border-gray-900 absolute top-1/2 -translate-y-1/2 md:right-[25%]" />
      </div>
    </section>
  );
};

export default Human;
