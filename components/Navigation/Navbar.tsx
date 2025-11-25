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
  const navbarBg = isHome ? "bg-white" : "bg-gray-900";
  const textColor = isHome ? "text-gray-900" : "text-white";

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
      <div className="absolute z-[9999] w-full px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Image
            src={logoSrc}
            alt="logo"
            width={250}
            height={80}
            className="object-contain w-32 sm:w-40 md:w-52 lg:w-64"
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row gap-2 items-center">
            <div className="bg-[#232629] rounded-full px-6 xl:px-10 py-3 shadow-sm flex items-center space-x-4 xl:space-x-8 h-[64px]">
              {/* Navigation Links */}
              <div className="flex items-center space-x-4 xl:space-x-8">
                {NAV_LINKS.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown ? (
                      <button
                        className="text-[#6A737C] hover:text-[#C4D8FB] whitespace-nowrap text-[14px] xl:text-[16px] font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                        <FaChevronDown 
                          className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={('link' in item ? item.link : '#') as string}
                        className="text-[#6A737C] hover:text-[#C4D8FB] whitespace-nowrap text-[14px] xl:text-[16px] font-medium transition-colors duration-200 flex items-center"
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === index && (
                      <div className="absolute top-full -left-120 pt-7 w-[60rem] z-50">
                        <div className="px-4 bg-white/10 border border-[#65656517] backdrop-blur-2xl rounded-[12px] py-4 grid grid-cols-2 gap-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#3E3B3B80] border border-[#444350] hover:bg-[#3E3B3B] transition-all duration-200"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
                              <img
                                src={dropdownItem.icon.src}
                                alt={dropdownItem.title}
                                className="w-15 h-15 object-contain"
                              />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col">
                              <span className="text-white font-medium text-[16px]">
                                {dropdownItem.title}
                              </span>
                              <p className="text-[#C5C3C3] text-[14px] leading-snug mt-1">
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
            <Link
              href="#"
              className="bg-[#0B3D91] text-white flex items-center justify-center h-14 px-6 rounded-full hover:bg-[#0B3D91]/90 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
         
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-[#232629] rounded-full p-3 sm:p-3.5 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="w-6 h-6 text-white" />
              ) : (
                <HiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] bg-[#1a1c1e] z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
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
              <HiX className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full flex items-center justify-between px-4 py-3 text-[#6A737C] hover:text-[#C4D8FB] hover:bg-[#232629] rounded-lg transition-all duration-200"
                    >
                      <span className="font-medium text-[16px]">{item.name}</span>
                      <FaChevronDown 
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          mobileDropdownOpen === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Dropdown Items */}
                    {mobileDropdownOpen === index && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            href={dropdownItem.link}
                            onClick={closeMobileMenu}
                            className="flex items-start gap-3 px-4 py-3 rounded-lg bg-[#3E3B3B80] border border-[#444350] hover:bg-[#3E3B3B] transition-all duration-200"
                          >
                            {/* Icon */}
                            <div className="hidden flex-shrink-0 w-10 h-10 md:flex items-center justify-center">
                              <Image
                                src={dropdownItem.icon.src}
                                alt={dropdownItem.title}
                                className="w-10 h-10 object-contain"
                              />
                            </div>

                            {/* Text Content */}
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
                    href={('link' in item ? item.link : '#') as string}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-[#6A737C] hover:text-[#C4D8FB] hover:bg-[#232629] rounded-lg transition-all duration-200 font-medium text-[16px]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-[#444350]">
            <Link
              href="#"
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