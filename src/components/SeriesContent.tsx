"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import BookSeriesShowcase from "./BookSeriesShowcase";
import CTASection from "./CTASection";

export default function SeriesContent() {
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";

  const topicsByFocusArea = [
    {
      area: "Foundations",
      topics: [
        "Core Beliefs of the Christian Faith",
        "Christian Living",
        "Emotions",
        "Stress",
        "Discipline",
        "Patience",
        "Health Basics",
        "Exercise",
        "Nutrition",
        "Self-Reflection",
        "Rest",
        "Leisure"
      ]
    },
    {
      area: "Relationships",
      topics: [
        "Relationship Basics",
        "Trust",
        "Emotional Intelligence and Empathy",
        "Conflict",
        "Peer Pressure",
        "Men and Women",
        "Romance",
        "Solitude"
      ]
    },
    {
      area: "Life Skills",
      topics: [
        "Money Basics",
        "Budgeting",
        "Saving and Investing",
        "Giving",
        "Food",
        "Cooking",
        "Home Basics",
        "Vehicle Maintenance",
        "Resourceful Living",
        "Change",
        "Learning",
        "Safety"
      ]
    },
    {
      area: "Leadership",
      topics: [
        "Leadership Basics",
        "Goals",
        "Discernment and Wisdom",
        "Research",
        "Decision Making",
        "Perseverance",
        "Time Management",
        "Career"
      ]
    },
    {
      area: "Society",
      topics: [
        "Culture",
        "Global Issues",
        "Apologetics",
        "Debate",
        "Stewardship",
        "Government and Politics"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Series background"
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
            The Anchored Series
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Three books covering over 40 essential topics your teen needs to navigate
            faith, relationships, and life with confidence.
          </motion.p>
        </div>
      </section>

      {/* 3-Book Series Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
              Meet the Complete Series
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each book is designed for a specific developmental stage, with content
              that grows alongside your teen.
            </p>
          </div>

          <BookSeriesShowcase enableLinks={true} />
        </div>
      </section>

      {/* Individual Book Descriptions */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Launch Book */}
          <motion.div
            id="launch-book"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gold/20 scroll-mt-20"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-gold to-gold-light p-8 flex items-center justify-center border-r border-gold/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-navy-900 mb-2">Launch</h3>
                  <p className="text-navy-900 text-lg font-semibold">Ages 12-14</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Building the Foundation
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Launch stage focuses on establishing core beliefs and opening up
                  communication. It&apos;s about creating a safe space for questions and
                  starting conversations that will deepen over time.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Perfect for early teens who are beginning to form their own beliefs
                  and need guidance navigating new social dynamics, emotions, and faith questions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigate Book */}
          <motion.div
            id="navigate-book"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-900 rounded-xl shadow-lg overflow-hidden border border-gold/20 scroll-mt-20"
          >
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3 bg-gradient-to-br from-navigate-text to-navigate-accent p-8 flex items-center justify-center border-l border-gold/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-navy-900 mb-2">Navigate</h3>
                  <p className="text-navy-900 text-lg font-semibold">Ages 14-16</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Going Deeper
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Navigate stage takes conversations deeper, addressing more complex
                  questions and real-world challenges. It&apos;s about equipping teens to think
                  critically and apply biblical wisdom to everyday situations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Ideal for mid-teens who are facing increased independence, peer pressure,
                  dating questions, and need tools to navigate their expanding world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Anchor Book */}
          <motion.div
            id="anchor-book"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gold/20 scroll-mt-20"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-anchor-bg p-8 flex items-center justify-center border-r border-gold/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-anchor-text mb-2">Anchor</h3>
                  <p className="text-white text-lg font-semibold">Ages 16-18+</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Ready for Adulthood
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Anchor stage prepares teens for life beyond home. It addresses
                  college, career, relationships, and how to maintain faith in a
                  rapidly changing world with confidence and conviction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Essential for older teens preparing to leave home, face new freedoms,
                  and need to solidify their beliefs before stepping into adulthood.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics by Focus Area */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              40+ Topics Organized by Focus Area
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every topic appears in all three books, but the content evolves to match
              your teen&apos;s developmental stage and real-world needs.
            </p>
          </div>

          <div className="space-y-4">
            {topicsByFocusArea.map((focusArea) => (
              <Disclosure key={focusArea.area}>
                {({ open }) => (
                  <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 bg-navy-900 hover:bg-navy-800 transition-colors">
                      <span className="text-xl font-heading font-bold text-white">
                        {focusArea.area}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gold font-semibold">
                          {focusArea.topics.length} topics
                        </span>
                        <FiChevronDown
                          className={`${
                            open ? "transform rotate-180" : ""
                          } transition-transform text-gold text-xl`}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 py-4 bg-white">
                      <div className="grid md:grid-cols-2 gap-3">
                        {focusArea.topics.map((topic) => (
                          <div
                            key={topic}
                            className="flex items-center gap-2 text-navy-900"
                          >
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      {/* Content Structure Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Every Topic Includes
          </h2>
          <div className="grid md:grid-cols-5 gap-4 mt-8">
            {["Explore", "Discuss", "Real Talk", "Apply", "Reflect"].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-lg p-4"
              >
                <div className="text-gold text-3xl font-bold mb-2">{index + 1}</div>
                <h3 className="text-lg font-heading font-bold">{step}</h3>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-300 mt-8 leading-relaxed">
            Each section is designed to make discipleship conversations natural,
            practical, and applicable to real life.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <CTASection amazonLink={amazonLink} />

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-4">
              Not sure which book to start with?
            </p>
            <p className="text-gold font-semibold text-xl">
              Get the complete series and have all three stages ready as your teen grows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
