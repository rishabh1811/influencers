/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Platforms() {
  return (
    <>
      <div className="container text-center">
        <h1 className="heading mb-[10px] md:mb-5">OUR PLATFORMS</h1>
        <p className="paragraph">
          With a complementarity between micro and macro-influencers and a
          strategic target on each platform to hit the right target population
          you wish; we can fulfill your social media goals and establish a
          community instead of just take a typical UA approach.
        </p>

        <div className="grid grid-cols-3 gap-4 mx-auto max-w-xs">
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
            <PlatformsCard />
        </div>

      </div>
    </>
  );
}

function PlatformsCard(props) {
  return (
    <>
      <div className="">
        <img className="w-[87px]" src="/home/icons/ico-instagram.png" alt="" />
      </div>


      {/* <div className="bg-white rounded-[30px] py-8">
        <h4 className="text-3xl font-bold text-[#316ad8]">200+</h4>
        <p className="text-[19px] ">Campaigns</p>
      </div> */}
    </>
  );
}
