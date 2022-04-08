/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function WhatWeDo() {
  return (
    <>
      {/* <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-[22px] md:text-[39px] font-bold text-[#006aff]">WHAT WE DO...?</h1>
          <p className="text-base text-[#404b68]">
            Arabia E-Advertising is a MENA gaming influencer agency that manages
            influencer marketing campaigns for a variety of clients and
            represents some of the most popular Twitch, YouTube, and gaming
            content creators.
            <br />
            <br />
            We are always looking for top-tier and up-and-coming influencers to
            represent. Arabia E-Advertising allows you to concentrate on growing
            your brand and community while we find commercial possibilities for
            you and negotiate the finest terms to ensure that you are treated
            properly. Our esports knowledge is unrivaled, from finding you
            endorsements and sponsorships to offering one-on-one advice.
          </p>
        </div>
      </div> */}

      <div className="container text-center  max-w-[1070px] mx-auto relative">
        <img
          className="hidden lg:block"
          src="/services/service-page-header-bg.png"
          alt=""
        />

        <div className=" 992:absolute top-1/2 left-1/2 992:-translate-x-1/2 992:-translate-y-1/2 max-w-[900px]">
          <div className="">
            <h1 className="text-[22px] md:text-[39px] font-bold text-[#006aff] mb-[10px] md:mb-5">
              WHAT WE DO...?
            </h1>
            <p className="text-base text-[#404b68] mb-[40px] lg:mb-[50px]">
              Arabia E-Advertising is a MENA gaming influencer agency that
              manages influencer marketing campaigns for a variety of clients
              and represents some of the most popular Twitch, YouTube, and
              gaming content creators. We are always looking for top-tier and
              up-and-coming influencers to represent. Arabia E-Advertising
              allows you to concentrate on growing your brand and community
              while we find commercial possibilities for you and negotiate the
              finest terms to ensure that you are treated properly. Our esports
              knowledge is unrivaled, from finding you endorsements and
              sponsorships to offering one-on-one advice.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
