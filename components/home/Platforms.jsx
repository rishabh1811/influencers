/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Platforms() {
  return (
    <>
      
      <div className="container text-center mx-auto max-w-[1170px] relative">
        <h1 className="text-lg font-montserrat text-[#404040] md:text-[40px] leading-relaxed font-bold mb-[10px] md:mb-5">OUR PLATFORMS</h1>
        <p className="text-[15px] md:text-[22px] font-poppins text-[#404b68] leading-relaxed mb-[18px] lg:mb-24">
        With a complementarity between micro and macro-influencers and a
          strategic target on each platform to hit the right target population
          you wish; we can fulfill your social media goals and establish a
          community instead of just take a typical UA approach.
        </p>

        <div className="grid grid-cols-3 gap-4 mx-auto max-w-xs md:max-w-[100%] place-items-center md:gap-y-14 
                        lg:grid-cols-6 lg:gap-x-4 ">
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
        </div>


        <img className="hidden lg:block absolute right-[115px] bottom-[-100px] " src="/objects/blue-dots.png" alt=""  />
      </div>
    </>
  );
}

function PlatformsCard(props) {
  return (
    <>
    {/* Mobile version */}
      <div className="lg:hidden">
        <img className="w-[87px] md:w-[102px]" src="/home/icons/ico-instagram.png" alt="" />
      </div>

        {/* Desktop Version */}

      <div className="hidden lg:block bg-white rounded-[30px] h-[160px] w-full py-8 counter-card relative">
      <img className="w-[102px] absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2" src="/home/icons/ico-instagram.png" alt="" />
        
        <p className="text-xl font-montserrat text-[#040e29] leading-relaxed absolute left-1/2 -translate-x-1/2 bottom-7">Instagram</p>

        <div className="w-[80%] h-full counter-card-bg rounded-[30px] -z-10 absolute top-[20px] left-1/2 -translate-x-1/2"></div>
      </div>

      
    </>
  );
}
