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
import Treatments from "@/data/Treatments";
import { usePathname } from "next/navigation";
import TreatmentForm from "./TreatmentForm";

type Props = {
  slug?: string;
}

export default function SubBannerForm({ slug }: Props) {
  const data = Treatments.find((item) => item.id === slug)?.subban;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const pathname = usePathname();
  return (
    <section className="z-[999] relative">
      <div className="bg-[#DFFFF3] w-[90%] mx-auto max-w-[120rem] rounded-[30px] sm:rounded-[50px]">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" py-[25px] px-[15px] xsm:p-[25px] md:p-[50px_40px] mlg:p-[90px_60px] flex flex-col justify-between">
              <div className="">
              <h1 className=" font-[500] text-[#19805a] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.03em] w-[90%] sm:w-[80%]">
                {/* <span className="text-white text-shadow-sm"></span> */}
                {data?.wTitle}
              </h1>
              <p className="my-[25px] lg:mb-[60px] lg:mt-[20px] text-[#304A10] w-full lg:w-[90%] hidden sm:block ">
                {data?.content}
              </p>
              </div>
              <div className="btn-wrp  flex-wrap gap-[10px] sm:gap-[20px] hidden sm:flex  ">
                {pathname != "/thanks" && (<WhiteBtn text="Book Now" link="/contact-us" />)}
                {pathname != "/thanks" && (<LightGreenBtn text="Explore Treatments" link="/treatments" />)}
              </div>
            </div>
            <div className="relative mlg:pr-[3%] 2xl:w-[80%] 2xl:ml-auto">
               <TreatmentForm />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
