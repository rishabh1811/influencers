/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="p-5 md:py-[50px] text-center mx-auto header-bg text-white max-w-full relative lg:max-w-[1100px]">

      <img className="hidden lg:block" src="/home/header/header-bg.png" alt=""  />

        <div className="lg:absolute top-20 left-1/2 lg:-translate-x-1/2 lg:w-full ">
          <h1 className="text-lg font-montserrat font-bold md:font-changa md:text-[30px] lg:text-[44px] leading-relaxed">
            Gaming & Esports Talent Agency
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
            <div className="grid grid-cols-4 lg:grid-cols-7logos  gap-5 max-w-[460px] lg:max-w-[970px] mx-auto">
              <div className=""><img src="/home/header/logos_01.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/logos_02.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/logos_03.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/logos_04.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/logos_05.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/logos_06.png" alt="" className="" /></div>
              <div className=""><img src="/home/header/more.png" alt="" className="" /></div>
            </div>
        </div>

        <img className="hidden lg:block absolute bottom-[43px] left-[45px] w-[92%]" src="/home/header/arabic-gamers.png" alt="" />

        {/* <img className="hidden lg:block absolute" src="/objects/escort-pattern.png" alt=""  /> */}
      </div>
    </>
  );
}
