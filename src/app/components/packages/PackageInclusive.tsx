import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";
import CommonList from "../Includes/CommonList";



export default function PackageInclusive() {
  const inclusiveItems = [

    {
      title: "",
      description: "Accommodation in Superior AC River View Room",
    },
    {
      title: "",
      description:
        "An Ayurvedic vegetarian South Indian diet - Breakfast, Lunch, Evening Tea, and Dinner as advised by the Doctor & Medicated drinking water",
    },
    {
      title: "",
      description: "Detailed Doctor Consultation & Daily check-up",
    },
    {
      title: "",
      description:
        "Two sessions of Ayurvedic treatments daily as per the Doctor's advice",
    },
    {
      title: "",
      description:
        "Stationery for the treatments, Medicated oils, Medicated powders, other Medicinal preparations, Treatment wear, Ayurvedic soap, Shampoo, etc. necessary for the treatments",
    },
    {
      title: "",
      description:
        "Internal Medicines during the treatment course as prescribed by the Doctor",
    },
    {
      title: "",
      description: "Nursing Charges",
    },
    {
      title: "",
      description:
        "Laundry service for one pair of regular clothes per day",
    },
    {
      title: "",
      description:
        "Daily Yoga sessions as per the doctor's advice",
    },

  ];

  return (
    <>

      <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px] " >
        <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[70%] max-w-[120rem] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px]  ">

            <div className="relative h-full pt-[0] ">
              <div className="relative rounded-[30px] sm:rounded-[50px] overflow-hidden  min-h-[200px] sm:min-h-[300px] h-full self-stretch">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/panchakarma-overview-reverse.webp`}
                  alt="package inclusive image"
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
                <h3 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] max-sm:text-center max-sm:mx-auto">
                  The Package Rate is Inclusive of:
                </h3>
                <div>

                  <CommonList items={inclusiveItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
