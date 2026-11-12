"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import { ASSET_PREFIX } from "config";
import Link from "next/link";

export default function TherapyChoiceSection() {
  return (
    <section className="pt-[100px] max-xl:pt-[80px] max-md:pt-[50px]">
      <div className="mx-auto w-[80%] max-w-[120rem] max-lg:w-[90%]">
        <div className="text-center">
          <p className="uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
            Holistic Wellness Experience
          </p>

          <h2 className="font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
            What Makes Samwarthika Rivera Different
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[55px] max-xl:gap-[35px] max-md:grid-cols-1 max-md:gap-[45px] mt-[40px]">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="group relative z-1 mb-[42px] overflow-hidden rounded-[30px] max-md:mb-[25px]">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  allowTouchMove={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".therapy-pagination",
                    renderBullet: function (index, className) {
                      return `<span class="${className}"></span>`;
                    },
                  }}
                  speed={1000}

                  className="w-full"
                >
                  <SwiperSlide>
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/packages-waiting-area.webp`}
                      alt="slide3"
                      width={700}
                      height={450}
                      className="h-[450px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[380px] max-lg:h-[320px] max-md:h-[360px] max-sm:h-[260px]"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/packages-cafeteria.webp`}
                      alt="Packages"
                      width={700}
                      height={450}
                      priority
                      className="h-[450px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[380px] max-lg:h-[320px] max-md:h-[360px] max-sm:h-[260px]"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/packages-panchakarma.webp`}
                      alt="Panchakarma"
                      width={700}
                      height={450}
                      className="h-[450px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[380px] max-lg:h-[320px] max-md:h-[360px] max-sm:h-[260px]"
                    />
                  </SwiperSlide>

                  <SwiperSlide>
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/packages-accomodation.webp`}
                      alt="Accommodation"
                      width={700}
                      height={450}
                      className="h-[450px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[380px] max-lg:h-[320px] max-md:h-[360px] max-sm:h-[260px]"
                    />
                  </SwiperSlide>
                </Swiper>

                {/* Same black shade hover effect */}
                <div className="pointer-events-none absolute inset-0 z-5 bg-black/0 transition duration-500 group-hover:bg-black/30" />

                <div className="therapy-pagination absolute right-[35px] bottom-5! z-10 flex justify-end flex-col gap-[15px] h-fit!" />
              </div>

              <div className="px-[28px] max-lg:px-[10px] max-md:px-0">
                <h3 className="mb-[35px] text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] font-[400] tracking-[-0.02em] text-[#c25400] max-md:mb-[18px]">
                  Packages
                </h3>

                <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]">
                  A stay at Samwarthika Rivera goes well beyond therapy
                  sessions. As a Wellness Retreat Centre in Kerala, every part
                  of the experience is built around full recovery. Guided
                  morning routines, Ayurvedic meals, structured therapy sessions,
                  and restful evenings create a daily rhythm that genuinely
                  heals. Guests leave feeling restored and ready to carry that
                  balance forward.
                </p>
              </div>
            </div>

            <div className="px-[28px] max-lg:px-[10px] max-md:px-0">
              <Link href="/packages">
                <div className="text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] border-[1px] border-[#1b8564] hover:border-[#c25400] py-[5px] sm:py-[8px] h-[fit-content] pl-[10px] pr-[10px] sm:pl-[20px] sm:pr-[15px] 2xl:pl-[30px] 2xl:pr-[25px] rounded-[50px] text-center items-center transition duration-300 capitalize text-[#fff] font-[500] bg-[#175e42] hover:bg-[#c25400] hover:text-[#fff] cursor-pointer flex gap-[5px] w-fit mt-5">
                  View More
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="group relative z-1 mb-[42px] overflow-hidden rounded-[30px] max-md:mb-[25px]">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/therapy-2.webp`}
                  alt="Packages"
                  width={700}
                  height={450}
                  priority
                  className="h-[450px] w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.08] max-xl:h-[380px] max-lg:h-[320px] max-md:h-[360px] max-sm:h-[260px]"
                />

                {/* Same black shade hover effect */}
                <div className="pointer-events-none absolute inset-0 z-5 bg-black/0 transition duration-500 group-hover:bg-black/30" />
              </div>

              <div className="px-[28px] max-lg:px-[10px] max-md:px-0">
                <h3 className="mb-[35px] text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] font-[400] tracking-[-0.02em] text-[#c25400] max-md:mb-[18px]">
                  Medical Tourism
                </h3>

                <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]">
                  Its lush greenery, tranquil climate, and rich healing
                  traditions create an ideal retreat for holistic healing. At
                  Samwarthika, nestled in peaceful Ernakulam, we offer the
                  warmth of nature alongside modern comforts for a truly
                  rejuvenating experience.
                </p>
              </div>
            </div>

            <div className="px-[28px] max-lg:px-[10px] max-md:px-0">
              <Link href="/medical-tourism">
                <div className="text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] border-[1px] border-[#1b8564] hover:border-[#c25400] py-[5px] sm:py-[8px] h-[fit-content] pl-[10px] pr-[10px] sm:pl-[20px] sm:pr-[15px] 2xl:pl-[30px] 2xl:pr-[25px] rounded-[50px] text-center items-center transition duration-300 capitalize text-[#fff] font-[500] bg-[#175e42] hover:bg-[#c25400] hover:text-[#fff] cursor-pointer flex gap-[5px] w-fit mt-5">
                  View More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}