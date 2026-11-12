import { ASSET_PREFIX } from "config";
import Image from "next/image";

export default function PickUpDrop() {
  return (
    <div className="">
      <div className="max-w-[120rem] mx-auto w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto  mb-[30px] sm:mb-[40px] lg:mb-[60px]">
        {/* Header with horizontal lines */}
        <div className="border border-gray-300 rounded-[30px]  px-6 py-8 relative pt-[40px] max-w-[1000px] mx-auto">
          <div className="absolute top-[-20px] md:top-[-30px] px-6 flex items-center justify-center left-1/2 transform -translate-x-1/2 bg-white w-max">

            <h2
              className=" font-[500] text-[#c25400] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px]  tracking-[-0.02em] "

            >
              Pick Up &amp; Drop
            </h2>
          </div>

          {/* Rounded border card */}
          <div className="grid  max-[767px]:grid-cols-1  grid-cols-2 gap-[30px]">
            <div className="overflow-hidden rounded-[20px]">
              <Image src={`${ASSET_PREFIX}/assets/images/cochin-international-airport.webp`} width={300} height={300} className="w-full h-full object-cover" alt='Cochin International Airport'></Image>
            </div>

            <div className="rounded-[30px] flex flex-col justify-between">
              <p className="text-[16px] leading-[1.3] mb-[20px]">
                Pick up &amp; Drop from the Cochin International Airport (COK) or any
                location can be arranged on request on a Chargeable basis. Taxi
                services can also be arranged on request.
              </p>
              <div className=" p-[15px_10px] sm:p-[20px_10px] lg:p-[30px_20px] bg-[#f5f5f5]  rounded-[10px]">
                <p className="text-[16px] leading-[1.3]">
                  <b>NOTE:</b> Local sightseeing trips, Cultural Programs, Personalized Yoga Sessions, etc. can be arranged on a chargeable basis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}