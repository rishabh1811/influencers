/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function InfluencerManagement() {
  return (
    <>
      <div className="container text-center lg:text-left mx-auto max-w-[1070px]">
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <img
              className="mx-auto lg:w-[476px]"
              src="/home/management-img-mobile.png"
              alt=""
            />
          </div>
          <div className="grid-reverse">
            <h1 className="text-lg font-montserrat font-bold lg:text-[30px] lg:font-changa leading-relaxed mb-[10px] md:mb-5">
            Influencer <span className="text-lightBlue">Management</span>
            </h1>
            <p className="font-poppins text-[15px] md:text-lg lg:text-[#404b68] text-black mb-[40px] lg:mb-[50px]">
              You are an influencer and in need of support? Then we need to
              talk. Our management team will give you the support you need. We
              will provide our help in channel management, connect you with top
              brands and expand your community.
            </p>
            <button className=" text-base font-poppins text-white btn-gradient px-10 py-3 rounded-[90px] lg:text-xl lg:px-[55px] lg:py-[15px]">REACH OUT</button>
          </div>
        </div>
      </div>
    </>
  );
}
