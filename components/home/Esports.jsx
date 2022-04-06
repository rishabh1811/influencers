/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Esports(props) {
  return (
    <>
      <div className="container orange-pattern-bg text-center text-white max-w-[1070px] mx-auto relative">
      <img className="hidden lg:block" src="/home/content-box-4.png" alt=""  />

        <div className="lg:grid lg:grid-cols-2 lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 max-w-[900px]">
          <div className="">
            <img className="mx-auto" src="/home/escort-img-mobile.png" alt="" />
          </div>
          <div className="">
            <h1 className="heading mb-[10px] md:mb-5">Esports Marketing Services</h1>
            <p className="paragraph mb-[40px] lg:mb-[50px]">
              Arabia E-Advertising is a MENA talent agency with both established and
              up and coming esports broadcasting talent on its roster. Whether you
              are looking to hire on-air talent for an event or are an esports
              personality looking for representation, Arabia E-Advertising can help.
            </p>
            <button className="btn text-white bg-blue-400">Learn More</button>
          </div>
        </div>


      </div>
    </>
  );
}
