"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, cubicBezier } from "framer-motion";

type Item = {
  id: string;
  question: string;
  answer: string;
};

const DATA: Item[] = [
  {
    id: "q1",
    question: "How long have you been in business?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: "q2",
    question: "Is your app available for iPhone?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: "q3",
    question: "Can I speak with an account executive?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
  {
    id: "q4",
    question: "Is the service internationally available?",
    answer:
      "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [heights, setHeights] = useState<number[]>(Array(DATA.length).fill(0));

  // measure heights
  const measureHeights = () => {
    const newHeights = DATA.map((_, idx) => {
      const el = contentRefs.current[idx];
      if (!el) return 0;
      const inner = el.firstElementChild as HTMLElement | null;
      return inner ? inner.scrollHeight : 0;
    });
    setHeights(newHeights);
  };

  useEffect(() => {
    measureHeights();
    window.addEventListener("resize", measureHeights);
    return () => window.removeEventListener("resize", measureHeights);
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const transition = {
    duration: 0.45,
    ease: cubicBezier(0.22, 1, 0.36, 1),
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#000]">
            Have questions?
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#666] max-w-[700px] mx-auto leading-7">
            Lorem ipsum dolor sit amet consectetur bibendum fermentum eget adipiscing tellus.
          </p>
        </div>

        <div className="flex flex-col gap-5 p-6 md:p-8 rounded-[32px] bg-[#f8f8f9]">
          {DATA.map((item, idx) => {
            const isActive = idx === openIndex;

            return (
              <div
                key={item.id}
                className={`rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "bg-white shadow-[0_4px_4px_rgba(0,0,0,0.06)]"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isActive}
                  className="w-full flex justify-between items-center px-6 md:px-12 py-6 md:py-10 text-left"
                >
                  <span className="text-[22px] md:text-[32px] font-bold  text-[#1a1a1a]">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6"
                  >
                    <svg viewBox="0 0 24 24" className="w-full h-full stroke-[#1a1a1a]" fill="none">
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                <motion.div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  initial={{ maxHeight: 0 }}
                  animate={{
                    maxHeight: isActive ? `${heights[idx]}px` : "0px",
                  }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-12 pb-8 md:pb-10">
                    <p className="text-[16px] md:text-[18px] text-[#666] leading-[1.7]">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
