import { ASSET_PREFIX } from "config";
import Treatments from "@/data/Treatments";
import Image from "next/image";



type pagecontent = {
  slug: string
}
export default function AyurvedicWellnessSection({ slug }: pagecontent) {

  const data = Treatments.find((item) => item.id === slug)?.wellness;



  return (
    <>
      {data && (

        <section className="pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]" id="wellness">
          <div className="mx-auto w-[90%] 2xl:w-[85%]  max-w-[105rem] ">
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

                  <h2 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] w-[90%] max-sm:text-center max-sm:mx-auto max-sm:w-[100%]">
                    {data?.greentitle}
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