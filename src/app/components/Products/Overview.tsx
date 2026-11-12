import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";
import Treatments from "@/data/Treatments";

type Pagecontent = {
  slug: string
}

export default function Overview({ slug }: Pagecontent) {

  const data = Treatments.find((item) => item.id === slug)?.Overview?.left;

  return (
    <>
      {data && (
        <section className="bg-[#E2FBF2] py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]" id="overrev">
          <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[65%] max-w-[105rem] 2xl:max-w-[85rem]">
            <div className="text-center lg:mb-[60px] w-[100%] sm:w-[80%] mx-auto ">
              <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
                {data?.title}
              </h2>
              <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[30px] lg:mb-[0]">
                {data?.description}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px] items-start overflow-hidden">
              {/* Left: content */}
              <div className="w-[100%] order-2 lg:order-1">

                <h3 className="font-[500] text-[#c25400] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[80%] max-sm:text-center max-sm:mx-auto max-sm:w-[100%]">
                  {data?.Heading}
                </h3>
                <div>{data?.content}</div>
              </div>

              {/* Right: image - height follows the left column */}
              <div className="relative h-full pt-[0] order-1 lg:order-2">
                <div className="relative rounded-[30px] sm:rounded-[50px] overflow-hidden  min-h-[200px] sm:min-h-[300px] h-full self-stretch">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/${data?.image}`}
                    alt={`${data?.alt}`}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
