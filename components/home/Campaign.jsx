/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Campaign() {
  return (
    <>
      <div className="container text-center md:text-left max-w-[1170px]">

        <div className="md:grid md:grid-cols-2 gap-4">

          <div className="">
            <img className="mx-auto" src="/home/camgaign-img.png" alt="" />
          </div>

          <div className="grid-reverse">
            <h1 className="text-xl md:text-[35px] leading-relaxed font-montserrat font-bold mb-[10px] md:mb-5">Start a campaign with us!</h1>
            <p className="text-[15px] md:text-lg leading-relaxed font-poppins text-[#404b68] mb-[40px] lg:mb-[50px]">
              Simply write us a message to tell us about your upcoming project! Our
              salesperson will contact you as soon as possible and link you to one
              of our committed specialists in order to experience what influencer
              marketing can be like when you work with the finest!
            </p>
            <button className=" text-base font-poppins text-white btn-gradient px-10 py-3 rounded-[90px] lg:text-xl lg:px-[55px] lg:py-[15px] ">Contact Us</button>
          </div>
        </div>

      </div>
    </>
  );
}
