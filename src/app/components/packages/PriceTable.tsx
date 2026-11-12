"use client";

import React from "react";

const programs = [
  {
    name: "Prana Express",
    duration: "1 DAY",
    price: "₹ 7,500 /-",
    originalPrice: null,
    description:
      "A luxurious one-day escape designed to instantly refresh your body and mind with revitalizing therapies and calming treatments.",
  },
  {
    name: "Ama Detox Retreat",
    duration: "3 DAYS",
    price: "₹ 22,500 /-",
    originalPrice: null,
    description:
      "A gentle detox program that eliminates toxins (ama), improves digestion, and leaves you feeling light, clear, and energized.",
  },
  {
    name: "Ojas Renewal",
    duration: "5 DAYS",
    price: "₹ 37,500 /-",
    originalPrice: null,
    description:
      "A nourishing experience focused on rebuilding ojas (vital energy), boosting immunity, and restoring inner strength and glow.",
  },
  {
    name: "Sattva Balance Retreat",
    duration: "7 DAYS",
    price: "₹ 52,500 /-",
    originalPrice: null,
    description:
      "A holistic wellness retreat that harmonizes mind, body, and spirit, promoting mental clarity, emotional balance, and deep relaxation.",
  },
  {
    name: "Tejas Healing Program",
    duration: "10 DAYS",
    price: "₹ 75,000 /-",
    originalPrice: null,
    description:
      "An intensive healing journey that enhances metabolism, rejuvenates tissues, and ignites your inner radiance (tejas).",
  },
  {
    name: "Ayur Shuddhi Immersion",
    duration: "14 DAYS",
    price: "₹ 1,05,000 /-",
    originalPrice: null,
    description:
      "A profound purification experience combining traditional therapies to deeply cleanse, reset, and restore your natural balance.",
  },
  {
    name: "Ultimate Panchakarma Experience",
    duration: "21 DAYS",
    price: "₹ 1,57,500 /-",
    originalPrice: null,
    description:
      "The ultimate Ayurvedic transformation with authentic Panchakarma therapies for complete detoxification, rejuvenation, and long-lasting wellness.",
  },
];

export default function WellnessPricingTable() {
  return (
    <div className="w-[90%] xl:w-[70%] 2xl:w-[60%] mx-auto overflow-hidden max-w-[120rem] mx-auto ">
      <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center">
        Premium Ayurvedic Packages
      </h2>
      <div className="bg-white mt-[40px] overflow-x-auto  rounded-[50px] ">

        {programs.map((program, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0 mb-[20px] min-w-[550px] overflow-x-auto group transition duration-300 hover:shadow-lg">
            {/* Top row */}
            <div className="grid w-full grid-cols-[auto_100px_150px] md:grid-cols-[1fr_120px_250px] xl:grid-cols-[1fr_120px_300px] items-center gap-[5px] border-b border-gray-100 ">
              {/* Name cell */}
              <div className={`px-[30px] py-3 border-r border-gray-200 bg-[#e3ecd9] h-full ${index == 0 ? "pt-[20px]" : ""}`}>
                <span className="text-[#19805a] font-[600] text-[18px] leading-[1.2] transition duration-300 group-hover:text-[#c25400]">
                  {program.name}
                </span>
              </div>

              {/* Duration cell */}
              <div className={`px-6 py-3 border-r border-gray-200 text-center  bg-[#e3ecd9] h-full ${index == 0 ? "pt-[20px]" : ""}`}>
                <span className="text-[#19805a] font-semibold text-[16px] tracking-widest uppercase transition duration-300 group-hover:text-[#c25400]">
                  {program.duration}
                </span>
              </div>

              {/* Price cell */}
              <div className={`px-[30px] py-3 text-right h-full bg-[#e3ecd9] ${index == 0 ? "pt-[20px]" : ""}`}>
                {program.originalPrice && (
                  <span className="text-[#19805a] line-through text-[16px] mr-3 transition duration-300 group-hover:text-[#c25400]">
                    {program.originalPrice}
                  </span>
                )}
                <span className="text-[#19805a] font-bold text-[18px] transition duration-300 group-hover:text-[#c25400]">
                  {program.price}
                </span>
              </div>
            </div>

            {/* Description row */}
            <div className="px-4 py-2.5 bg-[#fefaf5]">
              <p className="text-[#555] text-[16px] leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}