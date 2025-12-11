'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Experience() {
  return (
    <div>
      {/* Main Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32" style={{ backgroundColor: 'var(--background)' }}>
        <div className="responsive-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                <h2
                  className="text-4xl md:text-6xl font-bold mb-8 tracking-tight uppercase -mt-24"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'var(--ivy-green)'
                  }}
                >
                  Experience
                </h2>
                <div className="space-y-6">
                  <p
                    className="text-lg md:text-xl leading-relaxed"
                    style={{ color: 'var(--charcoal)' }}
                  >
                    After graduating from Princeton University, Nick has spent the last decade working in college admissions for premier tutoring companies across the nation. His test prep coaching is a combination of the most effective techniques from each institution. The result: a program that maximizes score results and efficiency. In particular, Nick specializes in breaking down the most difficult test questions with clear, evidence-based explanations, which is crucial in pushing scores into the 1500+ range. His recent students currently attend Harvard, Princeton, and Columbia, among other elite universities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
