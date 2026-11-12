"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "config";

const slides = [
  {
    desktop: "/assets/images/rivera-banner-2.webp",
    mobile: "/assets/images/rivera-banner-2-mobile.webp",
  },
  {
    desktop: "/assets/images/rivera-banner-4.webp",
    mobile: "/assets/images/rivera-banner-4-mobile.webp",
  },
  {
    desktop: "/assets/images/rivera-banner-1.webp",
    mobile: "/assets/images/rivera-banner-1-mobile.webp",
  },
  {
    desktop: "/assets/images/rivera-banner-5.webp",
    mobile: "/assets/images/rivera-banner-5-mobile.webp",
  },
];

const DURATION = 4000;

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [sliderStarted, setSliderStarted] = useState(false);

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setSliderStarted(true);
    }, 7000);

    return () => window.clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!sliderStarted) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, DURATION);

    return () => window.clearInterval(interval);
  }, [sliderStarted]);

  const goTo = useCallback((idx: number) => {
    setSliderStarted(true);
    setCurrent(idx);
  }, []);

  return (
    <section className="relative w-full" id="home-banner">
      <div className="relative mx-auto h-[340px] w-full max-w-[120rem] overflow-hidden bg-black sm:h-[400px] md:h-[500px] lg:h-[80vh] xl:h-[85vh] 2xl:h-[800px]">
        {/* First image loads immediately for LCP */}
        <div
          className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
          style={{ opacity: current === 0 ? 1 : 0 }}
        >
          <picture>
            <source
              type="image/webp"
              media="(max-width: 479px)"
              srcSet={`${ASSET_PREFIX}${slides[0].mobile}`}
            />
            <source
              type="image/webp"
              media="(min-width: 480px)"
              srcSet={`${ASSET_PREFIX}${slides[0].desktop}`}
            />
            <img
              src={`${ASSET_PREFIX}${slides[0].desktop}`}
              alt="Ayurvedic wellness retreat in Kerala"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-right"
            />
          </picture>
        </div>

        {/* Other images load after page settles */}
        {sliderStarted &&
          slides.slice(1).map((slide, index) => {
            const i = index + 1;

            return (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-[1100ms] ease-in-out"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                {/* Mobile image under 480px */}
                <Image
                  src={`${ASSET_PREFIX}${slide.mobile}`}
                  alt="Ayurvedic wellness retreat in Kerala"
                  fill
                  loading="lazy"
                  quality={60}
                  sizes="100vw"
                  className="absolute inset-0 block h-full w-full object-cover object-[70%_center] min-[480px]:hidden"
                  style={{
                    transform: i === current ? "scale(1)" : "scale(1.08)",
                    transition: "transform 5s ease",
                  }}
                />

                {/* Desktop/tablet image above 480px */}
                <Image
                  src={`${ASSET_PREFIX}${slide.desktop}`}
                  alt="Ayurvedic wellness retreat in Kerala"
                  fill
                  loading="lazy"
                  quality={60}
                  sizes="100vw"
                  className="absolute inset-0 hidden h-full w-full object-cover object-[70%_center] min-[480px]:block lg:object-right"
                  style={{
                    transform: i === current ? "scale(1)" : "scale(1.08)",
                    transition: "transform 5s ease",
                  }}
                />
              </div>
            );
          })}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#056641]/75 via-[#7edfc4]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* Text content with CSS animation */}
        <div className="relative z-10 flex h-full flex-col items-start justify-center pl-[20px] sm:pl-[40px] md:pl-[60px] lg:pl-[80px]">
          <p className="banner-text-1 mb-4 text-xs font-[500] uppercase tracking-[4.5px] text-[#c25400] md:text-sm">
            Ayurvedic Retreat, Kerala.
          </p>

          <h1 className="banner-text-2 w-[80%] text-[30px] font-[500] leading-[36px] tracking-[-0.03em] text-white [text-shadow:0px_1px_5px_#0000009c] sm:text-[36px] sm:leading-[42px] md:w-[650px] md:text-[42px] md:leading-[48px] lg:text-[48px] lg:leading-[54px] xl:text-[54px] xl:leading-[60px] 2xl:text-[60px] 2xl:leading-[66px]">
            A Wellness Retreat Rooted in Ayurveda
          </h1>

          <p className="banner-text-3 mt-5 hidden w-[90%] font-[400] text-white/80 sm:block sm:w-[75%] md:w-[95%]">
            Where authentic Ayurvedic healing meets personalised wellness care
            <br className="hidden md:block" />
            for natural recovery, rejuvenation, and long-term wellbeing.
          </p>

          <div className="banner-text-4 mt-7 flex flex-wrap gap-4 md:mt-15">
            <Link
              href="/contact-us"
              prefetch={false}
              className="inline-flex h-[44px] items-center justify-center rounded-full bg-white px-8 text-sm font-bold uppercase tracking-[0.25em] text-[#4f5d3a] transition duration-300 hover:bg-[#35c6a4] hover:text-white max-[400px]:px-6 max-[400px]:text-[14px] max-[480px]:tracking-[1px]"
            >
              Book Now
            </Link>

            <Link
              href="/treatments"
              prefetch={false}
              className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#c25400] px-8 text-sm font-bold uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#35c6a4] max-[400px]:px-6 max-[400px]:text-[14px] max-[480px]:tracking-[1px]"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

        {/* Animated pagination using CSS */}
        <div className="absolute bottom-[32px] right-[5%] z-20 flex items-center gap-2">
          {slides.map((_, i) => {
            const isActive = i === current;

            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className="relative h-[6px] cursor-pointer overflow-hidden rounded-full"
                style={{
                  width: isActive ? "40px" : "24px",
                  transition: "width 0.3s ease",
                }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className="absolute inset-0 rounded-full bg-white/35" />
                <span
                  key={`${current}-${i}`}
                  className={`absolute inset-y-0 left-0 rounded-full bg-white ${isActive && sliderStarted ? "banner-progress-active" : ""
                    }`}
                  style={{
                    width: isActive && !sliderStarted ? "100%" : undefined,
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .banner-text-1,
        .banner-text-2,
        .banner-text-3,
        .banner-text-4 {
          opacity: 0;
          transform: translateY(14px);
          animation: bannerFadeUp 0.45s ease forwards;
          will-change: opacity, transform;
        }

        .banner-text-1 {
          animation-delay: 0.05s;
        }

        .banner-text-2 {
          animation-delay: 0.1s;
        }

        .banner-text-3 {
          animation-delay: 0.15s;
        }

        .banner-text-4 {
          animation-delay: 0.2s;
        }

        @keyframes bannerFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .banner-progress-active {
          width: 0%;
          animation: bannerProgress ${DURATION}ms linear forwards;
        }

        @keyframes bannerProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}