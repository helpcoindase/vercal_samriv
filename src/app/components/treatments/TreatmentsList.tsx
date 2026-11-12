import { ASSET_PREFIX } from "config"
import Image from "next/image"
import Link from "next/link"

export default function TreatmentList() {
    const treatment = [{
        icon: "ayurvedic-treatment.svg",
        title: "Ayurveda Treatment",
        image: "/assets/images/ayurveda-tratment.webp",
        link: "ayurvedic-treatment-in-kerala",
    },
    {
        icon: "panchakarma.svg",
        title: "Panchakarma Treatment",
        image: "/assets/images/treatment-2.webp",
        link: "panchakarma-treatment-in-kerala",
    },
    {
        icon: "sinusitis.svg",
        title: "Sinusitis Treatment", image: "/assets/images/sinus-treatment.webp",
        link: "sinusitis-ayurvedic-treatment-in-kerala",
    },
    {
        icon: "autsim.svg",
        title: "Autism Treatment", image: "/assets/images/treatment-3.webp",
        link: "best-ayurvedic-treatment-for-autism-in-kerala",
    },
    {
        icon: "weight-loss-treatment.svg",
        title: "Weight Loss Treatment", image: "/assets/images/psoriasis-treatment.webp",
        link: "weight-loss-ayurvedic-treatment-in-kerala",
    },
    {
        icon: "monsoon-treatment.svg",
        link: "ayurveda-monsoon-treatment-in-kerala", image: "/assets/images/lumbar-treatment.webp",
        title: "Monsoon Treatment",
    },
    {
        icon: "parkinson-disease.svg",
        link: "parkinsons-ayurvedic-treatment-in-kerala", image: "/assets/images/parknsons-treatment.webp",
        title: "Parkinsons Ayurvedic Treatment",
    },
    {
        icon: "sciatica.svg",
        title: "Sciatica Treatment", image: "/assets/images/varicose-treatment.webp",
        link: "ayurvedic-treatment-for-sciatica-in-kerala",
    },
    {
        icon: "stroke-paralysis.svg",
        link: "ayurvedic-stroke-treatment-in-kerala", image: "/assets/images/ayurveda-tratment.webp",
        title: "Stroke Treatment",
    },
    {
        icon: "varicose-veins.svg",
        link: "ayurvedic-treatment-for-varicose-veins-kerala", image: "/assets/images/varicose-treatment.webp",
        title: "Varicose Veins Treatment",
    },
    {
        icon: "knee-pain.svg",
        link: "ayurvedic-treatment-for-knee-pain-in-kerala", image: "/assets/images/treatment-3.webp",
        title: "Knee Pain Treatment",
    },
    {
        icon: "post-natal-treatment.svg",
        link: "post-natal-ayurvedic-treatment-in-kerala", image: "/assets/images/psoriasis-treatment.webp",
        title: "PostNatal Treatment",
    },
    {
        icon: "cervical-spondylosis.svg",
        link: "cervical-spondylosis-treatment-kerala", image: "/assets/images/cervical-treatment.webp",
        title: "Cervical Spondylosis Treatment",
    },
    {
        icon: "psoriasis-ayurvedic-treatment.svg",
        link: "psoriasis-ayurvedic-treatment-in-kerala", image: "/assets/images/psoriasis-treatment.webp",
        title: "Psoriasis Ayurvedic Treatment",
    },
    {
        icon: "lumbar-spondylosis.svg",
        link: "lumbar-spondylosis-ayurvedic-treatment-in-kerala", image: "/assets/images/lumbar-treatment.webp",
        title: "Lumbar Spondylosis Treatment",
    },
    {
        icon: "gastroesophageal-reflux.svg",
        link: "gastroesophageal-reflux-disease-treatment-in-kerala", image: "/assets/images/gastroesophageal-treatment.webp",
        title: "Gastroesophageal Reflux Disease Treatment",
    },
    {
        icon: "arthritis-treatment.svg",
        link: "arthritis-ayurvedic-treatment-kerala", image: "/assets/images/psoriasis-treatment.webp",
        title: "Arthritis Treatment",
    },
    {
        icon: "dysmenorrhea.svg",
        link: "ayurvedic-treatment-for-menstrual-pain-in-kerala", image: "/assets/images/treatment-2.webp",
        title: "Dysmenorrhea Treatment",
    },
    {
        icon: "ulcerative-colitis-treatment.svg",
        link: "ulcerative-colitis-treatment-kerala", image: "/assets/images/treatment-1.webp",
        title: "Ulcerative Colitis Treatment",
    },
    {
        icon: "disc-bulge.svg",
        title: "Disc Bulge Protrusion",
        link: "ayurvedic-treatment-disc-bulge-kerala", image: "/assets/images/ayurvedic-treatment.webp",
    },
    {
        icon: "lower-back-pain.svg",
        title: "Lower Back Pain",
        link: "ayurvedic-treatment-for-lower-back-pain-in-kerala", image: "/assets/images/ayurveda-tratment.webp",
    },
    {
        icon: "stress-management.svg",
        title: "Stress Management", image: "/assets/images/stress-treatment.webp",
        link: "ayurvedic-treatment-for-stress-in-kerala",
    },
    {
        icon: "hair-loss-treatment.svg",
        title: "Hair Loss Treatment", image: "/assets/images/hairloss-treatment.webp",
        link: "ayurvedic-treatment-for-hair-loss-in-kerala",
    },
    ]

    return (
        <>
            <section className="bg-white py-[60px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[130px]">
                <div className="text-center mb-[40px] mlg:mb-[80px]">
        
         <h2 className=" font-[500] text-[#27a172] text-[48px] leading-[54px] max-2xl:text-[44px] max-2xl:leading-[50px] max-xl:text-[40px] max-xl:leading-[46px] max-lg:text-[36px] max-xl:leading-[42px] max-md:text-[32px] max-md:leading-[38px] max-sm:text-[28px] max-sm:leading-[32px] mb-[15px] sm:mb-[25px] tracking-[-0.02em]">
           Treatments
          </h2> 
        </div>
                <div className="mx-auto w-[90%] max-w-[105rem]" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px_30px]">
                        {treatment.map((item, index) => (
                            <div key={index} className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-[28px] h-full">

                                {/* Image */}
                                <Image
                                    src={`${ASSET_PREFIX}${item.image}`}
                                    alt={item.title}
                                    width={400}
                                    height={500}
                                    unoptimized
                                    className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.785,0.135,0.15,0.86)] group-hover:scale-[1.06]"
                                />

                                {/* Default Green Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#119d78]/80 via-black/10 to-transparent transition duration-500 group-hover:opacity-0" />

                                {/* Hover Orange Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#e36502]/85 via-[#e36502]/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="absolute bottom-[26px] left-[28px] right-[24px] z-10 transition duration-500 max-md:left-[24px]">
                                    <p className="mb-[8px] text-[13px] font-[400] uppercase leading-[18px] tracking-[4px] text-white max-sm:text-[11px] max-sm:tracking-[3px] text-[#F2F0EE]">
                                        Treatment
                                    </p>

                                    <h3 className="mb-[8px] text-[26px] font-[500] leading-[30px] text-white 
                    text-[20px] leading-[26px] 
                    sm:text-[24px] sm:leading-[30px]
                       xl:text-[28px] xl:leading-[32px] ">
                                        {item.title}
                                    </h3>

                                    {/* <p className="text-[15px] font-[300] leading-[20px] text-white/90 max-sm:text-[14px] text-[#F2F0EE]">
                                        13+ Treatments available
                                    </p> */}
                                </div>

                                {/* Border Hover */}
                                <div className="absolute inset-0 rounded-[28px] border border-white/0 transition duration-500 group-hover:border-white/40" />
                                <Link className="absolute inset-0 rounded-[28px]  transition duration-500 " href={`/${item.link}`}></Link>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}

