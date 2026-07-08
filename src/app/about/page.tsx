"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const storySections = [
    {
      step: "01",
      title: "The Problem We Saw",
      desc: "Recruitment in India's engineering and manufacturing sectors is a mess of generalists — firms filing roles by the dozen, with little understanding of shop-floor realities, technical hierarchies, or the nuances of placing a senior production manager versus a junior process engineer.",
    },
    {
      step: "02",
      title: "Why FutureNorms Exists",
      desc: "We built FutureNorms to be the opposite of that. We exist because we believe every candidate on our shortlist has been assessed against the role, the culture, and the career trajectory of the hiring company.",
    },
    {
      step: "03",
      title: "The Name",
      desc: "FutureNorms. Because the \"norms\" of hiring are being rewritten. Precision is the new baseline. We're not early — we're building what every firm will eventually demand.",
    },
  ];

  const sectors = [
    "OEM",
    "BFSI",
    "EdTech",
    "Engineering",
    "GCC",
    "Manufacturing",
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Hero / About Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Logo & Branding */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary to-primary/90 text-white p-12 rounded-2xl shadow-2xl text-center"
            >
              <img
                src="/logo.png"
                alt="FutureNorms Logo"
                className="w-32 h-32 mx-auto mb-8 object-contain"
              />
              <p className="text-accent font-semibold uppercase tracking-wider mb-4">WHO WE ARE</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                FUTURE<br /> NORMS
              </h1>
              <p className="text-accent italic text-xl">Precision Talent Solutions</p>
            </motion.div>

            {/* Right Column - About Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold text-primary mb-4 relative inline-block"
              >
                About FutureNorms
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent rounded-full"></span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-700 mb-6 leading-relaxed"
              >
                FutureNorms is a niche recruitment and staffing consultancy headquartered in Chennai, specializing in precision talent acquisition across India's most demanding industries. We connect mid-level to senior leadership talent — including CXO placements — with organizations that refuse to settle for average.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Founded with 13+ years of deep recruitment expertise, FutureNorms operates on a single principle: quality over volume. We are not a bulk-CV firm. Every shortlist we deliver is curated, assessed, and ready to interview.
              </motion.p>

              {/* Mission and Vision */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border-4 border-accent transition-all"
                >
                  <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      className="text-3xl"
                    >
                      🎯
                    </motion.div>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver exceptional hiring solutions that empower organizations to build high-performing teams and achieve their strategic goals with speed and precision.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border-4 border-primary transition-all"
                >
                  <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      className="text-3xl"
                    >
                      🌟
                    </motion.div>
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the most trusted partner for executive recruitment, setting the standard for quality, integrity, and innovation in talent acquisition.
                  </p>
                </motion.div>
              </motion.div>

              {/* Sectors We Serve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider">
                  SECTORS WE SERVE
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {sectors.map((sector, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-primary text-white p-4 rounded-lg text-center font-semibold shadow-md"
                    >
                      {sector}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Story Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {storySections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-primary text-white p-8 rounded-2xl shadow-xl border-4 border-accent"
              >
                <div className="text-4xl font-bold text-accent mb-4">{section.step}</div>
                <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
                <p className="text-gray-200 leading-relaxed">{section.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center italic text-xl text-primary font-serif"
          >
            "The future belongs to those who prepare for it today."
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Ready to Build Your Next High-Performing Team?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Partner with FutureNorms for a recruitment process built around quality, precision, and long-term success.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-gray-900 px-10 py-5 rounded-full font-semibold text-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl"
                >
                  Book a Hiring Consultation
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://wa.me/917667618449?text=Hello%20FutureNorms%2C%20I%27m%20interested%20in%20your%20recruitment%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-secondary transition-all shadow-lg hover:shadow-xl"
                >
                  Talk to a Recruitment Expert
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
