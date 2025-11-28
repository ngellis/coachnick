'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { HiAcademicCap, HiLightBulb, HiTrendingUp } from 'react-icons/hi'

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-40 md:pt-48 md:pb-56 bg-gradient-to-br from-[#2D5016] to-[#3D6020]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left mt-4"
          >
            <div className="w-24 h-1 bg-[#2D5016] mb-8" />
            <p className="text-2xl md:text-3xl text-[#2D5016] max-w-3xl leading-relaxed font-light">
              Limited spots available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="grid md:grid-cols-[26rem_1fr] gap-8 items-start">
            {/* Left Column - Myth Circle */}
            <div className="hidden md:block">
              <div className="sticky top-24">
                <div className="bg-[#E77500] rounded-full w-[26rem] h-[26rem] p-16 flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="max-w-[19rem]">
                    <h2 className="text-2xl font-serif font-bold text-white mb-4 tracking-tight uppercase whitespace-nowrap">
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
              {/* The Coach Nick Approach */}
              <AnimatedSection>
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-8 tracking-tight">
                    My Approach
                  </h2>
                  <p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                    Rather than emphasize a specific target score, my focus is on growth: helping students understand mistakes, make adjustments, and build skills. While my training is designed to expedite SAT/ACT mastery, I see my coaching as a broader investment. The close-reading skills, grammar fundamentals, conceptual math training, and stress-management techniques I teach should have broad academic applications.
                  </p>
                </div>
              </AnimatedSection>

              {/* Mobile Myth Banner */}
              <AnimatedSection>
                <div className="md:hidden mt-16">
                  <div className="bg-[#E77500] p-6 rounded-full">
                    <h2 className="text-lg font-serif font-bold text-white mb-2 tracking-tight text-center">
                      Myth: &ldquo;more is more.&rdquo;
                    </h2>
                    <p className="text-sm text-white leading-relaxed text-center">
                      Many test companies encourage taking a test every weekend or every other weekend. I have seen, from experience, that this is misguided. Unless targeted adjustments are made in between practice tests, students will reinforce error patterns, which can hinder growth.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* What's Included */}
              <AnimatedSection>
                <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-8 tracking-tight">
                    What&apos;s included?
                  </h2>
                  <p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                    After each lesson, I provide a detailed lesson summary and list upcoming homework, so that progress and assignments are transparent. In between lessons, I provide complimentary remote support for any questions or concerns.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Limited Spots */}
          <AnimatedSection>
            <div className="mt-40">
              <div className="bg-white border-t-4 border-b-4 border-[#2D5016] px-12 py-6">
                <p className="text-2xl md:text-3xl text-[#E77500] font-semibold text-center">
                  Limited spots available
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/70 text-sm tracking-wide">
            © {new Date().getFullYear()} Coach Nick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
