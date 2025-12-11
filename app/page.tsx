'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function Home() {
  return (
    <div className="min-h-screen">
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

        <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight leading-tight" style={{ color: 'white', marginBottom: '35px' }}>
              SAT/ACT<br />Test Preparation
            </h1>
            <p className="text-lg md:text-xl text-[#E77500] font-medium tracking-wide" style={{ marginBottom: '45px' }}>
              Personalized Service • Proven Track Record • Limited Clientele
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-12 py-4 bg-[#E77500] text-white font-medium tracking-wide rounded-sm hover:bg-[#C66300] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Your Free Consultation
                  <HiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-white/70 text-sm tracking-wide text-center">
            © {new Date().getFullYear()} Coach Nick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
