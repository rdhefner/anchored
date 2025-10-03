"use client";
import useEmblaCarousel from "embla-carousel-react";
import Hero from "../components/Hero";
import BookSeriesShowcase from "../components/BookSeriesShowcase";
import FocusAreaCard from "../components/FocusAreaCard";
import StageTimeline from "../components/StageTimeline";
import TestimonialCard from "../components/TestimonialCard";
import ScriptureCallout from "../components/ScriptureCallout";
import CTASection from "../components/CTASection";
import EmailSignup from "../components/EmailSignup";
import { FaBook, FaUsers, FaTools, FaStar, FaGlobe } from "react-icons/fa";

export default function Home() {
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

  const testimonials = [
    {
      quote: "This is exactly what I needed as a parent. The topics are relevant, the approach is flexible, and it's helping me have conversations I never thought I could have.",
      author: "Parent of a 14-year-old",
      role: "Launch Series"
    },
    {
      quote: "Anchored gave me a roadmap for discipling my teens. I'm not perfect at it, but I finally feel equipped and confident to start.",
      author: "Parent of three",
      role: "Complete Series"
    },
    {
      quote: "The phased approach is brilliant. It grows with my child and meets them exactly where they are developmentally.",
      author: "Mom of two teens",
      role: "Navigate Series"
    }
  ];

  return (
    <>
      <Hero />

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Parenting Teens Feels Overwhelming
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Between school, sports, friends, and screens, it&apos;s hard to find time for meaningful conversations.
            You want to disciple your teen, but you&apos;re not sure where to start or what to say.
          </p>
          <p className="text-xl font-heading text-gold font-semibold mb-4">
            What if there was a simple framework to guide you?
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-bold text-gold">Anchored</span> gives you over 40 essential topics,
            organized by age and life stage, so you can have the conversations that matter most—
            without feeling like you need a theology degree or parenting manual.
          </p>
        </div>
      </section>

      {/* 3-Book Series Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
              The Complete Anchored Series
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Three books. Three developmental stages. One comprehensive framework
              that grows with your teen from ages 12 to 18+.
            </p>
          </div>

          <BookSeriesShowcase />

          <div className="text-center mt-12">
            <a
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-gold text-navy-900 rounded-full font-bold text-xl shadow-2xl hover:bg-gold-light transition-all duration-300 hover:scale-105"
            >
              Get All 3 Books on Amazon
            </a>
          </div>
        </div>
      </section>

      {/* 3 Stages Timeline */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              A Phased Approach That Grows With Your Teen
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Each stage builds on the last, meeting your teen&apos;s developmental needs
              and preparing them for the next chapter of life.
            </p>
          </div>

          <StageTimeline />
        </div>
      </section>

      {/* 5 Focus Areas */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              5 Essential Focus Areas
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Every topic in Anchored falls into one of these categories,
              giving you a complete discipleship framework.
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

      {/* Scripture Foundation */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Rooted in Scripture
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Anchored is built on the timeless command to intentionally pass faith
              to the next generation through everyday conversations.
            </p>
          </div>

          <ScriptureCallout />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real stories from parents who are using Anchored to disciple their teens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <CTASection amazonLink={amazonLink} />
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <EmailSignup />
        </div>
      </section>
    </>
  );
}
