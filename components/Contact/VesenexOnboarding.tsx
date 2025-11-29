import Image from "next/image";
import React from "react";

const OnboardingSteps = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-20">
          Vesenex 4 steps onboarding approch:
        </h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* DOTTED CONNECTOR LINE (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[80%] border-t-2 border-dotted border-gray-300"></div>

          {/* Step 1 */}
          <div className="relative text-center group">
            <div className="relative z-10 mx-auto w-16 h-16 bg-[#E9EEF9] rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
              <Image
                src={"/Icons/onboarding/lock.svg"}
                alt="Lock"
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Lock In Your Details
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
              Fill the quick form so we can map your security starting point
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative text-center group">
            <div className="relative z-10 mx-auto w-16 h-16 bg-[#E9EEF9] rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
              <Image
                src={"/Icons/onboarding/box.svg"}
                alt="Kickoff Call"
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Threat-Free Kickoff Call
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
              We connect to understand your risks, goals, and compliance needs
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative text-center group">
            <div className="relative z-10 mx-auto w-16 h-16 bg-[#E9EEF9] rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
              <Image
                src={"/Icons/onboarding/box.svg"}
                alt="Blueprint"
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Your Defence Blueprint
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
              We craft a tailored, compliance-ready security plan
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative text-center group">
            <div className="relative z-10 mx-auto w-16 h-16 bg-[#E9EEF9] rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-lg">
              <Image
                src={"/Icons/onboarding/box.svg"}
                alt="Protection"
                width={20}
                height={20}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. Always-On Protection
            </h3>
            <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
              Deployment, monitoring, and continuous threat hunting – 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSteps;
