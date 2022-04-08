/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { FaBars } from "react-icons/fa"

export default function Navbar() {
  return (
    <>
      <div className="px-5 h-[89px] md:h-[165px]  mx-auto ">
        <div className="  flex  flex-row justify-between items-center">
          {/* brand Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-[70px] md:w-[130px]" src="/navbar/main-logo-236x300.png" alt="" />
            {/* <img className="w-24" src="/navbar/brand-logo.png" alt="" /> */}
          </a>

          <nav className="hidden lg:block  font-poppins text-[22px] font-medium  md:ml-auto md:mr-auto flex items-center justify-center">
            <a className="mr-8 hover:text-orange cursor-pointer">Home</a>
            <a className="mr-8 hover:text-orange cursor-pointer" href="/services">Services</a>
            <a className="mr-8 hover:text-orange cursor-pointer">Influencers</a>
            <a className="mr-8 hover:text-orange cursor-pointer">On-Air Talents</a>
            <a className="mr-8 hover:text-orange cursor-pointer">Case Studies</a>
            <a className="mr-8 hover:text-orange cursor-pointer" href="/about">About Us</a>
            <a className="mr-8 hover:text-orange cursor-pointer">中文 (中国)</a>
          </nav>

          <div className="flex flex-row space-x-4">
            <button className="hidden lg:block px-[55px] py-[15px] font-poppins font-medium text-[25px] btn-gradient btn-gradient-shadow text-white leading-10 rounded-full">
              Contact Us
            </button>
            <button className="block lg:hidden">
              <FaBars className="text-[30px] m-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
