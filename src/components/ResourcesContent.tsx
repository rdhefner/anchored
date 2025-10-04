"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState("books");

  const resources = [
    {
      stage: "Launch",
      subtitle: "Ages 12-14",
      tagline: "Building curiosity and foundational understanding",
      color: "gold",
      books: [
        {
          title: "The New City Catechism",
          author: "Timothy Keller",
          topic: "Core Beliefs"
        },
        {
          title: "Do Hard Things",
          author: "Alex & Brett Harris",
          topic: "Perseverance/Discipline"
        },
        {
          title: "The Case for Christ: Student Edition",
          author: "Lee Strobel",
          topic: "Apologetics"
        },
        {
          title: "How to Win Friends and Influence People",
          author: "Dale Carnegie",
          topic: "Relationship Basics"
        },
        {
          title: "The Art of Argument",
          author: "Aaron Larsen",
          topic: "Debate/Critical Thinking"
        },
        {
          title: "The Screwtape Letters",
          author: "C.S. Lewis",
          topic: "Christian Living/Emotions"
        }
      ]
    },
    {
      stage: "Navigate",
      subtitle: "Ages 14-16",
      tagline: "Developing personal convictions and decision-making skills",
      color: "navigate",
      books: [
        {
          title: "Crucial Conversations",
          author: "Kerry Patterson",
          topic: "Conflict"
        },
        {
          title: "The Case for Faith",
          author: "Lee Strobel",
          topic: "Apologetics"
        },
        {
          title: "Boundaries",
          author: "Henry Cloud",
          topic: "Relationships/Trust"
        },
        {
          title: "CliftonStrengths for Students",
          author: "Tom Rath",
          topic: "Career/Calling"
        },
        {
          title: "The 7 Habits of Highly Effective People",
          author: "Stephen Covey",
          topic: "Leadership/Goals"
        }
      ]
    },
    {
      stage: "Anchor",
      subtitle: "Ages 16-18+",
      tagline: "Solidifying identity and preparing for leadership",
      color: "anchor",
      books: [
        {
          title: "Mere Christianity",
          author: "C.S. Lewis",
          topic: "Core Beliefs"
        },
        {
          title: "The Five Love Languages",
          author: "Gary Chapman",
          topic: "Romance/Relationships"
        },
        {
          title: "Man's Search for Meaning",
          author: "Viktor Frankl",
          topic: "Solitude/Purpose"
        },
        {
          title: "Start with Why",
          author: "Simon Sinek",
          topic: "Leadership/Career"
        },
        {
          title: "Prayer",
          author: "Timothy Keller",
          topic: "Spiritual Disciplines"
        },
        {
          title: "The Millionaire Next Door",
          author: "Thomas Stanley & William Danko",
          topic: "Money/Stewardship"
        },
        {
          title: "The Cost of Discipleship",
          author: "Dietrich Bonhoeffer",
          topic: "Christian Living"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === "gold") {
      return {
        bg: "bg-gradient-to-br from-gold to-gold-light",
        text: "text-navy-900",
        accent: "text-gold"
      };
    } else if (color === "navigate") {
      return {
        bg: "bg-gradient-to-br from-navigate-text to-navigate-accent",
        text: "text-navy-900",
        accent: "text-navigate-text"
      };
    } else {
      return {
        bg: "bg-anchor-bg",
        text: "text-anchor-text",
        accent: "text-anchor-text"
      };
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="References background"
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
            Recommended Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed"
          >
            Curated books and materials to complement your journey through each stage
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The right resources aren&apos;t just books to read—they&apos;re tools to sharpen your child&apos;s
              mind, strengthen their character, and deepen their faith. The conversations these resources generate
              often matter more than the resources themselves.
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4">
              Resource Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive library includes recommendations across these key categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setActiveCategory("books")}
              className={`text-left rounded-lg p-6 border-l-4 transition-all ${
                activeCategory === "books"
                  ? "bg-navy-900 border-gold"
                  : "bg-gray-50 border-gold hover:bg-gray-100"
              }`}
            >
              <h3 className={`text-xl font-heading font-bold mb-3 ${
                activeCategory === "books" ? "text-white" : "text-navy-900"
              }`}>
                Books
              </h3>
              <p className={activeCategory === "books" ? "text-gray-200" : "text-gray-700"}>
                Carefully curated selections organized by developmental stage and topic
              </p>
            </button>
            <button
              onClick={() => setActiveCategory("assessments")}
              className={`text-left rounded-lg p-6 border-l-4 transition-all ${
                activeCategory === "assessments"
                  ? "bg-navy-900 border-gold"
                  : "bg-gray-50 border-gold hover:bg-gray-100"
              }`}
            >
              <h3 className={`text-xl font-heading font-bold mb-3 ${
                activeCategory === "assessments" ? "text-white" : "text-navy-900"
              }`}>
                Assessments
              </h3>
              <p className={activeCategory === "assessments" ? "text-gray-200" : "text-gray-700"}>
                Personality, strengths, and spiritual gifts evaluations
              </p>
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`text-left rounded-lg p-6 border-l-4 transition-all ${
                activeCategory === "tools"
                  ? "bg-navy-900 border-gold"
                  : "bg-gray-50 border-gold hover:bg-gray-100"
              }`}
            >
              <h3 className={`text-xl font-heading font-bold mb-3 ${
                activeCategory === "tools" ? "text-white" : "text-navy-900"
              }`}>
                Practical Tools
              </h3>
              <p className={activeCategory === "tools" ? "text-gray-200" : "text-gray-700"}>
                Budgeting templates, exercise routines, home maintenance checklists, and meal-planning guides
              </p>
            </button>
            <button
              onClick={() => setActiveCategory("media")}
              className={`text-left rounded-lg p-6 border-l-4 transition-all ${
                activeCategory === "media"
                  ? "bg-navy-900 border-gold"
                  : "bg-gray-50 border-gold hover:bg-gray-100"
              }`}
            >
              <h3 className={`text-xl font-heading font-bold mb-3 ${
                activeCategory === "media" ? "text-white" : "text-navy-900"
              }`}>
                Media Resources
              </h3>
              <p className={activeCategory === "media" ? "text-gray-200" : "text-gray-700"}>
                Curated documentaries, podcasts, and conversation starters
              </p>
            </button>
            <button
              onClick={() => setActiveCategory("platforms")}
              className={`text-left rounded-lg p-6 border-l-4 transition-all md:col-span-2 ${
                activeCategory === "platforms"
                  ? "bg-navy-900 border-gold"
                  : "bg-gray-50 border-gold hover:bg-gray-100"
              }`}
            >
              <h3 className={`text-xl font-heading font-bold mb-3 ${
                activeCategory === "platforms" ? "text-white" : "text-navy-900"
              }`}>
                Learning Platforms
              </h3>
              <p className={activeCategory === "platforms" ? "text-gray-200" : "text-gray-700"}>
                Recommended courses, study tools, and apps
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          {activeCategory === "books" && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Books
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Time-tested works organized by developmental stage to match your teen&apos;s growing capacity
                  for complex ideas and deeper spiritual truths
                </p>
              </div>

              <div className="space-y-16">
                {resources.map((stage, index) => {
            const colors = getColorClasses(stage.color);

            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                {/* Stage Header */}
                <div className={`${colors.bg} p-8`}>
                  <h2 className={`text-4xl font-heading font-bold ${colors.text} mb-2`}>
                    {stage.stage}
                  </h2>
                  <p className={`text-lg font-semibold ${colors.text} mb-2`}>
                    {stage.subtitle}
                  </p>
                  <p className={`text-base ${colors.text} italic`}>
                    {stage.tagline}
                  </p>
                </div>

                {/* Books List */}
                <div className="p-8">
                  <div className="space-y-4">
                    {stage.books.map((book, bookIndex) => (
                      <motion.div
                        key={bookIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: bookIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-gray-200 pl-4 py-2 hover:border-navy-900 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-navy-900">
                          {book.title}
                        </h3>
                        <p className="text-gray-700">
                          {book.author}
                        </p>
                        <p className={`text-sm ${colors.accent} font-semibold mt-1`}>
                          {book.topic}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
              </div>
            </>
          )}

          {activeCategory !== "books" && (
            <div className="text-center py-20">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Coming Soon
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We&apos;re working on expanding our resource library. Check back soon for{" "}
                  {activeCategory === "assessments" && "personality assessments, strengths evaluations, and spiritual gifts resources"}
                  {activeCategory === "tools" && "budgeting templates, exercise routines, home maintenance checklists, and meal-planning guides"}
                  {activeCategory === "media" && "curated documentaries, podcasts, and conversation starters"}
                  {activeCategory === "platforms" && "recommended courses, study tools, and learning apps"}
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
