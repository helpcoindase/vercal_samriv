"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Image from "next/image";
import type { NavigationOptions } from "swiper/types";
import { useRouter } from "next/navigation";
import WhiteBorderbtn from "../Buttons/WhiteBorderbtn";
import { ASSET_PREFIX } from "config";

export default function Ourdoctors() {
  const router = useRouter();

  const doctors = [
    {
      img: "/assets/images/dr-kn-subramanian-namboothiri.webp",
      name: "Dr. K. N. Subramanian Namboothiri",
      id: "dr-k-subramanian",
      degree: "BAMS, MD(Ay) - Medical Director",
    },
    {
      img: "/assets/images/dr-rajeeve.webp",
      name: "Dr. B. Rajeeve",
      id: "dr-k-rajeeve",
      degree: "BAMS, MD(Ay)MD(Modern Medicine) - Medical Superintendent",
    },
    {
      img: "/assets/images/dr-jeevan-k-jose.webp",
      name: "Dr. Jeevan K Jose",
      id: "dr-k-jeevan",
      degree: "BAMS, MD(Ay), PGDCFT, MBA(Hrm) - Senior Medical Officer",
    },
    {
      img: "/assets/images/dr-jomy-joseph.webp",
      name: "Dr. Jomy Joseph",
      id: "dr-jomy",
      degree: "BAMS, MD(Ay) - Senior Consultant",
    },
    {
      img: "/assets/images/dr-valsaladevi-k.webp",
      name: "Dr. Valsaladevi K",
      id: "five",
      degree: "BAMS, FAGE, YIC, CNAD, MBA - Senior Consultant",
    },
    {
      img: "/assets/images/dr-athira.webp",
      name: "Dr. Athira H",
      id: "six",
      degree: "BAMS, Msc. in Yoga (Medical Officer)",
    },
    {
      img: "/assets/images/dr-safeela.webp",
      name: "Dr. Safeela S",
      id: "seven",
      degree:
        "BAMS, Dip. in Yoga Teachers Training. (Resident Medical Officer)",
    },
    {
      img: "/assets/images/dr-vrindha.webp",
      name: "Dr. Vrindha T",
      id: "eight",
      degree: " BAMS(Resident Medical Officer)",
    },
    {
      img: "/assets/images/dr-srihari-ts.webp",
      name: "Dr. Srihari T.S",
      id: "nine",
      degree: "BAMS Center Manager & Medical Officer",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const goToDoctor = (id: string) => {
    router.push(`/our-doctors#${id}`);
  };

  return (
    <>
      <section className="" id="doctors">
        <div className="w-[90%] m-auto max-w-[120rem]">
          <div className="text-center">
            <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              MEET OUR EXPERTS
            </p>

            <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
              Our Ayurvedic Consultants
            </h2>

            <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0] xl:w-[80%] mx-auto">
              Our experienced Ayurvedic doctors, therapists and wellness
              professionals take care of each guest with care, kindness and real
              healing expertise
            </p>
          </div>

          <div className="max-lg:mt-[20px] flex justify-center sm:justify-end max-w-[100%] xl:max-w-[105%]">
            <WhiteBorderbtn text="View All" link="/our-doctors" />
          </div>

          <div className="flex gap-[20px] w-[85%] m-[auto] pb-[0] relative mx-auto mt-[40px]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1 },
                580: { slidesPerView: 2 },
                1050: { slidesPerView: 3 },
                1600: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  const navigation = swiper.params
                    .navigation as NavigationOptions;

                  if (navigation && prevRef.current && nextRef.current) {
                    navigation.prevEl = prevRef.current;
                    navigation.nextEl = nextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }
                });
              }}
              className="w-full mx-[10%] max-mlg:mx-[13%]"
            >
              {doctors.map((doc, index) => (
                <SwiperSlide key={index} className="flex h-full group">
                  <div
                    className="doc-div flex flex-col justify-start p-3 bg-white rounded-2xl w-full border-2 border-transparent hover:border-[#7ec6aa] cursor-pointer h-full pb-10 relative max-[480px]:border-[#7ec6aa] transition duration-200 ease-in-out"
                    onClick={() => goToDoctor(doc.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") goToDoctor(doc.id);
                    }}
                  >
                    <div className="w-full h-fit rounded-3xl overflow-hidden group relative">
                      <div className="w-full h-full overflow-hidden rounded-2xl">
                        <Image
                          alt={doc.name}
                          width={342}
                          height={100}
                          className="w-full h-auto transition duration-500 group-hover:scale-105 object-cover"
                          src={`${ASSET_PREFIX}${doc.img}`}
                        />
                      </div>
                    </div>

                    <div className="p-3 pb-[0px] max-h-[100px] h-full flex flex-col justify-between gap-[20px]">
                      <div>
                        <h3 className="font-[600] xxl:text-[20px] xxl:leading-[26px] max-xl:text-[18px] max-xl:leading-[24px] text-lg leading-6 text-[#047E4F] pt-2 font-[mulish]!">
                          {doc.name}
                        </h3>

                        <p className="xxl:text-[18px] xxl:leading-[24px] max-xl:text-[16px] max-xl:leading-[22px] text-[#606060] pt-1">
                          {doc.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {/* Custom Navigation Buttons */}
            <div
              ref={prevRef}
              className="prev-nav group absolute top-1/2 -translate-y-1/2 left-[-4.5rem] max-md:left-[-2.5rem] max-sm:left-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border-1 border-[#d6cbbe] w-[35px] h-[35px] sm:w-[auto] sm:h-[auto]"
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
              className="next-nav group absolute top-1/2 -translate-y-1/2 right-[-4.5rem] max-md:right-[-2.5rem] max-sm:right-[-1.5rem] z-10 cursor-pointer bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] p-[4px] sm:p-3 rounded-full shadow-lg transition duration-200 border-1 border-[#d6cbbe] w-[35px] h-[35px] sm:w-[auto] sm:h-[auto]"
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
          </div>
        </div>
      </section>
    </>
  );
}