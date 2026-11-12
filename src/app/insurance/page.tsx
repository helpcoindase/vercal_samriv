import { getMeta } from "@/lib/getMeta";
import InsuranceList from "../components/Insurance/InsuranceList";
import Subbanner from "../components/Insurance/Subbanner";
import Footer1 from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Metadata } from "next";
import RecognizedBy from "../components/Includes/RecognizedBy";
import Overview from "../components/Insurance/Overview";

export async function generateMetadata(): Promise<Metadata> {
    return getMeta("/insurance");
}

export default function Insurance() {
    return (
        <>
            <Header />
            <Subbanner />
            <section className="bg-white pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px] "><Overview />
            </section>
            <InsuranceList />
            <div className=" py-[100px]   max-xl:py-[80px]  max-md:pyt-[50px]">
            {/* <RecognizedBy /> */}
            </div>
            <Footer1 />
        </>
    )

}