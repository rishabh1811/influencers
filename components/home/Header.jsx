/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="p-5 md:py-[50px] text-center header-bg text-white max-w-full ">
        <h1 className="text-lg font-montserrat font-bold md:font-changa md:text-[30px] leading-relaxed">
          Gaming & Esports <br /> Talent Agency
        </h1>

        <p className="text-base font-montserrat md:text-xl md:font-tajawal">
          #Connect your brand with arabic millennials
        </p>

        {/* Yellow Numbers */}
        <div className="flex flex-row justify-center space-x-6 md:space-x-20 py-4 ">
          <div className="flex items-center">
            <img className="w-5 md:w-7 mr-1 md:mr-3" src="/home/header/user.png" alt="" />
            <p className="text-[15px] md:text-[22px] md:font-poppins font-poppins text-[#ffce51] font-semibold">
              70+ talents
            </p>
          </div>

          <div className="flex items-center">
            <img className="w-5 md:w-7 mr-1 md:mr-3" src="/home/header/earth-globe.png" alt="" />
            <p className="text-[15px] md:text-[22px] md:font-poppins font-poppins text-[#ffce51] font-semibold">
              100M Total Reach
            </p>
          </div>
        </div>

      
      

          {/* Pubg , RIOT etc logos */}
          <div className="grid grid-cols-4 gap-5 max-w-[460px] mx-auto">
            <img src="/home/header/logos_01.png" alt="" className="" />
            <img src="/home/header/logos_02.png" alt="" className="" />
            <img src="/home/header/logos_03.png" alt="" className="" />
            <img src="/home/header/logos_04.png" alt="" className="" />
            <img src="/home/header/logos_05.png" alt="" className="" />
            <img src="/home/header/logos_06.png" alt="" className="" />
            <img src="/home/header/more.png" alt="" className="" />
          </div>




      </div>
    </>
  );
}
