"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Treatments from "@/data/Treatments";

type Slide = {
  href: string;
  label?: string;
};

type QuickLinkProps = {
  slug: string;
};

export default function QuickLink({ slug }: QuickLinkProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Single consistent variable name throughout
  const slides: Slide[] =
    (Treatments.find((item) => item.id === slug) as any)?.quicklinks?.quicklinks ?? [];

  const handleSlideClick = (index: number) => {
    const targetId = slides[index].href.replace("#", ""); // ✅ slides, not quicklinks
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const windowWidth = window.innerWidth;
      let offset = 0;

      if (windowWidth > 1440) offset = 110;
      else if (windowWidth > 1024) offset = 80;
      else offset = 80;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setActiveIndex(index);
    if (swiperRef.current?.slideTo) {
      swiperRef.current.slideTo(index, 500);
    }
  };

  useEffect(() => {
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const foundIndex = slides.findIndex((slide) => slide.href === `#${id}`);
            if (foundIndex !== -1) {
              setActiveIndex(foundIndex);
              if (swiperRef.current?.slideTo) {
                swiperRef.current.slideTo(foundIndex, 500);
              }
            }
          }
        });
      },
      {
        root: null, rootMargin: "0px 0px -10% 0px", // ✅ slightly shrinks bottom trigger zone
        threshold: 0.1
      }
    );

    slides.forEach((slide) => {
      const section = document.getElementById(slide.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [slides]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!slides.length) return null;

  return (
    <div
      className={`fixed top-[120px] max-2xl:top-[120px] max-[1200px]:!top-[100px]   w-full z-[101] bg-white transition-all duration-300 ${scrolled ? "opacity-100 translate-y-0   " : "opacity-0 translate-y-[60px]"
        }`}
    >
      <div className="relative px-[10%]">
        <div className="absolute h-full w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-0 left-0 bg-gradient-to-r from-white via-white/50 to-white/0 z-[103]" />

        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            300: { slidesPerView: 1.5 },
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1536: { slidesPerView: 8 },
          }}
          className="py-4 overflow-visible!"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleSlideClick(index)}
                className={`cursor-pointer p-[12px] text-center text-nowrap text-[14px] w-full flex justify-center transition-all duration-300 border-b-2 hover:border-[#1b8564] hover:text-[#000] ${activeIndex === index
                    ? "border-[#1b8564] text-[#000]  bg-[#1b8564]/10"
                    : "border-white text-[#000]/60"
                  }`}
              >
                {slide.label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute h-full w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-0 right-0 bg-gradient-to-l from-white via-white/50 to-white/0 z-[103]" />
      </div>
    </div>
  );
}