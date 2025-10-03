"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/60 to-navy-800/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-heading font-bold text-gold leading-tight mb-6 drop-shadow-2xl"
        >
          Anchored
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 font-heading mb-8"
        >
          <span className="italic">What Your Kids Need To Know</span>—And How To Talk About It
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md border border-gold/30 rounded-2xl p-8 max-w-3xl mx-auto mb-10"
        >
          <p className="text-2xl md:text-4xl font-heading font-bold text-white leading-tight mb-4">
            You don't have to be a perfect parent to disciple your teen.
          </p>
          <p className="text-3xl md:text-5xl font-heading font-bold text-gold">
            You just have to start.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gold text-navy-900 font-bold text-lg shadow-2xl hover:bg-gold-light transition-all duration-300 hover:scale-110"
          >
            Get the Complete Series
          </a>
          <Link
            href="/about"
            className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
          >
            How It Works
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-white/70 text-sm"
        >
          <p>A 3-book parenting series for intentional discipleship</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
