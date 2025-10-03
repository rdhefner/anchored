"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface BookSeriesShowcaseProps {
  enableLinks?: boolean;
}

export default function BookSeriesShowcase({ enableLinks = false }: BookSeriesShowcaseProps) {
  const books = [
    {
      title: "Launch",
      subtitle: "Ages 12-14",
      image: "/book-cover-launch.png",
      description: "Building foundational faith and character for early teens",
      anchor: "launch-book"
    },
    {
      title: "Navigate",
      subtitle: "Ages 14-16",
      image: "/book-cover-navigate.png",
      description: "Deeper conversations and growing independence",
      anchor: "navigate-book"
    },
    {
      title: "Anchor",
      subtitle: "Ages 16-18+",
      image: "/book-cover-anchor.png",
      description: "Preparing for life beyond home with lasting faith",
      anchor: "anchor-book"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {books.map((book, index) => (
        <motion.div
          key={book.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {enableLinks ? (
            <a href={`#${book.anchor}`} className="relative w-48 h-72 mb-4 shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src={book.image}
                alt={`${book.title} book cover`}
                fill
                className="object-cover"
              />
            </a>
          ) : (
            <div className="relative w-48 h-72 mb-4 shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src={book.image}
                alt={`${book.title} book cover`}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h3 className="text-2xl font-heading font-bold text-navy-900 mb-1">
            {book.title}
          </h3>
          <p className="text-sm font-semibold text-gold mb-2">{book.subtitle}</p>
          <p className="text-gray-700 text-sm">{book.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
