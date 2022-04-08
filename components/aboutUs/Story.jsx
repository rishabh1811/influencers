/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Story(props) {
  return (
    <>
      <div className="container text-center md:text-left md:grid md:grid-cols-2 md:place-items-center gap-10">
        {/* Grid Col 1 */}
        <div className="pb-8 md:pb-5">
          <h1 className="text-xl font-bold md:pb-5 md:text-[35px] text-[#0d3c5a]">
            OUR STORY
          </h1>
          <p className="text-base md:text-[21px]">
            Arabia E-Advertising was formed in 2006 with the goal of changing
            the game of marketing tactics and the way media channels are used.
            <br />
            <br />
            Our staff is a specialist in reaching the correct audience and
            providing the highest ROI. We assist you in finding the proper
            influencers, organizing events, managing brand promotions, and
            executing digital advertising campaigns.
          </p>
        </div>

        {/* Grid Col 1 */}
        <div className="">
          <img src="/about/dubai-agency-image.png" alt="" className="" />
        </div>
      </div>
    </>
  );
}
