"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
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

  const pulseVariant = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section className="relative pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent font-semibold uppercase tracking-wider mb-8"
            >
              Specialist Recruitment | IT | Non-IT | Manufacturing
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Hire Top Talent in{" "}
              <span className="text-accent">72 Hours</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              FutureNorms helps companies hire mid-level, senior-level, and
              leadership talent across IT, Non-IT, and Manufacturing sectors
              with a 72-hour shortlist guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                variants={pulseVariant}
                animate="pulse"
              >
                <Link
                  href="/contact"
                  className="inline-block bg-accent text-gray-900 px-12 py-5 rounded-full font-semibold text-xl hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl"
                >
                  Book a Hiring Consultation
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            >
              {[
                { number: "13+", label: "Years of Excellence" },
                { number: "500+", label: "Placements Made" },
                { number: "90", label: "Day Guarantee" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3,
                      repeat: Infinity,
                      repeatType: "reverse" as const,
                    }}
                    className="text-5xl font-bold text-accent mb-1"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl font-semibold text-white/90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-gray-90 mb-6"
            >
              Explore Our Services & Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            >
              Learn more about our services, expertise, and how we can help you
              build high-performing teams.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  link: "/about",
                  icon: "👥",
                  title: "About Us",
                  description: "Learn about our story and mission",
                },
                {
                  link: "/services",
                  icon: "📋",
                  title: "Our Services",
                  description: "Comprehensive recruitment solutions",
                },
                {
                  link: "/why-us",
                  icon: "⭐",
                  title: "Why FutureNorms",
                  description: "Discover what makes us different",
                },
                {
                  link: "/industries",
                  icon: "🏭",
                  title: "Our Expertise",
                  description: "Industries we specialize in",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -12,
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <Link href={item.link} className="block">
                    <motion.div
                      className="p-8 bg-gray-50 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-accent/50 transition-all cursor-pointer h-full"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(212,160,23,0.3)",
                        borderColor: "rgba(212,160,23,0.8)",
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
                          repeatType: "reverse" as const,
                        }}
                        className="text-4xl mb-4"
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Something <span className="text-accent">Exceptional</span> Is Being Crafted.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            We are refining every detail of our digital presence — because the standard we hold for our clients, we hold for ourselves. Precision takes time. Your wait will be worth it.
          </motion.p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px bg-white/30 flex-1 max-w-32" />
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="h-px bg-white/30 flex-1 max-w-32" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border border-white/20 rounded-xl p-8 italic text-xl text-white/80 max-w-4xl mx-auto"
          >
            <p>
              The right hire transforms a business. Our commitment to finding that person — for you — has never been stronger. Our new platform will make that commitment even more visible.
            </p>
          </motion.div>
        </div>
      </section>

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
              className="text-4xl sm:text-5xl font-bold text-gray-90 mb-6"
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
              Partner with FutureNorms for a recruitment process built around
              quality, precision, and long-term success.
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
