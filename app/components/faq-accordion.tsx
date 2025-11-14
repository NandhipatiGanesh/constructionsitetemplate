"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BezierEasing from "bezier-easing";

type Item = {
  id: string;
  question: string;
  answer: string;
};

const easeFn = BezierEasing(0.22, 1, 0.36, 1);



const DATA: Item[] = [
  {
    id: "s1",
    question: "What types of properties do you build?",
    answer:
      "2 BHK flats, individual houses and multi-storey buildings — both residential and commercial projects. We handle projects of different scales with the same attention to detail.",
  },
  {
    id: "s2",
    question: "Do you provide materials or can you work with client-supplied materials?",
    answer:
      "We offer both options: (1) Construction with materials supplied by us (complete turnkey), and (2) Construction without materials where the client provides the supplies. We can customise based on budget and preferences.",
  },
  {
    id: "s3",
    question: "Do you do renovation and remodeling?",
    answer:
      "Yes — renovation works, remodeling, interior upgrades and structural retrofits for both residential and commercial properties are part of our services.",
  },
  {
    id: "s4",
    question: "Can you share examples of past projects?",
    answer:
      "Project photos are available on request. Send us a message and we will share project images and full case studies for similar works we completed.",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const transition = {
    duration: 0.45,
    // numeric cubic-bezier array (typed for framer-motion)
    ease: easeFn,
  };


  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto">
       <h2 className="text-3xl text-[#000] font-bold text-center mb-14">Frequently asked questions</h2>

        <div className="flex flex-col gap-5 p-6 md:p-8 rounded-[32px] bg-[#f8f8f9]">
          {DATA.map((item, idx) => {
            const isActive = idx === openIndex;

            return (
              <div
                key={item.id}
                className={`rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isActive ? "bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)]" : ""
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isActive}
                  className="w-full flex justify-between items-center px-6 md:px-12 py-6 md:py-10 text-left"
                >
                  <span className="text-[22px] font-semibold text-[#1a1a1a]">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6"
                  >
                    <svg viewBox="0 0 24 24" className="w-full h-full stroke-[#1a1a1a]" fill="none">
                      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

        {/* Contact / Projects block */}
        <div className="mt-10 p-6 md:p-8 rounded-3xl bg-white border border-gray-100 ">
          <h3 className="text-xl font-semibold mb-3">Projects & Photos</h3>
          <p className="text-[#444] leading-relaxed mb-4">
            Project photos and detailed case studies are available — send us a message and we will deliver the images for the projects you’re interested in.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-[#666]">
                <strong>About:</strong> 38 years+ experience in construction.
              </p>
              <p className="text-sm text-[#666] mt-1">
                <strong>Services:</strong> New construction (with/without materials), renovation, commercial & residential.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="tel:9686660444"
                className="px-4 py-2 rounded-full bg-[#000] text-white font-medium"
              >
                Call 96866 60444
              </a>

              <a
                href="http://Shivalakshmibuilders.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-700"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
