'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCheckCircle, HiChevronDown } from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentGrade: '',
    testType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Auto-dismiss success modal after 4 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Phone number handler - only allow digits, max 10
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '') // Strip non-digits
    if (value.length <= 10) {
      setFormData({
        ...formData,
        phone: value,
      })
    }
  }

  // Format phone for display
  const formatPhoneDisplay = (phone: string) => {
    if (phone.length === 0) return ''
    if (phone.length <= 3) return `(${phone}`
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mwpgepgk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          phone: formatPhoneDisplay(formData.phone), // Send formatted phone
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          studentGrade: '',
          testType: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Modern form input styling
  const inputClassName = "w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-[#E77500] transition-all bg-white placeholder:text-gray-400 hover:border-gray-400"

  const selectClassName = "w-full px-4 py-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-[#E77500] transition-all bg-white appearance-none cursor-pointer hover:border-gray-400"

  return (
    <div style={{ backgroundColor: 'var(--background)' }}>
      {/* Success Modal Overlay */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setSubmitStatus('idle')}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl p-10 md:p-12 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <HiCheckCircle className="text-green-600 text-4xl" />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'var(--ivy-green)'
                }}
              >
                Thank You!
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                Your message has been sent successfully. I&apos;ll be in touch within 24 hours.
              </p>
              <p className="text-sm mt-4" style={{ color: 'var(--stone)' }}>
                This message will close automatically...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24" style={{ backgroundColor: 'var(--background)' }}>
        <div className="responsive-container">
          {/* Hero Heading - Centered Above Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--ivy-green)'
              }}
            >
              Schedule Your Free Consultation
            </h1>
            <div className="mb-8" />
          </motion.div>

          {/* Centered Contact Form */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Parent/Guardian Name <span className="text-[#E77500]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address <span className="text-[#E77500]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formatPhoneDisplay(formData.phone)}
                    onChange={handlePhoneChange}
                    className={inputClassName}
                    placeholder="(555) 123-4567"
                  />
                  {formData.phone.length > 0 && formData.phone.length < 10 && (
                    <p className="text-sm text-gray-500 mt-2">
                      {10 - formData.phone.length} more digit{10 - formData.phone.length !== 1 ? 's' : ''} needed
                    </p>
                  )}
                </div>

                {/* Row: Student Grade + Test Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Student Grade */}
                  <div>
                    <label
                      htmlFor="studentGrade"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Student&apos;s Grade <span className="text-[#E77500]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="studentGrade"
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                      >
                        <option value="">Select grade</option>
                        <option value="9th">9th Grade</option>
                        <option value="10th">10th Grade</option>
                        <option value="11th">11th Grade</option>
                        <option value="12th">12th Grade</option>
                      </select>
                      <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
                    </div>
                  </div>

                  {/* Test Type */}
                  <div>
                    <label
                      htmlFor="testType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Test Interest <span className="text-[#E77500]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="testType"
                        name="testType"
                        value={formData.testType}
                        onChange={handleChange}
                        required
                        className={selectClassName}
                      >
                        <option value="">Select test</option>
                        <option value="SAT">SAT</option>
                        <option value="ACT">ACT</option>
                        <option value="Undecided">Not sure yet</option>
                      </select>
                      <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Tell me more <span className="text-[#E77500]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClassName} resize-none`}
                    placeholder="Past test scores, target scores, specific concerns, etc."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#E77500] text-white font-semibold text-lg tracking-wide rounded-lg hover:bg-[#C66300] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>

          {/* What Happens Next */}
          <div className="flex justify-center mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl"
            >
            <div className="bg-gradient-to-br from-[#F5F1E8] to-[#E8DFD0] p-10 md:p-12 rounded-2xl">
              <h3
                className="text-2xl font-semibold mb-6 text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'var(--ivy-green)'
                }}
              >
                What Happens Next?
              </h3>
              <div className="flex flex-col items-center">
                <div className="space-y-4 text-base" style={{ color: 'var(--charcoal)' }}>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E77500] text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                    <p>I&apos;ll review your inquiry and respond within 24 hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#E77500] text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                    <p>We&apos;ll schedule a complimentary 15-minute consultation</p>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
