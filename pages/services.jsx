import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EsportsSpecialized from "../components/services/EsportsSpecialized";
import ReachMillions from "../components/services/ReachMillions";
import TalentManagement from "../components/services/TalentManagement";
import WhatWeDo from "../components/services/WhatWeDo";
import NumbersSpeak from "../components/home/NumbersSpeak";
import Platforms from "../components/home/Platforms";
import Campaign from "../components/home/Campaign"

export default function Services() {
  return (
    <>
      <Navbar />
      <WhatWeDo />
      <ReachMillions />
      <EsportsSpecialized />
      <TalentManagement />
      <NumbersSpeak />
      <Platforms />
      <Campaign />

      <Footer />
    </>
  );
}
