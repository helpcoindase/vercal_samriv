"use client";

import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ASSET_PREFIX } from "config";

const blogs = [
  {
    image: "/assets/images/blog-3.webp",
    date: "10/May/2026",
    title: "How Ayurveda Supports Modern Lifestyle Recovery",
  },
  {
    image: "/assets/images/blog-2.webp",
    date: "05/April/2026",
    title: "Can Ayurveda Help With Stress, Burnout & Mental Fatigue?",
  },
  {
    image: "/assets/images/blog-1.webp",
    date: "25/March/2026",
    title: "Signs Your Body May Need Ayurvedic Detox",
  },
];

export default function BlogSection() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="">
      <div className="mx-auto w-[85%] max-w-[120rem] max-lg:w-[90%]">
        <h2 className="font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[30px] sm:mb-[50px] tracking-[-0.02em] text-center">
          Blogs
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={45}
          loop={blogs.length > 3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation === "object") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 45,
            },
          }}
          className="w-full"
        >
          {blogs.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="group overflow-hidden rounded-[20px] border border-[#72d9bc] bg-white transition-all duration-500 hover:bg-[#bff1df]">
                <div className="pt-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:pt-[30px]">
                  <div className="overflow-hidden rounded-t-[16px]">
                    <Image
                      src={`${ASSET_PREFIX}${item.image}`}
                      alt={item.title}
                      width={590}
                      height={320}
                      style={{ height: "auto" }}
                      className="h-[290px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[250px] max-sm:h-[220px]"
                    />
                  </div>
                </div>

                <div className="min-h-[215px] bg-white px-[38px] py-[35px] transition-all duration-500 group-hover:bg-[#bff1df] max-xl:min-h-[190px] max-xl:px-[28px] max-xl:py-[32px] max-sm:min-h-0 max-sm:px-[22px] max-sm:py-[28px]">
                  <p className="mb-[35px] text-[16px] font-[400] leading-[22px] text-[#c25400] max-xl:mb-[25px] font-heading">
                    {item.date}
                  </p>

                  <h3 className="max-w-[430px] text-[22px] font-[500] leading-[30px] text-[#111] max-xl:text-[20px] max-xl:leading-[28px] max-sm:text-[18px] max-sm:leading-[26px] w-[80%]">
                    {item.title}
                  </h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="mt-[20px] flex justify-end gap-[20px] max-[480px]:gap-[12px]">
          {/* Prev */}
          <button
            ref={prevRef}
            type="button"
            aria-label="Previous blog"
            className="custom-prev group w-[50px] h-[50px] max-[480px]:w-[40px] max-[480px]:h-[40px] rounded-full border border-[#ddd] flex items-center justify-center bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-6 h-6 max-[480px]:w-5 max-[480px]:h-5 stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            ref={nextRef}
            type="button"
            aria-label="Next blog"
            className="custom-next group w-[50px] h-[50px] max-[480px]:w-[40px] max-[480px]:h-[40px] rounded-full border border-[#ddd] flex items-center justify-center bg-white hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-6 h-6 max-[480px]:w-5 max-[480px]:h-5 stroke-[#553e2b] group-hover:stroke-white group-active:stroke-white group-focus:stroke-white transition duration-300"
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
    </section>
  );
}