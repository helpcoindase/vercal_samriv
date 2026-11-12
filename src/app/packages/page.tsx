
import Footer1 from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import RecognizedBy from "../components/Includes/RecognizedBy";
import Overview from "../components/AboutUs/Overview";
import VisionMission from "../components/AboutUs/VisionMission";
import Ourdoctors from "../components/Home/Ourdoctors";
import NearbyPlaces from "../components/Home/NearbyPlaces";
import Header from "../components/layout/Header";
import Managementmessage from "../components/AboutUs/Managementmessage";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";

import PackagesBanner from "../components/packages/PackageBanner";
import WellnessPricingTable from "../components/packages/PriceTable";
import Information from "../components/packages/Information";
import PackageInclusive from "../components/packages/PackageInclusive";
import PackageExclusive from "../components/packages/PackageExclusive";
import PickUpDrop from "../components/packages/Pickup";
export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/packages");
}

export default function Packages() {


  return (
    <>
      <Header />
      <main className="main">
        <PackagesBanner />
        <div className=""><Breadcrumbs pageKey="packages" /></div>
                
        {/* <div className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] ">
          <RecognizedBy />
        </div> */}
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] " id="overview"> <WellnessPricingTable /> </section>
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] " id="vismis"><Information /></section>
        
        <PackageInclusive />
        <PackageExclusive />
        <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px] " id="pickupdrop"><PickUpDrop /></section>
        <Getquote />
      </main>
      <Footer1 />
    </>
  );
}
