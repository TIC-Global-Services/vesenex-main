"use client";

import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

export default function SecureBusinessForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 py-20 overflow-hidden">



      <div className="absolute w-[700px] h-[700px] -top-[20%] -left-[20%] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.65)_0%,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute w-[700px] h-[700px] -bottom-[20%] -right-[20%] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.65)_0%,rgba(0,0,0,0)_70%)]"></div>


      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center space-y-8 py-20">

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-medium text-white leading-snug">
            Let’s Secure Your Business
            <br /> Starting Today
          </h1>

          <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
            Once you fill out your info, our cybersecurity specialists will reach
            back to you quickly. Fast, secure & no pressure.
          </p>
        </div>

        {/* Form */}
        <form className="w-full space-y-4">

          {/* Two-Column Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full"
            />
            <input
              type="email"
              placeholder="Business Email ID"
              className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full"
            />
          </div>

          {/* Single Field */}
          <input
            type="text"
            placeholder="Company"
            className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full"
          />

          {/* Textarea */}
          <textarea
            rows={6}
            placeholder="Describe what are you looking for"
            className="bg-transparent border-2 border-gray-700 px-4 py-3 rounded-md text-white w-full resize-none"
          />

          {/* Recaptcha */}
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              theme="dark"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0B3D91] hover:bg-blue-800 transition px-6 py-3 rounded-md text-white font-semibold"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}
