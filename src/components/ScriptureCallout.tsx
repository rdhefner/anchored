"use client";
import { motion } from "framer-motion";

export default function ScriptureCallout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white border-l-4 border-gold py-8 px-6 rounded-r-lg shadow-md"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-heading text-navy-900 italic leading-relaxed mb-4">
          &ldquo;And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.&rdquo;
        </p>
        <p className="text-right text-gold font-semibold">
          — Deuteronomy 6:6-7
        </p>
      </div>
    </motion.div>
  );
}
