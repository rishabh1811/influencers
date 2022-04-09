/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NumbersSpeak(props) {
  return (
    <>
      <div className="container text-center mx-auto max-w-[1170px] relative">
        <h1 className="text-lg font-montserrat text-[#404040] md:text-[40px] leading-relaxed font-bold mb-[10px] md:mb-5">LET THE NUMBERS SPEAK</h1>
        <p className="text-[15px] md:text-[22px] font-poppins text-[#404b68] leading-relaxed mb-[18px] lg:mb-10">
          With over 30+ campaigns signed, we have worked with 10+ brands,
          providing an influencer pool of 70+ influencers and have generated 1
          billion+ Impressions. We are growing steadily, so is our community and
          our partnerships with leading brands.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
        </div>

      
      <img className="hidden lg:block absolute bottom-[-105px] left-[80px] " src="/objects/orange-dots.png" alt=""  />
      </div>
    </>
  );
}

function NumbersCard() {
  return (
    <>
      <div className="bg-white rounded-[30px] py-8 counter-card relative">
        <h4 className="text-3xl font-montserrat leading-relaxed font-bold text-[#316ad8] relative counter">200+</h4>
        <p className="text-[19px] leading-relaxed">Campaigns</p>

        <div className="w-[80%] h-full counter-card-bg rounded-[30px] -z-10 absolute top-[20px] left-1/2 -translate-x-1/2"></div>
      </div>
    </>
  );
}
