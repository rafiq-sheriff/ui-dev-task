'use client'

import { useState } from 'react'
import Image from 'next/image'

// Collection items data
const collectionItems = [
  {
    id: 1,
    title: 'Signature Scents',
    description: 'Explore our curated line of signature perfumes, designed to elevate your essence with purpose and sophistication.',
  },
  {
    id: 2,
    title: 'Signature Scents',
    description: 'Experience the timeless allure steeped by modern artistry, captured in every bottle of our fragrance.',
  },
  {
    id: 3,
    title: 'Signature Scents',
    description: 'Crafted for those who seek to elevate their essence with purpose and sophistication.',
  },
  {
    id: 4,
    title: 'Signature Scents',
    description: 'Immerse yourself in a world of refined fragrances that speak to your unique style and personality.',
  },
]

const Section3 = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full max-w-[91rem] mx-auto px-16 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Our Collection Accordion */}
        <div className="space-y-6">
          {/* Section Title */}
          <h2 className="text-4xl font-semibold text-[#032E15] mb-8">Our Collection</h2>

          {/* Accordion Items */}
          <div className="space-y-4">
            {collectionItems.map((item) => (
              <div
                key={item.id}
                className={`border-2 rounded-lg transition-all ${
                  'border-[#CDCDCD]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-xl font-bold text-[#032E15]">{item.title}</span>
                  {expandedId === item.id ? (
                    // Minus icon
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-300"
                    >
                      <line
                        x1="6"
                        y1="12"
                        x2="18"
                        y2="12"
                        stroke="#032E15"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    // Plus icon
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="transition-transform duration-300"
                    >
                      <line
                        x1="6"
                        y1="12"
                        x2="18"
                        y2="12"
                        stroke="#032E15"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="6"
                        x2="12"
                        y2="18"
                        stroke="#032E15"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>

                {/* Accordion Content */}
                {expandedId === item.id && (
                  <div className="p-6   border-[#CDCDCD]">
                    <p className="text-base font-light text-[#666666] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Collection Image */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-[587px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/section3/collection_img.png"
              alt="Our Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3