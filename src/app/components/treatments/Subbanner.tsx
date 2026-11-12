"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "../../../../config";
import WhiteBtn from "../Buttons/WhiteBtn";
import LightGreenBtn from "../Buttons/LightGreenBtn";
export default function Subbanner() {
  const images = [
    // "/assets/images/subbanner/medical-tourism.webp",
    "/assets/images/blog-3.webp",
    "/assets/images/blog-3.webp",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="">
      <div className="bg-[#DFFFF3] w-[90%] mx-auto max-w-[120rem] rounded-[30px] sm:rounded-[50px]">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" py-[25px] px-[15px] xsm:p-[25px] md:p-[50px_40px] mlg:p-[90px_60px]">
              <h1 className=" font-[500] text-[#19805a] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.03em] w-[90%] sm:w-[80%]">
                {/* <span className="text-white text-shadow-sm"></span> */}
                Treatments
              </h1>
              <p className="my-[25px] lg:mb-[60px] lg:mt-[20px] text-[#304A10] w-full lg:w-[90%] ">
                To keep alive the legacy of Ayurveda by adapting modern innovations into holistic healing practices in building a healthier world.
              </p>
              <div className="btn-wrp flex flex-wrap gap-[10px] sm:gap-[20px]  ">
                <WhiteBtn text="Book Now" link="/contact-us" />

              </div>
            </div>
            <div className="relative mlg:pr-[3%]">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="w-full h-full">
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[200px] sm:h-[250px] lg:h-full">
                      <Image
                        src={`${ASSET_PREFIX}${src}`}
                        alt={"Treatments Banner"}
                        fill
                        unoptimized
                        className="object-cover h-full rounded-[0_0_30px_30px] sm:rounded-[0_0_50px_50px] lg:rounded-[0_50px_50px_0] object-center"
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="absolute bottom-[60px] right-4 mlg:bottom-[5%] mlg:right-[7%] flex gap-[8px] z-10 w-fit ">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to Slide ${idx}`}
                    onClick={() => {
                      if (swiperRef.current) {
                        swiperRef.current.slideToLoop(idx);
                      }
                    }}
                    className={`w-[12px] h-[12px] rounded-full transition-all duration-300 cursor-pointer
              ${activeIndex === idx ? "bg-white w-[35px] " : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
