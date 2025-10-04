"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";

  return (
    <header className="w-full bg-navy-900/95 backdrop-blur sticky top-0 z-40 shadow-md border-b border-gold">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-4xl font-heading font-bold text-gold hover:text-gold-light transition-colors">
          Anchored
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <Link href="/" className="text-white hover:text-gold transition-colors">Home</Link>
          <Link href="/about" className="text-white hover:text-gold transition-colors">How It Works</Link>
          <Link href="/resources" className="text-white hover:text-gold transition-colors">Resources</Link>
          <Link href="/contact" className="text-white hover:text-gold transition-colors">Contact</Link>
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-block px-6 py-2 rounded-full bg-gold text-white font-bold hover:bg-gold-light transition-all duration-300 hover:scale-105 shadow-md"
          >
            Get the Series
          </a>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900/98 shadow-lg border-t border-gold">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/resources"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gold transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gold text-white font-bold text-center hover:bg-gold-light transition-colors shadow-md mt-2"
            >
              Get the Series
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
