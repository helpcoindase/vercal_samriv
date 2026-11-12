import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import Link from "next/link";
import CommonList from "../Includes/CommonList";



export default function PackageExclusive() {
  const exclusiveItems = [

    {
      title: "",
      description:
        "Laboratory, Radiology and Imaging services prescribed during treatments by the Doctor",
    },
    {
      title: "",
      description:
        "Additional treatments (if necessary) prescribed by the Doctor apart from the regular treatments in two sessions",
    },
    {
      title: "",
      description:
        "Any surgical types of equipment (if required) for the additional treatments",
    },
    {
      title: "",
      description: "Additional clothes for laundry",
    },
    {
      title: "",
      description:
        "Take home Medicines prescribed by the Doctor at the time of discharge, including Taxes, Levi, etc. (if any)",
    },
  ];

  return (
    <>

      <section className=" py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px] bg-[#E2FBF2] " >
        <div className="mx-auto w-[90%] xl:w-[80%] 2xl:w-[70%] max-w-[120rem] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] lg:gap-[100px]  ">


            <div className="w-[100%] order-2 lg:order-1">
              <div className="">
                {/* <p className=" uppercase tracking-[2px] text-[#c25400] mb-[10px] font-[500] text-[14px] sm:text-[16px]">
                  The Ayurvedic Hospital
                </p> */}
                <h3 className=" font-[500] text-[#27a172] text-[38px] leading-[44px] max-2xl:text-[38px] max-2xl:leading-[44px] max-xl:text-[34px] max-xl:leading-[42px] max-lg:text-[30px] max-xl:leading-[46px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[26px] max-sm:leading-[30px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] max-sm:text-center max-sm:mx-auto">
                  The Package Rate does not include the Cost for:
                </h3>
                <div>

                  <CommonList items={exclusiveItems} />
                </div>
              </div>
            </div>
            <div className="relative h-full pt-[0] order-1 lg:order-2 ">
              <div className="relative rounded-[30px] sm:rounded-[50px] overflow-hidden  min-h-[200px] sm:min-h-[300px] h-full self-stretch">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/panchakarma-overview-reverse.webp`}
                  alt="package exclusive image"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
