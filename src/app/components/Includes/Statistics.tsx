

export default function Statistics() {
  return (
    <div className=" ">
      <div className="flex justify-start gap-[10px] items-center mt-[30px] sm:mt-[60px]">
        <div className=" max-lg:w-full overflow-hidden w-full grid grid-cols-2 sm:grid-cols-4 gap-y-[25px] gap-x-[15px]   ">

          {[
            { value: "25+", text: "Years of Experience" },
            { value: "23+", text: "Doctors in the Team" },
            { value: "20+", text: "Insurer's available" },
            { value: "50+", text: "Variety of Treatments" },
          ].map((item, index) => (
            <div key={index} className=" last:border-0 flex items-center gap-[40px] max-lg:gap-[20px] max-md:gap-[15px] w-[100%] sm:w-[90%] xl:w-[80%]" >
              <h3 className="flex flex-col items-start gap-[5px] sm:gap-[20px] xl:gap-[10px] w-[90%] sm:w-full"><span className=" 
                          font-[600] text-[#c25400] 
                          text-[44px] leading-[52px] max-2xl:text-[44px] max-2xl:leading-[52px] max-xl:text-[40px] max-xl:leading-[44px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[28px] max-md:leading-[32px] max-sm:text-[28px] max-sm:leading-[30px] tracking-[-0.02em]

                        ">
                {item.value}
              </span>
                <span className=" text-[#341802E6] font-[400] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] xl:text-[20px] xl:leading-[28px]">
                  {item.text}</span>
              </h3>
            </div>
          ))}


        </div>
      </div>
    </div >
  );
}