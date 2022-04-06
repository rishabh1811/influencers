import React from "react";

export default function Campaign() {
  return (
    <>
      <div className="container text-center">

        <div className="lg:grid lg:grid-cols-2 ">

          <div className="">
            <img className="mx-auto" src="/home/camgaign-img.png" alt="" />
          </div>

          <div className="grid-reverse">
            <h1 className="heading mb-[10px] md:mb-5">Start a campaign with us!</h1>
            <p className="paragraph mb-[40px] lg:mb-[50px]">
              Simply write us a message to tell us about your upcoming project! Our
              salesperson will contact you as soon as possible and link you to one
              of our committed specialists in order to experience what influencer
              marketing can be like when you work with the finest!
            </p>
            <button className="btn btn-gradient text-white">Contact Us</button>
          </div>
        </div>

      </div>
    </>
  );
}
