"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import WhiteBorderbtn from "../Buttons/WhiteBorderbtn";

const faqs = [
  {
    question: "What treatments are available at Samwarthika Rivera?",
    answer:
      "Samwarthika Rivera, an Ayurvedic Wellness Centre in Kerala, offers personalised Ayurvedic treatments including detox therapies, rejuvenation programs, pain management, stress relief therapies, lifestyle correction, wellness retreats, and holistic healing programs designed for overall wellbeing.",
  },
  {
    question: "How is Ayurvedic treatment personalised for each individual?",
    answer:
      "At our Ayurvedic Wellness Retreat in Kerala, Ayurvedic doctors assess your body constitution, health condition, lifestyle, and wellness goals before creating a customised treatment plan that may include therapies, herbal medicines, diet guidance, and wellness routines.",
  },
  {
    question: "Is Ayurvedic treatment suitable for long-term wellness?",
    answer:
      "Yes. Ayurveda focuses on restoring balance within the body and improving overall health naturally. Many guests choose our Ayurvedic Healing Retreat in Kerala for preventive care, stress management, lifestyle improvement, and long-term wellness support.",
  },
  {
    question: "How do you combine modern diagnostics with Ayurveda?",
    answer:
      "Yes. Samwarthika Rivera integrates modern diagnostic support alongside traditional Ayurvedic principles to better understand individual health conditions and create more effective wellness programs at our Wellness Retreat Centre in Kerala.",
  },
  {
    question: "What makes Samwarthika Rivera different from other wellness centres?",
    answer:
      "Samwarthika Rivera combines physician-led Ayurvedic care, authentic classical protocols, personalised therapies, modern support systems, and a peaceful Ayurvedic Wellness Resort in Kerala to deliver a complete holistic healing experience.",
  },
];

const testimonials = [
  {
    text: "I underwent rhematic arthritis treatment at Samvartika Ayurvedic retreat for 10 days. I had a wonderful experience there with caring staffmembers Doctors, therapists and so on. I appreciate healthyand nutritious food served time to time to the room. The rooms have all modern facilities for a comfortable and healthy stay. The scenic beauty of the property facing the river peryargive anyone a soothing relaxation. This is a highly suitable place for ayurvedic rejuvenation",
    name: "Savithri Krishnan",
    role: "",
  },
  {
    text: "I had a great stay at Samwarthika. The property is peaceful and clean, offering a truly authentic atmosphere. The doctors, therapists, and staff are highly professional, attentive, and welcoming. Highly recommended!",
    name: "TOJJER THOMAS",
    role: "",
  },
  {
    text: "First of all I appreciate everyone to arrange such a lovely retreat. The location itself made my stay worthy. Then treatments were excellent. The doctors are experienced and well known about the subject. The therapists did therapies for me was nice and well experienced. Overall it was an awesome experience. Thank you very much the whole team behind Samvarthika retreat. You guys are doing a wonderful job, all the best and keep it up..",
    name: "SREE SAGAR SADASIVAN",
    role: "",
  },
];

export default function FaqTestimonialsSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]">
      <div className="mx-auto grid w-[90%] xl:w-[80%] max-w-[110rem] grid-cols-[1.13fr_0.8fr] gap-[80px] xl:gap-[100px] 2xl:gap-[120px] max-xl:gap-[45px] max-lg:grid-cols-1">
        {/* FAQ */}
        <div>
          <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[30px] sm:mb-[60px] tracking-[-0.02em] max-sm:text-center max-sm:mx-auto max-sm:w-[100%]">
            Frequently Asked Questions
          </h2>

          <div>
            {faqs.map((item, index) => {
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

    ${isActive ? "text-[#1b8564]" : "text-[#000]"} `}
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
                        <p className="whitespace-pre-line pt-[18px]  font-normal  text-[#666] max-w-[760px] text-[18px] leading-[26px] max-md:text-[16px] max-md:leading-[24px]">
                          {item.answer}
                        </p>
                      ) : (
                        <>{item.answer}</>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="min-w-0">
          <h2 className="font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[30px] sm:mb-[60px] tracking-[-0.02em]  max-sm:text-center">
            Happy Customers
          </h2>

          <div className="group relative overflow-hidden rounded-[22px] bg-[#f4f4f4] px-[35px] py-[35px] transition-all duration-500 hover:-translate-y-[8px] hover:bg-[#bff1df66] hover:shadow-[0_5px_25px_rgba(0,0,0,0.12)] max-xl:px-[30px] max-md:px-[25px] max-md:py-[30px]">
            <Swiper
              slidesPerView={1}
              loop={testimonials.length > 1}
              speed={600}
              spaceBetween={0}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="!w-full !overflow-hidden"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="flex min-h-[360px] flex-col justify-between max-xl:min-h-[320px] max-md:min-h-0">
                    <p className="text-[18px] font-normal leading-[32px] text-[#707070] transition duration-500 group-hover:text-[#333] max-xl:text-[16px] max-xl:leading-[28px]">
                      {item.text}
                    </p>

                    <div className="mt-[30px] flex items-end justify-between gap-[25px] max-sm:flex-col max-sm:items-start">
                      <div>
                        <div className="mb-[8px] flex gap-[2px] text-[20px] leading-none text-[#ffc21a]">
                          ★★★★★
                        </div>

                        <h3 className="text-[22px] font-[500] leading-[30px] text-[#000] max-md:text-[20px]">
                          {item.name}
                        </h3>

                        {item.role && (
                          <p className="text-[18px] leading-[26px] text-[#333]">
                            {item.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Fixed Arrow Position */}
            {/* Fixed Arrow Position */}
            <div className="absolute right-[35px] bottom-[35px] z-[30] flex shrink-0 gap-[4px] text-[#555] transition duration-500 group-hover:text-[#e36502] pointer-events-auto max-xl:right-[30px] max-md:right-[25px] max-md:bottom-[30px] max-sm:relative max-sm:right-auto max-sm:bottom-auto max-sm:mt-[20px]">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  swiperRef.current?.slidePrev();
                }}
                className="cursor-pointer pointer-events-auto"
              >
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    d="M15 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  swiperRef.current?.slideNext();
                }}
                className="cursor-pointer pointer-events-auto"
              >
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}