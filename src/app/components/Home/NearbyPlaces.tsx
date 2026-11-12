"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ASSET_PREFIX } from "config";

const places = [
  { title: "Treatment Room", image: "/assets/images/treatment-room.webp" },
  {
    title: "Patient Friendly Room",
    image: "/assets/images/patient-friendly-room.webp",
  },
  {
    title: "Samwarthika Rivera Ayurvedia Retreat",
    image: "/assets/images/resort.webp",
  },
  { title: "Hall Entrance", image: "/assets/images/hall.webp" },
  {
    title: "Spacious Dining Hall",
    image: "/assets/images/dining-hall.webp",
  },
];

export default function NearbyPlaces() {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const popupImage = popupIndex !== null ? places[popupIndex] : null;

  const handlePrevImage = () => {
    setPopupIndex((prev) =>
      prev === null ? null : prev === 0 ? places.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setPopupIndex((prev) =>
      prev === null ? null : prev === places.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (popupIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopupIndex(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupIndex]);

  return (
    <section className=" ">
      <div className="m-[auto] w-[90%] max-w-[120rem]">
        <div>
          <div className="text-center">
            <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              INFRASTRUCTURE
            </p>

            <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
              Infrastructure of Resort
            </h2>

            <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0] xl:w-[80%] mx-auto">
              Thoughtfully designed therapy spaces, modern amenities, peaceful
              accommodations, and dedicated wellness facilities create an ideal
              environment for holistic healing and relaxation.
            </p>
          </div>
        </div>

        {/* DESKTOP / TABLET GRID */}
        <div className="mx-auto mt-[40px] grid grid-cols-3 items-stretch gap-[30px] max-2xl:gap-[20px] w-[100%] xl:w-[90%] 2xl:w-[85%] max-mlg:grid-cols-2 max-mlg:gap-[15px] max-md:w-[100%] max-sm:hidden">
          {/* LEFT */}
          <div className="flex h-full flex-col gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
            {places.slice(0, 2).map((item, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => setPopupIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setPopupIndex(index);
                }}
                className="group relative h-[260px] overflow-hidden rounded-[30px] max-lg:rounded-[25px] max-mlg:rounded-[20px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] after:content-[''] cursor-pointer"
              >
                <Image
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-center transition duration-1000 group-hover:scale-[1.4]"
                  unoptimized
                  alt={item.title}
                  src={`${ASSET_PREFIX}${item.image}`}
                />

                {/* Zoom Icon */}
                <div className="absolute inset-0 z-[4] flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 scale-[0.8] transition duration-500 group-hover:scale-[1]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      className="h-5 w-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 z-[5] p-[30px] max-lg:p-[20px]">
                  <h3 className="text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px] text-white font-[400]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div
            role="button"
            tabIndex={0}
            onClick={() => setPopupIndex(2)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setPopupIndex(2);
            }}
            className="group relative h-[550px] overflow-hidden rounded-[30px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] after:content-[''] max-mlg:h-[540px] cursor-pointer"
          >
            <Image
              width={800}
              height={1200}
              className="h-full w-full object-cover object-center transition duration-1000 group-hover:scale-[1.4]"
              unoptimized
              alt={places[2].title}
              src={`${ASSET_PREFIX}${places[2].image}`}
            />

            {/* Zoom Icon */}
            <div className="absolute inset-0 z-[4] flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 scale-[0.8] transition duration-500 group-hover:scale-[1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 z-[5] p-[30px]">
              <p className="text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px] text-white font-[400]">
                {places[2].title}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex h-full flex-col gap-[30px] max-2xl:gap-[20px] max-mlg:gap-[15px]">
            {places.slice(3, 5).map((item, index) => {
              const actualIndex = index + 3;

              return (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setPopupIndex(actualIndex)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setPopupIndex(actualIndex);
                  }}
                  className="group relative h-[260px] overflow-hidden rounded-[30px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] after:content-[''] cursor-pointer"
                >
                  <Image
                    width={800}
                    height={600}
                    className="h-full w-full object-cover object-center transition duration-1000 group-hover:scale-[1.4]"
                    alt={item.title}
                    src={`${ASSET_PREFIX}${item.image}`}
                  />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 z-[4] flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 scale-[0.8] transition duration-500 group-hover:scale-[1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 z-[5] p-[20px] text-white">
                    <p className="text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px] text-white font-[400]">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE SWIPER */}
        <div className="relative mt-[40px] hidden max-sm:block">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1.08}
            spaceBetween={18}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="pb-[45px]"
          >
            {places.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setPopupIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setPopupIndex(index);
                  }}
                  className="group relative h-[330px] overflow-hidden rounded-[30px] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[linear-gradient(0deg,rgba(0,0,0,0.56)_0%,rgba(255,255,255,0)_100%)] after:content-[''] cursor-pointer"
                >
                  <Image
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    alt={item.title}
                    src={`${ASSET_PREFIX}${item.image}`}
                  />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 z-[4] flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 scale-[0.8] transition duration-500 group-hover:scale-[1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                        className="h-5 w-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute bottom-0 z-[5] p-[30px] max-lg:p-[20px]">
                    <p className="text-[22px] leading-[28px] xl:text-[24px] xl:leading-[30px] text-white font-[400]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        {/* Navigation Buttons */}
        <div className="mt-[20px] hidden justify-end gap-[20px] max-sm:flex">
          <button
            type="button"
            aria-label="Previous slide"
            className="custom-prev group flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#ddd] bg-white transition duration-300 hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="h-6 w-6 stroke-[#553e2b] transition duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="custom-next group flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#ddd] bg-white transition duration-300 hover:bg-[#c25400] active:bg-[#c25400] focus:bg-[#c25400]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="h-6 w-6 stroke-[#553e2b] transition duration-300 group-hover:stroke-white group-active:stroke-white group-focus:stroke-white"
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

      {/* IMAGE POPUP */}
      {/* IMAGE POPUP */}
      {popupImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 px-[15px]"
          role="dialog"
          aria-modal="true"
          aria-label={popupImage.title}
          onClick={() => setPopupIndex(null)}
        >
          <div
            className="flex w-full flex-col items-center bg-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center gap-[15px] max-sm:gap-[8px] w-full bg-transparent">
              {/* Previous Arrow */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={handlePrevImage}
                className="
            flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full
            bg-black/40 text-white border border-white/30 backdrop-blur-sm
            transition hover:bg-[#C8370B] hover:border-[#C8370B]
            max-sm:h-[34px] max-sm:w-[34px] cursor-pointer
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 max-sm:h-5 max-sm:w-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="relative inline-block max-w-[calc(100%-120px)] max-sm:max-w-[calc(100%-84px)] bg-transparent">
                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close image popup"
                  onClick={() => setPopupIndex(null)}
                  className="
              absolute right-[-19px] top-[-19px] z-[4]
              flex h-[38px] w-[38px] items-center justify-center rounded-full
              bg-black/50 text-white border border-white/30 backdrop-blur-sm
              cursor-pointer transition hover:bg-[#C8370B] hover:border-[#C8370B]
              max-sm:right-[-14px] max-sm:top-[-14px] max-sm:h-[30px] max-sm:w-[30px]  cursor-pointer
            "
                >
                  <span className="flex items-center justify-center text-[26px] leading-[1] translate-y-[-1px] max-sm:text-[20px]">
                    ×
                  </span>
                </button>

                <Image
                  width={1200}
                  height={800}
                  className="
              block max-h-[85vh] max-w-full w-auto
              rounded-[30px] object-contain bg-transparent
              max-sm:max-h-[75vh] max-sm:rounded-[20px] text-transparent h-full w-full object-center object-cover text-transparent h-full w-full object-center object-cover
            "
                  alt={popupImage.title}
                  src={`${ASSET_PREFIX}${popupImage.image}`}
                  unoptimized
                />
              </div>

              {/* Next Arrow */}
              <button
                type="button"
                aria-label="Next image"
                onClick={handleNextImage}
                className="
            flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full
            bg-black/40 text-white border border-white/30 backdrop-blur-sm
            transition hover:bg-[#C8370B] hover:border-[#C8370B]
            max-sm:h-[34px] max-sm:w-[34px]
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 max-sm:h-5 max-sm:w-5 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-[15px] text-center text-white text-[20px] leading-[26px] font-[400] max-sm:text-[16px] max-sm:leading-[22px] max-sm:px-[15px]">
              {popupImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}