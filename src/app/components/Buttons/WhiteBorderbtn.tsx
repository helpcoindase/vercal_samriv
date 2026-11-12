import Link from "next/link";
import React from "react";

interface OutlineButtonProps {
  text: string;
  link: string;
  className?: string;
}

export default function WhiteBorderbtn({
  text,
  link,
  className = "",
}: OutlineButtonProps) {
  return (
    <Link
      href={link}
      className={` 
        rounded-full 
        px-[25px] py-[8px]
        text-[#1b8564]
        border border-[#1b8564] hover:border-[#c25400]
        captitalize inline-flex items-center tracking-[0px] 
        transition-all duration-300
        bg-[#fff] font-[700]
        hover:bg-[#c25400]
        hover:text-white
        ${className}
      `}
    >
      {text}
    </Link>
  );
}