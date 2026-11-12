"use client";

import { ASSET_PREFIX } from "config";
import Treatments from "@/data/Treatments";
import Image from "next/image";
import { useEffect, useRef } from "react";

type PageContent = {
  slug: string;
};

export default function IdealDurationSection({ slug }: PageContent) {
  const data = Treatments.find((item) => item.id === slug)?.IdealDuration;
  const cards = data?.cards;

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatables =
              entry.target.querySelectorAll<HTMLElement>("[data-animate]");
            animatables.forEach((el, i) => {
              setTimeout(() => {
                el.classList.remove("opacity-0", "translate-y-8");
                el.classList.add("opacity-100", "translate-y-0");
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

  // Pair cards: [[card0, card1], [card2, card3]]
  const rows = cards
    ? [cards.slice(0, 2), cards.slice(2, 4)].filter((r) => r.length > 0)
    : [];

  return (
    <>
      {data && (
        <section
          ref={sectionRef}
          className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] overflow-hidden" id="ideal-duration"
        >
          <div className="w-[90%] mx-auto max-w-[105rem]">

            {/* Heading */}
            <h2
              data-animate
              className=" font-[500] text-[#175e42] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center md:w-[70%] mx-auto"
            >
              {data?.greentitle}
            </h2>

            {/* Description */}
            <div
              data-animate
              className="
            text-center mb-[50px] sm:mb-[60px]
            opacity-0 translate-y-8 transition-all duration-700 ease-out
          "
              style={{ transitionDelay: "100ms" }}
            >
              {data?.description}
            </div>

            {/* Card rows */}
            <div className="flex flex-col gap-[40px] sm:gap-[50px] xl:w-[90%] mx-auto">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-[60px] xl:gap-x-[80px] gap-y-[40px]"
                >
                  {row.map((card, cardIndex) => {
                    const animateIndex = rowIndex * 2 + cardIndex + 2;
                    return (
                      <div
                        key={card.cardimage}
                        data-animate
                        className="
                      group flex max-[480px]:flex-col sm:flex-col lg:flex-row items-center gap-[24px] sm:gap-[28px]
                      opacity-0 translate-y-8 transition-all duration-700 ease-out
                    "
                        style={{ transitionDelay: `${animateIndex * 120}ms` }}
                      >
                        {/* Image */}
                        <div
                          className="
                        relative w-full min-[480px]:w-[200px] sm:w-[220px] md:w-[240px] xl:w-[260px]
                        h-[150px] sm:h-[155px] md:h-[165px] xl:h-[175px]
                        rounded-[20px] overflow-hidden shrink-0
                        transition-transform duration-300 ease-in-out
                        group-hover:scale-[1.03] group-hover:shadow-[0_8px_30px_rgba(39,160,114,0.2)]
                      "
                        >
                          <Image
                            src={`${ASSET_PREFIX}/assets/images/${card.cardimage}`}
                            alt={card.cardalt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Text */}
                        <p
                          className="
                        text-[16px] sm:text-[17px] xl:text-[18px]
                        text-[#222222] leading-[1.6] font-semibold
                        transition-colors duration-300 group-hover:text-[#175e42] max-lg:text-center max-sm:text-start
                      "
                        >
                          {card.cardcontent}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}
    </>
  );
}