import { getMeta } from "@/lib/getMeta";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import Footer1 from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Subbanner from "../components/treatments/Subbanner";
import { Metadata } from "next";
import TreatmentList from "../components/treatments/TreatmentsList";
import Getquote from "../components/layout/Getquote";

export async function generateMetadata(): Promise<Metadata> {
    return getMeta("/treatments");
}
export default function Treatments() {
    return (
        <>
            <Header />
            <main>
                <Subbanner />
                <div className=""><Breadcrumbs pageKey="treatments" /></div>
                <TreatmentList />
                <Getquote />
            </main>
            <Footer1 />
        </>
    )
}