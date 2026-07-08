"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyUs() {
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

  const guarantees = [
    {
      title: "90 Days Free Replacement",
      desc: "Candidate exits within 90 days? We replace at zero additional cost.",
    },
    {
      title: "30 Days Payment Period",
      desc: "Invoice raised Day 1 of joining. No advance required.",
    },
    {
      title: "Zero Refund Policy",
      desc: "No monetary refunds. 90-day covenant covers all scenarios.",
    },
  ];

  const ethicsLeft = [
    {
      title: "Candidate Exclusivity Protection",
      desc: "A candidate we present to you will not be shared with any other client during your active engagement — now or in the future.",
    },
    {
      title: "No Poach Commitment",
      desc: "We will never present the same shortlisted candidate to two competing clients simultaneously.",
    },
    {
      title: "Absolute Confidentiality",
      desc: "Role, team structure, salary bands, and hiring intent are never disclosed to third parties.",
    },
  ];

  const ethicsRight = [
    {
      title: "Consent-First Approach",
      desc: "We only submit a resume after the candidate has explicitly expressed interest in your specific role.",
    },
    {
      title: "Full Sourcing Transparency",
      desc: "You receive a complete note: how many candidates were mapped, screened, and why each was selected or not.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
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
              className="text-lg sm:text-xl text-accent uppercase tracking-wider mb-6"
            >
              What We Guarantee. What We Never Compromise.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl text-white mb-6 leading-tight"
            >
              Exclusive <span className="text-accent">Guarantees</span> & Ethics Pledge
            </motion.h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {guarantees.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-primary text-white p-8 rounded-2xl shadow-xl border-4 border-accent"
              >
                <h3 className="text-3xl font-bold text-accent mb-6">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ethics Pledge */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12"
          >
            OUR ETHICS PLEDGE
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {ethicsLeft.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {ethicsRight.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-gray-900 font-bold text-lg">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
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
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Ready to Hire Right — <span className="text-accent">Right Now?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-accent font-bold mb-10 bg-accent/20 py-4 px-8 rounded-lg inline-block"
            >
              Begin with one open role. We will deliver 3 pre-screened profiles within 72 hours.
            </motion.p>

            {/* Contact Info Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
            >
              {[
                { icon: "📞", value: "+91 76676 18449", link: "tel:+917667618449" },
                { icon: "✉️", value: "kiruthika@futurenorms.in", link: "mailto:kiruthika@futurenorms.in?subject=Inquiry%20about%20Recruitment%20Services&body=Hello%20FutureNorms%2C%0A%0AI%27m%20interested%20in%20your%20recruitment%20services.%20Please%20get%20back%20to%20me.%0A%0AThank%20you!" },
                { icon: "🌐", value: "www.futurenorms.in", link: "https://www.futurenorms.in" },
                { icon: "📍", value: "Chennai · Bangalore · Pan India" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link?.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-primary/80 p-6 rounded-xl border-2 border-accent cursor-pointer text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </motion.a>
              ))}
            </motion.div>

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
                  className="inline-block bg-accent text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl"
                >
                  SIGN THE MANDATE — LET'S BEGIN
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-300 mt-8"
            >
              IT · Non-IT · Manufacturing · Engineering · EdTech · BFSI · GCC · Mid-Level to CXO
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
