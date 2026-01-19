import Image from 'next/image'

const Section5 = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-[91rem] mx-auto px-16">
        <div className='flex justify-center w-full mb-10'>
        <span className='text-2xl font-light text-[#032E15] text-center'>---</span>
        </div>
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#032E15] text-center mb-12">
          Why GTG is the #1 Choice
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left text-base font-bold text-[#322D2D] border-b border-[#E0E0E0]">
                  Qualities
                </th>
                <th className="p-6 bg-[#E8F5E9] border-b rounded-tl-xl rounded-tr-xl border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/gtg.png"
                        alt="GTG"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xl font-normal text-[#032E15]">GTG</span>
                  </div>
                </th>
                <th className="p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/arose.png"
                        alt="Arose"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-normal text-[#032E15]">Arose</span>
                  </div>
                </th>
                <th className="p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/bella.png"
                        alt="Bella"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-normal text-[#032E15]">Bella</span>
                  </div>
                </th>
                <th className="p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/daisies.png"
                        alt="Daisies"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-normal text-[#032E15]">Daisies</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Potency Concentration */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Potency Concentration
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">10x</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">1x</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">1x</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">10x</span>
                </td>
              </tr>

              {/* Longevity */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Longevity
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Sillage */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Sillage
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Bottle Design Score */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Bottle Design Score
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">9</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">5</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">6</span>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-sm font-light text-[#666666]">2</span>
                </td>
              </tr>

              {/* Blend and Harmony */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Blend and Harmony
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Skin Compatibility */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Skin Compatibility
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Scent Profile */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Scent Profile
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Price vs. Quality */}
              <tr className="hover:bg-gray-50 transition-colors">
                 <td className="p-6 text-left text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Price vs. Quality
                </td>
                <td className="p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="block">
                        <polyline
                          points="4,9 7,12 12,5"
                          fill="none"
                          stroke="#F0EEE6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#try-risk-free"
            className="bg-primary text-xl text-white font-medium px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Try It Risk-Free
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section5