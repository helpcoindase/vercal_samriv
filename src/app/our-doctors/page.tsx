
import Footer1 from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import Header from "../components/layout/Header";
import DoctorDetail from "../components/OurDoctors/DoctorDetail";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Doctorbanner from "../components/OurDoctors/Doctorbanner";
// import QuickLink from "../components/OurDoctors/QuickLink";
import QuickLink from "../components/OurDoctors/QuickLinkDoc";
import { getMeta } from "@/lib/getMeta";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/our-doctors");
}

export default function Doctor() {

  // const slides = [
  //   { href: "#dr-k-subramanian", label: "Dr. K. N. Subramanian Namboothiri" },
  //   { href: "#dr-k-rajeeve", label: "Dr. B. Rajeeve" },
  //   { href: "#dr-jomy", label: "Dr Jomy Joseph" },
  //   { href: "#dr-k-jeevan", label: "Dr Jeevan K Jose" },
  //   { href: "#five", label: "Dr. Valsaladevi K" },
  //   { href: "#six", label: "Dr. Athira H" },
  //   { href: "#seven", label: "Dr. Safeela S" },
  //   { href: "#eight", label: "Dr. Vrindha T" },
  // ];


  const slides = [
    { href: "#dr-k-subramanian", label: "Dr. K. N. Subramanian Namboothiri" },
    { href: "#dr-k-rajeeve", label: "Dr. B. Rajeeve" },
    { href: "#dr-jomy", label: "Dr Jomy Joseph" },
    { href: "#dr-k-jeevan", label: "Dr Jeevan K Jose" },
    { href: "#five", label: "Dr. Valsaladevi K" },
    { href: "#six", label: "Dr. Athira H" },
    { href: "#seven", label: "Dr. Safeela S" },
    { href: "#eight", label: "Dr. Vrindha T" },
    { href: "#nine", label: "Dr. Srihari T.S" },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <Doctorbanner />
        <div className=""><Breadcrumbs pageKey="our-doctors" /></div>

        <QuickLink slides={slides} />

        <DoctorDetail />
        <Getquote />
      </main>
      <Footer1 />
    </>
  );
}
