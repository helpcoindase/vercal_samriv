import BlogListing from "../components/Blog/BlogListing";
import Footer1 from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Blogbanner from "../components/Blog/Blogbanner";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import { Metadata } from "next";
import { getMeta } from "@/lib/getMeta";

export async function generateMetadata(): Promise<Metadata> {
    return getMeta("/blog");
}

export default function BlogPage() {


    return (
        <main className=" bg-white">
            <Header />
            <div><Blogbanner slug="blog" /></div>


            <div className=""><Breadcrumbs pageKey="blog" /></div>
            <div className="">
                <BlogListing />
            </div>
            <div className="bg-[#000]">
                <Footer1 />
            </div>
        </main >
    );
}
