export interface SubBannerConfigItem {
    title: string;
    para: string;
    bg?: string;
}

export type SubBannerKey = keyof typeof SUBBANNER_CONFIG;

export const SUBBANNER_CONFIG = {
    default: {
        title: "Blog",
        para: "Explore our latest articles and insights",
        bg: "/assets/images/blog-3.webp",
    } as SubBannerConfigItem,
    blog: {
        title: "Blog",
        para: "Discover our collection of health and wellness articles",
        bg: "/assets/images/blog-3.webp",
    } as SubBannerConfigItem,
    "about-us": {
        title: "About Us",
        para: "Learn more about our organization",
        bg: "/assets/images/about-banner.webp",
    } as SubBannerConfigItem,
    "contact-us": {
        title: "Contact Us",
        para: "Get in touch with our team",
        bg: "/assets/images/contact-banner.webp",
    } as SubBannerConfigItem,
};
