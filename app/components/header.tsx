"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Header for SLBuilders - Construction company content added.
 * Replace images/links as needed.
 */

const headerData = {
  logo: "SLBuilders",
  navLinks: [
    {
      label: "Services",
      href: "#services",
      dropdown: {
        image: {
          src: "/Serenity Steps_ A Harmonious Blend of Concrete, Wood, and Water.png", // replace with your image path
          title: "Quality Construction Services",
          subtitle: "Residential, Commercial & Infrastructure",
          link: "#services",
        },
        sections: [
          {
            title: "Residential",
            links: [
              {
                label: "New Homes",
                href: "#residential-new-homes",
                desc: "Custom houses & turnkey developments",
                icon: "🏠",
              },
              {
                label: "Renovations",
                href: "#residential-renovations",
                desc: "Home remodelling and extensions",
                icon: "🔧",
              },
              {
                label: "Interiors",
                href: "#residential-interiors",
                desc: "High-quality finishes & fit-outs",
                icon: "🛋️",
              },
            ],
          },
          {
            title: "Commercial & Industrial",
            links: [
              {
                label: "Office Buildings",
                href: "#commercial-office",
                desc: "Efficient, modern commercial spaces",
                icon: "🏢",
              },
              {
                label: "Retail & Hospitality",
                href: "#commercial-retail",
                desc: "Shops, restaurants and hotels",
                icon: "🛍️",
              },
              {
                label: "Industrial",
                href: "#commercial-industrial",
                desc: "Warehouses, factories & logistics",
                icon: "🏭",
              },
            ],
          },
          {
            title: "Infrastructure",
            links: [
              { label: "Roads & Bridges", href: "#infra-roads" },
              { label: "Water & Utilities", href: "#infra-water" },
              { label: "Public Works", href: "#infra-public" },
            ],
          },
        ],
      },
    },
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  authLinks: [
    { label: "+919391202148", href: "/login" },
    { label: "Get a Quote", href: "/quote", primary: true },
  ],
};

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <>
      {/* Desktop Backdrop overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 hidden md:block"
            onClick={() => setHovered(null)}
          />
        )}
      </AnimatePresence>

      <header className="relative z-20 flex justify-between items-center pl-4 pr-2 md:pr-[10px] pt-[10px] pb-[10px] rounded-full transparent md:bg-black/80 backdrop-blur-md max-w-7xl mx-4 md:mx-auto mt-4">
        {/* Logo */}
        <div className="text-white font-extrabold text-xl flex items-center gap-2">
          <img src="/logo.png" alt="shivalakshmibuilders.com" className=" w-10 h-10 rounded-full object-fit" />
          {headerData.logo}</div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-white text-md font-medium relative">
          {headerData.navLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={link.href} className="transition hover:text-orange-400">
                {link.label}
              </a>

              {/* Mega Dropdown - Only for "Services" */}
              {link.dropdown && (
                <AnimatePresence>
                  {hovered === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="fixed left-1/2 -translate-x-1/2 top-[80px] bg-white shadow-xl rounded-3xl p-3 flex gap-12 w-full max-w-[85rem] h-[400px] z-20"
                    >
                      {/* Left Image Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="w-[320px] h-full rounded-xl overflow-hidden"
                      >
                        <a href={link.dropdown.image.link} className="block w-full h-full">
                          <img
                            src={link.dropdown.image.src}
                            alt={link.dropdown.image.title}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </motion.div>

                      {/* Right Sections */}
                      <div className="flex-1 grid grid-cols-3 gap-12 py-4">
                        {link.dropdown.sections.map((section, sIdx) => (
                          <motion.div
                            key={sIdx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + sIdx * 0.05, duration: 0.3 }}
                          >
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                              {section.title}
                            </h4>
                            <ul className="space-y-4">
                              {section.links.map((item, lIdx) => (
                                <motion.li
                                  key={lIdx}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 + sIdx * 0.05 + lIdx * 0.03 }}
                                >
                                  <a
                                    href={item.href}
                                    className="block hover:text-orange-500 transition-colors duration-200 group"
                                  >
                                    {"icon" in item && "desc" in item ? (
                                      <span className="flex items-start gap-3">
                                        <span className="w-[70px] h-[70px] border border-gray-200 rounded-2xl text-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                                          {item.icon}
                                        </span>
                                        <span>
                                          <p className="font-semibold text-gray-900 text-sm mb-1">
                                            {item.label}
                                          </p>
                                          <p className="text-xs text-gray-500 leading-relaxed">
                                            {item.desc}
                                          </p>
                                        </span>
                                      </span>
                                    ) : (
                                      <span className="font-medium text-gray-900 text-sm">
                                        {item.label}
                                      </span>
                                    )}
                                  </a>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          <motion.a
            href="/login"
            className="hidden md:inline-block text-white text-sm hover:underline"
          >
            +919686660444
          </motion.a>
          <motion.a
            href="/quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block px-4 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Get a Quote
          </motion.a>

          {/* Mobile: Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">{headerData.logo}</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="p-6 space-y-2"
              >
                {headerData.navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full flex items-center justify-between py-3 text-left font-semibold text-gray-900 text-lg"
                        >
                          <span className="flex items-center gap-3">
                            <img
                              src={link.dropdown.image.src}
                              alt=""
                              className="w-8 h-8 rounded-lg object-cover"
                            />
                            {link.label}
                          </span>
                          {mobileDropdownOpen ? (
                            <ChevronUp size={20} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-400" />
                          )}
                        </button>

                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 space-y-3 mt-2"
                            >
                              {link.dropdown.sections.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-2">
                                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-3">
                                    {section.title}
                                  </h4>
                                  {section.links.map((item, lIdx) => (
                                    <a
                                      key={lIdx}
                                      href={item.href}
                                      className="block py-2 text-sm text-gray-600 hover:text-orange-500"
                                    >
                                      {item.label}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-3 text-gray-600 font-medium text-base hover:text-orange-500"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="fixed bottom-0 left-0 right-0 p-6 space-y-3 border-t border-gray-100 bg-white"
              >
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Quick Links
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="#projects" className="block hover:text-orange-500">Our Projects</a>
                  <a href="#about" className="block hover:text-orange-500">About SLBuilders</a>
                  <a href="#careers" className="block hover:text-orange-500">Careers</a>
                  <a href="#contact" className="block hover:text-orange-500">Contact</a>
                  <a href="/privacy" className="block hover:text-orange-500">Privacy Policy</a>
                </div>
                <a
                  href="/quote"
                  className="block w-full py-3 text-center rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
                >
                  Get a Quote
                </a>
                <a
                  href="/login"
                  className="block w-full py-3 text-center text-gray-900 font-medium hover:text-orange-500"
                >
                  +919686660444
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

     
    </>
  );
}
