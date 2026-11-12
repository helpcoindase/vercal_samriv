import { Plane, Train, Car } from "lucide-react";
import { ASSET_PREFIX } from "config";

const travelOptions = [
  {
    icon: Plane,
    title: "By Air",
    place: "Cochin International Airport (COK)",
    time: "90 minutes by road.",
    image: "assets/images/air.webp",
  },
  {
    icon: Train,
    title: "By Rail",
    place: "Aluva Railway Station",
    time: "45 minutes by road",
    image: "assets/images/rail.webp",
  },
  {
    icon: Car,
    title: "By Road",
    place: "Perumbavoor Town",
    time: "15 minutes from the campus",
    image: "assets/images/road.webp",
  },
];

export default function ReachCampus() {
  return (
    <section className="pb-[60px] sm:pb-[60px] md:pb-[70px] lg:pb-[80px] xl:pb-[90px] 2xl:pb-[100px] w-[90%] m-[auto] max-w-[130rem]">
      <div className="relative md:w-[90%] mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em] text-center">
            Getting Here
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 mt-[30px] md:mt-[40px]">
          {travelOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-[#dbeee2] bg-white p-8 shadow-[0_15px_50px_rgba(16,35,24,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(31,122,77,0.15)]"
              >
                {/* Hover Background Image */}
                <div
                  className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${ASSET_PREFIX}/${item.image})`,
                  }}
                />

                {/* Black Tint Overlay */}
                <div className="absolute inset-0 z-[1] bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D7F7EB] text-[#1f7a4d] shadow-inner transition-all duration-500 group-hover:bg-white/20 group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-[#102318] group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base font-medium text-[#24402f] group-hover:text-white transition-colors duration-500">
                    {item.place}
                  </p>

                  <p className="mt-2 text-[16px] font-semibold text-[#2f8f5b] group-hover:text-white transition-colors duration-500">
                    {item.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}