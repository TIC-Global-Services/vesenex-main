"use client";
import React, { useState } from "react";
import { companyLogoWhite, companyLogoBlack } from "../Reusable/Images";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/Nav";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  const logoSrc = isHome ? companyLogoBlack : companyLogoWhite;

  const handleMouseEnter = (index: any) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (index: any) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div
        className={`absolute z-[9999] w-full px-4 sm:px-6 py-3 sm:py-2 ${
          isHome
            ? ""
            : "bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={logoSrc}
              alt="logo"
              width={250}
              height={80}
              className="object-contain w-32 sm:w-40 md:w-52 lg:w-64"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className={` rounded-full px-6 xl:px-10 py-3 flex items-center space-x-4 xl:space-x-8 h-[64px]`}
          >
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {NAV_LINKS.map((item, index) => (
                <div
                  key={index}
                  className={` ${
              isHome ? "text-[#374151] hover:text-primary" : "text-[#E5E7EB] hover:text-[#4D8BF2]"
            } relative`}
                  onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown ? (
                    <button
                      className={` whitespace-nowrap text-[14px] xl:text-[16px] font-medium transition-colors duration-200 flex items-center`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`w-3 h-3 ml-1  transform transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      onClick={() => setActiveDropdown(null)}
                      href={("link" in item ? item.link : "#") as string}
                      className={` whitespace-nowrap text-[14px] xl:text-[16px] font-medium transition-colors duration-200 flex items-center`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full -left-120 pt-7 w-[60rem] z-50">
                      <div
                        className="
                          px-4 py-4 
                          rounded-2xl 
                          grid grid-cols-2 gap-3
                          bg-white/10 
                          backdrop-blur-xl 
                          border border-white/20 
                          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                        "
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            onClick={() => setActiveDropdown(null)}
                            href={dropdownItem.link}
                            className="
                              flex items-center gap-4 px-4 py-3 
                              rounded-xl transition-all duration-300
                              bg-white/5 backdrop-blur-md 
                              border border-white/10 
                              hover:bg-white/10 hover:scale-[1.02]
                              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                            "
                          >
                            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                              <img
                                src={dropdownItem.icon.src}
                                alt={dropdownItem.title}
                                className="w-14 h-14 object-contain"
                              />
                            </div>

                            <div className="flex flex-col">
                              <span
                                className={`${
                                  isHome ? "text-black" : "text-white"
                                }  font-semibold text-[16px] tracking-wide`}
                              >
                                {dropdownItem.title}
                              </span>
                              <p
                                className={`${
                                  isHome ? "text-black/80" : "text-white/80"
                                } text-[14px] leading-snug mt-1`}
                              >
                                {dropdownItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="bg-[#0B3D91] text-white hidden lg:flex items-center justify-center h-12 px-6 rounded-full hover:bg-[#0B3D91]/90 transition-colors"
          >
            Contact us
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#232629] rounded-full p-3 sm:p-3.5 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX
                  className={`w-6 h-6 text-[#6A737C]`}
                />
              ) : (
                <HiMenu
                  className={`w-6 h-6 text-[#6A737C]`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-[#1a1c1e] z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#444350]">
            <Image
              src={companyLogoWhite}
              alt="logo"
              width={150}
              height={50}
              className="object-contain"
            />

            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-[#232629] transition-colors"
            >
              <HiX className="w-6 h-6 text-[#6A737C]" />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-[#6A737C] hover:text-[#C4D8FB] hover:bg-[#232629] rounded-lg transition-all duration-200"
                    >
                      <span className="font-medium text-[16px]">
                        {item.name}
                      </span>

                      <FaChevronDown
                        className={`w-4 h-4  text-[#6A737C]
                         transform transition-transform duration-200 ${
                          mobileDropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdownOpen === index && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            onClick={closeMobileMenu}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg bg-[#3E3B3B80] border border-[#444350] hover:bg-[#3E3B3B] transition-all duration-200"
                          >
                            <div className=" flex-shrink-0 w-10 h-10 md:flex items-center justify-center">
                              <Image
                                src={dropdownItem.icon.src}
                                alt={dropdownItem.title}
                                width={50}
                                height={50}
                                className="w-10 h-10 object-contain"
                              />
                            </div>

                            <div className="flex flex-col">
                              <span className="text-white font-medium text-[15px]">
                                {dropdownItem.title}
                              </span>
                              <p className="text-[#C5C3C3] text-[13px] leading-snug mt-1">
                                {dropdownItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={("link" in item ? item.link : "#") as string}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-[#6A737C] hover:text-[#C4D8FB] hover:bg-[#232629] rounded-lg transition-all duration-200 font-medium text-[16px]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-[#444350]">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="bg-[#0B3D91] text-white flex items-center justify-center h-12 w-full rounded-full hover:bg-[#0B3D91]/90 transition-colors font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
