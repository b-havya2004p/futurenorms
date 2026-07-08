"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Permanent Hiring",
      icon: "📋",
      description: "Find the perfect long-term fit for your organization with our comprehensive permanent hiring solutions.",
      benefits: ["End-to-end recruitment", "Talent assessment", "Cultural fit evaluation"],
    },
    {
      title: "Executive Search",
      icon: "👤",
      description: "Identify and secure top-tier executive talent to drive your organization's success.",
      benefits: ["Discreet search process", "Global talent network", "Leadership assessment"],
    },
    {
      title: "Leadership Hiring",
      icon: "👥",
      description: "Build exceptional leadership teams that inspire and transform your business.",
      benefits: ["Succession planning", "Leadership profiling", "Executive onboarding"],
    },
    {
      title: "Interview Coordination",
      icon: "📅",
      description: "Streamline your interview process with our professional coordination services.",
      benefits: ["Schedule management", "Candidate communication", "Feedback collection"],
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
    hidden: { opacity: 0, y: 30 },
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
              Complete Recruitment Solutions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Comprehensive recruitment solutions tailored to your unique needs
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

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gray-50 p-10 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-6 mb-6">
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
                    className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    <span className="text-4xl">{service.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
                <ul className="mb-8 space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-7 h-7 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-accent text-lg font-bold">✓</span>
                      </span>
                      <span className="font-medium">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-accent text-gray-900 px-8 py-3.5 rounded-full font-semibold hover:bg-yellow-500 transition-all shadow-md hover:shadow-xl"
                  >
                    Get Started
                  </Link>
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
