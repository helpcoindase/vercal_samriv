'use client';

import { useState } from 'react';

interface AccordionItem {
    id: number;
    heading: string;
    content: string;
}

interface BlogAccordionProps {
    items: AccordionItem[];
}

export default function BlogAccordion({ items }: BlogAccordionProps) {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(
        items && items.length > 0 ? items[0].id : null
    );

    const toggleAccordion = (id: number) =>
        setActiveAccordion(prev => (prev === id ? null : id));

    return (
        <div className="my-[60px]">
            <h2 className="text-[28px] leading-[36px] font-[600] text-[#000] mb-[40px]">Key Topics</h2>
            <div className="space-y-[0px]">
                {items.map((item) => {
                    const isOpen = activeAccordion === item.id;

                    return (
                        <div
                            key={item.id}
                            className={`border-b border-[#e5e5e5] group transition-all duration-300 px-[15px] ${isOpen ? 'bg-[#f9f9f9]' : ''
                                }`}
                        >
                            <button
                                type="button"
                                className="w-full cursor-pointer py-[24px] px-[0px]  transition-colors duration-300"
                                onClick={() => toggleAccordion(item.id)}
                                aria-expanded={isOpen}
                            >
                                <span className="flex justify-between w-full gap-[16px] items-start">
                                    <span
                                        className={`text-[19px] leading-[27px] sm:text-[21px] sm:leading-[29px] font-[500] tracking-[-0.01em] text-[#000] 
                    text-left transition duration-300 flex-1 ${isOpen ? 'text-[#27a172]' : 'group-hover:text-[#27a172]'
                                            }`}
                                    >
                                        {item.heading}
                                    </span>

                                    <span
                                        className={`flex-shrink-0 rounded-full p-[10px] border-2 transition-all duration-300 w-[44px] h-[44px] flex items-center justify-center flex-col gap-[4px] ${isOpen
                                            ? 'bg-[#c25400] border-[#c25400] shadow-[0_8px_24px_rgba(255,101,61,0.2)]'
                                            : 'border-[#e5e5e5] group-hover:border-[#c25400]'
                                            }`}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M19 9l-7 7-7-7"
                                                stroke={isOpen ? '#ffffff' : '#0009'}
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="pb-[24px] font-[400] text-[16px] leading-[24px] text-[#000]/90 tracking-[-0.01rem] ">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
