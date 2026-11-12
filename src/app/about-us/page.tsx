import AboutBanner from "../components/AboutUs/Aboutbanner";
import Footer1 from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import Overview from "../components/AboutUs/Overview";
import VisionMission from "../components/AboutUs/VisionMission";
import Ourdoctors from "../components/Home/Ourdoctors";
import NearbyPlaces from "../components/Home/NearbyPlaces";
import Header from "../components/layout/Header";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";
import QuickLink from "../components/OurDoctors/QuickLink";
import BoardofDirectors from "../components/AboutUs/BoardofDirectors";
export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/about-us");
}

export default function AboutUs() {
  const slides = [
    { href: "#overview", label: "Overview" },
    { href: "#vismis", label: "Vision & Mission" },
    { href: "#foundermsg", label: "Board of Directors" },
    { href: "#docs", label: "Our Doctors" },
    { href: "#infra", label: "Infrastructure" },
  ];

  return (
    <>
      <Header />

      <main className="main">
        <AboutBanner />

        <div>
          <Breadcrumbs pageKey="about-us" />
        </div>

        <QuickLink slides={slides} />

        <div id="overview" className="scroll-mt-[180px]" />
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <Overview />
        </section>

        <div id="vismis" className="scroll-mt-[180px]" />
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <VisionMission />
        </section>

        <div id="foundermsg" className="scroll-mt-[180px]" />
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <BoardofDirectors />
        </section>

        <div id="docs" className="scroll-mt-[180px]" />
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <Ourdoctors />
        </section>

        <div id="infra" className="scroll-mt-[180px]" />
        <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]">
          <NearbyPlaces />
        </section>

        <Getquote />
      </main>

      <Footer1 />
    </>
  );
}
