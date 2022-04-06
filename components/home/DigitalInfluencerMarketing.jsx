/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DigitalInfluencerMarketing() {
  return (
    <>
      <div className="container text-center orange-pattern-bg max-w-[1070px] mx-auto relative">
        <img className="hidden lg:block" src="/home/content-box-3.png" alt=""  />
        
        <div className="lg:grid lg:grid-cols-2 lg:absolute top-1/2 left-0 lg:-translate-y-1/2 max-w-[900px]">
          <div className="">
              <img className="mx-auto" src="/home/digital-img-2.png" alt="" />
          </div>
          
          <div className="">
            <h1 className="heading mb-[10px] md:mb-5">Digital Influencer <span className="text-lightBlue">Marketing</span></h1>
            <p className="paragraph mb-[40px] lg:mb-[50px]">
              We help brands engage and activate audiences worldwide through top
              influencers. We develop and execute creative influencer marketing
              strategies to amplify your brand story at scale and reach millions of
              people.
            </p>
            <button className="btn text-white bg-blue-400">Learn More</button>
          </div>
        </div>


      </div>
    </>
  );
}
