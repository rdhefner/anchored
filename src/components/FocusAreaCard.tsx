"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FocusAreaCardProps {
  icon: IconType;
  title: string;
  description: string;
  index: number;
}

export default function FocusAreaCard({ icon: Icon, title, description, index }: FocusAreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-gold h-full flex flex-col"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-navy-900 rounded-full mb-4 mx-auto">
        <Icon className="text-gold text-3xl" />
      </div>
      <h3 className="text-xl font-heading font-bold text-navy-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-700 text-center text-sm leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
}
