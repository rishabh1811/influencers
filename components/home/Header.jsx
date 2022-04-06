import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="container text-center header-bg text-white">
        <h1 className="heading">GAMING & ESPORTS TALENT AGENCY</h1>

        <p className="paragraph" >#Connect your brand with arabic millennials</p>

        <div className="flex flex-row justify-center space-x-6">
            <p className="text-orange text-bold">+70 talents</p>
            <p className="text-orange text-bold">+100M Total Reach</p>
        </div>

        <div className="carousel">
            <h1>carousel</h1>
        </div>
      </div>
    </>
  );
}
