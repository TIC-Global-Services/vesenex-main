"use client";
import Layout from "@/layout/Layout";
import React from "react";
import {
  companyLogoFooter,
  LinkedinLogo,
} from "../Reusable/Images";
import Image from "next/image";
import Link from "next/link";
import { Footer_LINKS } from "@/constants/Nav";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Layout className="py-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-[16px] p-[1px] relative"
        style={{
          background:
            "linear-gradient(263deg, #706F6F 6%, #D6D3D3 59%, #706F6F 100%)",
        }}
      >
        {/* Glow Effect */}
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #324EEF 0%, #15121D 100%)",
            filter: "blur(200px)",
          }}
        />

        {/* MAIN FOOTER CONTENT */}
        <div
          className="
          flex flex-col text-white 
          pt-10 px-5 md:px-10 gap-14 
          rounded-[15px] relative z-[10]
          "
          style={{
            background:
              "linear-gradient(268deg, #0E1325 -3%, #0C0C0D 135%)",
            backdropFilter: "blur(66px)",
          }}
        >
          {/* GRID COLUMNS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-5 
              gap-10 w-full
            "
          >
            {/* Quick Links */}
            <motion.div variants={columnVariants}>
              <h1 className="text-[18px] font-medium mb-3">
                {Footer_LINKS[0].name}
              </h1>
              <div className="flex flex-col gap-2">
                {Footer_LINKS[0].dropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-all duration-200 text-[15px]"
                  >
                    {"name" in item ? item.name : item.title}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Security Projects */}
            <motion.div variants={columnVariants}>
              <h1 className="text-[18px] font-medium mb-3">
                {Footer_LINKS[1].name}
              </h1>
              <div className="flex flex-col gap-2">
                {Footer_LINKS[1].dropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-all duration-200 text-[15px]"
                  >
                    {"title" in item ? item.title : item.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Managed Protection */}
            <motion.div variants={columnVariants}>
              <h1 className="text-[18px] font-medium mb-3">
                {Footer_LINKS[2].name}
              </h1>
              <div className="flex flex-col gap-2">
                {Footer_LINKS[2].dropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-[#D0D5DDB2] hover:text-white transition-all duration-200 text-[15px]"
                  >
                    {"title" in item ? item.title : item.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={columnVariants}>
              <h1 className="text-[18px] font-medium mb-3">
                Sales & Support Enquiries
              </h1>
              <p className="text-[#D0D5DDB2] hover:text-white transition-all cursor-pointer break-all">
                business@vesenex.com
              </p>

              <h1 className="text-[18px] font-medium mt-6 mb-3">
                Our Office
              </h1>
              <p className="text-[#D0D5DDB2] text-[15px] leading-relaxed">
                Suite 329 98-100 Elizabeth St<br />
                Melbourne VIC 3000<br />
                Australia
              </p>
            </motion.div>

            {/* Social */}
            <motion.div variants={columnVariants}>
              <h1 className="text-[18px] font-medium mb-3">Connect</h1>
              <Image
                src={LinkedinLogo}
                alt="LinkedIn"
                width={50}
                height={50}
                className="cursor-pointer hover:scale-105 hover:rotate-6 transition-transform"
              />
            </motion.div>
          </motion.div>

          {/* BOTTOM ROW */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6 w-full"
          >
            {/* COPYRIGHT + LINKS */}
            <div
              className="
              flex flex-col 
              md:flex-row 
              justify-between 
              items-start md:items-center 
              gap-3 text-[#ACABB2] text-[14px]
              "
            >
              <span>© {currentYear} - Vesenex</span>

              <span>
                Design & Developed by{" "}
                <Link
                  href="https://www.theinternetcompany.one/"
                  target="_blank"
                  className="hover:text-white"
                >
                  TIC
                </Link>
              </span>

              <div className="flex gap-4">
                <Link href="/terms-policy" className="hover:text-white">
                  Terms & Policy
                </Link>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Guideline
                </Link>
              </div>
            </div>

            {/* Footer Logo */}
            <Image
              src={companyLogoFooter}
              alt="Vesenex"
              width={2000}
              height={2000}
              className="w-full h-auto pb-4 md:pb-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Footer;
