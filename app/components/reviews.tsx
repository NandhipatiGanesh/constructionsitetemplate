"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesReviews() {
  return (
    <section className="reviews-section bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0a0a0a] leading-tight">
            Why clients trust
            <br />SLBuilders
          </h1>
        </motion.div>

        {/* Reviews grid */}
        <div className="mb-10">
          {/* Desktop / tablet grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.article
                key={i}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-sm text-[#0a0a0a] tracking-wider mb-4" aria-hidden>
                  {r.stars}
                </div>
                <p className="text-base text-[#0a0a0a] leading-7 mb-6 flex-1">{r.text}</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-sm font-semibold text-[#0a0a0a]">{r.name}</div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mobile horizontal scroller */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory px-6 -mx-6"
              tabIndex={0}
              aria-label="Client reviews carousel"
            >
              {reviews.map((r, i) => (
                <motion.article
                  key={i}
                  className="w-[calc(100vw-80px)] max-w-[400px] bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 flex-shrink-0 snap-center flex flex-col"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-sm text-[#0a0a0a] tracking-wider mb-3" aria-hidden>
                    {r.stars}
                  </div>
                  <p className="text-sm text-[#0a0a0a] leading-6 mb-4 flex-1">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="text-sm font-semibold text-[#0a0a0a]">{r.name}</div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-2">
              <small className="text-xs text-[#6b6b6b]">Swipe to see more reviews</small>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 rounded-full bg-transparent text-[#0a0a0a] border border-[#e0e0e0] font-medium hover:bg-[#0a0a0a] hover:text-white transition-all hover:-translate-y-1"
            aria-label="See client stories"
          >
            See Client Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const reviews = [
  {
    stars: "★★★★★",
    text:
      "SLBuilders delivered our commercial building two months ahead of schedule. The team was extremely transparent with timelines, costs, and quality checks.",
    avatar: "https://i.pravatar.cc/40?img=11",
    name: "Arun, Business Owner",
  },
  {
    stars: "★★★★★",
    text:
      "From planning to execution, SLBuilders handled our home renovation flawlessly. The project managers kept us updated every step of the way.",
    avatar: "https://i.pravatar.cc/40?img=22",
    name: "Priya, Homeowner",
  },
  {
    stars: "★★★★★",
    text:
      "Their structural engineering team is top-notch. We trusted them with a complex industrial warehouse build and they exceeded expectations.",
    avatar: "https://i.pravatar.cc/40?img=45",
    name: "Suresh, Factory Manager",
  },
  {
    stars: "★★★★★",
    text:
      "Quality work and timely delivery. SLBuilders completed our apartment project while maintaining great safety standards and coordination.",
    avatar: "https://i.pravatar.cc/40?img=9",
    name: "Deepak, Real Estate Developer",
  },
  {
    stars: "★★★★★",
    text:
      "We hired SLBuilders for a full office interior fit-out. They brought our designs to life with precision and impressive craftsmanship.",
    avatar: "https://i.pravatar.cc/40?img=14",
    name: "Shreya, Architect",
  },
  {
    stars: "★★★★★",
    text:
      "Reliable team and great communication. They helped us build a modern villa with sustainable materials and efficient planning.",
    avatar: "https://i.pravatar.cc/40?img=37",
    name: "Rahul, Villa Owner",
  },
];