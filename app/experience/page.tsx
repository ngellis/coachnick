'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'

export default function Experience() {
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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

          {/* Photo and Bio Section */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              {/* Photo */}
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden">
                  <Image
                    src="/IMG_1452.WEBP"
                    alt="Coach Nick"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2D5016] mb-8 tracking-tight uppercase -mt-24">
                  Experience
                </h2>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                    After graduating from Princeton University, Nick has spent the last decade working in college admissions for premier tutoring companies across the nation. His test prep coaching is a combination of the most effective techniques from each institution. The result: a program that maximizes score results and efficiency. In particular, Nick specializes in breaking down the most difficult test questions with clear, evidence-based explanations, which is crucial in pushing scores into the 1500+ range. His recent students currently attend Harvard, Princeton, and Columbia, among other elite universities.
                  </p>
                </div>
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
