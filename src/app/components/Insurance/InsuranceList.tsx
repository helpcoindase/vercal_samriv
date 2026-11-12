"use client";
import React from "react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
export default function InsuranceList() {
  const logos = [
    { src: "/paramount-health-insurance.webp", alt: "Paramount Health" },
    { src: "/sbi-general-insurance.webp", alt: "SBI General Insurance" },
    { src: "/bajaj-allianz-insurance.webp", alt: "Bajaj Allianz" },
    { src: "/galaxy-logo.webp", alt: "Galaxy" },
    { src: "/volo-insurance.webp", alt: "Volo Insurance" },
    { src: "/link-k-insurance.webp", alt: "Link Insurance" },
    { src: "/star-healtth-insurance.webp", alt: "Star Health Insurance" },
    { src: "/care-health-insurance.webp", alt: "Care Health Insurance" },
    { src: "/icici-lombard.webp", alt: "ICICI Lombard" },
    { src: "/hdfc-ergo.webp", alt: "HDFC Ergo" },
    { src: "/magma-hdi-general-insurance.webp", alt: "Magma HDI" },
    { src: "/aditya-birla-insurance.webp", alt: "Aditya Birla Capital" },
    {
      src: "/reliance-health-insurance.webp",
      alt: "Reliance Health Insurance",
    },
    {
      src: "/md-india-health-insurance.webp",
      alt: "MD India Health Insurance",
    },
    {
      src: "/digit-insurance.webp",
      alt: "Digit Insurance",
    },
    {
      src: "/akna-logo.webp",
      alt: "Akna Insurance",
    },

    { src: "/liberty-insurance.webp", alt: "Liberty Insurance", },
    { src: "/vidal-health-logo.webp", alt: "Vidal Health" },
    { src: "/fhpl-logo.webp", alt: "FHPL Logo" },
    { src: "/iffco-tokio-logo.webp", alt: "IFFCO Tokio Logo" },
    { src: "/health-insurance-logo.webp", alt: "Health Insurance Logo" },
    { src: "/manipal-cigna-logo.webp", alt: "Manipal Cigna Logo" },
    { src: "/heritage-health-logo.webp", alt: "Heritage Health Logo" },
  ];

  return (
    <>
      <section className="pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
        <div className="">
          <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px] text-center">
            THE AYURVEDIC TREATMENTS
          </p>
          <h3 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[80%] text-center m-auto max-sm:text-center max-sm:mx-auto">
            Insurance
          </h3>
          <div className="w-[90%] m-auto px-4 pt-8 mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[0]">
            <div className="grid grid-cols-4 max-lg:grid-cols-3 max-[767px]:grid-cols-2! max-sm:grid-cols-1! justify-center items-center gap-[20px]  max-md:gap-[15px]">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={`${ASSET_PREFIX}/assets/images/icons${logo.src}`}
                  alt={logo.alt}
                  width={20}
                  height={20}
                  className="h-20 w-auto object-contain m-auto p-[5px] hover:scale-[1.05]  transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
