import Link from "next/link";

export default function Address() {
  return (
    <div className="sm:w-[90%] m-auto grid grid-cols-1 lg:grid-cols-2 mt-2 hover:shadow-[0px_6px_12px_-2px_rgba(50,50,93,0.25),0px_3px_7px_-3px_rgba(0,0,0,0.3)] rounded-[50px] sm:rounded-[80px] lg:rounded-[80px] 2xl:rounded-[120px] overflow-hidden transition duration-300">
      <div className="p-[25px_15px]  sm:p-[50px] 2xl:p-[80px]  grid content-between gap-[20px] border-1 border-r-[#d9f6b4] border-[#27a172] bg-[#fff] rounded-[50px_50px_0_0] sm:rounded-[80px_80px_0_0] lg:rounded-[80px_0_0_80px] 2xl:rounded-[120px_0_0_120px] overflow-hidden ">
        <div className="">

          <h3 className="text-[#304A10] xxl:text-[35px] xxl:leading-[40px] text-[30px] leading-[36px] max-2xl:text-[28px] max-2xl:leading-[32px] max-xl:text-[24px] max-xl:leading-[28px] max-lg:text-[22px] max-lg:leading-[26px] max-md:text-[20px] max-md:leading-[24px] mb-[25px] max-lg:mb-[20px] max-md:mb-[15px]">
            Samwarthika Rivera Ayurveda Retreat{" "}
          </h3>


          <p className="text-[#341802] text-[22px] leading-[30px] max-xl:text-[18px] max-xl:leading-[28px] max-lg:text-[16px] max-lg:leading:-[24px] mb-[12px]">
            4/153D Thottuva, Koovapady PO,
            <br /> Perumbavoor, Ernakulam,

            <br /> Kerala - 683 544, India.
          </p>
        </div>
        <div className="">
          {/* ── HOURS ── */}
          <p className="flex items-center gap-[6px] text-[16px] leading-[1.2] font-bold tracking-[0.1em] uppercase text-[#e36707] mb-[12px]">
            Hours
            <span className="flex-1 h-[1px] bg-[#e3670740]" />
          </p>

          <div className="flex justify-between gap-[10px] items-center">
            <div className="grid grid-cols-[auto_auto_auto] max-sm:grid-cols-1 w-full justify-between gap-[60px] items-center max-2xl:gap-[40px] max-xl:gap-[30px] max-sm:gap-[20px]">
              <p className="text-[20px] leading-[25px] max-2xl:text-[18px] max-2xl:leading-[22px] max-xl:text-[16px] max-xl:leading-[20px] text-[#000] ">
                <span className="font-semibold">Monday </span>to{" "}
                <span className="font-semibold"><br className="max-sm:hidden" /> Sunday</span>
              </p>
              <p className="block max-sm:hidden text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#c25400]">
                24×7
              </p>
              <p className="block max-sm:hidden text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0">
                <span className="text-[16px] leading-[20px]">We are open</span>
                365
                <span className="text-[16px] leading-[20px]">Days</span>
              </p>
              {/* Mobile fallback */}
              <div className="hidden max-sm:flex justify-between w-full items-center">
                <p className="text-[40px] leading-[30px] text-[#c25400]">24×7</p>
                <p className="text-[40px] leading-[40px] text-[#000] text-center grid w-[90px]">
                  <span className="text-[16px] leading-[20px]">We are open</span>
                  365
                  <span className="text-[16px] leading-[20px]">Days</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-[16px] text-[#7a4a28] italic mt-[10px] leading-[1.5]">
            Doctor availability is continuous. Insurance & accounts: 9 a.m. - 7 p.m. IST.
          </p>
        </div>
      </div>

      <div className="bg-[#D9F6B4] w-full h-[100%] border-1 border-[#D9F6B4] grid gap-[20px] rounded-[0px_0px_50px_50px]  sm:rounded-[0px_0px_80px_80px] lg:rounded-[0_80px_80px_0] 2xl:rounded-[0_120px_120px_0] p-[25px_15px] sm:p-[50px] 2xl:p-[80px] ">
        <div className="">
          {/* ── PHONE ── */}
          <p className="flex items-center gap-[6px] text-[16px] leading-[1.2] font-bold tracking-[0.1em] uppercase text-[#e36707] mb-[10px]">
            Phone
            <span className="flex-1 h-[1px] bg-[#e3670740]" />
          </p>

          {/* General & Booking */}
          <p className="grid sm:grid-cols-[160px_auto] gap-[12px] text-[16px] leading-[22px] font-semibold mb-[12px]">
            <span className="text-[#7a4a28] text-[16px]">General & Booking</span>
            <span>
              <Link href="tel:+919567772101" data-cta="call-now"
                className="text-[#000000] hover:text-[#c25400] transition font-light duration-300 ease-in-out">
                +91 95677 72101
              </Link>
              <span className="ml-[6px] text-[11px] font-bold bg-[#e36707] text-white px-[6px] py-[1px] rounded-full">24×7</span>
            </span>
          </p>

          {/* International */}
          <p className="grid sm:grid-cols-[160px_auto] gap-[12px] text-[16px] leading-[22px] font-semibold mb-[12px]">
            <span className="text-[#7a4a28] text-[16px]">International</span>
            <span>
              <Link href="tel:+919567772101" data-cta="call-now"
                className="text-[#000000] hover:text-[#c25400] transition font-light duration-300 ease-in-out">
                +91 95677 72101
              </Link>
              <span className="block text-[16px] text-[#9a5a30] font-normal">English · Arabic · Russian</span>
            </span>
          </p>

          {/* Insurance Desk */}
          <p className="grid sm:grid-cols-[160px_auto] gap-[12px] text-[16px] leading-[22px] font-semibold ">
            <span className="text-[#7a4a28] text-[16px]">Insurance Desk</span>
            <span>

              <span className="block text-[16px] text-[#7a4a28] font-light italic">Available 9 a.m. - 7 p.m. IST</span>
            </span>
          </p>

        </div>
        <div className="">

          {/* ── EMAIL ── */}
          <p className="flex items-center gap-[6px] text-[16px] leading-[1.2] font-bold tracking-[0.1em] uppercase text-[#e36707] mb-[10px]">
            Email
            <span className="flex-1 h-[1px] bg-[#e3670740]" />
          </p>
          <div className="max-xl:grid">
            {[
              { label: "General Enquiries", href: "info@samwarthikarivera.com" },
              { label: "International", href: "international@samwarthikarivera.com" },
              { label: "Insurance", href: "insurance@samwarthikarivera.com" },
              { label: "Press & Media", href: "media@samwarthikarivera.com" },
            ].map(({ label, href }) => (
              <p key={label} className="grid max-sm:grid-cols-1 max-lg:grid-cols-[160px_auto] xl:grid-cols-[140px_auto] 2xl:grid-cols-[160px_auto] gap-[5px] xl:gap-[12px] text-[16px]  leading-[22px] font-semibold mb-[12px] last:mb-0">
                <span className="text-[#7a4a28] text-[16px] font-semibold ">{label}</span>
                <Link href={`mailto:${href}`} data-cta="email-cta"
                  className="text-[#000000] hover:text-[#c25400] font-light transition duration-300 ease-in-out break-all max-[380px]:text-[14px] text-nowrap">
                  {href}
                </Link>
              </p>
            ))}
          </div>


        </div>

      </div>
    </div>)
}