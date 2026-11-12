import Link from "next/link";

export default function Getquote() {
  return (
    <>
      <search className="py-[30px] sm:py-[40px] lg:py-[60px] bg-[#cdf1e3]">
        <div className="w-[100%] px-[20%]  max-lg:px-[10%]   pr-[14%]  gap-[50px] max-2xl:pr-[9%] xxl:gap-[28%]  max-2xl:gap-[11%]     max-xxl:gap-[17%] max-2xl:-gap-[8%] max-xl:gap-[6%] max-lg:gap-[20px] m-[auto]  max-md:mr-[auto]  flex  justify-center lg:space-evenly items-center  max-lg:flex-wrap max-lg:items-center max-lg:justify-center  max-w-[140rem] mx-auto">
          <p className="text-[26px] leading-[32px] max-xl:text-[24px] max-xl:leading-[28px] max-md:text-[20px] max-md:leading-[24px] max-sm:text-[18px] max-sm:leading-[22px] text-[#384e20] font-semibold text-center lg:text-left">
            Begin Your Journey Towards Natural Healing
          </p>
          <Link
            href="/contact-us"
            data-cta="book-app-head"

            className="text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] border-[1px] border-[#c25400] hover:border-[#1b8564] py-[5px] sm:py-[8px] h-[fit-content] pl-[10px] pr-[10px] sm:pl-[20px] sm:pr-[15px] 2xl:pl-[30px] 2xl:pr-[25px] rounded-[50px] text-center items-center transition duration-300 capitalize text-[#fff] font-[500] bg-[#c25400] hover:bg-[#175e42] hover:text-[#fff] cursor-pointer flex gap-[5px]"
          > Book Appointment
          </Link>
        </div>
      </search>
    </>
  );
}
