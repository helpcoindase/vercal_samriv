import Treatments from "@/data/Treatments";
import { ASSET_PREFIX } from "config";
import Image from "next/image";

type PageContent = {
  slug: string;
};

export default function StayDurationSection({ slug }: PageContent) {
  const data = Treatments.find((item) => item.id === slug)?.StayDuration;
  const cards = data?.cards;

  return (
    <>
      {data && (
        <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]" id="stay-duration">
          <div className="w-[90%] xl:w-[80%] mx-auto max-w-[105rem]">
            {/* Heading */}
            <h2 className="font-[500] text-[#c25400] text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] text-center  mb-[15px] sm:mb-[25px] ">
              {data?.orangetitle}
            </h2>

            {data?.description && (<div className=""> {data?.description}</div>)}

            {/* Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[40px] xl:gap-x-[60px] gap-y-[40px]  mt-[50px] sm:mt-[60px]">
              {cards?.map((card, index) => (
                <div
                  key={card.days}
                  className="group flex flex-col items-center border border-[#175e42] sm:border-white sm:hover:border-[#175e42] sm:hover:bg-[#d6f5ec] rounded-[30px] p-[25px] md:p-[40px] hover:shadow-[0_8px_30px_rgba(39,160,114,0.15)]"
                >
                  {/* Circle */}
                  <div
                    className={`
                  w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] xl:w-[140px] xl:h-[140px]
                  rounded-full flex flex-col items-center justify-center mb-[30px]
                  transition-all duration-300 ease-in-out bg-[#c25400] sm:bg-[#d6f5ec] sm:group-hover:bg-[#c25400] sm:group-hover:shadow-[0_8px_30px_rgba(39,160,114,0.3)]
                  
                `}
                  >
                    <span
                      className={`
                    text-[36px] sm:text-[40px] font-bold leading-[1]
                    transition-colors duration-300 text-white sm:text-[#c25400] sm:group-hover:text-white
                   
                  `}
                    >
                      {card.days}
                    </span>
                    <span
                      className={`
                    text-[16px] sm:text-[17px] font-medium leading-[1.2]
                    transition-colors duration-300 text-white sm:text-[#c25400] sm:group-hover:text-white
                    
                  `}
                    >
                      days
                    </span>
                  </div>

                  {/* Card body */}
                  <div
                    className={`
                  w-full transition-all duration-300
                
                `}
                  >
                    <p
                      className={`
                    text-[16px] leading-[1.7] transition-colors duration-300 text-[#31423B] group-hover:text-[#005F3B]
                    
                  `}
                    >
                      {card.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote banner */}
            {data?.footnote && (<div className="bg-[#f0f0f0] mt-[50px] sm:mt-[60px] rounded-[20px] px-[20px] sm:px-[40px] xl:px-[50px] py-[20px] sm:py-[36px] items-center  lg:w-[80%] mx-auto grid  sm:grid-cols-[50px_auto] gap-3 sm:gap-5">
              <div className="relative w-[50px] h-[50px]">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/${data?.footicon}`}
                  alt={data?.iconalt || ""}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-[16px] sm:text-[17px] xl:text-[18px] text-[#31423B] leading-[1.7]">
                {data?.footnote}
              </p>
            </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
