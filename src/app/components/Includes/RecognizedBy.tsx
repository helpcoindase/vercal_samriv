import { ASSET_PREFIX } from "config";
import Image from "next/image";

export default function RecognizedBy() {
  return (
    <div className="w-[90%] mx-auto ">
      {/* Logos */}
      <h3 className="text-[24px] leading-[30px] max-xl:text-[22px] max-xl:leading-[26px] max-md:text-[20px] max-md:leading-[24px] text-[#545353] font-[500] mb-[30px] max-xl:mb-[20px] text-center">
        Recognized By
      </h3>
      <div className="grid grid-cols-3 sm:flex gap-[60px] mt-[35px] sm:mt-[20px] max-2xl:gap-[40px] max-xl:gap-[20px] flex-wrap items-center justify-evenly lg:justify-center">
        <div className="group">
          <Image
            width={90}
            className="w-[65px] sm:w-[75px] h-[auto] transition duration-400 group-hover:scale-[1.05]"
            height={90}
            src={`${ASSET_PREFIX}/assets/images/nabh-logo.webp`}
            alt="NABH Logo"
          />
        </div>
        <div className="group">
          <Image
            width={90}
            className="w-[78px] sm:w-[90px] h-[auto] transition duration-400 group-hover:scale-[1.05]"
            height={90}
            src={`${ASSET_PREFIX}/assets/images/ayur-diamond.webp`}
            alt="Ayur Diamond"
          />
        </div>
        <div className="group">
          <Image
            width={100}
            className="w-[90px] h-[auto] transition duration-400 group-hover:scale-[1.05]"
            height={90}
            src={`${ASSET_PREFIX}/assets/images/emblem-of-kerala.webp`}
            alt="Emblem of kerala"
          />
        </div>
        <div className="group">
          <Image
            width={100}
            className="w-[78px] sm:w-[110px] h-[auto] transition duration-400 group-hover:scale-[1.05]"
            height={90}
            src={`${ASSET_PREFIX}/assets/images/trip-advisor-icon.webp`}
            alt="Trip Advisor Icon"
          />
        </div>
        <div className="group">
          <Image
            width={90}
            className="w-[80px] sm:w-[90px] h-[auto] transition duration-400 group-hover:scale-[1.05] "
            height={90}
            src={`${ASSET_PREFIX}/assets/images/kerala-tourism.webp`}
            alt="Kerala Tourism"
          />
        </div>
      </div>
    </div >
  );
}