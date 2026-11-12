
import { redirect } from 'next/navigation';
import Header from '../components/layout/Header';
import Footer1 from "../components/layout/Footer";
import { getMeta } from '@/lib/getMeta';
import SubBanner from '../components/Products/SubBanner';
import Treatments from '@/data/Treatments';
import Overview from '../components/Products/Overview';
import OverviewReverse from '../components/Products/OverviewReverse';
import Benefits from '../components/Products/Benefits';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import FaqTestimonialsSection from '../components/Products/Faq';
import AyurvedicWellnessSection from '../components/Products/Wellness';
import TherapySection from '../components/Products/Therapies';
import HealingJourneySection from '../components/Products/Healingjourney';
import RecognizedBy from '../components/Includes/RecognizedBy';
import IdealDurationSection from '../components/Products/IdealDuration';
import StayDurationSection from '../components/Products/StayDuration';
import Getquote from '../components/layout/Getquote';
import QuickLink from '../components/Products/QuickLink';
import SubBannerForm from '../components/Products/SubbannerForm';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return Treatments.map((item) => ({ slug: item.id }));
}
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const Treatment = Treatments.find((b) => b.id === slug);

    if (!Treatment) {
        redirect('/'); // ✅ Redirect to home
    }

    return getMeta(`/${slug}`);
}
export default async function ProductDetail({ params }: PageProps) {
    const { slug } = await params;



    return (
        <div className="bg-[#fff]">
            <Header />
            {slug === "panchakarma-treatment-in-kerala" ? (
  <SubBannerForm slug={slug} />
) : (
  <SubBanner slug={slug} />
)}
            <QuickLink slug={slug} />
            <div className=""><Breadcrumbs pageKey={slug} /></div>
            {/* <div className="pt-[60px] sm:pt-[60px] md:pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[130px]"><RecognizedBy /></div> */}
            <OverviewReverse slug={slug} />
            <Overview slug={slug} />
            <AyurvedicWellnessSection slug={slug} />
            <TherapySection slug={slug} />
            <HealingJourneySection slug={slug} />
            <IdealDurationSection slug={slug} />    
            <StayDurationSection slug={slug} />
            <Benefits slug={slug} />
            <FaqTestimonialsSection slug={slug} />
            <Getquote />
            <div className="bg-[#000]"><Footer1 /></div>
        </div>
    );
}
