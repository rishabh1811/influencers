/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ReachMillions(props) {
  return (
    <>
      <div className="container text-center max-w-[1070px] mx-auto relative">
        <img className="hidden lg:block" src="/home/gaming-bg.png" alt="" />

        <div className="lg:flex lg:flex-row-reverse lg:absolute top-1/2 right-0  lg:-translate-y-1/2 max-w-[900px]  lg:text-white">
          <img
            className="w-[300px] mx-auto"
            src="/home/MENA-INFLUENCERS.png"
            alt=""
          />
          <div className="">
            <h1 className="heading mb-[10px] md:mb-5">
              The Leading Agency for{" "}
              <span className="text-lightBlue lg:text-black block">
                MENA Influencer Marketing
              </span>
            </h1>
            <p className="paragraph">
              Our team of Experts Includes Campaign Managers, Digital Marketing
              Specialists And Media Experts that Will Help your Company and
              Support Your Brand from Defining KPIs, Goals And Needs, Passing By
              influencers Identification And Storytelling, To Campaign
              Execution, Tracking and Reporting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
