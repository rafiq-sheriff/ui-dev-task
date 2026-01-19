'use client'

import { useState } from 'react'

// Import Oxanium from Google Fonts (using next/font if available)
import { Oxanium } from 'next/font/google'
const oxanium = Oxanium({ subsets: ['latin'], weight: ['400', '500', '700'] })

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <footer className="w-full bg-[#032E15] text-white py-12 sm:py-14 md:py-16">
      <div className="max-w-[91rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Column 1: GTG Logo */}
        <div className="flex flex-col mb-8 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold">GTG</h2>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between gap-8 lg:gap-12">
          {/* Left Section - Navigation and Social - All in column on mobile */}
          <div className="flex flex-col gap-8 sm:gap-8 md:gap-12 w-full lg:w-1/2">
            {/* Navigation Links - Single column on mobile */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 md:gap-24 lg:gap-32">
              {/* Nav Column 1 */}
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Home
                </a>
                <a href="#shop" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Shop
                </a>
                <a href="#fragrances" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Fragrances
                </a>
              </div>

              {/* Nav Column 2 */}
              <div className="flex flex-col gap-3">
                <a href="#about" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  About Us
                </a>
                <a href="#blog" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Blog
                </a>
                <a href="#contact" className="text-sm sm:text-base font-normal hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                  Contact
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm sm:text-base font-normal">Facebook</span>
              </a>
              {/* No Instagram */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gray-300 transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-sm sm:text-base font-normal">X</span>
              </a>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
            <h3 className="text-lg sm:text-xl font-normal text-white leading-relaxed" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              Join our newsletter to stay up to date on features and releases.
            </h3>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border border-white/40 rounded-md text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-sm sm:text-base"
                required
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              />
              <button
                type="submit"
                className="bg-[#653B09] hover:bg-[#7A4A0F] text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all w-full text-sm sm:text-base"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs sm:text-sm font-normal text-white/80" style={{ fontFamily: 'Oxanium, sans-serif' }}>
              By subscribing you agree to with our{' '}
              <a href="#privacy" className="underline hover:text-white transition-colors" style={{ fontFamily: 'Oxanium, sans-serif' }}>
                Privacy Policy
              </a>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
