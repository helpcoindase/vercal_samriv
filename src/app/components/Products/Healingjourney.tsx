"use client";

import { ASSET_PREFIX } from "config";
import Treatments from "@/data/Treatments";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

type PageContent = {
  slug: string;
};

export default function HealingJourneySection({ slug }: PageContent) {
  const data = Treatments.find((item) => item.id === slug)?.HealingJourney;
  const steps = data?.steps;

  // ── Intersection Observer for scroll-in animation ──
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables = entry.target.querySelectorAll<HTMLElement>(
              "[data-animate]"
            );
            animatables.forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove(
                  "opacity-0",
                  "translate-y-8",
                  "-translate-x-6",
                  "translate-x-6"
                );
                el.classList.add("opacity-100", "translate-y-0", "translate-x-0");
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const StepCard = ({
    item,
    index,
  }: {
    item: NonNullable<typeof steps>[number];
    index: number;
  }) => (
    <div
      data-animate
      className={`
        group flex flex-col items-center text-center px-2
        opacity-0 translate-y-8
        transition-all duration-700 ease-out
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Circle Icon - hover: scale + teal fill + white icon tint */}
      <div
        className="
          w-[140px] h-[140px] rounded-full border-[2px] border-[#175e42] bg-white
          flex items-center justify-center mb-[18px] relative overflow-hidden shrink-0
          transition-all duration-300 ease-in-out
          group-hover:bg-[#175e42]  group-hover:shadow-[0_8px_30px_rgba(39,160,114,0.35)]
        "
      >
        <Image
          src={`${ASSET_PREFIX}${item.stepicon}`}
          alt={item.stepalt}
          fill
          className="object-contain p-[28px] transition-all duration-300 group-hover: group-hover:scale-[1.2]"
        />
      </div>

      {/* Step Number - hover: slightly larger */}
      <p
        className="
          text-[#c25400] text-[22px] sm:text-[24px] font-semibold leading-[1] mb-[20px]
          transition-all duration-300 
        "
      >
        {item.stepnumber}
      </p>

      {/* Step Title - hover: underline */}
      <h3
        className="
          text-[#175e42] text-[17px] sm:text-[18px] font-bold leading-[1.3] mb-[15px]
          w-[80%] mx-auto
          transition-all duration-300 
        "
      >
        {item.steptitle}
      </h3>

      {/* Step Content */}
      <p
        className="
          text-[16px] text-[#333333] leading-[1.6]
          transition-colors duration-300 group-hover:text-[#111111]
        "
      >
        {item.stepcontent}
      </p>
    </div>
  );

  return (
    <>
      {data && (
        <section
          ref={sectionRef}
          className="bg-[#f5f5f5] py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px] overflow-hidden" id="journey"
        >
          <div className="w-[90%] mx-auto max-w-[105rem]">

            {/* Heading - slides in from left */}
            <h2
              data-animate
              className=" font-[500] text-[#c25400] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center w-[70%] mx-auto max-sm:w-[100%] max-sm:text-center"
            >
              {data?.orangetitle}
            </h2>

            {/* Description - slides in from right */}
            <div
              data-animate
              className="
            mb-[50px] sm:mb-[60px]
            opacity-0 translate-x-6
            transition-all duration-700 ease-out
          "
              style={{ transitionDelay: "100ms" }}
            >
              {data?.description}
            </div>

            {/* ── 2xl+: 5-column grid with connector line ── */}
            <div className="hidden 2xl:block relative">
              <div
                data-animate
                className="
              absolute top-[72px] left-[10%] right-[10%] h-[1.5px] bg-[#175e42] z-0
              opacity-0
              transition-all duration-1000 ease-out
            "
                style={{ transitionDelay: "200ms" }}
              />
              <div className="grid grid-cols-5 gap-x-[40px] relative z-10">
                {steps?.map((item, index) => (
                  <StepCard key={item.stepnumber} item={item} index={index + 2} />
                ))}
              </div>
            </div>

            {/* ── below 2xl: Swiper with navigation ── */}
            <div className="block 2xl:hidden relative">
              {/* Prev button */}
              <button
                className="
              healing-prev absolute left-0 top-[72px] -translate-y-1/2 z-20
              w-[40px] h-[40px] rounded-full bg-white border border-[#175e42]
              flex items-center justify-center shadow-md
              text-[#175e42] hover:bg-[#175e42] hover:text-white
              transition-all duration-200
              disabled:opacity-30
            "
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next button */}
              <button
                className="
              healing-next absolute right-0 top-[72px] -translate-y-1/2 z-20
              w-[40px] h-[40px] rounded-full bg-white border border-[#175e42]
              flex items-center justify-center shadow-md
              text-[#175e42] hover:bg-[#175e42] hover:text-white
              transition-all duration-200
              disabled:opacity-30
            "
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: ".healing-prev",
                  nextEl: ".healing-next",
                }}
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  550: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
                className="px-[50px]"
              >
                {steps?.map((item, index) => (
                  <SwiperSlide key={item.stepnumber} className="py-4">
                    <StepCard item={item} index={index + 2} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </section>
      )}
    </>
  );
}