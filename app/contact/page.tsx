'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import AnimatedSection from '@/components/AnimatedSection'
import { HiMail, HiPhone, HiClock } from 'react-icons/hi'

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentGrade: '',
        testType: '',
        message: '',
      })
    }, 1500)
  }

  return (
    <div className="bg-[#FAFAF8]">
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

      {/* Contact Information Cards */}
      <section className="py-20 md:py-32 flex-1">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: HiMail,
                title: 'Email',
                content: 'hello@coachnick.org',
                link: 'mailto:hello@coachnick.org',
              },
              {
                icon: HiPhone,
                title: 'Phone',
                content: 'Available upon request',
                link: null,
              },
              {
                icon: HiClock,
                title: 'Response Time',
                content: 'Within 24 hours',
                link: null,
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-sm shadow-sm text-center border border-[#F5F1E8] hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2D5016] rounded-full mb-4">
                    <item.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-[#2D5016] mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-[#8B7E74] hover:text-[#E77500] transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[#8B7E74]">{item.content}</p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact Form */}
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="bg-white p-10 md:p-14 rounded-sm shadow-md border border-[#F5F1E8]">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2D5016] mb-8 text-center">
                  Schedule a Consultation
                </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-green-50 border border-green-200 rounded-sm"
                  >
                    <p className="text-green-800 text-center font-medium">
                      Thank you for reaching out! I&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all bg-[#FAFAF8]"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all bg-[#FAFAF8]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all bg-[#FAFAF8]"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Student Grade */}
                  <div>
                    <label
                      htmlFor="studentGrade"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Student&apos;s Current Grade *
                    </label>
                    <select
                      id="studentGrade"
                      name="studentGrade"
                      value={formData.studentGrade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all bg-[#FAFAF8]"
                    >
                      <option value="">Select grade</option>
                      <option value="9th">9th Grade</option>
                      <option value="10th">10th Grade</option>
                      <option value="11th">11th Grade</option>
                      <option value="12th">12th Grade</option>
                    </select>
                  </div>

                  {/* Test Type */}
                  <div>
                    <label
                      htmlFor="testType"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Test Preparation Interest *
                    </label>
                    <select
                      id="testType"
                      name="testType"
                      value={formData.testType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all bg-[#FAFAF8]"
                    >
                      <option value="">Select test type</option>
                      <option value="SAT">SAT</option>
                      <option value="ACT">ACT</option>
                      <option value="Undecided">Not sure yet</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#2C2C2C] mb-2 tracking-wide"
                    >
                      Tell me more *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#E77500] focus:border-transparent transition-all resize-none bg-[#FAFAF8]"
                      placeholder="Past Results? What score are you aiming for? Any specific concerns?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#E77500] text-white font-semibold text-lg tracking-wide rounded-sm hover:bg-[#C66300] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Info */}
          <AnimatedSection>
            <div className="mt-20 mb-20 max-w-7xl mx-auto text-center">
              <div className="bg-[#F5F1E8] p-16 md:p-20 rounded-sm">
                <h3 className="text-2xl font-serif font-semibold text-[#2D5016] mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-3 text-[#2C2C2C] text-lg">
                  <p>1. I&apos;ll review your inquiry and respond within 24 hours</p>
                  <p>2. We&apos;ll schedule a complimentary 30-minute consultation</p>
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
