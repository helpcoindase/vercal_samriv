
import Footer1 from "../components/layout/Footer";
import Getquote from "../components/layout/Getquote";
import Header from "../components/layout/Header";
import ContactForm from "../components/contact-us/Contactform";
import Address from "../components/contact-us/ConAddress";
import Map from "../components/contact-us/Map";
import ReachCampus from "../components/contact-us/Reachus";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/contact-us");
}

export default function ContactUs() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="bg-[#fff] pt-[20px] pl-[10px] w-[90%] max-w-[120rem] mx-auto relative z-index-[99]"><Breadcrumbs pageKey="contact-us" /></div>
        <ContactForm />
        <section className="w-[85%] m-auto max-2xl:w-[90%] max-w-[130rem] pb-[60px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]"> <Address /></section>
        {/* <section className="w-[85%] m-auto max-2xl:w-[90%] max-w-[130rem] pb-[60px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px]"> <RecognizedBy /></section> */}
        <Map />
        <ReachCampus />
        <Getquote />
      </main>
      <Footer1 />
    </>
  );
}
