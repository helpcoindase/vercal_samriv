import dynamic from "next/dynamic";
import Header from "./components/layout/Header";
import Banner from "./components/Home/Banner";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";

const HealthSolutionSection = dynamic(
  () => import("./components/Home/HealthSolutionSection"),
  {
    loading: () => null,
  }
);

const TreatmentProgrammesSection = dynamic(
  () => import("./components/Home/TreatmentProgrammesSection"),
  {
    loading: () => null,
  }
);

const TherapyChoiceSection = dynamic(
  () => import("./components/Home/TherapyChoiceSection"),
  {
    loading: () => null,
  }
);

const Ourdoctors = dynamic(
  () => import("./components/Home/Ourdoctors"),
  {
    loading: () => null,
  }
);

const NearbyPlaces = dynamic(
  () => import("./components/Home/NearbyPlaces"),
  {
    loading: () => null,
  }
);

const BlogSection = dynamic(
  () => import("./components/Home/BlogSection"),
  {
    loading: () => null,
  }
);

const Faq = dynamic(
  () => import("./components/Home/Faq"),
  {
    loading: () => null,
  }
);

const Getquote = dynamic(
  () => import("./components/layout/Getquote"),
  {
    loading: () => null,
  }
);

const Footer1 = dynamic(
  () => import("./components/layout/Footer"),
  {
    loading: () => null,
  }
);

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/");
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner />

        <div className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <HealthSolutionSection />
        </div>

        <TreatmentProgrammesSection />

        <TherapyChoiceSection />

        <div className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <Ourdoctors />
        </div>

        <div className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <NearbyPlaces />
        </div>

        <div className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]">
          <BlogSection />
        </div>

        <Faq />

        <Getquote />
      </main>

      <Footer1 />
    </>
  );
}