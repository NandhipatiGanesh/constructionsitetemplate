"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/* Variants (you had these already) */
const containerVariants: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { type: ("spring" as const), stiffness: 260, damping: 20 },
  },
};

const panelVariants: Variants = {
  initial: { y: 20, opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ShowcaseSection() {
  const shouldReduceMotion = useReducedMotion();
  const hoverProps = shouldReduceMotion ? {} : { whileHover: "hover", whileTap: "hover" };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Showcasing the Beauty and Innovation of
            <span className="block text-gray-400">Sustainable Agriculture Through Stunning Visuals</span>
          </h2>
        </div>

        {/* Grid layout: left column tall, right column top wide + two bottom smaller */}
        <motion.div
          className="grid grid-cols-12 gap-6"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Left tall card (spans 2 rows) */}
          <motion.article
            className="relative col-span-12 md:col-span-5 row-span-2 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            variants={cardVariants}
            initial="initial"
            {...hoverProps}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/5" />
            <div className="w-full h-[520px] md:h-full relative">
              <motion.div
                 className="w-full h-full"
                 variants={{
                   initial: { scale: 1 },
                   hover: {
                    
                     transition: {
                       duration: 0.8,
                       ease: [0.22, 1, 0.36, 1], // smooth power ease
                     },
                   },
                 }}
               >
                 <Image
                   src="/village.png"
                   alt="..."
                   fill
                   className="object-cover"
                 />
               </motion.div>
               
            </div>

            {/* glass overlay */}
            <motion.div
              variants={panelVariants}
              className="absolute left-6 right-6 bottom-6 rounded-xl p-4 backdrop-blur-sm md:backdrop-blur-[15px] bg-black/45 border border-white/10 shadow-lg"
            >
              <h3 className="text-base font-semibold text-white">Donec eros cursus nam senectus</h3>
              <p className="mt-2 text-sm text-white/90">
                Donec eros cursus nam senectus tempus vestibulum aliquet varius porttitor curae aliquam aenean.
              </p>
            </motion.div>
          </motion.article>

          {/* Right top wide card */}
          <motion.article
            className="relative col-span-12 md:col-span-7 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
            variants={cardVariants}
            initial="initial"
            {...hoverProps}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/3" />
            <div className="w-full h-64 md:h-[260px] lg:h-[340px] relative">
              <motion.div
                className="w-full h-full"
                 variants={{
                   initial: { scale: 1 },
                   hover: {
                    
                     transition: {
                       duration: 0.8,
                       ease: [0.22, 1, 0.36, 1], // smooth power ease
                     },
                   },
                 }}
              >
                <Image
                  src="/township.png"           // replace with your top-right image
                  alt="Township fields"
                  fill
                  sizes="(min-width:1280px) 60vw, (min-width:768px) 55vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              variants={panelVariants}
              className="absolute left-6 right-6 bottom-6 rounded-xl p-4 backdrop-blur-sm md:backdrop-blur-[15px] bg-black/45 border border-white/10 shadow-lg"
            >
              <h3 className="text-base font-semibold text-white">Malesuada ante arcu est</h3>
              <p className="mt-2 text-sm text-white/90">
                A felis porttitor, auctor venenatis augue quam consectetur massa fermentum pulvinar primis.
              </p>
            </motion.div>
          </motion.article>

          {/* Right bottom two cards: nested grid inside the right column */}
          <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Bottom-left small card */}
            <motion.article
              className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              variants={cardVariants}
              initial="initial"
              {...hoverProps}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/3" />
              <div className="w-full h-40 md:h-44 lg:h-48 relative">
                <motion.div
                  className="w-full h-full"
                   variants={{
                   initial: { scale: 1 },
                   hover: {
                    
                     transition: {
                       duration: 0.8,
                       ease: [0.22, 1, 0.36, 1], // smooth power ease
                     },
                   },
                 }}
                >
                  <Image
                    src="/newvilla.png"        // replace with bottom-left image
                    alt="Field sunrise"
                    fill
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={panelVariants}
                className="absolute left-4 right-4 bottom-4 rounded-lg p-3 backdrop-blur-sm md:backdrop-blur-[10px] bg-black/45 border border-white/10 shadow"
              >
                <h4 className="text-sm font-semibold text-white">Volutpat sollicitudin convallis</h4>
                <p className="mt-1 text-xs text-white/90">Potenti urna vehicula purus sociosqu sapien</p>
              </motion.div>
            </motion.article>

            {/* Bottom-right small card */}
            <motion.article
              className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              variants={cardVariants}
              initial="initial"
              {...hoverProps}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/3" />
              <div className="w-full h-40 md:h-44 lg:h-48 relative">
                <motion.div
                  className="w-full h-full"
                   variants={{
                   initial: { scale: 1 },
                   hover: {
                    
                     transition: {
                       duration: 0.8,
                       ease: [0.22, 1, 0.36, 1], // smooth power ease
                     },
                   },
                 }}
                >
                  <Image
                    src="/city.png"       // replace with bottom-right image
                    alt="Tractor in field"
                    fill
                    sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                variants={panelVariants}
                className="absolute left-4 right-4 bottom-4 rounded-lg p-3 backdrop-blur-sm md:backdrop-blur-[10px] bg-black/45 border border-white/10 shadow"
              >
                <h4 className="text-sm font-semibold text-white">Aenean lobortis, potenti</h4>
                <p className="mt-1 text-xs text-white/90">Donec a aliquam nulla urna risus auctor</p>
              </motion.div>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
