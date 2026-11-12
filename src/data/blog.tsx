import { ASSET_PREFIX } from "config";

export interface AccordionItem {
    id: number;
    heading: string;
    content: string;
    category?: string;
}

export interface BlogItem {
    id: string;
    slug: string;
    title: string;
    date: string;
    image: string;
    content: string | React.ReactNode;
    content2?: string | React.ReactNode;
    Contenttype: "normal" | "jsx";
    Contenttype2?: "normal" | "jsx";
    accordion?: AccordionItem[];
    href: string;
    category?: string;
}

export const BLOGS: BlogItem[] = [
    {
        id: "1",
        slug: "blog-detail-1",
        title: "Your Ultimate Ayurvedic Medical Tourism Guide in 2025",
        date: "25/July/2026",
        image: "/assets/images/blog-1.webp",
        Contenttype: "normal",

        content: (
            <>
                <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[15px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>

                <p className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] mb-[15px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </>
        ),

        accordion: [
            {
                id: 1,
                heading:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
                id: 2,
                heading:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
        ],

        content2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        Contenttype2: "normal",

        href: "/blog/blog-detail-1",
    },

    {
        id: "2",
        slug: "blog-detail-2",

        title: "Best Ayurveda Hospitals In Kerala",

        date: "25/July/2026",

        image: "/assets/images/blog-2.webp",

        Contenttype: "normal",

        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        accordion: [
            {
                id: 1,
                heading:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
                id: 2,
                heading:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
        ],

        content2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        Contenttype2: "normal",

        href: "/blog/blog-detail-2",
    },

    {
        id: "3",

        slug: "blog-detail-3",

        title: "Top Ayurvedic Wellness Retreats In India",

        date: "25/July/2026",

        image: "/assets/images/blog-3.webp",

        Contenttype: "normal",

        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        accordion: [
            {
                id: 1,
                heading:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
        ],

        content2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        Contenttype2: "normal",

        href: "/blog/blog-detail-3",
    },
];