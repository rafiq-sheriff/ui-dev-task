'use client'

import { useState } from 'react'
import Image from 'next/image'

// Gallery images
const galleryImages = [
  '/assets/images/section2/left/perfume_img_l.png',
  '/assets/images/section2/left/img1.png',
  '/assets/images/section2/left/img2.png',
  '/assets/images/section2/left/img3.png',
  '/assets/images/section2/left/img4.png',
  '/assets/images/section2/left/perfume_img_l.png',
  '/assets/images/section2/left/img1.png',
  '/assets/images/section2/left/img2.png',
]

// Fragrance options with images
const fragrances = [
  { id: 'original', name: 'Original', image: '/assets/images/section2/right/perfume1.png', isBestSeller: true },
  { id: 'lily', name: 'Lily', image: '/assets/images/section2/right/perfume2.png', isBestSeller: false },
  { id: 'rose', name: 'Rose', image: '/assets/images/section2/right/perfume3.png', isBestSeller: false },
]

// Purchase type options
const purchaseTypes = [
  { id: 'onetime', name: 'One Time', tag: 'Free', price: '$99.99' },
  { id: 'monthly', name: 'Every 30 Days', tag: 'SAVE 50%', price: '$49.99' },
  { id: 'quarterly', name: 'Every 90 Days', tag: null, price: '$89.99' },
]

