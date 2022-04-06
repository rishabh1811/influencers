import React from "react";

export default function NumbersSpeak(props) {
  return (
    <>
      <div className="container text-center">
        <h1 className="heading mb-[10px] md:mb-5">Let the numbers speak</h1>
        <p className="paragraph">
          With over 30+ campaigns signed, we have worked with 10+ brands,
          providing an influencer pool of 70+ influencers and have generated 1
          billion+ Impressions. We are growing steadily, so is our community and
          our partnerships with leading brands.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
          <NumbersCard />
        </div>
      </div>
    </>
  );
}

function NumbersCard() {
  return (
    <>
      <div className="bg-white rounded-[30px] py-8">
        <h4 className="text-3xl font-bold text-[#316ad8]">200+</h4>
        <p className="text-[19px] ">Campaigns</p>
      </div>
    </>
  );
}
