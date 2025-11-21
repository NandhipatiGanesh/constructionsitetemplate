"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Building, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Founder Info & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}>
              <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Building Dreams Into Reality
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience in real estate and construction,
              we've successfully delivered premium residential and commercial
              projects that exceed expectations. Our commitment to quality,
              transparency, and customer satisfaction sets us apart.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-6 py-1">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-bold text-gray-900">150+</span>
                </div>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-3xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
              {/* Founder Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0">
                <div className="md:w-[100%] w-[110px] h-[150px]  rounded-full bg-gray-100 flex items-center justify-center text-black text-2xl font-bold ">
                  <img src="/venky.jpg" className="w-full h-full rounded-lg" />
                </div>
              </motion.div>

              {/* Founder Info */}
              <div className="flex-1 w-[50%]">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Venky</h3>
                <p className="text-sm text-blue-600 font-semibold mb-2">
                  Founder & CEO
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  "Our mission is to create spaces that inspire and endure.
                  Every project is built with integrity, craftsmanship, and a
                  deep commitment to our clients' vision."
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3">
              {[
                { icon: Award, text: "Quality Assured" },
                { icon: TrendingUp, text: "On-Time Delivery" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-[500px] lg:h-[600px]  flex items-center justify-center bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: "url('/Apartment.jpg')",
                }}></motion.div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">38+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-2xl opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
