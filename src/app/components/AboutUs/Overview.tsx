import Image from "next/image";
import CommonList from "../Includes/CommonList";
import { therapies } from "@/data/therapies";
import { ASSET_PREFIX } from "config";
import Statistics from "../Includes/Statistics";


export default function Overview() {
  return (
    <>
      <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[65%] max-w-[105rem] 2xl:max-w-[85rem] lg:pb-[50px]">

        {/* <div className="text-center lg:mb-[60px] w-[100%] sm:w-[80%] mx-auto ">
          <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[30px] sm:mb-[50px] tracking-[-0.02em] w-[90%] mx-auto">
            Balance your body, mind, and spirit - the Ayurvedic way.
          </h2>  
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px] group ">
          <div className="w-[100%]">
            <div className="">
              <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
                The Ayurvedic Hospital
              </p>
              <h2 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[80%] max-sm:text-center max-sm:mx-auto">
                Who We Are
              </h2>
              <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[40px] ">Samwarthika Rivera is a dedicated Ayurvedic wellness resort and a subsidiary of Samwarthika Ayurveda Hospital, one of Kerala's most trusted and recognised Ayurvedic treatment institutions</p>
              <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[40px] "> While Samwarthika Ayurveda Hospital has built its reputation over years of authentic clinical Ayurvedic care, Samwarthika Rivera extends that same legacy into a retreat and wellness experience, bringing together the depth of hospital-grade Ayurvedic medicine with the comfort and calm of a dedicated healing resort.</p>
              <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[40px] ">At Samwarthika Rivera, you are not just visiting a wellness centre. You are stepping into a space that carries the full clinical authority, physician expertise, and authentic treatment standards.</p>
              <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[40px] ">Your personal path to wellness, guided by authentic Ayurveda and retreat serenity. </p>
              <CommonList items={therapies} />

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
