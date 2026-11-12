"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "config";
import { usePathname } from "next/navigation";

const Footer1 = () => {
  type FooterData = {
    department: { label: string; path: string }[];
    about: { label: string; path: string }[];
    quicklinks: { label: string; path: string }[];
    treatment: { label: string; path: string }[];
    contact: {
      name: string;
      address: string[];
      email: string;
      phone: string;
    };
  };

  // const commonDepartments = [
  //   { label: "Ayurveda Treatment", path: "#" },
  //   { label: "Panchakarma Treatment", path: "#" },
  //   { label: "Sinusitis Treatment", path: "#" },
  //   { label: "Autism Treatment", path: "#" },
  //   { label: "Weight Loss Treatment", path: "#" },
  //   { label: "Monsoon Treatment", path: "#" },
  //   { label: "Parkinsons Ayurvedic Treatment", path: "#" },

  // ];

  const departmentColumns = [
    [
      { label: "Ayurveda Treatment", path: "/ayurvedic-treatment-in-kerala" },
      { label: "Panchakarma Treatment", path: "/panchakarma-treatment-in-kerala" },
      { label: "Sinusitis Treatment", path: "/sinusitis-ayurvedic-treatment-in-kerala" },
      { label: "Autism Treatment", path: "/best-ayurvedic-treatment-for-autism-in-kerala" },
      { label: "Weight Loss Treatment", path: "/weight-loss-ayurvedic-treatment-in-kerala" },
      { label: "Monsoon Treatment", path: "/ayurveda-monsoon-treatment-in-kerala" },
    ],
    [
      { label: "Parkinsons Ayurvedic Treatment", path: "/parkinsons-ayurvedic-treatment-in-kerala" },
      { label: "Sciatica Treatment", path: "/ayurvedic-treatment-for-sciatica-in-kerala" },
      { label: "Stroke Treatment", path: "/ayurvedic-stroke-treatment-in-kerala" },
      { label: "Varicose Veins Treatment", path: "/ayurvedic-treatment-for-varicose-veins-kerala" },
      { label: "Knee Pain Treatment", path: "/ayurvedic-treatment-for-knee-pain-in-kerala" },
      { label: "PostNatal Treatment", path: "/post-natal-ayurvedic-treatment-in-kerala" },
    ],
    [
      { label: "Cervical Spondylosis Treatment", path: "/cervical-spondylosis-treatment-kerala" },
      { label: "Psoriasis Ayurvedic Treatment", path: "/psoriasis-ayurvedic-treatment-in-kerala" },
      { label: "Lumbar Spondylosis Treatment", path: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala" },
      { label: "Gastroesophageal Reflux Disease Treatment", path: "/gastroesophageal-reflux-disease-treatment-in-kerala" },
      { label: "Arthritis Treatment", path: "/arthritis-ayurvedic-treatment-kerala" },
    ],
    [
      { label: "Dysmenorrhea Treatment", path: "/ayurvedic-treatment-for-menstrual-pain-in-kerala" },
      { label: "Ulcerative Colitis Treatment", path: "/ulcerative-colitis-treatment-kerala" },
      { label: "Disc Bulge Protrusion", path: "/ayurvedic-treatment-disc-bulge-kerala" },
      { label: "Lower Back Pain ", path: "/ayurvedic-treatment-for-lower-back-pain-in-kerala/" },
      { label: "Stress Management ", path: "/ayurvedic-treatment-for-stress-in-kerala" },
      { label: "Hair Loss Treatment ", path: "/ayurvedic-treatment-for-hair-loss-in-kerala" },
    ],
    [
    ],

  ];

  const commonDepartments = departmentColumns[0];

  const footerData: FooterData = {
    department: commonDepartments.slice(0, 7),
    about: [
      { label: "Overview", path: "/about-us#overview" },
      { label: "Vision and Mission", path: "/about-us#vismis" },
      { label: "Board of Directors", path: "/about-us#foundermsg" },
      { label: "Our Doctors", path: "/about-us#docs" },
      { label: "Infrastructure", path: "/about-us#infra" },
    ],
    quicklinks: [
      { label: "Packages", path: "/packages" },
      { label: "Medical Tourism", path: "/medical-tourism" },
      { label: "Blog", path: "/blog" },
      { label: "Contact Us", path: "/contact-us" },
    ],
    treatment: commonDepartments,
    contact: {
      name: "Samwarthika Rivera Ayurveda Retreat",
      address: [
        "4/153D, Thottuva, Koovapady P.O.,",
        "Perumbavoor, Ernakulam - 683 544,",
        "Kerala, India",
      ],
      email: "info@samwarthikarivera.com",
      phone: "+91 95677 72101",
    },
  };

  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [deptOpen, setDeptOpen] = useState(false);
  const contentRefs = useRef<(HTMLUListElement | null)[]>([]);
  const [maxHeights, setMaxHeights] = useState<{ [key: number]: string }>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (
      isSmallScreen &&
      openAccordion !== null &&
      contentRefs.current[openAccordion]
    ) {
      setMaxHeights((prev) => ({
        ...prev,
        [openAccordion]: `${contentRefs.current[openAccordion]?.scrollHeight}px`,
      }));
    }
  }, [openAccordion, isSmallScreen]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 150);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderAccordionSection = (
    title: string,
    items: { label: string; path: string }[],
    index: number
  ) => (
    <div className="w-full" key={index}>
      <div
        className="mb-[10px] sm:mb-[20px] flex cursor-pointer items-center justify-between border-b border-[#384e20] sm:cursor-default sm:border-b-0"
        onClick={() => toggleAccordion(index)}
      >
        <h3 className="text-[18px] font-semibold leading-[26px] text-[#374d1f]">
          {title}
        </h3>

        <span className="text-[#374d1f] sm:hidden">
          {openAccordion === index ? "−" : "+"}
        </span>
      </div>

      <ul
        ref={(el) => {
          contentRefs.current[index] = el;
        }}
        className="overflow-hidden transition-all duration-500 ease-in-out sm:block sm:overflow-visible space-y-4"
        style={{
          maxHeight: isSmallScreen
            ? openAccordion === index
              ? maxHeights[index] || "0px"
              : "0px"
            : "none",
        }}
      >
        {items.map((item, itemIndex) => (
          <li key={itemIndex} className="">
            <Link
              href={item.path}
              className="text-[#33453F] transition-colors hover:text-[#c25400]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.querySelector(".menq") as HTMLElement | null;

      if (!menu) return;

      if (window.scrollY > 150) {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "auto";
      } else {
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <footer className={`bg-white text-[#5f7065] 2xl:py-[60px] lg:py-[40px] py-[30px]   ${pathname === "/thanks" || pathname === "/thanks/"
      ? ""
      : "max-[480px]:pb-[65px]"}`}>
         <h2 className="sr-only">Footer</h2>
      <div className="mx-auto w-[90%] max-w-[120rem]">
        <div className="grid grid-cols-[16%_16%_16%_16%_26%] gap-[40px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[15px]">
          <div className="flex flex-col items-start gap-[90px] max-lg:gap-[35px] max-sm:items-center max-sm:gap-[15px]">
            <Image
              src={`${ASSET_PREFIX}/assets/images/rivera-logo.webp`}
              alt="Samwarthika Rivera Logo"
              width={120}
              height={100}
              className="h-auto w-[170px] max-sm:w-[100px]"
              unoptimized
            />

            <ul className="flex items-center gap-[20px]  2xl:gap-[28px] ">

              <li>
                <Link href="https://www.linkedin.com/company/samwarthika-rivera-ayurveda-retreat/" aria-label="LinkedIn" target="_blank">
                  <svg
                    className="h-[22px] w-[22px] text-[#175e42] transition duration-300 hover:text-[#c25400]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 5 3.89 6.1 2.5 6.1S0 5 0 3.5 1.09.9 2.5.9 4.98 2 4.98 3.5zM.3 8h4.4v13H.3V8zm7.6 0h4.2v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V21h-4.4v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H7.9V8z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href="https://x.com/RiveraRetreat" aria-label="Twitter" target="_blank">
                  <svg className="h-[15px] w-[15px] text-[#175e42] transition duration-300 hover:text-[#c25400]"
                    xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 12 12"><path fill="#175e42" d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312z"></path></svg>
                </Link>
              </li>

              <li>
                <Link href="https://www.instagram.com/samwarthikarivera/" aria-label="Instagram" target="_blank">
                  <svg
                    className="h-[22px] w-[22px] text-[#175e42] transition duration-300 hover:text-[#c25400]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.8 2h8.4C19.5 2 22 4.5 22 7.8v8.4c0 3.3-2.5 5.8-5.8 5.8H7.8C4.5 22 2 19.5 2 16.2V7.8C2 4.5 4.5 2 7.8 2zm4.2 5.5a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.2-8.2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link href="https://www.facebook.com/SamwarthikaRiveraAyurvedaRetreat" aria-label="Facebook" target="_blank">
                  <svg
                    className="h-[22px] w-[22px] text-[#175e42] transition duration-300 hover:text-[#c25400]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V8.5c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.4v8h3.1z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@SamwarthikaRivera" aria-label="Facebook" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[22px] w-[22px] text-[#175e42] transition duration-300 hover:text-[#c25400]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48 1.73 1.73 1.73" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>


          {renderAccordionSection("About Us", footerData.about, 0)}
          {renderAccordionSection("Quick Links", footerData.quicklinks, 1)}
          {renderAccordionSection("Core services", footerData.department, 2)}


          {/* Mobile Departments Accordion under 640px */}
          {/* Mobile Departments Accordion under 640px */}
          <div className="hidden max-sm:block">
            <div
              onClick={() => setDeptOpen(!deptOpen)}
              className="flex cursor-pointer items-center justify-between border-b border-[#384e20] pb-[10px]"
            >
              <h3 className="text-[18px] font-semibold text-[#374d1f]">
                Treatments
              </h3>

              <span className="text-[22px] leading-none text-[#374d1f]">
                {deptOpen ? "−" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${deptOpen ? "max-h-[3000px] pt-[15px]" : "max-h-0"
                }`}
            >
              <ul className="columns-1 gap-x-[30px]">
                {departmentColumns.flat().map((item, index) => (
                  <li key={index} className="mb-[10px] break-inside-avoid">
                    <Link
                      href={item.path}
                      className="text-[16px] text-[#5f7065] transition hover:text-[#c25400]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-[640px]:mb-[30px]">
            <h3 className="mb-[12px] text-[22px] font-semibold leading-[30px] text-[#374d1f]">
              {footerData.contact.name}
            </h3>

            <address className="mb-[32px] max-w-[430px] not-italic text-[17px] leading-[30px] text-[#33453F]">
              {footerData.contact.address.map((line, idx) => (
                <span key={idx}>
                  {line}
                  {idx < footerData.contact.address.length - 1 && <br />}
                </span>
              ))}
            </address>

            <p className="mb-[10px] text-[17px] leading-[26px]">
              Email:{" "}
              <Link
                href={`mailto:${footerData.contact.email}`}
                className="font-semibold underline text-[#33453F] hover:text-[#c25400]"
              >
                {footerData.contact.email}
              </Link>
            </p>

            <p className="text-[17px] leading-[26px]">
              Mob:{" "}
              <Link
                href="tel:+919567772101"
                className="font-semibold underline text-[#33453F] hover:text-[#c25400]"
              >
                {footerData.contact.phone}
              </Link>
            </p>
          </div>
        </div>



        {/* Desktop / Tablet Department Columns */}
        <div className="mt-[70px] hidden gap-[30px] sm:grid grid-cols-[16%_16%_16%_16%_26%] gap-[40px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  xl:gap-[40px]">
          {/* Empty Space Under Logo */}
          <div className="hidden xl:block"></div>

          {[1, 2, 3, 4].map((col) => (
            <div key={col}>
              <h3 className="mb-[20px] text-[18px] font-semibold leading-[24px] text-[#374d1f]">
                Treatments
              </h3>

              <ul className={`space-y-3`}>
                {departmentColumns[col - 1].map((item, index) => (
                  <li key={`${col}-${index}`} className="">
                    <Link
                      href={item.path}
                      className="text-[16px] leading-[24px] text-[#33453F] transition hover:text-[#c25400]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#175e42] pt-[22px] 2xl:mt-[70px] sm:mt-[30px]">
          <div className="flex flex-col items-center justify-between gap-[10px] md:flex-row">
            <p className="text-center text-[16px] leading-[24px] text-[#5f7065] md:text-left">
              © {new Date().getFullYear()} Samwarthika Rivera Ayurveda Retreat. <Link
                href="/privacy-policy"
                className="font-semibold hover:text-[#c25400] text-nowrap"
              >Privacy Policy </Link>
            </p>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-10 left-3 z-[1000] rounded-full bg-[#27a172] p-2 shadow-lg transition duration-500 hover:bg-[#ff6d04] max-[480px]:bottom-[80px] max-[480px]:p-1 cursor-pointer"
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="m17 14l-5-5l-5 5"
            />
          </svg>
        </button>
      </div>
      {/* Side floating CTA buttons */}
      <div
        className="
    menq block opacity-0
    fixed z-[999]
    top-1/2 right-0 -translate-y-1/2
    w-[55px] overflow-visible
    transition-opacity duration-500

    max-[480px]:top-auto
    max-[480px]:right-0
    max-[480px]:bottom-0
    max-[480px]:translate-y-0
    max-[480px]:w-full
  "
      >
        <ul
          translate="no"
          className="
      flex flex-col items-end gap-[15px]
      w-full overflow-visible

      max-[480px]:flex-row
      max-[480px]:items-center
      max-[480px]:gap-0
      max-[480px]:w-full
      max-[480px]:text-center
    "
        >
          {/* Call Now */}
          <li
            className={`
        ${pathname === "/thanks" || pathname === "/thanks/"
                ? "opacity-0 invisible max-[480px]:hidden"
                : ""
              }

        list-none cursor-pointer bg-white shadow-md
        rounded-l-[30px]
        w-max overflow-hidden
        translate-x-[calc(100%-55px)]
        hover:translate-x-0
        transition-transform duration-300 ease-out

        max-[480px]:translate-x-0
        max-[480px]:hover:translate-x-0
        max-[480px]:rounded-none
        max-[480px]:h-auto
        max-[480px]:flex-1
        max-[480px]:bg-[#27a172]
        max-[480px]:shadow-none
        max-[480px]:border-r-2
        max-[480px]:border-white
      `}
          >
            <Link
              href="tel:+919567772101"
              className="call-now block"
              data-cta="call-now"
            >
              <div
                className="
            group flex items-center gap-[15px]
            h-[55px] pl-[7px] pr-[22px]

            max-[480px]:h-auto
            max-[480px]:px-0
            max-[480px]:py-[5px]
            max-[480px]:flex-col
            max-[480px]:gap-1
            max-[480px]:pt-0
            max-[480px]:text-white
          "
              >
                <span
                  className="
              flex items-center justify-center
              w-[40px] h-[40px] rounded-full
              bg-[#27a172]
              group-hover:bg-[#ff6d04]
              transition duration-300
              shrink-0

              max-[480px]:h-[30px]
              max-[480px]:w-[30px]
              max-[480px]:bg-transparent
            "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[30px] h-[30px] text-white"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="none">
                      <g fill="white">
                        <path
                          d="M4.024 9L4 8.931C3.46 7.384 3 5.27 3 4c0-.55.45-1 1-1h3a2
                    2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.837A16.054 16.054 0 0 0 15
                    17.837V17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3c0 .45-.55 1-1
                    1c-1.725 0-3.44-.456-5-1c-5.114-1.832-9.168-5.886-10.976-11Z"
                        />
                      </g>
                    </g>
                  </svg>
                </span>

                <span
                  className="
              font-semibold whitespace-nowrap
              group-hover:text-[#ff6d04]
              transition duration-300

              max-[480px]:text-[14px]
              max-[480px]:leading-[18px]
              max-[480px]:whitespace-normal
            "
                >
                  Call Now
                </span>
              </div>
            </Link>
          </li>

          {/* Book Appointment */}
          <li
            className={`
        ${pathname === "/contact-us" ||
                pathname === "/contact-us/" ||
                pathname === "/thanks" ||
                pathname === "/thanks/"
                ? "opacity-0 invisible max-[480px]:hidden"
                : ""
              }

        list-none cursor-pointer bg-white shadow-md
        rounded-l-[30px]
        w-max overflow-hidden
        translate-x-[calc(100%-55px)]
        hover:translate-x-0
        transition-transform duration-300 ease-out

        max-[480px]:translate-x-0
        max-[480px]:hover:translate-x-0
        max-[480px]:rounded-none
        max-[480px]:h-auto
        max-[480px]:flex-1
        max-[480px]:bg-[#27a172]
        max-[480px]:shadow-none
      `}
          >
            <Link
              href="/contact-us"
              aria-label="Enquiry Form"
              data-cta="book-appoinment"
              className="book-app block"
            >
              <div
                className="
            group flex items-center gap-[15px]
            h-[55px] pl-[7px] pr-[22px]

            max-[480px]:h-auto
            max-[480px]:px-0
            max-[480px]:py-[5px]
            max-[480px]:flex-col
            max-[480px]:gap-1
            max-[480px]:pt-0
            max-[480px]:text-white
          "
              >
                <span
                  className="
              flex items-center justify-center
              w-[40px] h-[40px] rounded-full
              bg-[#27a172]
              group-hover:bg-[#ff6d04]
              transition duration-300
              shrink-0

              max-[480px]:h-[30px]
              max-[480px]:w-[30px]
              max-[480px]:bg-transparent
            "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[30px] h-[30px] text-white"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2
                0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4
                26.84V9.52l12.43 12.37a2 2 0 0 0 2.82
                0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"
                    />
                  </svg>
                </span>

                <span
                  className="
              font-semibold whitespace-nowrap
              group-hover:text-[#ff6d04]
              transition duration-300

              max-[480px]:text-[14px]
              max-[480px]:leading-[18px]
              max-[480px]:whitespace-normal
            "
                >
                  Book Appointment
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* WhatsApp FAB */}
      {/* <Link
        href=""
        target="_blank"
        rel="noopener noreferrer"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        className="whatsapp_float
        fixed
        bottom-30 right-4
        z-50
        flex items-center justify-center
        rounded-full shadow-lg
        bg-green-500 text-white
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
      "
        aria-label="whatsapp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 256 258"
          className="max-md:w-[35px] max-md:h-[35px] max-sm:w-[30px] max-sm:h-[30px]">
          <defs>
            <linearGradient
              id="SVGBRLHCcSy"
              x1="50%"
              x2="50%"
              y1="100%"
              y2="0%">
              <stop offset="0%" stopColor="#1faf38" />
              <stop offset="100%" stopColor="#60d669" />
            </linearGradient>
            <linearGradient
              id="SVGHW6lecxh"
              x1="50%"
              x2="50%"
              y1="100%"
              y2="0%">
              <stop offset="0%" stopColor="#f9f9f9" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#SVGBRLHCcSy)"
            d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
          />
          <path
            fill="url(#SVGHW6lecxh)"
            d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
          />
          <path
            fill="#fff"
            d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
          />
        </svg>
      </Link> */}
    </footer>
  );
};

export default Footer1;