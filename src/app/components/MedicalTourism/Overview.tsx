import Image from "next/image";
import { ASSET_PREFIX } from "config";


const features = [
  {
    title: "Expert Ayurvedic Care",
    description: "Our skilled team of physicians and therapists delivers deeply personalized, results-focused healing.",
  },
  {
    title: "Holistic Treatment Therapies",
    description: "From Panchakarma and Rasayana to therapeutic massages, each plan is designed to address your specific health goals",
  },
  {
    title: "Tailored Healing Packages",
    description: "Whether you need a short recovery or a long-term rejuvenation plan, our flexible packages (7 to 28 days) are customized to match your health needs.",
  },
  {
    title: "World-Class Facilities",
    description: "Samwarthika blends traditional Kerala architecture with modern amenities-comfortable rooms, herbal gardens, vegetarian cuisine, yoga hall-all built to promote healing and peace.",
  },
  {
    title: "Convenient & Transparent Pricing",
    description: "Affordable packages, clear pricing, and no hidden charges-an honest path to wellness.Whether you need a short recovery or a long-term rejuvenation plan, our flexible packages (7 to 28 days) are customized to match your health needs.",
  },
];

export default function Overview() {
  return (
    <>
      <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[65%] max-w-[105rem] 2xl:max-w-[85rem] lg:pb-[50px]">

        {/* Heading */}
        <div className="text-center lg:mb-[60px] w-[100%] sm:w-[80%] mx-auto ">
          <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">Why Choose Kerala for Ayurveda?</p>
          <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
            Kerala is globally recognized as the heart of Ayurvedic medical tourism.
          </h2>
          <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0]">Its lush greenery, tranquil climate, and rich healing traditions create an ideal retreat for holistic healing. At Samwarthika, nestled in peaceful Ernakulam, we offer the warmth of nature alongside modern comforts for a truly rejuvenating experience.</p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px] group ">
          <div className="w-[100%]">
            <div className="">
              {/* <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
                The Ayurvedic Hospital
              </p> */}
              <h2 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[80%] max-sm:text-center max-sm:mx-auto">
                Why Choose Samwarthika
              </h2>

              <ul className="pl-[0] sm:pl-[20px]">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#31423B]"
                  >
                    {/* Icon */}
                    <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-full overflow-hidden p-[2px] bg-[#B0F5DB] flex justify-center items-center mt-[3px] shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m10 17 5-5-5-5"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <span className="mr-[5px]">
                      <span className="font-[600]">{item.title}: </span>
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              {/* <Statistics /> */}
            </div>
          </div>
          <div className="rounded-[30px] sm:rounded-[50px] lg:rounded-[150px] overflow-hidden flex">
            <Image src={`${ASSET_PREFIX}/assets/images/overview.webp`} alt="Ayurveda Overview" width={1200} height={800} className="w-full h-[200px] sm:h-[300px] lg:h-full rounded-[30px] sm:rounded-[50px] lg:rounded-[150px] mt-[0] sm:mt-[15px] lg:mt-[40px] object-cover group-hover:scale-105 transition-transform duration-300 " />
          </div>
        </div>
      </div>
    </>
  );
}
