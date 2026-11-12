import { ASSET_PREFIX } from "../../../../config";
import Image from "next/image";
import WhiteBorderbtn from "../Buttons/WhiteBorderbtn";

export default function Managementmessage() {
  return (
    <section className=" " id="founder-message">
      <div className="">
        {/* Title Section */}
        <div className="w-[90%] m-auto max-w-[105rem]">
          <div className="text-center">
            <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
              THE MANAGEMENT
            </p>
            <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
              Founder Message
            </h2>
          </div>
          <div className="max-lg:mt-[20px] flex justify-center sm:justify-end  max-w-[100%] xl:max-w-[105%]">
            <WhiteBorderbtn text="View More" link="/our-doctors" />
          </div>
        </div>


        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_auto] gap-[25px] sm:gap-[40px] mlg:gap-[80px] xl:gap-[120px] w-[90%] mlg:w-[80%] 2xl:w-[60%] mx-auto mt-[30px] sm:mt-[60px] group max-w-[100rem]">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="sticky top-[120px]">
              <div className="mb-[20px] rounded-[30px] overflow-hidden ">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri.webp`}
                  alt="Dr. K. N. Subramanian Namboothiri"
                  width={350}
                  height={400}
                  className="rounded-[30px] mx-auto mlg:mx-0 group-hover:scale-105 transition-transform duration-300 object-cover h-[400px] w-full"
                />
              </div>
              <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
                Dr. K. N. Subramanian Namboothiri
              </p>
              <p className="text-[18px] leading-[26px] text-[#AE774D] mt-[4px]">
                BAMS, MD(Ay) -  Medical Director
              </p>
            </div>
          </div>

          {/* Right Column - Message */}
          <div>
            <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[20px] sm:mb-[30px] font-[500] text-center lg:text-left">
              We did not build a resort that happens to offer Ayurveda. We built a hospital that happens to feel like a retreat.
            </p>
            <p className="text-[16px] leading-[24px] text-[#341802] mb-[15px] text-center lg:text-left">
              Ayurveda was never meant to be a weekend service. It was meant to be a way of restoring balance slowly, carefully, under the eye of a physician who knows you. When we conceived Samwarthika Rivera, the question was not how to make Ayurveda feel luxurious. The question was how to remove the things that keep people from completing a real Ayurvedic programme: the noise of a city hospital, the rush of a tourist resort, the gap between the doctor’s consultation and the therapist’s table.</p>
            <p className="text-[16px] leading-[24px] text-[#341802] text-center lg:text-left">
              Rivera is our answer. A campus on the river, with a small enough number of guests that every doctor knows every patient. A kitchen that cooks for your dosha, not a buffet. A team that is here when you arrive at three in the morning and here when you leave with a recovery plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
