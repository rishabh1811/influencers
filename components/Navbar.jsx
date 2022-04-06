import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi"

export default function Navbar() {
  return (
    <>
      <div className="container font-semi body-font mx-auto ">
        <div className="  flex p-5 flex-row justify-between items-center">
          {/* brand Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-24" src="/navbar/brand-logo.png" alt="" />
          </a>

          <nav className="hidden lg:block text-lg md:ml-auto md:mr-auto flex items-center justify-center">
            <a className="mr-8 hover:text-orange cursor-pointer">Home</a>
            <a className="mr-8 hover:text-orange cursor-pointer">Services</a>
            <a className="mr-8 hover:text-orange cursor-pointer">Influencers</a>
            <a className="mr-8 hover:text-orange cursor-pointer">On-Air Talents</a>
            <a className="mr-8 hover:text-orange cursor-pointer">Case Studies</a>
            <a className="mr-8 hover:text-orange cursor-pointer">About Us</a>
            <a className="mr-8 hover:text-orange cursor-pointer">中文 (中国)</a>
          </nav>

          <div className="flex flex-row space-x-4">
            <button className="btn-gradient text-white px-4 py-2 rounded-full">
              Contact Us
            </button>
            <button className="block lg:hidden">
              <HiOutlineMenuAlt2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
