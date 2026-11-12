export default function Information() {
  return (
    <>
      <div className="mx-auto w-[90%] xl:w-[70%] 2xl:w-[60%]  max-w-[120rem] ">
        <div className="grid grid-cols-1 ">
          {/* Vision */}{" "}
          <div className="p-[30px_20px] sm:p-[40px_30px] xl:p-[50px_40px] bg-[#f7e7d5] rounded-[50px] hover:shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] transition-shadow duration-300">
            <ul className="">
              <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] ">
                {/* Icon */}
                <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-full overflow-hidden p-[2px] bg-[#f7e7d5] flex justify-center items-center mt-[3px] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m10 17 5-5-5-5"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <span className="mr-[5px]">
                  An additional person we can charge <strong>5,000/-</strong> for a room with
                  treatment and food.
                </span>
              </li>
              <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] ">
                {/* Icon */}
                <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-full overflow-hidden p-[2px] bg-[#f7e7d5] flex justify-center items-center mt-[3px] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m10 17 5-5-5-5"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <span className="mr-[5px]">Without treatment, <strong>₹ 1,000/-</strong> per day for bystander</span>
              </li>
              <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] ">
                {/* Icon */}
                <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-full overflow-hidden p-[2px] bg-[#f7e7d5] flex justify-center items-center mt-[3px] shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m10 17 5-5-5-5"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <span className="mr-[5px]">Package Rates - Domestic (In INR)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
