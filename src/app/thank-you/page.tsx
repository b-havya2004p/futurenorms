"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-lavender to-f5f0ff">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-3xl shadow-lg border-2 border-primary/20"
          >
            <div className="text-8xl mb-6">✨</div>
            <h1 className="text-4xl font-bold text-primary mb-6">Thank You!</h1>
            <p className="text-xl text-gray-700 mb-8">
              We've received your message and will get back to you soon. You should also be redirected to WhatsApp to continue the conversation.
            </p>
            <Link
              href="/"
              className="inline-block bg-accent text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-md"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
