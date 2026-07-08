"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Process() {
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

  const steps = [
    {
      step: "01",
      title: "Mandate Discovery",
      desc: "30-min deep consultation on role, culture, hiring manager expectations.",
      icon: "📞",
    },
    {
      step: "02",
      title: "Talent Architecture",
      desc: "Mapping roles to position categories, competencies, and profile enhance.",
      icon: "📊",
    },
    {
      step: "03",
      title: "72 Hrs Shortlist",
      desc: "3-5 curated profiles with assessment notes and submissions.",
      icon: "🗺️",
    },
    {
      step: "04",
      title: "Interview Orchestration",
      desc: "We schedule, confirm, and follow-up to reduce your admin load.",
      icon: "🔍",
    },
    {
      step: "05",
      title: "Offer & Negotiation",
      desc: "We bridge expectations, reduce renegotiations, and smooth the offer process.",
      icon: "✅",
    },
    {
      step: "06",
      title: "Post-Joining Stewardship",
      desc: "Day 7, 30, 60 & 90 check-ins. Candidate stays, you stay—we retain.",
      icon: "💼",
    },
  ];

  const sectorsOfMastery = [
    {
      title: "OEM",
      stat: "↑ 25% hiring surge — 2025-26",
      roles: [
        "Plant Head / GM Operations",
        "Quality Manager / SQM",
        "Maintenance / Reliability Lead",
        "Production Manager",
        "Purchase & Supply Chain Head",
        "EHS / Safety Manager",
        "Toolroom Engineer",
        "Logistics & Warehouse Lead",
      ],
    },
    {
      title: "GCC & IT",
      stat: "↑ 30-35% specialized role surge",
      roles: [
        "Engineering Managers",
        "Cloud & DevOps Architects",
        "AI / ML Engineers",
        "Product Managers",
        "GCC / Captive Centre Leaders",
        "Data Engineering Leads",
        "Cybersecurity Specialists",
        "Program & Delivery Managers",
      ],
    },
    {
      title: "BFSI • EdTech • Engineering",
      stat: "↑ Strong GCC + BFSI expansion",
      roles: [
        "Finance & Risk Leaders",
        "HR Business Partners (HRBP)",
        "Sales & Business Dev Heads",
        "Compliance Officers",
        "Supply Chain Strategists",
        "Operations Directors",
        "Corporate Affairs Managers",
        "Strategy & Transformation Leads",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/3 right-16 w-32 h-32 bg-accent/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full blur-lg"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent font-semibold uppercase tracking-wider mb-6"
            >
              From Mandate to Milestone
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Our <span className="text-accent">Process</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              A systematic approach to finding the perfect match.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  x: index % 2 === 0 ? 10 : -10,
                  transition: { duration: 0.3 },
                }}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse" as const,
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 },
                    }}
                    className="w-20 h-20 bg-accent text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-md border-4 border-primary"
                  >
                    {step.step}
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{
                        height: ["48px", "60px", "48px"],
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse" as const,
                      }}
                      className="w-2 h-12 bg-primary mt-2"
                    />
                  )}
                </div>
                <motion.div
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(212,160,23,0.2)",
                    borderColor: "#D4A017",
                  }}
                  className="flex-1 bg-gray-50 p-8 rounded-2xl shadow-lg border-4 border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: index * 0.15,
                        repeat: Infinity,
                        repeatType: "reverse" as const,
                      }}
                      className="text-4xl"
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-accent">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectors of Mastery */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-center text-primary mb-4"
          >
            Sectors of <span className="text-accent">Mastery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-xl text-accent mb-12 uppercase tracking-wider"
          >
            Deep Expertise Across Three Industry Pillars
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {sectorsOfMastery.map((sector, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-primary/30 transition-all"
              >
                <div className="bg-primary text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{sector.title}</h3>
                  <div className="mt-3 inline-block bg-accent/90 text-gray-900 px-6 py-2 rounded-lg font-semibold text-sm">
                    {sector.stat}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {sector.roles.map((role, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        whileHover={{ x: 8, color: "#D4A017" }}
                        className="flex items-center gap-3 text-gray-700 cursor-pointer transition-all duration-300"
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            delay: idx * 0.1,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="w-3 h-3 bg-accent rounded-full flex-shrink-0"
                        />
                        <span className="text-sm">{role}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
