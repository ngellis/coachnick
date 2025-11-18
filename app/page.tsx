'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Full height, magazine cover style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2D5016] via-[#3D6020] to-[#2D5016]">
        {/* Nassau Hall background image - subtle, grayscale */}
        <div
          className="absolute inset-0 opacity-15 grayscale"
          style={{
            backgroundImage: 'url(/Cannon_Green_and_Nassau_Hall,_Princeton_University.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(100%)',
          }}
        />

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#2D5016]/40" />

        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
              Elite SAT/ACT<br />Test Preparation
            </h1>
            <p className="text-lg md:text-xl text-[#E77500] font-medium mb-12 tracking-wide">
              Princeton Educated • Proven Results • Limited Clientele
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#E77500] text-white font-medium tracking-wide rounded-sm hover:bg-[#C66300] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide rounded-sm border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2C2C2C] mb-6 tracking-tight">
                The Coach Nick Difference
              </h2>
              <div className="w-24 h-1 bg-[#E77500] mx-auto mb-8" />
              <p className="text-xl text-[#8B7E74] max-w-3xl mx-auto leading-relaxed">
                I work with a select number of students each year, ensuring personalized attention
                and exceptional results. This isn&apos;t mass tutoring—it&apos;s a partnership.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Princeton Pedigree',
                description: 'Ivy League education brings insider knowledge of what top universities seek in their students.',
              },
              {
                title: 'Personalized Strategy',
                description: 'Custom test-taking strategies tailored to each student\'s strengths, weaknesses, and learning style.',
              },
              {
                title: 'Proven Track Record',
                description: 'Consistent score improvements and acceptances to the nation\'s most selective institutions.',
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-[#F5F1E8] h-full text-center">
                  <div className="flex flex-col items-center mb-4">
                    <HiCheckCircle className="text-[#E77500] text-4xl mb-3" />
                    <h3 className="text-2xl font-serif font-semibold text-[#2D5016]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#8B7E74] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2C2C2C] mb-6 tracking-tight">
                Services
              </h2>
              <div className="w-24 h-1 bg-[#E77500] mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'SAT Preparation',
                features: [
                  'Comprehensive content review',
                  'Advanced test-taking strategies',
                  'Full-length practice tests with detailed analysis',
                  'Time management techniques',
                ],
              },
              {
                title: 'ACT Preparation',
                features: [
                  'Section-specific skill building',
                  'Science reasoning mastery',
                  'Pacing and accuracy optimization',
                  'Real ACT exam simulations',
                ],
              },
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-[#F5F1E8] p-10 rounded-sm h-full text-center">
                  <h3 className="text-3xl font-serif font-bold text-[#2D5016] mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <span className="text-[#E77500] mr-3 text-xl">•</span>
                        <span className="text-[#2C2C2C] text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#2D5016] to-[#3D6020]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
              Ready to Achieve Your Best Score?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Limited spots available. Join a select group of students committed to excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#E77500] text-white font-semibold text-lg tracking-wide rounded-sm hover:bg-[#C66300] transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              Get Started Today
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
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
