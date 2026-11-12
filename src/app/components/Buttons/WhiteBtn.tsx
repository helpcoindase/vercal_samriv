import Link from "next/link";
import React from "react";

interface OutlineButtonProps {
  text: string;
  link: string;
  className?: string;
}

export default function WhiteBtn({
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
        text-[#384D1F]
        capitalize flex items-center tracking-[2px] font-semibold
        transition-all duration-300
        bg-[#fff] 
        hover:bg-[#c25400]
        hover:text-white
        ${className}
      `}
    >
      {text}
    </Link>
  );
}