const Section2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [subscriptionType, setSubscriptionType] = useState<'single' | 'double'>('single')
  const [selectedFragrance1, setSelectedFragrance1] = useState('original')
  const [selectedFragrance2, setSelectedFragrance2] = useState('original')
  const [selectedPurchaseType, setSelectedPurchaseType] = useState('onetime')

  // Gallery navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  // Generate dynamic add to cart URL
  const getAddToCartUrl = () => {
    const fragrance = subscriptionType === 'single' ? selectedFragrance1 : `${selectedFragrance1}-${selectedFragrance2}`
    return `/cart/add?subscription=${subscriptionType}&fragrance=${fragrance}&purchase=${selectedPurchaseType}`
  }

  return (
    <section className="w-full max-w-[91rem] mx-auto px-16 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <div className="space-y-4 items-center justify-start flex flex-col">
          {/* Main Image Display */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-[3/4] w-[610px] h-[673px] ">
            <Image
              src={galleryImages[currentImageIndex]}
              alt="Product Image"
              fill
              className="object-cover"
              priority
            />

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className="rotate-180">
                <path
                  d="M3.24545 8.91544H13.1088L8.57831 4.38494L9.72917 3.24219L16.2129 9.72591L9.72917 16.2096L8.58642 15.0669L13.1088 10.5364H3.24545V8.91544Z"
                  fill="#032E15"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all z-10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  d="M3.24545 8.91544H13.1088L8.57831 4.38494L9.72917 3.24219L16.2129 9.72591L9.72917 16.2096L8.58642 15.0669L13.1088 10.5364H3.24545V8.91544Z"
                  fill="#032E15"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-[#032E15] w-6' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-wrap gap-6 w-[610px] justify-center">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-[132px] h-[130px] rounded-[1rem] overflow-hidden ${
                  index === currentImageIndex
                    ? 'border-[#016630] ring-2 ring-[#016630]/30'
                    : 'border-gray-300 hover:border-[#016630]/50'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Product Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-[#032E15] mb-2">GTG Perfumes</h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  // 4.7: fill 4 stars, 1 partial (70%), rest empty
                  let fillType = '';
                  if (i < 4) fillType = 'full';
                  else if (i === 4) fillType = 'partial';
                  else fillType = 'empty';

                  if (fillType === 'full') {
                    return (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#00C950">
                        <path d="M8 0l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.4l-4.8 2.5.9-5.4L0 5.7l5.4-.8L8 0z" />
                      </svg>
                    );
                  }
                  if (fillType === 'partial') {
                    return (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16">
                        <defs>
                          <linearGradient id={`star-grad-${i}`}>
                            <stop offset="70%" stopColor="#00C950" />
                            <stop offset="70%" stopColor="#E5E7EB" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M8 0l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.4l-4.8 2.5.9-5.4L0 5.7l5.4-.8L8 0z"
                          fill={`url(#star-grad-${i})`}
                        />
                      </svg>
                    );
                  }
                  // Shouldn't happen, but fallback to empty
                  return (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#E5E7EB">
                      <path d="M8 0l2.4 4.9 5.4.8-3.9 3.8.9 5.4L8 12.4l-4.8 2.5.9-5.4L0 5.7l5.4-.8L8 0z" />
                    </svg>
                  );
                })}
              </div>
              <span className="text-sm text-[#032E15]">4.7 (999+ reviews)</span>
            </div>
            <p className="text-[#032E15] text-base font-light leading-relaxed">
              Experience the timeless allure steeped by modern artistry, captured in every
              bottle of our fragrance. Crafted for those who seek to elevate their essence with
              purpose and sophistication.
            </p>
          </div>

          {/* Subscription Type Selection */}
          <div className="space-y-4">
            {/* Single Subscription Option */}
            <div
              className={`border-2 rounded-lg transition-all relative ${
                subscriptionType === 'single'
                  ? 'border-[#B8B8B8]'
                  : 'border-gray-300'
              }`}
            >
              {/* Most Popular Badge - Only show when Single Subscription is selected */}
              {subscriptionType === 'single' && (
                <div
                  className="text-white text-center font-bold py-2 rounded-t-[0.37rem] text-xl border-b-[0.15rem] border-[#B8B8B8]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #00c950 0%, #00ae47 30%, #008638 50%, #005c28 70%, #032e15 100%)'
                  }}
                >
                  Most Popular
                </div>
              )}

              <label className="flex items-center justify-between p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="subscription"
                    value="single"
                    checked={subscriptionType === 'single'}
                    onChange={() => setSubscriptionType('single')}
                    className="w-5 h-5 text-[#016630] focus:ring-[#016630]"
                  />
                  <span className="font-light text-xl text-[#032E15]">Single Subscription</span>
                </div>
                <div className="text-right flex flex-row items-center gap-2">
                  <div className="font-bold text-xl text-[#032E15]">$99.99</div>
                  <div className="text-xl font-light text-[#B8B8B8] line-through">$144</div>
                </div>
              </label>
              <div className="px-12">
              <hr className="border-[#B8B8B8] " />
              </div>

              {/* Expanded Content for Single Subscription */}
              {subscriptionType === 'single' && (
                <div className="px-12 pb-4 space-y-4  pt-4">
                  {/* Choose Fragrance */}
                  <div>
                    <h3 className="text-base font-light text-[#032E15] mb-4">
                      Choose a Fragrance
                    </h3>
                    <div className="items-start justify-start flex flex-row gap-4">
                      {fragrances.map((fragrance) => (
                        <label
                          key={fragrance.id}
                          className="flex flex-col items-center cursor-pointer group relative"
                        >
                          {/* Fragrance Image Container with Radio Button Inside */}
                          <div
                            className={`relative w-[127px] h-[153px] rounded-lg overflow-visible transition-all bg-gray-50 ${
                              selectedFragrance1 === fragrance.id
                                ? 'border-[#016630] ring-2 ring-[#016630]/30'
                                : 'border-gray-300 group-hover:border-[#016630]/50'
                            }`}
                          >
                            {/* Best Seller Badge */}
                            {fragrance.isBestSeller && (
                              <span className="absolute -top-2 right-0 text-[0.6rem] bg-primary text-white px-2 py-0.4 rounded-tl-[4.95px] rounded-br-[4.95px] font-semibold whitespace-nowrap z-20">
                                BEST-SELLER
                              </span>
                            )}

                            {/* Radio button positioned at top */}
                            <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                              <input
                                type="radio"
                                name="fragrance1"
                                value={fragrance.id}
                                checked={selectedFragrance1 === fragrance.id}
                                onChange={() => setSelectedFragrance1(fragrance.id)}
                                className="w-4 h-4 text-[#016630] focus:ring-[#016630] cursor-pointer"
                              />
                              <span className="text-sm font-light text-[#032E15]">
                                {fragrance.name}
                              </span>
                            </div>

                            {/* Fragrance Image */}
                            <Image
                              src={fragrance.image}
                              alt={fragrance.name}
                              fill
                              className="object-contain p-3 pt-10"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-base font-light text-[#032E15] mb-4">What's Included:</h4>

                    <div className="flex flex-row gap-4">
                      {/* Every 30 Days Box */}
                      <div className="border-2 border-[#919798] rounded-lg p-4 flex flex-col items-center w-[167px] h-[220px]">
                        <div className="text-base font-light text-start w-full text-[#6F7577] mb-4">Every 30 Days</div>
                        <div className="relative flex-1 w-full">
                          <Image
                            src={fragrances.find((f) => f.id === selectedFragrance1)?.image || ''}
                            alt="Selected fragrance"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* One Time (Free) Box */}
                      <div className="border-2 border-[#919798] rounded-lg p-4 flex flex-col items-center">
                        <div className="text-base font-light text-start w-full text-[#6F7577] mb-4">
                          One Time <span className="font-semibold text-[#032E15]">(Free)</span>
                        </div>
                        <div className="flex gap-4 justify-center p-2">
                          {fragrances.map((fragrance) => (
                            <div
                              key={fragrance.id}
                              className="relative w-16 h-24"
                            >
                              <Image
                                src={fragrance.image}
                                alt={fragrance.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2 text-sm text-[#032E15] font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>1 Bottle Shipped Monthly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                       <span className="font-semibold">Free</span><span> Sampler For Original, Lily And Rose Fragrances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span><span className="font-semibold">50% OFF</span> Shipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>Pause Or Cancel Anytime After 3 Months Minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>28 Day Money Back Guarantee*</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Double Subscription Option */}
            <div
              className={`border-2 rounded-lg transition-all ${
                subscriptionType === 'double'
                  ? 'border-[#B8B8B8]'
                  : 'border-gray-300'
              }`}
            >
              <label className="flex items-center justify-between p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="subscription"
                    value="double"
                    checked={subscriptionType === 'double'}
                    onChange={() => setSubscriptionType('double')}
                    className="w-5 h-5 text-[#016630] focus:ring-[#016630]"
                  />
                  <span className="font-light text-xl text-[#032E15]">Double Subscription</span>
                </div>
                <div className="text-right flex flex-row items-center gap-2">
                  <div className="font-bold text-xl text-[#032E15]">$169.99</div>
                  <div className="text-xl font-light text-[#B8B8B8] line-through">$288</div>
                </div>
              </label>
              <div className="px-12">
              <hr className="border-[#B8B8B8]" />
              </div>

              {/* Expanded Content for Double Subscription */}
              {subscriptionType === 'double' && (
                <div className="px-12 pb-4 space-y-4 pt-4">
                  {/* Choose Fragrance 1 */}
                  <div>
                    <h3 className="text-base font-light text-[#032E15] mb-4">
                      Choose Fragrance 1
                    </h3>
                    <div className="items-start justify-start flex flex-row gap-4">
                      {fragrances.map((fragrance) => (
                        <label
                          key={fragrance.id}
                          className="flex flex-col items-center cursor-pointer group relative"
                        >
                          {/* Fragrance Image Container with Radio Button Inside */}
                          <div
                            className={`relative w-[127px] h-[153px] rounded-lg border-2 overflow-visible transition-all bg-gray-50 ${
                              selectedFragrance1 === fragrance.id
                                ? 'border-[#016630] ring-2 ring-[#016630]/30'
                                : 'border-gray-300 group-hover:border-[#016630]/50'
                            }`}
                          >
                            {/* Best Seller Badge */}
                            {fragrance.isBestSeller && (
                              <span className="absolute -top-2 right-0 text-[0.6rem] bg-primary text-white px-2 py-0.4 rounded-tl-[4.95px] rounded-br-[4.95px] font-semibold whitespace-nowrap z-20">
                                BEST-SELLER
                              </span>
                            )}

                            {/* Radio button positioned at top */}
                            <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                              <input
                                type="radio"
                                name="fragrance1-double"
                                value={fragrance.id}
                                checked={selectedFragrance1 === fragrance.id}
                                onChange={() => setSelectedFragrance1(fragrance.id)}
                                className="w-4 h-4 text-[#016630] focus:ring-[#016630] cursor-pointer"
                              />
                              <span className="text-sm font-light text-[#032E15]">
                                {fragrance.name}
                              </span>
                            </div>

                            {/* Fragrance Image */}
                            <Image
                              src={fragrance.image}
                              alt={fragrance.name}
                              fill
                              className="object-contain p-3 pt-10"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Choose Fragrance 2 */}
                  <div>
                    <h3 className="text-base font-light text-[#032E15] mb-4">
                      Choose Fragrance 2
                    </h3>
                    <div className="items-start justify-start flex flex-row gap-4">
                      {fragrances.map((fragrance) => (
                        <label
                          key={fragrance.id}
                          className="flex flex-col items-center cursor-pointer group relative"
                        >
                          {/* Fragrance Image Container with Radio Button Inside */}
                          <div
                            className={`relative w-[127px] h-[153px] rounded-lg border-2 overflow-visible transition-all bg-gray-50 ${
                              selectedFragrance2 === fragrance.id
                                ? 'border-[#016630] ring-2 ring-[#016630]/30'
                                : 'border-gray-300 group-hover:border-[#016630]/50'
                            }`}
                          >
                            {/* Best Seller Badge */}
                            {fragrance.isBestSeller && (
                              <span className="absolute -top-2 right-0 text-[0.6rem] bg-primary text-white px-2 py-0.4 rounded-tl-[4.95px] rounded-br-[4.95px] font-semibold whitespace-nowrap z-20">
                                BEST-SELLER
                              </span>
                            )}

                            {/* Radio button positioned at top */}
                            <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                              <input
                                type="radio"
                                name="fragrance2-double"
                                value={fragrance.id}
                                checked={selectedFragrance2 === fragrance.id}
                                onChange={() => setSelectedFragrance2(fragrance.id)}
                                className="w-4 h-4 text-[#016630] focus:ring-[#016630] cursor-pointer"
                              />
                              <span className="text-sm font-light text-[#032E15]">
                                {fragrance.name}
                              </span>
                            </div>

                            {/* Fragrance Image */}
                            <Image
                              src={fragrance.image}
                              alt={fragrance.name}
                              fill
                              className="object-contain p-3 pt-10"
                            />
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-base font-light text-[#032E15] mb-4">What's Included:</h4>

                    <div className="flex flex-row gap-4">
                      {/* Every 30 Days Box */}
                      <div className="border-2 border-[#919798] rounded-lg p-4 flex flex-col items-center w-[167px] h-[220px]">
                        <div className="text-base font-light text-start w-full text-[#6F7577] mb-4">Every 30 Days</div>
                        <div className="relative flex-1 w-full flex gap-2 items-center justify-center">
                          <div className="relative w-16 h-full">
                            <Image
                              src={fragrances.find((f) => f.id === selectedFragrance1)?.image || ''}
                              alt="Selected fragrance 1"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="relative w-16 h-full">
                            <Image
                              src={fragrances.find((f) => f.id === selectedFragrance2)?.image || ''}
                              alt="Selected fragrance 2"
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* One Time (Free) Box */}
                      <div className="border-2 border-[#919798] rounded-lg p-4 flex flex-col items-center">
                        <div className="text-base font-light text-start w-full text-[#6F7577] mb-4">
                          One Time <span className="font-semibold text-[#032E15]">(Free)</span>
                        </div>
                        <div className="flex gap-4 justify-center p-2">
                          {fragrances.map((fragrance) => (
                            <div
                              key={fragrance.id}
                              className="relative w-16 h-24"
                            >
                              <Image
                                src={fragrance.image}
                                alt={fragrance.name}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <ul className="space-y-2 text-sm text-[#032E15] font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>2 Bottles Shipped Monthly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span className="font-semibold">Free</span><span> Sampler For Original, Lily And Rose Fragrances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span><span className="font-semibold">50% OFF</span> Shipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>Pause Or Cancel Anytime After 3 Months Minimum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Image src="/assets/icons/tick.svg" alt="Tick" width={14} height={14} className="mt-0.5" />
                      <span>28 Day Money Back Guarantee*</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <a
            href={getAddToCartUrl()}
            className="block w-full bg-[#016630] hover:bg-[#014d24] text-white text-center font-semibold py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Add to Cart
          </a>

          {/* Debug info (optional - remove in production) */}
          {/* <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded">
            <p>Current URL: {getAddToCartUrl()}</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Section2