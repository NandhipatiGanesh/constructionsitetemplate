"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Home, Wrench, Store } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Building2,
    title: "2 BHK Flats & Buildings",
    description: "Premium 2 BHK apartments and individual buildings for sale with modern amenities, spacious layouts, and prime locations.",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: Home,
    title: "Construction with Material",
    description: "Complete building construction services with high-quality materials. We handle everything from foundation to finishing.",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Construction without Material",
    description: "Professional construction services where you provide the materials. Expert labor and project management included.",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 4,
    icon: Store,
    title: "Renovation Works",
    description: "Transform your existing space with our expert renovation services for both residential and commercial properties.",
    color: "from-teal-500 to-teal-600",
  },
];

export default function CleanServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate and construction solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative h-full bg-white rounded-3xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Icon container */}
                <motion.div
                  className="relative mb-6"
                  animate={{
                    scale: hoveredCard === service.id ? 1.1 : 1,
                    rotate: hoveredCard === service.id ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="flex items-center text-sm font-semibold text-blue-600"
                  initial={{ x: 0 }}
                  animate={{ x: hoveredCard === service.id ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn more
                  <motion.span
                    className="ml-2"
                    animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Bottom border animation */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredCard === service.id ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}