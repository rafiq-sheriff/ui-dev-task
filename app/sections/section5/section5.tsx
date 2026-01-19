import Image from 'next/image'

const Section5 = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="max-w-[91rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className='flex justify-center w-full mb-6 sm:mb-8 md:mb-10'>
          <span className='text-xl sm:text-2xl font-light text-[#032E15] text-center'>---</span>
        </div>
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#032E15] text-center mb-8 sm:mb-10 md:mb-12">
          Why GTG is the #1 Choice
        </h2>

        {/* Comparison Table - Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#322D2D] border-b border-[#E0E0E0]">
                  Qualities
                </th>
                <th className="p-4 lg:p-6 bg-[#E8F5E9] border-b rounded-tl-xl rounded-tr-xl border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-2 lg:gap-3">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl p-2 lg:p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/gtg.png"
                        alt="GTG"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-lg lg:text-xl font-normal text-[#032E15]">GTG</span>
                  </div>
                </th>
                <th className="p-4 lg:p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-2 lg:gap-3">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl p-2 lg:p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/arose.png"
                        alt="Arose"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-normal text-[#032E15]">Arose</span>
                  </div>
                </th>
                <th className="p-4 lg:p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-2 lg:gap-3">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl p-2 lg:p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/bella.png"
                        alt="Bella"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-normal text-[#032E15]">Bella</span>
                  </div>
                </th>
                <th className="p-4 lg:p-6 border-b border-[#E0E0E0]">
                  <div className="flex flex-col items-center gap-2 lg:gap-3">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-xl p-2 lg:p-3 shadow-sm">
                      <Image
                        src="/assets/images/section5/daisies.png"
                        alt="Daisies"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs lg:text-sm font-normal text-[#032E15]">Daisies</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Potency Concentration */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Potency Concentration
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">10x</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">1x</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">1x</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">10x</span>
                </td>
              </tr>

              {/* Longevity */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Longevity
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Sillage */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Sillage
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Bottle Design Score */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Bottle Design Score
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">9</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">5</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">6</span>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <span className="text-xs lg:text-sm font-light text-[#666666]">2</span>
                </td>
              </tr>

              {/* Blend and Harmony */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Blend and Harmony
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Skin Compatibility */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Skin Compatibility
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Scent Profile */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Scent Profile
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>

              {/* Price vs. Quality */}
              <tr className="hover:bg-gray-50 transition-colors">
                 <td className="p-4 lg:p-6 text-left text-sm lg:text-base font-bold text-[#666666] border-b border-[#E0E0E0]">
                  Price vs. Quality
                </td>
                <td className="p-4 lg:p-6 bg-[#E8F5E9] text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" className="block lg:w-4 lg:h-4">
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
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
                <td className="p-4 lg:p-6 text-center border-b border-[#E0E0E0]">
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" className="lg:w-6 lg:h-6">
                      <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                      <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet View - Card-based comparison */}
        <div className="md:hidden space-y-6">
          {/* Brand Headers */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* GTG */}
            <div className="bg-[#E8F5E9] rounded-lg p-4 flex flex-col items-center gap-2">
              <div className="relative w-16 h-16 bg-white rounded-xl p-2 shadow-sm">
                <Image
                  src="/assets/images/section5/gtg.png"
                  alt="GTG"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-[#032E15]">GTG</span>
            </div>

            {/* Others */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex-1 rounded-lg p-2 flex flex-col items-center gap-1 border border-gray-200">
                  <div className="relative w-10 h-10 bg-white rounded-lg p-1 shadow-sm">
                    <Image
                      src="/assets/images/section5/arose.png"
                      alt="Arose"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-normal text-[#032E15]">Arose</span>
                </div>
                <div className="flex-1 rounded-lg p-2 flex flex-col items-center gap-1 border border-gray-200">
                  <div className="relative w-10 h-10 bg-white rounded-lg p-1 shadow-sm">
                    <Image
                      src="/assets/images/section5/bella.png"
                      alt="Bella"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-normal text-[#032E15]">Bella</span>
                </div>
              </div>
              <div className="rounded-lg p-2 flex flex-col items-center gap-1 border border-gray-200">
                <div className="relative w-10 h-10 bg-white rounded-lg p-1 shadow-sm">
                  <Image
                    src="/assets/images/section5/daisies.png"
                    alt="Daisies"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-normal text-[#032E15]">Daisies</span>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          {[
            { label: 'Potency Concentration', gtg: '10x', arose: '1x', bella: '1x', daisies: '10x' },
            { label: 'Longevity', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
            { label: 'Sillage', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
            { label: 'Bottle Design Score', gtg: '9', arose: '5', bella: '6', daisies: '2' },
            { label: 'Blend and Harmony', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
            { label: 'Skin Compatibility', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
            { label: 'Scent Profile', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
            { label: 'Price vs. Quality', gtg: 'check', arose: 'cross', bella: 'cross', daisies: 'cross' },
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-bold text-[#322D2D] mb-4">{item.label}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#E8F5E9] rounded-lg p-3 text-center">
                  {item.gtg === 'check' ? (
                    <div className="flex justify-center">
                      <div className="w-6 h-6 bg-[#032E15] rounded-full flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 16 16">
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
                  ) : (
                    <span className="text-sm font-medium text-[#666666]">{item.gtg}</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[item.arose, item.bella, item.daisies].map((value, idx) => (
                    <div key={idx} className={`${idx === 2 ? 'col-span-2' : ''} rounded-lg p-2 text-center border border-gray-100`}>
                      {value === 'check' ? (
                        <div className="flex justify-center">
                          <div className="w-5 h-5 bg-[#032E15] rounded-full flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 16 16">
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
                      ) : value === 'cross' ? (
                        <div className="flex justify-center">
                          <svg width="18" height="18" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="#CCCCCC" strokeWidth="1.5" fill="none" />
                            <path d="M8 8l8 8M16 8l-8 8" stroke="#CCCCCC" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      ) : (
                        <span className="text-xs font-light text-[#666666]">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <a
            href="#try-risk-free"
            className="bg-primary text-lg sm:text-xl text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Try It Risk-Free
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section5
