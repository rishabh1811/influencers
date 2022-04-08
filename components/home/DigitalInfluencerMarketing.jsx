/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DigitalInfluencerMarketing() {
  return (
    <>
      <div className="container text-center orange-pattern-bg max-w-[1070px] mx-auto relative lg:text-left">
        <img className="hidden lg:block" src="/home/content-box-3.png" alt="" />

        <div className="lg:grid lg:grid-cols-2 lg:absolute top-1/2 left-0 lg:-translate-y-1/2 max-w-[900px]">
          <div className="">
            <img className="mx-auto" src="/home/digital-img-2.png" alt="" />
          </div>

          <div className="">
            <h1 className="text-lg font-montserrat font-bold lg:text-[30px] lg:font-changa leading-relaxed mb-[10px] md:mb-5">
              Digital Influencer{" "}
              <span className="text-lightBlue">Marketing</span>
            </h1>
            <p className="font-poppins text-[15px] md:text-lg lg:text-[#404b68] text-white mb-[40px] lg:mb-[50px]">
              We use top influencers to help brands engage and activate
              audiences all around the world, with a specialization in the
              Arabic-speaking nations of the Middle East and North Africa.
              <br />
              <br />
              We select and tailor-made contracts for the profiles most closely
              related to your objectives, your target, and the creative concept
              that we have devised to impact a much larger audience.
            </p>
            <button className="lg:hidden text-base font-poppins text-white btn-gradient-blue  px-10 py-3 rounded-[90px] lg:text-xl lg:px-[55px] lg:py-[15px] ">Learn More</button>
            <button className="hidden lg:block text-base font-poppins text-white btn-gradient px-10 py-3 rounded-[90px] lg:text-xl lg:px-[55px] lg:py-[15px] ">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}
