import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";
import Treatments from "@/data/Treatments";

type Pagecontent = {
  slug: string
}

export default function OverviewReverse({ slug }: Pagecontent) {

  const data = Treatments.find((item) => item.id === slug)?.Overview?.right;

  return (
    <>
      {data && (
        <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px] " id="overview">
          <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[65%] max-w-[105rem] 2xl:max-w-[85rem]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px]  ">

              <div className="relative h-full pt-[0] ">
                <div className="relative rounded-[30px] sm:rounded-[50px] overflow-hidden  min-h-[200px] sm:min-h-[300px] h-full self-stretch">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/${data?.image}`}
                    alt={`${data?.alt}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-[100%]">
                <div className="">
                  {/* <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
                  The Ayurvedic Hospital
                </p> */}
                  <h2 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[80%] max-sm:text-center max-sm:mx-auto">
                    {data?.Heading}
                  </h2>
                  <div>
                    {data?.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
