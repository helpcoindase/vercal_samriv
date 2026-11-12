"use client";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ASSET_PREFIX } from "config";
const OtherBrandsDropdown = dynamic(
  () => import("../MedicalTourism/OtherBrandsDropdown"),
  { ssr: false }
);

interface TreatmentItem {
  icon: string;
  title: string;
  link: string;
}

interface TreatmentData {
  [key: string]: TreatmentItem[];
}

const LanguageButton = () => {
  return null;
};

const LogoImage = ({ alt }: { alt: string }) => (
  <Image
    src={`${ASSET_PREFIX}/assets/images/rivera-logo.webp`}
    alt={alt}
    className="w-auto max-[1200px]:h-[80px] h-[100px] xl:w-[120px] 2xl:h-[auto] ml-0 m-auto max-sm:m-0"
    width={120}
    height={100}
    priority
    fetchPriority="high"
    quality={80}
    sizes="(max-width: 1200px) 80px, 120px"
  />
);

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mblTreat, SetMblTreat] = useState(false);
  const [alphabet, setAlphabet] = useState("all");
  const [all, setTrue] = useState("");

  const pathname = usePathname();
  const stickyActive = mounted && isSticky;

  const handleMouseEnter = (menuName: string) => {
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setHasInteracted(true);
    setIsMenuClosed(!isMenuClosed);
  };

  useEffect(() => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    }
  }, [pathname]);

  const CloseToggle = () => {
    if (!isMenuClosed) {
      setIsMenuClosed(true);
    }
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    const rafId = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (all === "true") {
        setTrue("notTrue");
        setAlphabet("all");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [all]);

  const treatment: TreatmentData = {
    all: [
      {
        icon: "ayurvedic-treatment.svg",
        title: "Ayurveda Treatment",
        link: "/ayurvedic-treatment-in-kerala",
      },
      {
        icon: "panchakarma.svg",
        title: "Panchakarma Treatment",
        link: "/panchakarma-treatment-in-kerala",
      },
      {
        icon: "sinusitis.svg",
        title: "Sinusitis Treatment",
        link: "/sinusitis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "autsim.svg",
        title: "Autism Treatment",
        link: "/best-ayurvedic-treatment-for-autism-in-kerala",
      },
      {
        icon: "weight-loss-treatment.svg",
        title: "Weight Loss Treatment",
        link: "/weight-loss-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "monsoon-treatment.svg",
        title: "Monsoon Treatment",
        link: "/ayurveda-monsoon-treatment-in-kerala",
      },
      {
        icon: "parkinson-disease.svg",
        title: "Parkinsons Ayurvedic Treatment",
        link: "/parkinsons-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "sciatica.svg",
        title: "Sciatica Treatment",
        link: "/ayurvedic-treatment-for-sciatica-in-kerala",
      },
      {
        icon: "stroke-paralysis.svg",
        title: "Stroke Treatment",
        link: "/ayurvedic-stroke-treatment-in-kerala",
      },
      {
        icon: "varicose-veins.svg",
        title: "Varicose Veins Treatment",
        link: "/ayurvedic-treatment-for-varicose-veins-kerala",
      },
      {
        icon: "knee-pain.svg",
        title: "Knee Pain Treatment",
        link: "/ayurvedic-treatment-for-knee-pain-in-kerala",
      },
      {
        icon: "post-natal-treatment.svg",
        title: "PostNatal Treatment",
        link: "/post-natal-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "cervical-spondylosis.svg",
        title: "Cervical Spondylosis Treatment",
        link: "/cervical-spondylosis-treatment-kerala",
      },
      {
        icon: "psoriasis-ayurvedic-treatment.svg",
        title: "Psoriasis Ayurvedic Treatment",
        link: "/psoriasis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "lumbar-spondylosis.svg",
        title: "Lumbar Spondylosis Treatment",
        link: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "gastroesophageal-reflux.svg",
        title: "Gastroesophageal Reflux Disease Treatment",
        link: "/gastroesophageal-reflux-disease-treatment-in-kerala",
      },
      {
        icon: "arthritis-treatment.svg",
        title: "Arthritis Treatment",
        link: "/arthritis-ayurvedic-treatment-kerala",
      },
      {
        icon: "dysmenorrhea.svg",
        title: "Dysmenorrhea Treatment",
        link: "/ayurvedic-treatment-for-menstrual-pain-in-kerala",
      },
      {
        icon: "ulcerative-colitis-treatment.svg",
        title: "Ulcerative Colitis Treatment",
        link: "/ulcerative-colitis-treatment-kerala",
      },
      {
        icon: "disc-bulge.svg",
        title: "Disc Bulge Protrusion",
        link: "/ayurvedic-treatment-disc-bulge-kerala",
      },
      {
        icon: "lower-back-pain.svg",
        title: "Lower Back Pain",
        link: "/ayurvedic-treatment-for-lower-back-pain-in-kerala",
      },
      {
        icon: "stress-management.svg",
        title: "Stress Management",
        link: "/ayurvedic-treatment-for-stress-in-kerala",
      },
      {
        icon: "hair-loss-treatment.svg",
        title: "Hair Loss Treatment",
        link: "/ayurvedic-treatment-for-hair-loss-in-kerala",
      },
    ],
    a: [
      {
        icon: "ayurvedic-treatment.svg",
        title: "Ayurveda Treatment",
        link: "/ayurvedic-treatment-in-kerala",
      },
      {
        icon: "arthritis-treatment.svg",
        title: "Arthritis Treatment",
        link: "/arthritis-ayurvedic-treatment-kerala",
      },
      {
        icon: "autsim.svg",
        title: "Autism Treatment",
        link: "/best-ayurvedic-treatment-for-autism-in-kerala",
      },
    ],
    c: [
      {
        icon: "cervical-spondylosis.svg",
        title: "Cervical Spondylosis Treatment",
        link: "/cervical-spondylosis-treatment-kerala",
      },
    ],
    d: [
      {
        icon: "disc-bulge.svg",
        title: "Disc Bulge Protrusion",
        link: "/ayurvedic-treatment-disc-bulge-kerala",
      },
      {
        icon: "dysmenorrhea.svg",
        title: "Dysmenorrhea Treatment",
        link: "/ayurvedic-treatment-for-menstrual-pain-in-kerala",
      },
    ],
    g: [
      {
        icon: "gastroesophageal-reflux.svg",
        title: "Gastroesophageal Reflux Disease Treatment",
        link: "/gastroesophageal-reflux-disease-treatment-in-kerala",
      },
    ],
    h: [
      {
        icon: "hair-loss-treatment.svg",
        title: "Hair Loss Treatment",
        link: "/ayurvedic-treatment-for-hair-loss-in-kerala",
      },
    ],
    k: [
      {
        icon: "knee-pain.svg",
        title: "Knee Pain Treatment",
        link: "/ayurvedic-treatment-for-knee-pain-in-kerala",
      },
    ],
    l: [
      {
        icon: "lumbar-spondylosis.svg",
        title: "Lumbar Spondylosis Treatment",
        link: "/lumbar-spondylosis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "lower-back-pain.svg",
        title: "Lower Back Pain",
        link: "/ayurvedic-treatment-for-lower-back-pain-in-kerala",
      },
    ],
    m: [
      {
        icon: "monsoon-treatment.svg",
        title: "Monsoon Treatment",
        link: "/ayurveda-monsoon-treatment-in-kerala",
      },
    ],
    p: [
      {
        icon: "panchakarma.svg",
        title: "Panchakarma Treatment",
        link: "/panchakarma-treatment-in-kerala",
      },
      {
        icon: "parkinson-disease.svg",
        title: "Parkinsons Ayurvedic Treatment",
        link: "/parkinsons-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "psoriasis-ayurvedic-treatment.svg",
        title: "Psoriasis Ayurvedic Treatment",
        link: "/psoriasis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "post-natal-treatment.svg",
        title: "PostNatal Treatment",
        link: "/post-natal-ayurvedic-treatment-in-kerala",
      },
    ],
    s: [
      {
        icon: "sinusitis.svg",
        title: "Sinusitis Treatment",
        link: "/sinusitis-ayurvedic-treatment-in-kerala",
      },
      {
        icon: "sciatica.svg",
        title: "Sciatica Treatment",
        link: "/ayurvedic-treatment-for-sciatica-in-kerala",
      },
      {
        icon: "stroke-paralysis.svg",
        title: "Stroke Treatment",
        link: "/ayurvedic-stroke-treatment-in-kerala",
      },
      {
        icon: "stress-management.svg",
        title: "Stress Management",
        link: "/ayurvedic-treatment-for-stress-in-kerala",
      },
    ],
    u: [
      {
        icon: "ulcerative-colitis-treatment.svg",
        title: "Ulcerative Colitis Treatment",
        link: "/ulcerative-colitis-treatment-kerala",
      },
    ],
    v: [
      {
        icon: "varicose-veins.svg",
        title: "Varicose Veins Treatment",
        link: "/ayurvedic-treatment-for-varicose-veins-kerala",
      },
    ],
    w: [
      {
        icon: "weight-loss-treatment.svg",
        title: "Weight Loss Treatment",
        link: "/weight-loss-ayurvedic-treatment-in-kerala",
      },
    ],
  };

  const about = [
    { name: "Profile", link: "/about-us#overview" },
    { name: "Vision & Mission", link: "/about-us#vismis" },
    { name: "Board of Directors", link: "/about-us#foundermsg" },
    { name: "Our Doctors", link: "/about-us#docs" },
    { name: "Infrastructure", link: "/about-us#infra" },
  ];

  return (
    <>
      <header
        className={`header ${pathname === "/" && stickyActive ? "sticky shadow-md" : "relative"
          } ${pathname !== "/" && stickyActive ? "sticky shadow-md" : ""} top-0 z-[9999] bg-transparent`}
      >
        <div
          className={`max-w-[120rem] op-0 ${pathname === "/" ? "fixed" : "relative bg-[#fff]"
            } left-0 w-full z-[-1] transition-colors duration-300 max-[1200px]:h-[100px] ${pathname === "/" ? `${stickyActive ? "bg-white shadow-md" : ""}` : "h-[125px]"
            }`}
        />

        {pathname === "/" && (
          <div className="top-0 left-0 w-full h-[125px] max-[1440px]:h-[106px] max-[1200px]:h-[100px]">
            <div className={`relative h-full ${stickyActive ? "bg-[#fff]" : ""}`}></div>
          </div>
        )}

        <div
          className={`w-[90%] max-w-[120rem] ${pathname === "/" ? "fixed" : "fixed bg-[#fff]"
            } header-menu top-[5px] left-1/2 -translate-x-1/2 grid grid-cols-[200px_auto] max-2xl:grid-cols-[160px_auto]
          items-center py-[5px] xl:py-0 justify-between transition-colors duration-300
          ${pathname === "/" ? `${stickyActive ? "text-black" : "text-white"}` : "text-black"}
          ${hasInteracted && isMenuClosed ? "closed" : ""}`}
        >
          <div className="logo-div">
            {pathname === "/" && (
              <Link href="/" prefetch={false} aria-label="Go to home page">
                <LogoImage alt="Samwarthika Rivera" />
              </Link>
            )}

            {pathname !== "/" && (
              <Link href="/" prefetch={false} aria-label="Go to home page">
                <LogoImage alt="Samwarthika Rivera" />
              </Link>
            )}
          </div>

          <nav className="menu-div-parent hidden xl:block">
            <ul
              className="menu-div flex items-center gap-[40px]
              max-xl:gap-[50px]
              max-2xl:gap-[60px]
              max-[1500px]:!gap-[40px]
              max-[1380px]:!gap-[35px]
              max-xl:!gap-[25px]"
            >
              <li
                className="group/academic relative max-[1450px]:hidden"
                onMouseEnter={() => handleMouseEnter("academic")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/"
                  prefetch={false}
                  aria-label="Home"
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
                    />
                  </svg>
                </Link>
              </li>

              <li
                className="mprod group/about relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/about-us"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  About Us
                </Link>

                <div
                  className={`absolute top-[90px] w-[300px] -left-[100px] origin-top transition-all duration-300 ${openDropdown === "about" ? "scale-y-100" : "scale-y-0"
                    }`}
                >
                  <div className="transition-all duration-300 h-[auto] bg-[#fff] shadow-md p-[25px] rounded-[0_0_30px_30px] overflow-hidden">
                    <div className="flex flex-col">
                      {about.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          prefetch={false}
                          scroll={true}
                          onClick={() => setOpenDropdown(null)}
                          className="grid rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[8px_12px] text-[#000]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="group">
                <Link
                  href="/treatments"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  Treatments
                </Link>

                <div
                  className={`fixed scale-y-0 top-[94px] w-[100%] left-[0px] right-[0px] origin-top ${all === "true" ? "!scale-100" : ""
                    } group-hover:scale-y-100`}
                >
                  <div className="px-[5%] max-2xl:px-[3%] transition-all duration-300 h-[auto] bg-[#fff] shadow-md p-[40px] max-[1390px]:pt-[2px] pt-[8px] rounded-[0_0_30px_30px] border border-t-0 border-[#c3efd2]">
                    <div className="border-b border-[#304a1070] pb-[15px] flex justify-between mb-[20px] max-2xl:mb-[15px] max-2xl:pb-[15px]">
                      <p className="text-[30px] leading-[36px] text-[var(--secondary)] max-2xl:text-[28px] max-2xl:leading-[34px]">
                        Treatments
                      </p>
                    </div>

                    <div className="grid grid-cols-4 max-[1390px]:gap-[8px_5px] gap-[10px]">
                      {treatment[alphabet] && treatment[alphabet].length > 0 ? (
                        treatment[alphabet].map((item, index) => (
                          <Link
                            key={index}
                            href={item.link}
                            prefetch={false}
                            onClick={() => setTrue("")}
                            className="grid grid-cols-[50px_auto] max-[1390px]:gap-[0px] gap-[10px] rounded-[25px] border border-transparent hover:border-[#c3efd2] items-center transition-all duration-300 hover:bg-[#effff5] p-[5px_10px] 2xl:p-[8px_10px]"
                          >
                            <Image
                              src={`${ASSET_PREFIX}/assets/images/${item.icon}`}
                              width={50}
                              height={50}
                              alt={`${item.title}`}
                              loading="lazy"
                              quality={60}
                              sizes="50px"
                              className="w-[35px] 2xl:w-[50px] h-auto"
                            />

                            <p className="max-[1390px]:text-[15px] max-[1390px]:leading-[20px] text-[16px] line-height-[20px] text-[#000]">
                              {item.title}
                            </p>
                          </Link>
                        ))
                      ) : (
                        <div className="text-center text-gray-500 h-full flex justify-center items-center">
                          <p className="text-[20px] leading-[24px]">
                            No treatments available for{" "}
                            <span className="uppercase text-[#c25400] font-semibold">
                              {alphabet}
                            </span>
                            .
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="a-tab flex gap-[30px] mt-[20px] pt-[20px] max-2xl:mt-[15px] max-2xl:pt-[15px] border-t border-[#304a1070]">
                      {Object.keys(treatment).map((letter) => (
                        <button
                          key={letter}
                          type="button"
                          className={`text-[18px] leading-[20px] max-2xl:text-[16px] max-2xl:leading-[18px] flex justify-center overflow-hidden items-center h-[40px] w-[40px] max-2xl:w-[30px] max-2xl:h-[30px] rounded-[50%] bg-[#f2f2f2] transition-all duration-500 hover:bg-[#c25400] hover:text-[#fff] ${alphabet === letter
                            ? "bg-[#27a172]! text-[#fff]"
                            : "bg-[#f2f2f2] text-[#000]"
                            } ${letter === "all" ? "capitalize" : "uppercase"} ${treatment[letter].length > 0
                              ? "cursor-pointer"
                              : "cursor-default opacity-40 hover:bg-[#f2f2f2]! hover:text-[#000]!"
                            }`}
                          onClick={() => {
                            setAlphabet(letter);
                            setTrue("true");
                          }}
                        >
                          {letter}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              <li className="mprod group/department relative">
                <Link
                  href="/our-doctors"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  Doctors
                </Link>
              </li>

              <li className="mprod group/department relative">
                <Link
                  href="/packages"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  Packages
                </Link>
              </li>

              <li className="mprod group/department relative">
                <Link
                  href="/medical-tourism"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  Medical Tourism
                </Link>
              </li>

              <li className="mprod group/department relative">
                <Link
                  href="/blog"
                  prefetch={false}
                  className="text-[16px] font-[600] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] h-[90px] flex items-center transition duration-300 hover:text-[#c25400] capitalize text-[#304A10]"
                >
                  Blog
                </Link>
              </li>

              <li className="flex gap-[20px] items-center text-[#455c27]">
                <Link href="/contact-us" prefetch={false} className="book-app-head" data-cta="">
                  <div className="text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] border-[1px] border-[#1b8564] hover:border-[#c25400] py-[8px] h-[fit-content] px-[20px] 2xl:px-[30px] rounded-[50px] text-center items-center transition duration-300 capitalize text-[#1b8564] font-[700] hover:bg-[#c25400] hover:text-[#fff]">
                    Book Appointment
                  </div>
                </Link>

                <OtherBrandsDropdown />
              </li>
            </ul>
          </nav>

          <div className="block xl:hidden absolute right-[42px] sm:right-[50px]">
            <OtherBrandsDropdown />
          </div>

          <button
            type="button"
            aria-label={isMenuClosed ? "Open menu" : "Close menu"}
            className={`side-menu-close transition-all duration-300 cursor-pointer relative h-[40px] w-[40px] 2xl:h-[50px] 2xl:w-[50px] flex flex-col justify-center leading-normal rounded-full px-[1vw] bg-[#27a172] rounded-[50px] items-center block xl:hidden ${isMenuClosed ? "closed" : "opened"
              } group`}
            onClick={toggleMenu}
          >
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] group-[.opened]:rotate-[45deg] group-[.opened]:translate-x-[0px] transition duration-300 group-[.opened]:translate-y-[6px]"></span>
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] my-[5px] group-[.opened]:opacity-0 transition duration-300"></span>
            <span className="bg-[#fff] h-[2px] w-[20px] 2xl:w-[26px] group-[.opened]:rotate-[-45deg] group-[.opened]:translate-x-[-1px] transition duration-300 group-[.opened]:translate-y-[-8px]"></span>
          </button>
        </div>

        <nav
          className={`sidemenu fixed w-[450px] h-[100vh] min-h-[100vh] bg-[#fff] top-[80px] right-[0px] py-[20px] px-[50px] max-xl:px-[30px] max-sm:w-[100%] transition duration-300 shadow-[-5px_6px_5px_0px_#a7a7a740] [.opened]:translate-x-[0px] group block xl:hidden ${isMenuClosed ? "translate-x-[100%]" : "translate-x-[0px]"
            }`}
        >
          <div className="flex h-[90%] flex-col justify-between pb-[30px] overflow-scroll">
            <ul>
              <li>
                <Link
                  onClick={CloseToggle}
                  href="/about-us"
                  prefetch={false}
                  className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center border-[#6161617d] border-b-[1px]"
                >
                  About us
                </Link>
              </li>

              <li>
                <div className="flex gap-[20px] justify-between items-center border-[#6161617d] border-b-[1px]">
                  <Link
                    onClick={CloseToggle}
                    href="/treatments"
                    prefetch={false}
                    className="text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center w-full"
                  >
                    Treatments
                  </Link>

                  <button
                    type="button"
                    aria-label={mblTreat ? "Close treatments menu" : "Open treatments menu"}
                    onClick={() => SetMblTreat((prev) => !prev)}
                    className="flex items-center gap-2 w-[50px] justify-center cursor-pointer"
                  >
                    {mblTreat ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 1024 1024">
                        <path
                          fill="#000"
                          d="M192.128 683.136L512 371.328l319.872 311.808a30.59 30.59 0 0 0 42.752 0a29.12 29.12 0 0 0 0-41.6L534.336 309.76a32 32 0 0 0-44.672 0L149.376 641.472a29.12 29.12 0 0 0 0 41.728a30.59 30.59 0 0 0 42.752-0.064z"
                        />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 1024 1024">
                        <path
                          fill="#000"
                          d="M831.872 340.864L512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6l340.288 331.776a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <div
                  className={`${mblTreat
                    ? "max-h-[1000px] overflow-visible opacity-100 pt-[10px]"
                    : "max-h-0 overflow-hidden opacity-0"
                    } transition-all duration-500`}
                >
                  {treatment[alphabet] && treatment[alphabet].length > 0 ? (
                    treatment[alphabet].map((item, index) => (
                      <Link
                        key={index}
                        onClick={() => {
                          CloseToggle();
                          SetMblTreat((prev) => !prev);
                        }}
                        href={item.link}
                        prefetch={false}
                        className="text-[#000] text-[16px] leading-[22px] font-medium p-[5px_10px] flex items-center"
                      >
                        {item.title}
                      </Link>
                    ))
                  ) : (
                    <div className="text-center text-gray-500 h-full flex justify-center items-center">
                      <p className="text-[20px] leading-[24px]">
                        No treatments available for{" "}
                        <span className="uppercase text-[#c25400] font-semibold">
                          {alphabet}
                        </span>
                        .
                      </p>
                    </div>
                  )}
                </div>
              </li>

              {[
                { label: "Doctors", href: "/our-doctors" },
                { label: "Packages", href: "/packages" },
                { label: "Medical Tourism", href: "/medical-tourism" },
                { label: "Blog", href: "/blog" },
                { label: "Book Appointment", href: "/contact-us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    onClick={CloseToggle}
                    href={item.href}
                    prefetch={false}
                    className="text-[#000] text-[16px] xl:text-[16px] 2xl:text-[18px] leading-[24px] 2xl:leading-[26px] font-medium py-[10px] flex items-center border-[#6161617d] border-b-[1px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative">
              <div className="mt-[15px] max-sm:mb-[50px]">
                <p className="text-[#304A10] text-[18px] font-semibold mb-[20px]">
                  Follow us on
                </p>

                <div className="flex gap-[25px] items-center">
                  <ul className="flex sm:justify-start justify-between items-center max-sm:pr-[4px] gap-[15px] sm:gap-[25px]">
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/samwarthika-rivera-ayurveda-retreat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linked In"
                        className="group"
                      >
                        <svg className="h-[22px] w-[22px] fill-current text-[#175e42] transition-colors duration-300 md:group-hover:text-[#c25400]" viewBox="0 0 24 24">
                          <path d="M4.98 3.5C4.98 5 3.89 6.1 2.5 6.1S0 5 0 3.5 1.09.9 2.5.9 4.98 2 4.98 3.5zM.3 8h4.4v13H.3V8zm7.6 0h4.2v1.8h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V21h-4.4v-6.1c0-1.5 0-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H7.9V8z" />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://x.com/RiveraRetreat" target="_blank" rel="noopener noreferrer" aria-label="X" className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-[20px] w-[20px] fill-current text-[#175e42] transition-colors duration-300 md:group-hover:text-[#c25400]">
                          <path d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.instagram.com/samwarthikarivera/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
                        <svg className="h-[22px] w-[22px] fill-current text-[#175e42] transition-colors duration-300 md:group-hover:text-[#c25400]" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.5 2 22 4.5 22 7.8v8.4c0 3.3-2.5 5.8-5.8 5.8H7.8C4.5 22 2 19.5 2 16.2V7.8C2 4.5 4.5 2 7.8 2zm4.2 5.5a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.2-8.2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2z" />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.facebook.com/SamwarthikaRiveraAyurvedaRetreat" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
                        <svg className="h-[22px] w-[22px] fill-current text-[#175e42] transition-colors duration-300 md:group-hover:text-[#c25400]" viewBox="0 0 24 24">
                          <path d="M13.5 22v-8h2.7l.4-3h-3.1V8.5c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.4v8h3.1z" />
                        </svg>
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.youtube.com/@SamwarthikaRivera" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px] fill-current text-[#175e42] transition-colors duration-300 md:group-hover:text-[#c25400]" viewBox="0 0 24 24">
                          <path d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48 1.73 1.73 1.73" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <LanguageButton />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}