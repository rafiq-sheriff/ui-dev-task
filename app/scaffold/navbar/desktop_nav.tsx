'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"

const DesktopNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='w-full h-full flex flex-row justify-between items-center relative z-50'>
        {/* Logo */}
        <div className="">
          <h2 className='text-2xl sm:text-3xl font-extrabold text-primary-gradient'>
            GTG
          </h2>
        </div>

        {/* Desktop Navigation - Hidden on mobile/tablet, shown on laptop and desktop */}
        <div className='hidden lg:flex h-full flex-row gap-6 xl:gap-8 items-center text-base xl:text-[1.1rem] font-light text-[#162456]'>
          <Link href='/' className='hover:text-primary transition-colors'>
            Home
          </Link>
          <Link href='/'>
            <div className='flex flex-row gap-2 items-center hover:text-primary transition-colors'>
              <span> Shop </span>
              <Image src="/assets/icons/down_arrow.svg" alt="down_arrow" width={20} height={20} />
            </div>
          </Link>
          <Link href='/' className='hover:text-primary transition-colors'>
            Fragrances
          </Link>
          <Link href='/' className='hover:text-primary transition-colors'>
            About Us
          </Link>
          <Link href='/' className='hover:text-primary transition-colors'>
            Blog
          </Link>
          <Link href='/' className='hover:text-primary transition-colors'>
            Contact
          </Link>
        </div>

        {/* Desktop Right Section - Hidden on mobile/tablet, shown on laptop and desktop */}
        <div className='hidden lg:flex cursor-pointer flex-row gap-3 items-center'>
          <Image src='/assets/icons/search.svg' alt='search' width={28} height={28} className='hover:opacity-70 transition-opacity' />
          <button className='bg-primary hover:bg-primary-dark text-white rounded-full text-base lg:text-lg font-medium h-[2.5rem] w-[8rem] lg:h-[3.06rem] lg:w-[9.06rem] shadow-lg hover:shadow-xl transition-all duration-300'>
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button - Visible on mobile/tablet only, hidden on laptop and desktop */}
        <button
          className='lg:hidden flex flex-col gap-1.5 p-2 z-50 relative'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-[#162456] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#162456] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#162456] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Positioned outside main nav to prevent z-index issues */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className='lg:hidden fixed inset-0 bg-black/20 z-40'
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu content */}
          <div className='lg:hidden fixed top-[4.5rem] left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto'>
            <div className='flex flex-col p-6 gap-4'>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                <div className='flex flex-row gap-2 items-center'>
                  <span> Shop </span>
                  <Image src="/assets/icons/down_arrow.svg" alt="down_arrow" width={20} height={20} />
                </div>
              </Link>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                Fragrances
              </Link>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href='/' className='text-lg font-light text-[#162456] hover:text-primary transition-colors py-2' onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>

              {/* Mobile CTA Section */}
              <div className='flex flex-row gap-3 items-center mt-4 pt-4 border-t border-gray-200'>
                <Image src='/assets/icons/search.svg' alt='search' width={28} height={28} />
                <button className='bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-medium h-[3rem] w-full shadow-lg hover:shadow-xl transition-all duration-300'>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default DesktopNav
