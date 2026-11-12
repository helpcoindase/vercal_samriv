import Link from "next/link";
import React from "react";

interface OutlineButtonProps {
  text: string;
  link: string;
  className?: string;
}

export default function LightGreenBtn({
  text,
  link,
  className = "",
}: OutlineButtonProps) {
  return (
    <Link
      href={link}
      className={` 
        rounded-full 
        px-[25px] py-[10px] sm:py-[8px]
        text-[#fff]
        capitalize flex items-center tracking-[2px] font-semibold
        transition-all duration-300
        bg-[#175e42] 
        hover:bg-[#c25400]
        hover:text-[#fff]
        text-[15px] sm:text-[16px]
        ${className}
      `}
    >
      {text}
    </Link>
  );
}