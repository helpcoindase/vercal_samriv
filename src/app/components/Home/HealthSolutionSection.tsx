import Image from "next/image";
import Link from "next/link";
import RecognizedBy from "../../components/Includes/RecognizedBy";
import WhiteBorderbtn from "../Buttons/WhiteBorderbtn";
import { ASSET_PREFIX } from "config";

export default function HealthSolutionSection() {
  return (
    <section className="">
      <div className="mx-auto w-[90%] max-w-[1400px]">

        {/* Heading */}
        <div className="text-center lg:mb-[60px] w-[100%] sm:w-[80%] mx-auto ">
          <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
            Healing Through Authentic Ayurveda
          </h2>
          <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0]">Samwarthika Rivera is an Ayurvedic Wellness Resort in Kerala where we focus on restoring balance to the body, mind, and lifestyle through physician-led Ayurvedic care, personalised wellness programs, and holistic healing therapies.</p>
        </div>


        <section className="pt-[50px] max-xl:pt-[50px] max-md:pt-[40px] max-sm:pt-[20px]">
          <div className="w-[100%] m-auto max-2xl:w-[100%] ">
            <div className="mt-[0px] w-[100%] m-auto grid grid-cols-[100%] justify-between max-xxl:w-[100%] max-lg:grid-cols-1 max-lg:gap-[5px] max-md:gap-[35px]">
              <div className="grid gap-[0px] grid-cols-1 md:grid-cols-2 group ">
                <div
                  className="rounded-[130px_130px_0px_0] md:rounded-[130px_0px_0px_130px] overflow-hidden max-xl:h-[100%] w-auto relative  max-lg:h-[100%] 
              
              ">
                  {/* <div
                  className="rounded-[130px_130px_0px_0] md:rounded-[130px_0px_0px_130px] max-xl:h-[100%] w-auto relative after:absolute after:left-[0px] md:after:-left-[20px] after:-top-[20px] md:after:top-[0] after:content-[''] after:w-[100%]   after:max-lg:h-[100%] after:border-1 
               after:rounded-[130px_130px_0px_0] md:after:rounded-[130px_0px_0px_130px] after:h-[100%] after:border-[#ea8c42] after:z-[1] max-lg:h-[100%]
              
              "> */}
                  <div className="overflow-hidden w-[100%] h-[100%]">
                    <Image
                      src={`${ASSET_PREFIX}/assets/images/healing-through-authentic-ayurveda.webp`}
                      height={700}
                      width={300}
                      alt="Ayurvedic Physiotherapy"
                      className=" w-full h-full object-cover object-center 
                    rounded-[70px_70px_0px_0]  
                    sm:rounded-[130px_130px_0px_0]  
                    md:rounded-[130px_0px_0px_130px]  
                    relative z-[2] group-hover:scale-110 transition-transform duration-300  "
                    />
                  </div>
                </div>

                <div className="bg-[#dffff2] w-full h-[100%] p-[0px] max-lg:max-h-[100%] rounded-[0_0_70px_70px] sm:rounded-[0_0_130px_130px] md:rounded-[0_130px_130px_0]">




                  <div className="" />

                  <div className="flex justify-start gap-[10px] items-center">
                    <div className="flex flex-col justify-center px-[20px] sm:px-[40px] md:px-[20px] xl:px-[50px] py-[30px] max-lg:w-full   overflow-hidden  max-sm:leading-[22px] max-sm:text-[16px] max-sm:leading-[22px] w-full">

                      {[
                        { title: "Physician-Led Care", text: "Our experienced Ayurvedic doctors create treatment plans based on your health, body type and wellness goals." },
                        { title: "Authentic Classical Protocols", text: "We use Ayurvedic healing methods that have been around for a long time and really work." },
                        { title: "Personal Ayurvedic Therapies", text: "We tailor therapies, wellness routines, detox programs and diet plans to each person's health needs." },
                        { title: "Modern Diagnostic Support", text: "We use diagnostics and Ayurvedic expertise to give more accurate and complete wellness care." },
                      ].map((item, index) => (
                        <div key={index} className="p-[24px]
    border-b border-[#44BC8C]
   
    max-lg:p-[15px]
   
    max-md:p-[15px]
    w-[100%] sm:w-[90%]
    hover:bg-white
    first:rounded-[0px_20px_0px_0px]
    last:rounded-[0px_0px_20px_0px]
    last:border-b-0  " >
                          <h3 className="flex items-center gap-[20px] xl:gap-[30px]"><span className=" 
                          font-[600] text-[#19805a] 
                          text-[26px] leading-[36px]  max-xl:text-[24px] max-xl:leading-[32px]  max-md:text-[22px] max-md:leading-[30px] max-sm:text-[20px] max-sm:leading-[28px] tracking-[-0.02em]

                        ">
                            {item.title}
                          </span>

                          </h3>
                          <p className="mt-2"> <span className=" text-[#341802] font-[400] text-[16px] leading-[24px] ">
                            {item.text}</span></p>
                        </div>
                      ))}


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Bottom Content */}
        <div className="mt-[45px] sm:mt-[55px] md:mt-[70px] items-start justify-between gap-[0] lg:gap-[40px] grid grid-cols-[100%] lg:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]">

          <div className="">
            <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              Ayurvedic Wellness Retreat
            </p>

            <h3 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] max-sm:text-center">
              Our Ayurvedic Specialities
            </h3>
          </div>

          <div className="w-full">
            <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] ">Samwarthika Rivera is an Ayurvedic Wellness Centre in Kerala, where we offer preventive wellness to chronic care support. Our Ayurvedic specialities promote natural healing, balance, and long-term vitality through holistic therapies and personalised care.</p>

            <div className="mt-[30px]">
              <WhiteBorderbtn text="View More" link="/about-us" />
            </div>
          </div>

        </div>

      </div >
    </section >
  );
}