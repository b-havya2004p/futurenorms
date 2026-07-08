"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      name: "OEM",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 11h14v2h-14zM18.92 6.01c.46 0 .87.29 1.02.73l1.06 3.04c.07.2.1.42.1.64V17c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-6.58c0-.22.03-.44.1-.64l1.06-3.04c.15-.44.56-.73 1.02-.73h11.74zM6.5 16c.83 0 1.5-.67 1.5-1.5S7.33 13 6.5 13 5 13.67 5 14.5 5.67 16 6.5 16zm11 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM18.08 7H5.92l-.73 2h13.62l-.73-2z"/>
        </svg>
      ),
      description: "Recruitment expertise for automotive manufacturing, design, and engineering.",
    },
    {
      name: "IT Technology",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
      ),
      description: "Specialized recruitment for software development, cloud computing, cybersecurity, and more.",
    },
    {
      name: "BFSI",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zm-7 9v10h14V11h-3v8h-2v-8h-2v8H7v-8H5zm14 0h-3v8h-2v-8h-2v8H7v-8H5v2h14v-2z"/>
        </svg>
      ),
      description: "Banking, Financial Services, and Insurance leadership recruitment.",
    },
    {
      name: "Engineering",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.66.07-1 0-.34-.03-.68-.07-1l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.32-.07.66-.07 1 0 .34.03.68.07 1l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58z"/>
        </svg>
      ),
      description: "Engineering talent across mechanical, electrical, civil, and other disciplines.",
    },
    {
      name: "GCC",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      description: "Global Capability Centers & Captive center leadership recruitment.",
    },
    {
      name: "EdTech",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      description: "Building the future of education through innovative EdTech talent.",
    },
    {
      name: "Manufacturing",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 20h16v-2H4v2zM8 8v8h3v-3h2v3h3V8h-3v3h-2V8H8z"/>
          <path d="M11 4c-.8 0-1.5.7-1.5 1.5 0 .4.2.8.5 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.3-.3.5-.7.5-1.1 0-.8-.7-1.5-1.5-1.5z"/>
          <path d="M15 5c-.8 0-1.5.7-1.5 1.5 0 .4.2.8.5 1.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.3-.3.5-.7.5-1.1 0-.8-.7-1.5-1.5-1.5z"/>
        </svg>
      ),
      description: "Connecting manufacturing excellence with leadership and operational talent.",
    },
    {
      name: "Real Estate",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 21h12v-2H6v2zm2-4v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4H8z"/>
          <path d="M9 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
          <path d="M12 4c-.7 0-1.3.3-1.8.7l-3.5 3c-.5.4-.6 1.2-.2 1.7.4.5 1.2.6 1.7.2l3-2.6 3 2.6c.2.2.5.3.8.3.3 0 .6-.1.8-.3.5-.4.6-1.2.2-1.7l-3.5-3c-.5-.4-1.1-.7-1.8-.7z"/>
        </svg>
      ),
      description: "Real estate development, construction, and property management leadership recruitment.",
    },
    {
      name: "Healthcare",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
        </svg>
      ),
      description: "Healthcare and medical talent recruitment for hospitals, clinics, and pharma.",
    },
    {
      name: "Corporate Functions",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM9 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 13H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V20z"/>
        </svg>
      ),
      description: "HR, Finance, Marketing, and other corporate leadership roles.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/3 right-16 w-32 h-32 bg-accent/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
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
              Our Expertise
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Industry <span className="text-accent">Expertise</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Deep domain knowledge across diverse sectors
            </motion.p>
          </motion.div>
        </div>
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  y: -12,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-accent/50 transition-all h-full"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(212,160,23,0.3)",
                    borderColor: "rgba(212,160,23,0.8)"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatType: "reverse" as const
                    }}
                    className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-accent mb-3">{industry.name}</h3>
                  <p className="text-gray-700">{industry.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
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
                animate="pulse"
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
