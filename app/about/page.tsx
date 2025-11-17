'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { HiAcademicCap, HiLightBulb, HiTrendingUp } from 'react-icons/hi'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#2D5016] to-[#3D6020]">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
              About Coach Nick
            </h1>
            <div className="w-24 h-1 bg-[#E77500] mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Princeton-educated, results-driven, and dedicated to unlocking each student&apos;s full potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Story Section */}
          <AnimatedSection>
            <div className="bg-white p-10 md:p-16 rounded-sm shadow-sm mb-16 border border-[#F5F1E8]">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-8 tracking-tight">
                The Princeton Advantage
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
                  As a graduate of Princeton University, I understand firsthand what it takes to gain admission
                  to the nation&apos;s most competitive institutions. My Ivy League experience informs every aspect
                  of my tutoring approach—from test-taking strategies to the mindset required for sustained
                  academic excellence.
                </p>
                <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
                  I don&apos;t believe in one-size-fits-all test prep. Every student has unique strengths,
                  learning styles, and goals. My white-glove approach means working closely with a limited
                  number of clients each year, ensuring each receives the personalized attention they deserve.
                </p>
                <p className="text-lg text-[#2C2C2C] leading-relaxed">
                  This isn&apos;t just about raising scores—it&apos;s about building confidence, developing
                  critical thinking skills, and preparing students for the rigors of university-level academics.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Approach Section */}
          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-12 text-center tracking-tight">
                My Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: HiAcademicCap,
                    title: 'Diagnostic Precision',
                    description: 'We begin with comprehensive diagnostic testing to identify specific areas for improvement and create a customized roadmap.',
                  },
                  {
                    icon: HiLightBulb,
                    title: 'Strategic Mastery',
                    description: 'I teach advanced test-taking strategies that go beyond content review—techniques that maximize scores through strategic thinking.',
                  },
                  {
                    icon: HiTrendingUp,
                    title: 'Continuous Growth',
                    description: 'Regular practice tests, detailed feedback sessions, and adaptive strategies ensure consistent improvement leading up to test day.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F1E8] p-8 rounded-sm text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2D5016] rounded-full mb-6">
                      <item.icon className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#2D5016] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-[#2C2C2C] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Philosophy Quote */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#2D5016] to-[#3D6020] p-12 md:p-16 rounded-sm text-center">
              <blockquote className="text-2xl md:text-4xl font-serif text-white italic leading-relaxed mb-6">
                &ldquo;Excellence is not a destination—it&apos;s a standard we uphold in every session.&rdquo;
              </blockquote>
              <p className="text-white/80 text-lg tracking-wide">— Coach Nick</p>
            </div>
          </AnimatedSection>

          {/* Credentials */}
          <AnimatedSection>
            <div className="mt-20 bg-white p-10 md:p-16 rounded-sm shadow-sm border border-[#F5F1E8]">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2D5016] mb-8 text-center tracking-tight">
                Credentials & Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    label: 'Education',
                    value: 'Princeton University',
                  },
                  {
                    label: 'Specialization',
                    value: 'SAT/ACT Test Preparation',
                  },
                  {
                    label: 'Approach',
                    value: 'White-Glove Concierge Service',
                  },
                  {
                    label: 'Focus',
                    value: 'Top University Admissions',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-[#FAFAF8] rounded-sm"
                  >
                    <div className="text-sm font-medium text-[#8B7E74] tracking-wider uppercase mb-2">
                      {item.label}
                    </div>
                    <div className="text-xl font-serif font-semibold text-[#2D5016]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection>
            <div className="mt-20 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C2C2C] mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-[#8B7E74] mb-10 max-w-2xl mx-auto">
                Limited availability. Schedule a consultation to discuss your goals and create a personalized plan.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#E77500] text-white font-semibold text-lg tracking-wide rounded-sm hover:bg-[#C66300] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
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
