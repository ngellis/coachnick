'use client'

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div>
      {/* Main Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="responsive-container">
          <div className="grid md:grid-cols-[20rem_1fr] gap-12 items-stretch">
            {/* Left Column - Myth Box (Desktop Only, Sticky) */}
            <div className="hidden md:block">
              <div className="sticky top-24">
                <div className="bg-[#E77500] rounded-sm min-h-[32rem] p-10 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="max-w-[16rem]">
                    <h2
                      className="text-xl font-bold text-white mb-6 tracking-tight uppercase"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      MYTH: &ldquo;MORE IS MORE.&rdquo;
                    </h2>
                    <p className="text-base text-white leading-relaxed">
                      Many test companies encourage taking a test every weekend or every other weekend. I have seen, from experience, that this is misguided. Unless targeted adjustments are made in between practice tests, students will reinforce error patterns, which can hinder growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div>
              {/* My Approach Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2
                  className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--ivy-green)'
                  }}
                >
                  My Approach
                </h2>
                <div className="w-16 h-1 bg-[#E77500] mb-8" />
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: 'var(--charcoal)' }}
                >
                  Rather than emphasize a specific target score, my focus is on growth: helping students understand mistakes, make adjustments, and build skills. While my training is designed to expedite SAT/ACT mastery, I see my coaching as a broader investment. The close-reading skills, grammar fundamentals, conceptual math training, and stress-management techniques I teach should have broad academic applications.
                </p>
              </motion.div>

              {/* Mobile Myth Banner */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:hidden mb-16"
              >
                <div className="bg-[#E77500] p-8 rounded-sm">
                  <h2
                    className="text-lg font-bold text-white mb-4 tracking-tight text-center uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    MYTH: &ldquo;MORE IS MORE.&rdquo;
                  </h2>
                  <p className="text-sm text-white leading-relaxed text-center">
                    Many test companies encourage taking a test every weekend or every other weekend. I have seen, from experience, that this is misguided. Unless targeted adjustments are made in between practice tests, students will reinforce error patterns, which can hinder growth.
                  </p>
                </div>
              </motion.div>

              {/* What's Included Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-20 mb-8"
              >
                <h2
                  className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--ivy-green)'
                  }}
                >
                  What&apos;s included?
                </h2>
                <div className="w-16 h-1 bg-[#E77500] mb-8" />
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: 'var(--charcoal)' }}
                >
                  After each lesson, I provide a detailed lesson summary and list upcoming homework, so that progress and assignments are transparent. In between lessons, I provide complimentary remote support for any questions or concerns.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
