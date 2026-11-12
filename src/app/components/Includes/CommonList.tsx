import React from "react";

interface CommonListItem {
  title: string;
  description: string;
}

interface CommonListProps {
  items: CommonListItem[];
  className?: string;
}

export default function CommonList({
  items,
  className = "",
}: CommonListProps) {
  return (
    <ul className={`pl-[0] sm:pl-[20px] ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto] my-[20px] max-md:my-[15px] gap-[12px] text-[16px] leading-[24px] sm:text-[18px] sm:leading-[26px] text-[#341802] "
        >
          {/* Icon */}
          <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-full overflow-hidden p-[2px] bg-[#B0F5DB] flex justify-center items-center mt-[3px] shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m10 17 5-5-5-5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Content */}
          <span className="mr-[5px]">
           {item.title &&( <span className="font-[600]">{item.title}:</span>)} {item.description}
          </span>
        </li>
      ))}
    </ul>
  );
}