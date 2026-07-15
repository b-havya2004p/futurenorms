"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const shouldScroll = window.scrollY > 50;
        setScrolled((prev) =>
          prev !== shouldScroll ? shouldScroll : prev
        );
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-xl" 
          : "bg-white shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-accent transform -skew-x-6 scale-110"></div>
              <Image
                src="/logo.png"
                alt="FutureNorms Logo"
                width={48}
                height={48}
                className="relative rounded-xl shadow-lg"
                priority
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold text-gray-800">FutureNorms</span>
              <p className="text-xs sm:text-sm text-primary tagline">Your Hiring Problem. Our Precision Solution.</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Industries
            </Link>
            <Link
              href="/why-us"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Why Us
            </Link>
            <Link
              href="/process"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
            >
              Process
            </Link>
            <Link
              href="/contact"
              className="bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/industries"
              className="block px-4 py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/why-us"
              className="block px-4 py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/process"
              className="block px-4 py-3 text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="/contact"
              className="block mx-4 bg-accent text-gray-900 px-6 py-3 rounded-full font-semibold text-center shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
