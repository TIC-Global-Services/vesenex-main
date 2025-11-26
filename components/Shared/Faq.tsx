"use client";
import Layout from "@/layout/Layout";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  ques: string;
  ans: string;
}

interface FaqProps {
  items: FaqItem[];
}

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#E5E7EB] rounded-[16px] mt-4 py-12 md:py-20 px-4 md:px-8">
        <motion.div
          className="flex flex-col lg:flex-row gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Title Section - 30% width on desktop */}
          <motion.div className="lg:w-3/10 w-full" variants={itemVariants}>
            <h1 className="text-3xl md:text-[45px] leading-[100%] font-medium text-[#232629] mb-8 md:mb-12">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
          </motion.div>

          {/* FAQ Items Section - 70% width on desktop */}
          <motion.div className="lg:w-8/10 w-full" variants={itemVariants}>
            <div className="space-y-4">
              {items
                .filter((faq) => faq.ques && faq.ans)
                .map((faq, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between md:px-6 px-4 py-2 md:py-3 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 md:gap-4 flex-1">
                        <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#D6D9DC] rounded-xl flex items-center justify-center text-[#374151] font-semibold text-sm md:text-base">
                          {index + 1}
                        </span>
                        <span className="text-base md:text-lg font-semibold text-[#0C0D0E] text-left">
                          {faq.ques}
                        </span>
                      </div>
                      <motion.span
                        className="flex-shrink-0 ml-4 text-2xl md:text-[32px] leading-[21px] font-light text-[#3B4045]"
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          className="overflow-hidden"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={{
                            hidden: { opacity: 0, height: 0 },
                            visible: {
                              opacity: 1,
                              height: "auto",
                              transition: {
                                duration: 0.3,
                                ease: "easeOut" as const,
                              },
                            },
                            exit: {
                              opacity: 0,
                              height: 0,
                              transition: {
                                duration: 0.2,
                                ease: "easeIn" as const,
                              },
                            },
                          }}
                        >
                          <div className="px-4 md:px-6 pb-4 md:pb-6 pl-[56px] md:pl-[88px]">
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                              {faq.ans}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Faq;
