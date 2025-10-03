"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Contact background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 to-navy-800/80 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Have questions or feedback? Want to discuss bulk orders?
            We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
                If you'd like to receive updates about Anchored, check the box below.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="bg-navy-800 p-8 rounded-xl border border-gold/20">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                How Can We Help?
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <span className="text-gold text-xl">📚</span>
                    Bulk Orders
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Planning to use Anchored with a church group, youth ministry, or
                    homeschool co-op? Let us know and we can help coordinate bulk purchases.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <span className="text-gold text-xl">💬</span>
                    General Questions
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Have questions about how to use Anchored, which book to start with,
                    or want to share your story? We'd love to hear from you!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <span className="text-gold text-xl">📝</span>
                    Feedback & Testimonials
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Using Anchored with your teen? We'd love to hear how it's going and
                    how we can continue to improve and serve families like yours.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <strong className="text-white">Response Time:</strong> We typically
                  respond within 1-2 business days. Thank you for your patience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Don't wait for the perfect moment. Start building an anchored foundation today.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-navy-900 rounded-full font-bold text-lg shadow-2xl hover:bg-gold-light transition-all duration-300 hover:scale-105"
          >
            Get the Complete Series
          </a>
        </div>
      </section>
    </>
  );
}
