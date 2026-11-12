import Link from "next/link";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Header from "../components/layout/Header";
import Subbanner from "../components/PrivacyPolicy/Subbanner";
import Footer1 from "../components/layout/Footer";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata(): Promise<Metadata> {
  return getMeta("/privacy-policy");
}

export default function PrivacyPolicy() {

    return (
        <>
            <Header />
            <Subbanner />
            <div className=""><Breadcrumbs pageKey="privacy-policy" /></div>
            <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px] ">
                <div className="h-[100%] flex flex-col justify-start items-start  w-[90%] sm:w-[80%] md:w-[70%] mx-auto  max-w-[120rem]">


                    <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]   mb-[30px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]  ">
                        We are dedicated to preserving your personal data and respecting your right to privacy.
                    </p>
                    <h2 className="mb-[15px] text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] font-[400] leading-[30px] tracking-[-0.02em] text-[#c25400]  max-md:mb-[18px]  "> We may collect personal information </h2>
                    <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]  mb-[15px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                        Contact : your name, email address, phone number, and postal address </p>
                    <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]   mb-[30px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                        Usage : website and services, such as IP addresses, device information, browser type Accounts </p>
                    <h2 className="mb-[15px] text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] font-[400] leading-[30px] tracking-[-0.02em] text-[#c25400]  max-md:mb-[18px]  "> Sharing Your Information </h2>
                    <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]   mb-[30px] w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                        Your personal information is never distributed to outside parties by us. Your information is private and secure with us at all times. </p>
                    <h2 className="mb-[15px] text-[22px] sm:text-[24px] md:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[26px] md:leading-[32px] 2xl:leading-[36px] font-[400] leading-[30px] tracking-[-0.02em] text-[#c25400]  max-md:mb-[18px]   "> Get in touch with us </h2>
                    <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802]   mb-[0]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
                        Please get in touch with us at if you have any queries -   <Link href="mailto:info@samwarthikarivera.com" data-cta="email-cta" className="text-[#c25400] hover:underline transition duration-300">info@samwarthikarivera.com</Link> </p>
                </div>
            </section>

            <Footer1 />
        </>
    )

}