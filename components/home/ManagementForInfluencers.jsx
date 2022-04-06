/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ManagementForInfluencers() {
  return (
    <>
      <div className="container text-center ">
       
       
        <div className="lg:grid lg:grid-cols-2">
          <div className="">
            <img className="mx-auto" src="/home/management-img-mobile.png" alt="" />
          </div>
          <div className="grid-reverse">
            <h1 className="heading mb-[10px] md:mb-5">Management for Influencers</h1>
            <p className="paragraph mb-[40px] lg:mb-[50px]">
              You are an influencer and in need of support? Then we need to talk.
              Our management team will give you the support you need. We will
              provide our help in channel management, connect you with top brands
              and expand your community.
            </p>
            <button className="btn text-white bg-blue-400">Learn More</button>
          </div>
        </div>


      </div>
    </>
  );
}
