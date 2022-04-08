/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Esports(props) {
  return (
    <>
      <div className="container orange-pattern-bg text-center lg:text-left text-white max-w-[1070px] mx-auto relative">
        <img className="hidden lg:block" src="/home/content-box-4.png" alt="" />

        <div className="lg:grid lg:grid-cols-2 lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 max-w-[900px]">
          <div className="">
            <img className="mx-auto" src="/home/escort-img-mobile.png" alt="" />
          </div>
          <div className="">
            <h1 className="text-lg font-montserrat font-bold lg:text-[30px] lg:font-changa leading-relaxed mb-[10px] md:mb-5">
              Esports Talents <span className="text-black">and Advertising Services</span>
            </h1>
            <p className="font-poppins text-[15px] md:text-lg lg:text-[#404b68] text-black mb-[40px] lg:mb-[50px]">
              Arabia E-Advertising is a MENA talent agency with both established
              and up and coming esports broadcasting talent on its roster.
              Whether you are looking to hire on-air talent for an event or are
              an esports personality looking for representation, Arabia
              E-Advertising can help.
            </p>
            <button className=" text-base font-poppins text-white btn-gradient-blue px-10 py-3 rounded-[90px] lg:text-xl lg:px-[55px] lg:py-[15px] ">FIND OUT MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}
