import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Treatments from "@/data/Treatments";

type pagecontent = {
  slug: string
}

export default function Benefits({ slug }: pagecontent) {
  const data = Treatments.find((item) => item.id === slug)?.benefits;


  return (
    <>
     { data && (
      <section className=" pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] " id="benefits">
        <div className="w-[90%] m-auto  max-w-[95rem]">
          <h2
            className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center md:w-[70%] mx-auto opacity-100 translate-y-0 w-[80%] text-center m-auto">
            {data?.heading}
          </h2>
          <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] text-center">
            {data?.subparah}
          </p>
          <div className="mt-[80px] max-xl:mt-[60px]  max-lg:mt-[40px] w-[80%] max-xxl:w-[85%] m-auto grid grid-cols-[49.5%_49.5%] max-xl:grid-cols-[49.5%_50%]  max-md:flex max-md:flex-col-reverse max-md:gap-[10px] justify-between  max-2xl:w-[90%]  max-lg:w-[100%] h-fit overflow-hidden ">
            <div className="bg-[#DFFFF3] rounded-[120px_0px_0px_120px] max-xl:rounded-[100px_0px_0px_100px] max-lg:rounded-[80px_0px_0px_80px] max-md:rounded-[0px_0px_80px_80px]    p-[80px_60px]  max-xxl:p-[80px_40px] max-2xl:p-[60px_40px] max-xl:p-[40px_25px]">
              {data?.content}
            </div>
            <div className="group h-fit  relative max-md:min-h-[400px] max-md:max-h-[400px]   max-sm:min-h-[350px]   max-sm:max-h-[350px] h-full overflow-hidden rounded-[0px_120px_120px_0px] max-xl:rounded-[0px_100px_100px_0px] max-lg:rounded-[0px_80px_80px_0px] max-md:rounded-[80px_80px_0px_0px]">
              <Image
                width={300}
                height={600}
                className="w-full h-[auto] object-cover object-center absolute top-0 left-0 w-full h-full"
                alt={`${data?.alt}`}
                src={`${ASSET_PREFIX}/assets/images/${data?.image}`}
              />
            </div>
          </div>
        </div>
      </section >
)}
    </>
  );
}
