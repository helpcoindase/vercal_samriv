"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { ASSET_PREFIX } from "config";
import WhiteBorderbtn from "../Buttons/WhiteBorderbtn";
import Link from "next/link";

const programmes = [
  {
    icon: "ayurvedic-treatment.svg",
    title: "Ayurveda Treatment",
    image: "/assets/images/ayurveda-tratment.webp",
    link: "ayurvedic-treatment-in-kerala",
  },
  {
    icon: "panchakarma.svg",
    title: "Panchakarma Treatment",
    image: "/assets/images/treatment-2.webp",
    link: "panchakarma-treatment-in-kerala",
  },
  {
    icon: "sinusitis.svg",
    title: "Sinusitis Treatment", image: "/assets/images/sinus-treatment.webp",
    link: "sinusitis-ayurvedic-treatment-in-kerala",
  },
  {
    icon: "autsim.svg",
    title: "Autism Treatment", image: "/assets/images/treatment-3.webp",
    link: "best-ayurvedic-treatment-for-autism-in-kerala",
  },
  {
    icon: "weight-loss-treatment.svg",
    title: "Weight Loss Treatment", image: "/assets/images/psoriasis-treatment.webp",
    link: "weight-loss-ayurvedic-treatment-in-kerala",
  },
  {
    icon: "monsoon-treatment.svg",
    link: "ayurveda-monsoon-treatment-in-kerala", image: "/assets/images/lumbar-treatment.webp",
    title: "Monsoon Treatment",
  },
  {
    icon: "parkinson-disease.svg",
    link: "parkinsons-ayurvedic-treatment-in-kerala", image: "/assets/images/parknsons-treatment.webp",
    title: "Parkinsons Ayurvedic Treatment",
  },
  {
    icon: "parkinson-disease.svg",
    link: "ayurvedic-stroke-treatment-in-kerala", image: "/assets/images/ayurveda-tratment.webp",
    title: "Ayurvedic Stroke Rehabilitation in Kerala",
  },
];

export default function TreatmentProgrammesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <section className="overflow-hidden bg-white pt-[120px] max-xl:pt-[80px] max-md:pt-[50px] max-w-[120rem] mx-auto">
      <div className="mx-auto ">
        {/* Heading */}
        <div className="mx-auto w-[90%] max-w-[120rem]">

          <div className="mx-auto mb-[65px] w-[90%] max-w-[120rem] text-center max-md:mb-[40px]  ">
            <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              Treatment Programmes
            </p>

            <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
              Ayurvedic Treatments
            </h2>
            <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0]">Personalised therapies for healing, wellness, and rejuvenation.</p>
          </div>
          <div className="max-lg:mt-[20px] flex justify-center sm:justify-end  max-w-[100%] xl:max-w-[105%]">
            <WhiteBorderbtn text="View More" link="/treatments" />
          </div>
        </div>

        {/* Slider */}
        <div className="ml-auto w-[96%] max-md:w-[94%] mt-[40px]">
          <Swiper
            modules={[Autoplay]}
            loop={false}
            speed={900}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={() => {
              setIsBeginning(false);
              setIsEnd(false);
            }}
            spaceBetween={35}
            slidesPerView={4.35}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 18,
              },
              600: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              900: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4.5,
                spaceBetween: 28,
              },
              1600: {
                slidesPerView: 5.5,
                spaceBetween: 35,
              },
            }}
          >
            {programmes.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-[28px] h-full">

                  {/* Image */}
                  <Image
                    src={`${ASSET_PREFIX}${item.image}`}
                    alt={item.title}
                    width={400}
                    height={500}
                    unoptimized
                    className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.06]"
                  />

                  {/* Default Green Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#119d78]/80 via-black/10 to-transparent transition duration-500 group-hover:opacity-0" />

                  {/* Hover Orange Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e36502]/85 via-[#e36502]/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute bottom-[26px] left-[28px] right-[24px] z-10 transition duration-500 max-md:left-[24px]">
                    <p className="mb-[8px] text-[13px] font-[400] uppercase leading-[18px] tracking-[4px] text-white max-sm:text-[11px] max-sm:tracking-[3px] text-[#F2F0EE]">
                      Treatment
                    </p>

                    <h3 className="mb-[8px] text-[26px] font-[500] leading-[30px] text-white 
                    text-[20px] leading-[26px] 
                    sm:text-[24px] sm:leading-[30px]
                       xl:text-[28px] xl:leading-[32px] ">
                      {item.title}
                    </h3>

                    {/* <p className="text-[15px] font-[300] leading-[20px] text-white/90 max-sm:text-[14px] text-[#F2F0EE]">
                      13+ Treatments available
                    </p> */}
                  </div>

                  {/* Border Hover */}
                  <div className="absolute inset-0 rounded-[28px] border border-white/0 transition duration-500 group-hover:border-white/40" />
                  <Link href={`/${item.link}`} className="absolute inset-0 rounded-[28px] transition duration-500 " aria-label={item.title}></Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="mt-[20px] flex justify-end gap-[20px] pr-[6%]">
            {/* Prev */}
            <button aria-label="Previous Slide"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`
      group w-[50px] h-[50px] rounded-full border border-[#ddd]
      flex items-center justify-center transition duration-300
      ${isBeginning
                  ? "opacity-50 cursor-not-allowed bg-[#f5f5f5]"
                  : "bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] cursor-pointer"
                }
    `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                className={`
        w-6 h-6 transition duration-300
        ${isBeginning
                    ? "stroke-[#999]"
                    : "stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white"
                  }
      `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next */}
            <button aria-label="Next Slide"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`
      group w-[50px] h-[50px] rounded-full border border-[#ddd]
      flex items-center justify-center transition duration-300
      ${isEnd
                  ? "opacity-50 cursor-not-allowed bg-[#f5f5f5]"
                  : "bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] cursor-pointer"
                }
    `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                className={`
        w-6 h-6 transition duration-300
        ${isEnd
                    ? "stroke-[#999]"
                    : "stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white"
                  }
      `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}