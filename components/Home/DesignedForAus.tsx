'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const DesignedForAus = () => {
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

  return (
    <section className="relative px-6 py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-10"
        >
          <h1 className="text-4xl md:text-5xl font-medium leading-tight">
            Cybersecurity Designed for{" "}
            <span className="text-primary">Australian Businesses</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <Image
              src="/images/home/designed-for-aus/aus-map.png"
              alt="Australia"
              width={650}
              height={450}
              className="rounded-2xl shadow-2xl "
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Side – Vertical Marquee */}
        <div className="relative h-[680px] lg:h-[750px]">
          {/* Top Gradient Overlay */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-20" />
          {/* Bottom Gradient Overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-20" />

          <div className="h-full overflow-hidden">
            <div className="animate-marquee-vertical flex flex-col gap-8">
              {/* Original + 2 copies for seamless loop */}
              {[...cards, ...cards, ...cards].map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full max-w-md mx-auto"
                >
                  <div className="group overflow-hidden rounded-3xl bg-[#1A191F] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt="Feature"
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 " />
                    </div>
                    <div className="p-8">
                      <p className="text-[#D6D9DC] text-lg lg:text-xl leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animation Keyframes */}
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

export default DesignedForAus;