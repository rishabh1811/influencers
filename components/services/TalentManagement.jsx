/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TalentManagement(props) {
  return (
    <>
      <div className="container text-center max-w-[1070px] mx-auto relative">
        <img
          className="hidden lg:block"
          src="/services/management-2-bg-1.png"
          alt=""
        />

        <div className="lg:flex lg:flex-row lg:absolute top-1/2 lg:-translate-y-1/2 max-w-[900px]  lg:text-white">
          <img
            className="w-[300px] mx-auto"
            src="/services/m-s-2-img.png"
            alt=""
          />
          <div className="">
            <h1 className="heading text-black mb-[10px] md:mb-5">
              Talent Management
            </h1>
            <p className="paragraph text-black">
              Are you an influencer looking to broaden your reach and
              collaborate with others? We are here to assist you. Our staff will
              introduce you to some of the worlds most well-known entertainment
              and technology firms, raising your profile and carefully coaching
              you to become more than an influencer, but a brand ambassador with
              a continuous source of income .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
