import Treatments from "@/data/Treatments";
import { ASSET_PREFIX } from "config";
import Image from "next/image";

type pagecontent = {
  slug: string
}
export default function TherapySection({ slug }: pagecontent) {
  const data = Treatments.find((item) => item.id === slug)?.therapy;

  const therapyData = data?.therapy
  return (<>
    {data && (
      <section className="py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]" id="therapies">
        <div className="w-[90%]  m-auto  max-w-[105rem] ">
          <div className="2xl:w-[95%] mx-auto">
            <h2 className="font-[500] text-[#c25400] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center md:w-[80%] mx-auto text-center">
              {data?.orangetitle}
            </h2>
            <div>{data?.subcontent}</div>
          </div>
          {/* Therapy Cards Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 mt-[30px]">
            {therapyData?.map((item, index) => (
              <div
                key={item.therapyname}
                className="bg-white border border-[#175e42] p-[15px] rounded-2xl overflow-hidden shadow-md flex flex-col items-start pb-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image placeholder - replace with <Image /> when you have real images */}
                <div
                  className="w-full h-[200px] flex items-start justify-center relative rounded-2xl overflow-hidden mb-4"
                  aria-label={item.therapyalt}
                >



                  <Image
                    src={`${ASSET_PREFIX}/assets/images/${item?.therapyimage}`}
                    alt={item?.therapyalt?.trim() || item?.therapyname}
                    fill
                    className="w-full h-full object-cover"
                  />


                </div>

                {/* Therapy Name */}
                <p className="text-[20px] md:text-[22px] xl:text-[24px] font-semibold text-[#2a9d6c] text-start px-3 mb-[10px] leading-[1.2] ">
                  {item?.therapyname}
                </p>

                {/* Subtitle */}
                {item?.therapycontent && (<p className="text-[16px] font-semibold text-[#222222] text-start px-3 leading-[1.2]">
                  {item?.therapycontent}
                </p>)}
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </>
  )
}