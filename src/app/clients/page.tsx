"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Clients() {
  const stats = [
    { number: "200+", label: "Companies Served" },
    { number: "1000+", label: "Positions Closed" },
    { number: "98%", label: "Success Rate" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote: "FutureNorms transformed our hiring process. They found us exceptional talent in record time.",
      author: "HR Director, Tech Company",
    },
    {
      quote: "The quality of candidates and professionalism of the team exceeded our expectations.",
      author: "CEO, Manufacturing Firm",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Our <span className="text-primary">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 tagline">Trusted by leading organizations across industries</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-primary text-white mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-accent/50 hover:shadow-xl transition-all"
              >
                <div className="text-5xl text-accent mb-4">"</div>
                <p className="text-xl text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <p className="font-semibold text-primary">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-secondary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Happy Clients?</h2>
          <Link
            href="/contact"
            className="inline-block bg-accent text-dark px-10 py-5 rounded-full font-semibold text-xl hover:bg-orange-400 transition-colors"
          >
            Submit Your Hiring Requirement
          </Link>
        </div>
      </section>
    </div>
  );
}
