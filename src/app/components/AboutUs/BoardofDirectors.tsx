"use client";

import { useRef } from "react";
import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

type Director = {
  name: string;
  position: string;
  image: string;
  alt?: string;
};

const topDirectors: Director[] = [
  {
    name: "Mr. Sunilkumar P.G.",
    position: "Managing Director",
    image: "/assets/images/sunilkumar.webp",
  },
  {
    name: "Dr. Varghese Chirayath",
    position: "Director",
    image: "/assets/images/varghese-chirayath.webp",
  },
];

const gridDirectors: Director[] = [
  {
    name: "Mrs. Ganga Sunilkumar",
    position: "Director",
    image: "/assets/images/ganga-sunilkumar.webp",
  },
  {
    name: "Mr. Nandkishan P.S.",
    position: "Director",
    image: "/assets/images/nandkishan.webp",
  },
  {
    name: "Mrs. Reena Varghese",
    position: "Director",
    image: "/assets/images/reena-varghese.webp",
  },
  {
    name: "Mr. Vivek Varghese",
    position: "Director",
    image: "/assets/images/vivek-varghese.webp",
  },
];

function DirectorCard({ director }: { director: Director }) {
  return (
    <div className="text-center mlg:text-left group">
      <div className="mb-[20px] rounded-[30px] overflow-hidden">
        <Image
          src={`${ASSET_PREFIX}${director.image}`}
          alt={director.alt || director.name}
          width={350}
          height={400}
          className="rounded-[30px] w-full flex-none mx-auto mlg:mx-0 group-hover:scale-105 transition-transform duration-300 object-cover h-[300px] sm:h-[400px]  border border-[#e7e7e7] max-[400px]:w-[250px]"
        />
      </div>

      <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
        {director.name}
      </p>

      <p className="text-[18px] leading-[26px] text-[#AE774D] mt-[4px]">
        {director.position}
      </p>
    </div>
  );
}

export default function BoardofDirectors() {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="founder-message">
      <div>
        {/* Title Section */}
        <div className="w-[90%] m-auto max-w-[105rem]">
          <div className="text-center">
            <p className="uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              THE MANAGEMENT
            </p>

            <h2 className="font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
              Board of Directors
            </h2>
          </div>
        </div>

        {/* Top Directors */}
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mx-auto mt-[30px] sm:mt-[60px] max-w-[100rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px] mx-auto w-[90%] sm:w-full">
            {topDirectors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>
        </div>

        {/* Grid 4 Section */}
        <div className="m-auto w-[90%] max-w-[120rem] mt-[30px] sm:mt-[60px] relative">
          {/* 2xl and above grid */}
          <div className="hidden 2xl:grid grid-cols-4 gap-[30px] w-[100%] xl:w-[90%] 2xl:w-[85%] mx-auto">
            {gridDirectors.map((director) => (
              <DirectorCard key={director.name} director={director} />
            ))}
          </div>

          {/* Below 2xl slider */}
          <div className="block 2xl:hidden relative">
            {/* Custom Navigation Buttons */}
            <div
              ref={prevRef}
              className="prev-nav group absolute top-1/2 -translate-y-1/2 left-[-1.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe] w-[35px] h-[35px] sm:w-auto sm:h-auto flex items-center justify-center max-[400px]:!left-[1.5rem] max-[350px]:!left-[0.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white transition duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>

            <div
              ref={nextRef}
              className="next-nav group absolute top-1/2 -translate-y-1/2 right-[-1.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border border-[#d6cbbe] w-[35px] h-[35px] sm:w-auto sm:h-auto flex items-center justify-center max-[400px]:!right-[1.5rem] max-[350px]:!right-[0.5rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                className="w-6 h-6 stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white transition duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                580: { slidesPerView: 2 },
                1050: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  const navigation = swiper.params.navigation as NavigationOptions;

                  if (navigation && prevRef.current && nextRef.current) {
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
            >
              {gridDirectors.map((director) => (
                <SwiperSlide key={director.name}>
                  <DirectorCard director={director} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}