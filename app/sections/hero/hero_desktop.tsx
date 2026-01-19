import DesktopNav from '@/app/scaffold/navbar/desktop_nav'
import Image from 'next/image'
import award from "@/assets/icons/award.svg"

const HeroDesktop = () => {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] md:min-h-screen flex flex-col overflow-hidden">
      {/* Mobile Background Image - Shows on mobile ONLY (< 640px) */}
      <div className="absolute inset-0 z-0 sm:hidden">
        <Image
          src="/assets/images/hero/mobile_bg.png"
          alt="Hero Background Mobile"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        {/* Subtle overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
      </div>

      {/* Desktop Background Image - Shows on tablet, laptop, and desktop (640px+) */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/assets/images/hero/hero_img_desktop.png"
          alt="Hero Background Desktop"
          fill
          priority
          className="object-cover object-[70%_center] md:object-[65%_center] xl:object-center"
          quality={100}
        />
        {/* Subtle overlay for tablet and laptop views */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent xl:hidden" />
      </div>

      {/* Navbar */}
      <div className="relative z-50 w-full max-w-[91rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-3">
        <DesktopNav />
      </div>

      {/* Hero Content - Button at bottom on mobile only */}
      <div className="relative z-0 w-full max-w-[91rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex-1 flex flex-col justify-between sm:justify-start pt-12 sm:pt-16 md:pt-16 lg:pt-10 xl:pt-16 pb-8 sm:pb-16 md:pb-20">
        {/* Content Section */}
        <div className="max-w-full md:max-w-2xl text-center sm:text-left w-full">
          {/* Award Badge */}
          <div
            className="inline-flex items-center gap-2 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-5 sm:mb-6 md:mb-7"
            style={{
              background: "linear-gradient(to bottom, #032e15, #033b1c, #024922, #025729, #016630)",
              opacity: 0.9,
            }}
          >
            <Image src="/assets/icons/award.svg" alt="award" width={14} height={14} className="sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm md:text-base font-light whitespace-nowrap">
              Awarded the best perfume in the world
            </span>
          </div>

          {/* Main Heading - Smaller on 1024px, larger on 1280px+ */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-[3.5rem] font-bold text-[#032E15] mb-8 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-12 leading-tight drop-shadow-sm">
            Live your best life.
          </h1>

          {/* Stats - Single horizontal line on mobile, no wrapping */}
          <div className="flex flex-nowrap justify-center sm:justify-start gap-4 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-0 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-12 overflow-x-visible">
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:items-start flex-shrink-0">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-primary-gradient mb-1 sm:mb-2 md:mb-3 drop-shadow-sm">
                10x
              </div>
              <div className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-[1.3rem] font-light text-[#0D542B] drop-shadow-sm">
                power
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:items-start flex-shrink-0">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-primary-gradient mb-1 sm:mb-2 md:mb-3 drop-shadow-sm">
                9
              </div>
              <div className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-[1.3rem] font-light text-[#0D542B] drop-shadow-sm">
                ingredients
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center sm:items-start flex-shrink-0">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold text-primary-gradient mb-1 sm:mb-2 md:mb-3 drop-shadow-sm">
                20K+
              </div>
              <div className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-[1.3rem] font-light text-[#0D542B] drop-shadow-sm whitespace-nowrap">
                happy customers
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - At bottom on mobile, inline on larger screens */}
        <div className="flex justify-center sm:justify-start max-w-full md:max-w-2xl w-full">
          <button className="bg-primary hover:bg-primary-dark text-white rounded-full text-base sm:text-lg font-medium h-[3rem] w-full sm:h-[3.25rem] sm:w-[12rem] shadow-lg hover:shadow-xl transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroDesktop
