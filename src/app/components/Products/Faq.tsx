"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import Treatments from "@/data/Treatments";


type pagecontent = {
  slug: string
}


export default function FaqTestimonialsSection({ slug }: pagecontent) {

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const faq = Treatments.find((item) => item.id === slug)?.faq;
  const FaqData = faq?.data

  return (<>
    {faq && (
      <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]" id="faq">
        <div className="mx-auto grid w-[90%] xl:w-[80%] 2xl:w-[60%] max-w-[120rem] grid-cols-1 gap-[70px] max-xl:gap-[45px] max-lg:grid-cols-1">

          {/* FAQ */}
          <div>
            <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[30px] sm:mb-[60px] tracking-[-0.02em] max-sm:text-center max-sm:mx-auto max-sm:w-[100%]">
              Frequently Asked Questions
            </h2>

            <div>
              {FaqData?.map((item, index) => {
                const isActive = activeFaq === index;

                return (
                  <div
                    key={index}
                    className="group border-b border-[#d9d9d9] py-[28px] transition-all duration-500 first:pt-0"
                  >
                    <div
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-[20px] text-left cursor-pointer"
                    >
                      <h3
                        className={` font-normal  transition duration-300 
    group-hover:text-[#1b8564]

    text-[20px] leading-[24px]   
    sm:text-[24px] sm:leading-[28px]
    xl:text-[24px] xl:leading-[28px]
    2xl:text-[28px] 2xl:leading-[32px]

    ${isActive
                            ? "text-[#1b8564]"
                            : "text-[#000]"
                          } `}
                      >
                        {item.question}
                      </h3>

                      <span
                        className={`flex h-[44px] w-[44px] cursor-pointer shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isActive
                          ? "border-[#7f7f7f] bg-[#7f7f7f] text-white rotate-0"
                          : "border-[#e5e5e5] bg-white text-[#cfcfcf] group-hover:border-[#1b8564] group-hover:bg-[#1b8564] group-hover:text-white"
                          }`}
                      >
                        {isActive ? (
                          <svg width="18" height="18" viewBox="0 0 24 24">
                            <path
                              d="M7 10l5 5 5-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24">
                            <path
                              d="M9 6l6 6-6 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </div>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        {typeof item.answer == "string" ? (
                          <p className="whitespace-pre-line pt-[18px] text-[20px] font-normal leading-[28px] text-[#666] md:w-[90%] lg:w-[80%] max-xl:text-[18px] max-xl:leading-[26px] max-md:text-[16px] max-md:leading-[24px]">
                            {item.answer}
                          </p>
                        ) : (
                          <>
                            {item.answer}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}


        </div>
      </section>
    )}
  </>
  );
}