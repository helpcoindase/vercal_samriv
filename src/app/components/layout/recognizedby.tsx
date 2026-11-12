"use client";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import { usePathname } from "next/navigation";

export default function Recognized() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section
      className={`

   ${pathname == "/monsoon-special/" ||
          pathname == "/about-us/" ||
          pathname == "/contact-us/"
          ? "pt-[140px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]"
          : "pb-[140px]  max-2xl:pb-[100px]   max-xl:pb-[80px]  max-md:pb-[50px]"
        }

      `}>
      <div className="w-[90%] m-[auto] max-w-[120rem]">
        <h2 className="text-center m-auto text-[#000] text-[40px] leading-[48px]  max-xl:text-[36px] max-xl:leading-[44px]  max-mlg:text-[32px] max-mlg:leading-[40px] max-sm:text-[30px] max-sm:leading-[38px]  mb-[40px]  max-xl:mb-[30px]  max-md:mb-[20px]">
          Recognized By
        </h2>
        <div className="flex gap-[80px] justify-center items-center flex-wrap max-2xl:gap-[60px]  max-lg:gap-[40px]  max-mlg:gap-[30px]  max-md:gap-[20px]  max-sm:gap-[20px]">
          <div className="group">
            <Image
              width={114}
              className="w-[120px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={114}
              src={`${ASSET_PREFIX}/assets/images/nabh-logo.webp`}
              alt="NABH Logo"
            />
          </div>
          <div className="group">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/ayur-diamond.webp`}
              alt="Ayur Diamond"
            />
          </div>
          <div className="group">
            <Image
              width={100}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/emblem-of-kerala.webp`}
              alt="Emblem of kerala"
            />
          </div>
          <div className="group">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/trip-advisor-icon.webp`}
              alt="Trip Advisor Icon"
            />
          </div>
          <div className="group">
            <Image
              width={200}
              className="w-[150px] h-[auto]  max-xl:w-[100px]  max-md:w-[80px] transition duration-300 ease-in group-hover:scale-[1.1]"
              height={200}
              src={`${ASSET_PREFIX}/assets/images/kerala-tourism.webp`}
              alt="Kerala Tourism"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
