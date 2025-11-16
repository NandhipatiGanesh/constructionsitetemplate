"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function SLBuildersFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    // TODO: wire up subscription logic
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white rounded-2xl max-w-[1440px] mx-auto p-10 sm:p-8 md:p-12 lg:p-16">
      {/* TOP: brand + CTA + contact cards */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 mb-12">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 flex-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full relative flex items-center justify-center"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff6b6b, #ffd93d, #6bcf7f, #4d96ff, #9b59b6, #ff6b6b)",
              }}
            >
              <img src="/slbuilders logo.jpg" alt="shivalakshmibuilders.com" className=" w-10 h-10 rounded-full object-cover object-top" />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0f172a]">SLBuilders</h2>
              <p className="text-sm text-[#6b6b6b] max-w-[320px]">Building infrastructure and homes with safety, quality and sustainability at the core.</p>
            </div>
          </div>

          <div className="ml-auto sm:ml-0">
            <button
              type="button"
              aria-label="Request a quote"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#000] text-white text-sm font-medium transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd24d]"
            >
              Request a quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="w-full lg:w-[420px]">
          <div className="flex flex-col gap-4">
            <motion.a
              href="tel:+919686660444"
              className="flex items-center gap-4 bg-[#ffeee5] rounded-2xl p-4 md:p-6 border border-[rgba(255,140,100,0.08)] hover:translate-x-1 transition-transform"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#ff8c66" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="text-xs text-[#6b6b6b]">Call our office</div>
                <div className="text-sm md:text-base font-semibold text-[#0f172a]">+91 96866 60444</div>
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.a>

            <motion.a
              href="mailto:Slbuilders1511@gmail.com"
              className="flex items-center gap-4 bg-[#ebe8ff] rounded-2xl p-4 md:p-6 border border-[rgba(139,122,248,0.08)] hover:translate-x-1 transition-transform overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#9b8af9" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>

              <div className="flex-1">
                <div className="text-xs text-[#6b6b6b]">Email enquiries</div>
                <div className="text-sm md:text-base font-semibold text-[#0f172a]">Slbuilders1511@gmail.com</div>
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </motion.a>
          </div>
        </div>
      </div>

      {/* MAIN: navigation + newsletter */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <nav className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            {
              title: "Company",
              links: ["About Us", "Careers", "Safety & Compliance", "Sustainability"]
            },
            {
              title: "Services",
              links: ["Commercial Construction", "Residential Building", "Renovation & Fit-outs", "Project Management"]
            },
            {
              title: "Projects",
              links: ["Ongoing Projects", "Completed Works", "Case Studies", "Awards"]
            },
            {
              title: "Resources",
              links: ["Blog", "Guides", "Downloads", "Contact"]
            }
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-[#0f172a] mb-4">{section.title}</h4>
              <ul className="space-y-3 text-sm text-[#6b6b6b]">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#0f172a]">{link}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </nav>

        <motion.aside
          className="w-full lg:w-[420px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="bg-[#fffbf0] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0f172a] mb-4">Get project updates</h3>
            <p className="text-sm text-[#6b6b6b] mb-4">Subscribe to receive the latest on projects, tenders and company news.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="sf-email" className="sr-only">Email address</label>
              <input
                id="sf-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white placeholder:text-[#999] text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#ffd24d]"
              />

              <button
                type="button"
                onClick={handleSubscribe}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#000] text-white font-medium whitespace-nowrap transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#ffd24d]"
              >
                Subscribe
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* BOTTOM: copyright + social */}
      <motion.div
        className="mt-8 pt-6 border-t border-[#e8e8e8] flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="text-sm text-[#6b6b6b]">
          © {new Date().getFullYear()} SLBuilders. Designed by <a href="#" className="hover:text-[#0f172a]">SLBuilders Team</a>
        </div>

        <div className="flex items-center gap-4">
          {[
            { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
            { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
            { name: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" },
            { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" }
          ].map((social, i) => (
            <motion.a
              key={social.name}
              href="#"
              aria-label={social.name}
              className="w-9 h-9 flex items-center justify-center text-[#0f172a] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#ffd24d]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}