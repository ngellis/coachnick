'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hidden on mobile, visible on desktop */}
            <Link href="/" className="group hidden md:block">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h1
                  className={`text-2xl md:text-3xl font-serif font-semibold tracking-tight transition-colors duration-300 ${
                    scrolled ? 'text-[#2D5016]' : 'text-white'
                  }`}
                >
                  Coach Nick
                </h1>
              </motion.div>
            </Link>

            {/* Empty div for mobile to maintain layout */}
            <div className="md:hidden" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    scrolled ? 'text-[#2C2C2C]' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      pathname === link.path
                        ? 'w-full bg-[#E77500]'
                        : scrolled
                        ? 'bg-[#E77500]'
                        : 'bg-white'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden z-50 transition-colors duration-300 ${
                mobileMenuOpen ? 'text-[#2D5016]' : scrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-40 md:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.path}
                        className={`block text-2xl font-serif font-semibold py-4 px-4 rounded-lg transition-all duration-300 ${
                          pathname === link.path
                            ? 'bg-[#2D5016] text-white'
                            : 'text-[#2D5016] hover:bg-[#F5F1E8]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
