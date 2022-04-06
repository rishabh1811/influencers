import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Campaign from "../components/home/Campaign";
import DigitalInfluencerMarketing from "../components/home/DigitalInfluencerMarketing";
import Esports from "../components/home/Esports";
import Header from "../components/home/Header";
import LeadingAgency from "../components/home/LeadingAgency";
import ManagementForInfluencers from "../components/home/ManagementForInfluencers";
import NumbersSpeak from "../components/home/NumbersSpeak";
import Platforms from "../components/home/Platforms";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LeadingAgency />
      <DigitalInfluencerMarketing />
      <ManagementForInfluencers />
      <Esports />
      <NumbersSpeak />
      <Platforms />
      <Campaign />
      <Footer />

    </>
  );
}
