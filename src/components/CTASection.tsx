"use client";
import { motion } from "framer-motion";

interface CTASectionProps {
  amazonLink?: string;
}

export default function CTASection({ amazonLink = "https://amazon.com" }: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-navy-900 to-navy-800 text-white py-16 px-6 rounded-2xl shadow-2xl"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">
          You don't have to be a perfect parent to disciple your teen.
        </h2>
        <p className="text-2xl md:text-3xl font-heading text-gold mb-8">
          You just have to start.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy-900 rounded-full font-bold text-lg shadow-lg hover:bg-gold-light transition-all duration-300 hover:scale-105"
          >
            Get the Complete Series
          </a>
          <a
            href="#email-signup"
            className="inline-block px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300"
          >
            Stay Updated
          </a>
        </div>
      </div>
    </motion.div>
  );
}
