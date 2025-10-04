"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import FocusAreaCard from "./FocusAreaCard";
import TopicPreview from "./TopicPreview";
import ScriptureCallout from "./ScriptureCallout";
import CTASection from "./CTASection";
import { FaBook, FaUsers, FaTools, FaStar, FaGlobe } from "react-icons/fa";

export default function AboutContent() {
  const amazonLink = process.env.NEXT_PUBLIC_AMAZON_SERIES_LINK || "https://amazon.com";
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const focusAreas = [
    {
      icon: FaBook,
      title: "Foundations",
      description: "Build core beliefs about God, faith, and develop healthy habits for emotional and physical wellbeing."
    },
    {
      icon: FaUsers,
      title: "Relationships",
      description: "Navigate trust, conflict, empathy, and romance with wisdom and healthy boundaries."
    },
    {
      icon: FaTools,
      title: "Life Skills",
      description: "Master practical abilities for managing money, home, food, and resourceful living."
    },
    {
      icon: FaStar,
      title: "Leadership",
      description: "Cultivate discernment, goals, decision-making, and time management for lasting impact."
    },
    {
      icon: FaGlobe,
      title: "Society",
      description: "Engage wisely with culture, global issues, apologetics, and civic responsibility."
    }
  ];

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

  const contentStructure = [
    { step: "Explore", description: "Discover the biblical foundation and why this topic matters" },
    { step: "Discuss", description: "Conversation starters and questions to go deeper" },
    { step: "Real Talk", description: "Address real-world scenarios and tough questions" },
    { step: "Apply", description: "Practical ways to live it out together" },
    { step: "Reflect", description: "Journal prompts and prayer points for continued growth" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="How It Works background"
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
            Built for Real Parents,<br />Real Conversations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Anchored gives you a simple, flexible framework to intentionally
            disciple your teen—no matter where you&apos;re starting from.
          </motion.p>
        </div>
      </section>

      {/* The Anchored Framework */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              The Anchored Framework
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Three books. Three developmental stages. One comprehensive approach
              that meets your teen exactly where they are.
            </p>
          </div>

          <div className="space-y-12">
            {/* Launch Book */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-gold to-gold-light p-8 flex items-center justify-center border-r border-gold/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-navy-900 mb-2">Launch</h3>
                  <p className="text-navy-900 text-lg font-semibold">Ages 12-14</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8 bg-navy-900">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Building the Foundation
                </h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The Launch stage focuses on establishing core beliefs and opening up
                  communication. It&apos;s about creating a safe space for questions and
                  starting conversations that will deepen over time.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Perfect for early teens who are beginning to form their own beliefs
                  and need guidance navigating new social dynamics, emotions, and faith questions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigate Book */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200"
          >
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3 bg-gradient-to-br from-navigate-text to-navigate-accent p-8 flex items-center justify-center border-l border-navigate-text/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-navy-900 mb-2">Navigate</h3>
                  <p className="text-navy-900 text-lg font-semibold">Ages 14-16</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8 bg-navy-800">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Going Deeper
                </h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The Navigate stage takes conversations deeper, addressing more complex
                  questions and real-world challenges. It&apos;s about equipping teens to think
                  critically and apply biblical wisdom to everyday situations.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Ideal for mid-teens who are facing increased independence, peer pressure,
                  dating questions, and need tools to navigate their expanding world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Anchor Book */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200"
          >
            <div className="md:flex">
              <div className="md:w-1/3 bg-anchor-bg p-8 flex items-center justify-center border-r border-anchor-bg/20">
                <div className="text-center">
                  <h3 className="text-4xl font-heading font-bold text-anchor-text mb-2">Anchor</h3>
                  <p className="text-white text-lg font-semibold">Ages 16-18+</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8 bg-navy-900">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Ready for Adulthood
                </h4>
                <p className="text-gray-200 leading-relaxed mb-4">
                  The Anchor stage prepares teens for life beyond home. It addresses
                  college, career, relationships, and how to maintain faith in a
                  rapidly changing world with confidence and conviction.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Essential for older teens preparing to leave home, face new freedoms,
                  and need to solidify their beliefs before stepping into adulthood.
                </p>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Topics by Focus Area */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              48 Topics Organized by Focus Area
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

      {/* 5 Focus Areas */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              5 Focus Areas for Well-Rounded Growth
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              These five categories provide a comprehensive framework for discipling your teen,
              addressing the key areas of life and faith.
            </p>
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 items-stretch">
                {focusAreas.map((area, index) => (
                  <div key={area.title} className="flex-[0_0_85%] min-w-0 flex">
                    <div className="w-full">
                      <FocusAreaCard
                        icon={area.icon}
                        title={area.title}
                        description={area.description}
                        index={index}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {focusAreas.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-white/40"></div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <FocusAreaCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Structure */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Every Topic Follows a Clear Structure
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Each conversation guide walks you through five steps designed to
              make discipleship natural, engaging, and practical.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch">
            {contentStructure.map((item, index) => (
              <React.Fragment key={item.step}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1"
                >
                  <div className="bg-navy-900 text-white p-6 rounded-lg text-center h-full flex flex-col">
                    <div className="text-gold text-4xl font-bold mb-2">{index + 1}</div>
                    <h3 className="text-xl font-heading font-bold mb-3">{item.step}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
                {index < contentStructure.length - 1 && (
                  <div className="hidden md:flex items-center justify-center px-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 4L13 10L7 16" stroke="#c26d2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Content That Grows With Your Teen */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Content That Grows With Your Teen
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how a single topic—like emotions—evolves across all three stages
              to match your teen&apos;s maturity and real-world challenges.
            </p>
          </div>

          <TopicPreview />
        </div>
      </section>

      {/* Flexible Implementation */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Make It Work for Your Family
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              There&apos;s no &ldquo;right way&rdquo; to use Anchored. Choose the approach that fits your schedule,
              your teen&apos;s personality, and your family&apos;s rhythm.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gold text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading font-bold">Approach</th>
                  <th className="px-6 py-4 text-left font-heading font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Weekly Rhythm</td>
                  <td className="px-6 py-4 text-gray-700">Families who want consistent, structured time together</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">As-Needed</td>
                  <td className="px-6 py-4 text-gray-700">When a specific issue or question comes up in real life</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Car Conversations</td>
                  <td className="px-6 py-4 text-gray-700">Busy families who do life on the go</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Deep Dives</td>
                  <td className="px-6 py-4 text-gray-700">Taking your time to thoroughly explore a single topic</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Mix & Match</td>
                  <td className="px-6 py-4 text-gray-700">Combining approaches based on the season you&apos;re in</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Why This Matters Now
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left">
            <p>
              The teen years are critical. Your child is forming beliefs about God, identity,
              relationships, and the world that will shape the rest of their life.
            </p>
            <p>
              But between busy schedules, cultural pressures, and the digital world, it&apos;s easy
              to let these years slip by without the intentional conversations they need.
            </p>
            <p className="font-semibold text-gold text-xl">
              Anchored helps you make the most of the time you have—starting today.
            </p>
          </div>
        </div>
      </section>

      {/* Scripture Foundation */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              The Biblical Foundation
            </h2>
          </div>
          <ScriptureCallout />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <CTASection amazonLink={amazonLink} />
        </div>
      </section>
    </>
  );
}
