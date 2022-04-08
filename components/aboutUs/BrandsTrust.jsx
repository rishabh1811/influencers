/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function BrandsTrust() {
  return (
    <>
      <div className="container text-center md:text-left md:grid md:grid-cols-2 md:place-items-center gap-10">
        {/* Grid Col 1 */}
        <div className="pb-8 md:pb-5">
          <h1 className="text-xl pb-1 font-bold md:pb-5 md:text-[35px] text-[#0d3c5a]">
            BRANDS TRUST US...
          </h1>
          <p className="text-base md:text-[21px]">
            We collaborate with prominent multinational brands and businesses to
            develop and implement cutting-edge influencer marketing strategies
            and campaigns. We specialize in developing and executing bespoke
            influencer marketing plans based on particular goals.
            <br />
            <br />
            Arabia E-Advertising specializes in the development and
            implementation of effective tactics, ranging from brand recognition
            to conversion-driven campaigns.
          </p>
        </div>

        {/* Grid Col 1 */}
        <div className="grid-reverse">
          <img src="/about/about-img-2.png" alt="" className="" />
        </div>
      </div>
    </>
  );
}
