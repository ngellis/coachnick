'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiAcademicCap, HiLightBulb, HiTrendingUp } from 'react-icons/hi'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-to-br from-[#2D5016] to-[#3D6020]">
        <div className="responsive-container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              About
            </h1>
            <div className="w-24 h-1 bg-[#E77500] mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Princeton-educated, results-driven, and dedicated to unlocking each student&apos;s full potential
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="responsive-container max-w-5xl">
          {/* The Princeton Advantage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-16 rounded-sm shadow-sm mb-16 border"
            style={{ borderColor: 'var(--cream)' }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--ivy-green)'
              }}
            >
              The Princeton Advantage
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                As a graduate of Princeton University, I understand firsthand what it takes to gain admission
                to the nation&apos;s most competitive institutions. My Ivy League experience informs every aspect
                of my tutoring approach—from test-taking strategies to the mindset required for sustained
                academic excellence.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                I don&apos;t believe in one-size-fits-all test prep. Every student has unique strengths,
                learning styles, and goals. My white-glove approach means working closely with a limited
                number of clients each year, ensuring each receives the personalized attention they deserve.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                This isn&apos;t just about raising scores—it&apos;s about building confidence, developing
                critical thinking skills, and preparing students for the rigors of university-level academics.
              </p>
            </div>
          </motion.div>

          {/* My Approach Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--ivy-green)'
              }}
            >
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
                  className="p-8 rounded-sm text-center hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: 'var(--cream)' }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{ backgroundColor: 'var(--ivy-green)' }}
                  >
                    <item.icon className="text-white text-3xl" />
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--ivy-green)'
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2D5016] to-[#3D6020] p-12 md:p-16 rounded-sm text-center mb-16"
          >
            <blockquote
              className="text-2xl md:text-4xl text-white italic leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;Excellence is not a destination—it&apos;s a standard we uphold in every session.&rdquo;
            </blockquote>
          </motion.div>

          {/* Credentials & Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-16 rounded-sm shadow-sm border mb-16"
            style={{ borderColor: 'var(--cream)' }}
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 text-center tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--ivy-green)'
              }}
            >
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
                  className="flex flex-col items-center text-center p-6 rounded-sm"
                  style={{ backgroundColor: 'var(--background)' }}
                >
                  <div
                    className="text-sm font-medium tracking-wider uppercase mb-2"
                    style={{ color: 'var(--stone)' }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--ivy-green)'
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--charcoal)'
              }}
            >
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--stone)' }}>
              Limited availability. Schedule a consultation to discuss your goals and create a personalized plan.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
