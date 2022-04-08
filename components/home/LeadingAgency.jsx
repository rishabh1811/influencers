/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function LeadingAgency() {
  return (
    <>
      <div className="container text-center max-w-[1100px] mx-auto relative lg:text-left">
        <img className="hidden lg:block" src="/home/gaming-bg.png" alt="" />

        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:absolute top-1/2 left-[120px] lg:-translate-y-1/2 max-w-[900px]  lg:text-white">
          <img
            className="w-[300px] lg:w-[493px] mx-auto"
            src="/home/MENA-INFLUENCERS.png"
            alt=""
          />
          <div className="grid-reverse">
            <h1 className="text-lg font-changa font-semibold lg:text-[35px] leading-relaxed mb-[10px] md:mb-5">
              The Leading Agency for{" "}
              <span className="text-lightBlue lg:text-black block">
                MENA Influencer Marketing
              </span>
            </h1>
            <p className="text-lg font-montserrat mb-10">
              We are a KOL Agency MENA that assures you that our group of
              experts - which includes digital marketing specialists, campaign
              managers, and media buying specialists - will walk your firm step
              by step to achieve its goals and business objectives.
              <br />
              <br />
              This is made possible by identifying KPIs, goals, and other needs
              that may have slipped under your radar, we then pass it along to
              our growing network of influencers to implement, track and report
              results in an honest and transparent way that answer all of your
              burning inquiries.
            </p>
            <button className="text-base font-poppins text-white btn-gradient px-10 py-3 rounded-[90px]">What We Do</button>
          </div>
        </div>
      </div>
    </>
  );
}
