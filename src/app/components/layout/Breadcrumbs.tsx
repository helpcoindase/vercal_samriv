"use client";

import Link from "next/link";
import { breadcrumbsConfig, type BreadcrumbItem } from "../config/breadcrumbs";

interface BreadcrumbsProps {
  pageKey: string;
  currentTitle?: string;
}

export default function Breadcrumbs({
  pageKey,
  currentTitle,
}: BreadcrumbsProps) {
  const breadcrumbs: BreadcrumbItem[] = breadcrumbsConfig[pageKey] || [];

  if (breadcrumbs.length === 0) return null;

  return (
    <div className="bg-[#fff] pt-[20px] pl-[10px] w-[90%] max-w-[120rem] mx-auto relative z-[99]">

      <ul className="flex flex-wrap gap-[5px] text-sm pl-[35px] max-md:pl-[10px]">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          const shouldLink = crumb.href && (!isLast || currentTitle);

          return (
            <li key={index} className="flex items-center gap-[5px] flex-wrap">
              {shouldLink ? (
                <Link
                  href={crumb.href!}
                  className="text-[#626262] hover:text-[#0087A7] transition-colors duration-300 font-light text-[16px]"
                >
                  {crumb.title}
                </Link>
              ) : (
                <span
                  className={`font-medium text-[16px] ${isLast && !currentTitle
                    ? "text-[#27a172]"
                    : "text-gray-700"
                    }`}
                >
                  {crumb.title}
                </span>
              )}

              {(index !== breadcrumbs.length - 1 || currentTitle) && (
                <span className="mx-[5px] text-gray-700">/</span>
              )}
            </li>
          );
        })}

        {currentTitle && (
          <li className="flex items-center gap-[5px] flex-wrap">
            <span className="font-medium text-[16px] text-[#27a172]">
              {currentTitle}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}