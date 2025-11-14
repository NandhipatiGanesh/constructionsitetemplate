"use client";
import { motion } from "framer-motion";
import "./super.css";
import Header from "./header";

export default function SuperHero() {
  return (
    <section className="hero-root">
      <div className="hero-gradient-overlay_wrapper lg:rounded-xl md:rounded-2xl rounded-none sm:rounded-xl">
        {/* Background video (z-0) */}
        <div className="hero-video-wrap">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bb48a044162cd47729a3f4_db7ba73d032ce61b4aac9e791ea29a83ed25cfdc.webp"
            className="hero-video"
          >
            <source
              src="/855253-uhd_3840_2160_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay (z-10) */}
          <div className="hero-gradient-overlay" />
        </div>

        {/* Header (keeps site nav above the overlay) */}
        <div className="hero-header">
          <Header />
        </div>

        {/* Content (z-30) */}
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             SLBuilders — <br />
            Building Hyderabad's Future
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            SLBuilders is a full-service construction firm specializing in residential, commercial,
            and infrastructure projects across Hyderabad.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/signup"
              className="cta-primary"
            >
              View Projects
            </a>
            <span className="cta-note">✔ get in touch</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
