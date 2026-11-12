"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import { usePathname, useSearchParams } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";

type Slide = {
  href: string;
  label: string;
};

const slides: Slide[] = [
  { href: "#overview", label: "Overview" },
  { href: "#vision-mission", label: "Vision Mission" },
  { href: "#founder-message", label: "Founder's Message" },
  { href: "#our-journey", label: "Our Journey" },
  { href: "#doctors", label: "Our Doctors" },
  { href: "#facilities", label: "Facilities" },
];

export default function QuickLink() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Guard: only mount Swiper on the client to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Scroll-to-hash effect (safe: runs only on client)
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const scrollToTarget = (attempts = 20) => {
        const target = document.querySelector(hash);
        if (target) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 100;
          const yOffset = -headerHeight + 80;
          const y =
            target.getBoundingClientRect().top + window.pageYOffset + yOffset;

          setTimeout(() => {
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 50);
        } else if (attempts > 0) {
          setTimeout(() => scrollToTarget(attempts - 1), 150);
        }
      };

      setTimeout(() => scrollToTarget(), 500);
    };

    handleScrollToHash();

    window.addEventListener("hashchange", handleScrollToHash);
    return () => window.removeEventListener("hashchange", handleScrollToHash);
  }, [pathname, searchParams]);

  // ✅ Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ IntersectionObserver for scroll-spy
  useEffect(() => {
    if (!mounted) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const foundIndex = slides.findIndex(
            (slide) => slide.href === `#${id}`
          );
          if (foundIndex !== -1) {
            setActiveIndex(foundIndex);
            swiperRef.current?.slideTo(foundIndex, 500);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    slides.forEach((slide) => {
      const section = document.getElementById(slide.href.replace("#", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [mounted]);

  const handleSlideClick = (index: number) => {
    const targetId = slides[index].href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const windowWidth = window.innerWidth;
      let offset = 105;
      if (windowWidth > 1440) offset = 20;
      else if (windowWidth > 1024) offset = 80;

      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }

    setActiveIndex(index);
    swiperRef.current?.slideTo(index, 500);
  };

  // ✅ Don't render until client-side to avoid SSR/hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className={`fixed top-[100px] max-w-[100%] w-[100%] z-[101] bg-[#eaeaea] transition-all duration-300 ${scrolled
          ? "opacity-100 translate-y-[0px]"
          : "opacity-0 translate-y-[30px]"
        }`}
    >
      <div className="relative px-[10%]">
        {/* Left fade */}
        <div className="absolute h-[100%] w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-[0px] left-[0px] bg-gradient-to-r from-white via-white/50 to-white/0 z-[103]" />

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
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
          className="py-4 !overflow-visible"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.href}>
              <div
                onClick={() => handleSlideClick(index)}
                className={`cursor-pointer p-[10px] text-center text-nowrap text-[16px] w-full flex justify-center transition-all duration-300 border-b-2 hover:border-[#304a10] hover:text-[#000] ${activeIndex === index
                    ? "border-[#304a10] text-[#000]"
                    : "border-[#f5f5f5] text-[#000]/60"
                  }`}
              >
                {slide.label}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right fade */}
        <div className="absolute h-[100%] w-[12%] max-2xl:w-[11%] max-lg:w-[10%] top-[0px] right-[0px] bg-gradient-to-l from-white via-white/50 to-white/0 z-[103]" />
      </div>
    </div>
  );
}