"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSET_PREFIX } from "config";

export default function OtherBrandsDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Toggle button */}
      <button
        type="button" aria-label="View button"
        onClick={() => setOpen((v) => !v)}
        className="text-[16px] xl:text-[16px] 2xl:text-[16px] leading-[24px] 2xl:leading-[24px] border-[1px] border-[#1b8564] hover:border-[#c25400] py-[5px] sm:py-[8px] h-[fit-content] pl-[10px] pr-[10px] sm:pl-[20px] sm:pr-[15px] 2xl:pl-[30px] 2xl:pr-[25px] rounded-[50px] text-center items-center transition duration-300 capitalize text-[#fff] font-[500] bg-[#175e42] hover:bg-[#c25400] hover:text-[#fff] cursor-pointer flex gap-[5px]">
        <span>Other Branch</span>
        <span className=" "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7 10l5 5l5-5"></path>
        </svg></span>
      </button>

      {/* Dropdown panel */}
      <div
        className={`
          absolute right-0 mt-[1px] w-[174px] border border-[#707070] bg-white shadow-lg overflow-hidden
          origin-top transition-all duration-250 ease-out
          ${open
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
          }
        `}>
        <div className="flex items-center justify-center bg-white px-3 py-3">
          <Link href="https://www.samwarthika.com/" target="_blank" data-cta="samwarthika-web">
            <Image
              src={`${ASSET_PREFIX}/assets/images/samwarthika-logo-other-brands.webp`}
              alt="Samwarthika Logo"
              width={90}
              height={40}
              className="object-contain w-[90px] h-auto"
            /></Link>
        </div>


      </div>
    </div>
  );
}
