/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function EsportsSpecialized(props) {
  return (
    <>
      <div className="container text-center max-w-[1070px] mx-auto relative">
        <img
          className="hidden lg:block"
          src="/services/commentary-bg.png"
          alt=""
        />

        <div className="lg:flex lg:flex-row lg:absolute top-1/2 lg:-translate-y-1/2 max-w-[900px]  lg:text-white">
          <img
            className="w-[300px] mx-auto"
            src="/services/commentary-people.png"
            alt=""
          />
          <div className="">
            <h1 className="heading text-black mb-[10px] md:mb-5">
              Esports Specialized Consultancy, Talents, Events in MENA
            </h1>
            <p className="paragraph text-black">
              We will walk you through the right steps to establish your esports
              presence simply and quickly, through the efforts of our amazing
              team that will help you better understand the economy surrounding
              this thriving industry. Whether you are looking for opportunities
              or solutions for your business, and regardless of your current
              status, our esports consultancy agency is ready to provide you
              with all the analytics you need, as well as a roster of talent for
              all of your upcoming esports events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
