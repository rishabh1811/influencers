import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NumbersSpeak from "../components/home/NumbersSpeak";
import Platforms from "../components/home/Platforms";
import Campaign from "../components/home/Campaign"
import Story from "../components/aboutUs/Story";
import BrandsTrust from "../components/aboutUs/BrandsTrust";

export default function About() {
  return (
    <>
      <Navbar />
      <Story />
    <BrandsTrust />

      <NumbersSpeak />
      <Platforms />
      <Campaign />

      <Footer />
    </>
  );
}
