"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutAuthorContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Author Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-gold shadow-2xl overflow-hidden relative">
                <Image
                  src="/ryan-hefner.jpg"
                  alt="Ryan Hefner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Ryan Hefner
            </h1>
            <p className="text-xl text-gold font-semibold mb-6">
              Creator of Anchored
            </p>

            {/* Brief Bio */}
            <div className="max-w-2xl mx-auto space-y-4 text-gray-200 leading-relaxed">
              <p>
                Ryan is a software architect, father, and follower of Christ who believes
                that intentional parenting is one of life&apos;s most important callings.
              </p>
              <p>
                Driven by a desire to equip his own children for adulthood, Ryan spent two years developing
                Anchored—a comprehensive discipleship framework that integrates faith naturally into both
                practical and spiritual areas of life.
              </p>
              <p className="text-gold font-semibold">
                When he&apos;s not working or spending time with family, you&apos;ll find him playing drums,
                managing a nonprofit soccer league, or tinkering with creative projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-8 text-center">
            The Story Behind Anchored
          </h2>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              A few years ago, I had a sobering realization: in less than 10 years, my kids would be
              stepping into adulthood and forging their own path in the world. I knew there was so much
              I wanted to teach them—but where was I supposed to start?
            </p>

            <p>
              Like many parents, I began searching for resources that could help. What I discovered was
              that while there were excellent books on individual topics, there wasn&apos;t a single,
              comprehensive guide that aligned with my worldview and integrated faith naturally into both
              practical and spiritual areas of life.
            </p>

            <p>
              As a software architect, I did what I knew best and went into problem-solving mode. I opened
              a spreadsheet and began mapping out the essential topics I wanted to cover with my kids before
              they launched into adulthood. Since our family was homeschooling with a classical approach, I organized
              the list into phases—progressing in depth as they grew older. By the time I finished, I realized
              I had outlined a resource that simply didn&apos;t exist. So, I set out to create it.
            </p>

            <p>
              Two years, countless early mornings, three complete rewrites, and a mountain of editing later,
              I&apos;m ready to share this resource with you.
            </p>

            <div className="bg-navy-900 rounded-xl p-8 my-8">
              <p className="text-gray-200 leading-relaxed italic">
                I&apos;m not an author or an expert on all of these topics. I&apos;m a father, a Christian,
                and someone deeply committed to raising children who are prepared to live with integrity,
                lead their families with consistency, and serve their communities with humility.
              </p>
            </div>

            <p>
              While this resource is written from a Christian worldview, I believe the wisdom within can
              benefit any family striving to raise children of character and purpose.
            </p>

            <p>
              Is this a proven program? No. It&apos;s simply the guide I am using with my own children,
              built on biblical wisdom and timeless principles. I can&apos;t guarantee specific results,
              but I do believe wholeheartedly that the investment of intentional time with your children
              will leave a lasting impact on their lives—and yours.
            </p>

            <p className="text-navy-900 font-semibold text-lg">
              I pray that this resource provides you with a blueprint for navigating the teenage years
              and equipping your children for the path ahead. May the Lord bless you on this journey!
            </p>

            <p className="text-navy-900 font-heading text-xl mt-8">
              Yours,<br />
              Ryan Hefner
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 text-lg mb-8">
            Join families who are building an anchored foundation with their teens.
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
