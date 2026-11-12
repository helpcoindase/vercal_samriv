
import Footer1 from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import Header from "../components/layout/Header";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";
import QuickLink from "../components/OurDoctors/QuickLink";
import Subbaner from "../components/MedicalTourism/Subbaner";
import Overview from "../components/MedicalTourism/Overview";
export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/medical-tourism");
}

export default function AboutUs() {
  //   const slides = [
  //   { href: "#overview", label: "Overview" }, 

  // ];

  return (
    <>
      <Header />
      <main className="main">
        <Subbaner />
        <div className=""><Breadcrumbs pageKey="medical-tourism" /></div>
        {/* <QuickLink slides={slides} /> */}
        <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]" id="overview"> <Overview /> </section>
        <Getquote />
      </main>
      <Footer1 />
    </>
  );
}
