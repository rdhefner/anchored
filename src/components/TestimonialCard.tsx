"use client";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  index: number;
}

export default function TestimonialCard({ quote, author, role, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-gold"
    >
      <div className="text-gold text-4xl mb-2">"</div>
      <p className="text-gray-700 italic mb-4 leading-relaxed">
        {quote}
      </p>
      <div className="border-t pt-4">
        <p className="font-semibold text-navy-900">{author}</p>
        {role && <p className="text-sm text-gray-600">{role}</p>}
      </div>
    </motion.div>
  );
}
