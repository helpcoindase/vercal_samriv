"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";

type Slide = {
  href: string;
  title?: string;
  label?: string;
};

type CarouselWithScrollSpyProps = {
  slides: Slide[];
};

export default function QuickLink({ slides }: CarouselWithScrollSpyProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const quickLinkRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const getScrollOffset = () => {
    const quickLinkHeight = quickLinkRef.current?.offsetHeight || 60;

    let headerHeight = 120;

    if (window.innerWidth <= 640) {
      headerHeight = 95;
    } else if (window.innerWidth <= 1200) {
      headerHeight = 100;
    }

    return headerHeight + quickLinkHeight + 20;
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const offset = getScrollOffset();

    const top =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);

    scrollToSection(slides[index].href);

    const newUrl = `${window.location.pathname}${slides[index].href}`;
    window.history.replaceState(null, "", newUrl);

    if (swiperRef.current?.slideTo) {
      swiperRef.current.slideTo(index, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        const foundIndex = slides.findIndex(
          (slide) => slide.href === `#${id}`
        );

        if (foundIndex !== -1) {
          setActiveIndex(foundIndex);

          if (swiperRef.current?.slideTo) {
            swiperRef.current.slideTo(foundIndex, 500);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    });

    slides.forEach((slide) => {
      const section = document.getElementById(slide.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [slides]);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const index = slides.findIndex((slide) => slide.href === hash);

    setTimeout(() => {
      scrollToSection(hash);

      if (index !== -1) {
        setActiveIndex(index);

        if (swiperRef.current?.slideTo) {
          swiperRef.current.slideTo(index, 500);
        }
      }
    }, 600);
  }, [slides]);

  return (
    <div
      ref={quickLinkRef}
      className={`mx-auto fixed top-[120px] max-[1200px]:top-[100px] max-[640px]:top-[95px] w-full z-[101] bg-white transition-all duration-300 ${scrolled
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-[60px] pointer-events-none"
        }`}
    >
      <div className="relative px-[10%]">
        <div className="absolute h-full w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-0 left-0 bg-gradient-to-r from-white via-white/50 to-white/0 z-[103] pointer-events-none"></div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView="auto"
          breakpoints={{
            300: { slidesPerView: 1.8 },
            400: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1500: { slidesPerView: 7 },
            1700: { slidesPerView: 8 },
          }}
          className="py-4 overflow-visible!"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <button
                type="button"
                onClick={() => handleSlideClick(index)}
                className={`cursor-pointer px-[18px] py-[12px] text-center text-[14px] whitespace-nowrap transition-all duration-300 border-b-2 rounded-t-[10px] ${activeIndex === index
                  ? "border-[#1b8564] bg-[#1b8564]/10 text-[#000]"
                  : "border-transparent text-[#000]/60 hover:bg-[#1b8564]/5"
                  }`}
              >
                {slide.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute h-full w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-0 right-0 bg-gradient-to-l from-white via-white/50 to-white/0 z-[103] pointer-events-none"></div>
      </div>
    </div>
  );
}