import DesktopNav from '@/app/scaffold/navbar/desktop_nav'
import Image from 'next/image'
import award from "@/assets/icons/award.svg"

const HeroDesktop = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/hero_img_desktop.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Navbar */}
      <div className="relative z-10 w-full max-w-[91rem] mx-auto px-16 py-3">
        <DesktopNav />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[91rem] mx-auto px-16 flex-1 flex items-start pt-16 pb-23">
        <div className="max-w-2xl">
          {/* Award Badge */}
          <div
            className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full mb-7"
            style={{
              background: "linear-gradient(to bottom, #032e15, #033b1c, #024922, #025729, #016630)",
              opacity: 0.6,
            }}
          >
            <Image src="/assets/icons/award.svg" alt="award" width={20} height={20} />
            <span className="text-[1rem] font-light ">
              Awarded the best perfume in the world
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[3.5rem]  font-bold text-[#032E15] mb-10 leading-tight">
            Live your best life.
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 lg:gap-16 mb-10">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <div className="text-7xl font-bold text-primary-gradient mb-[1.1rem]">
                10x
              </div>
              <div className="text-[1.3rem] font-light text-[#0D542B]">
                power
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <div className="text-7xl font-bold text-primary-gradient mb-[1.1rem]">
                9
              </div>
              <div className="text-[1.3rem] font-light text-[#0D542B]">
                ingredients
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <div className="text-7xl font-bold text-primary-gradient mb-[1.1rem]">
                20K+
              </div>
              <div className="text-[1.3rem] font-light text-[#0D542B]">
                happy customers
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-medium h-[3rem] w-[11.6rem] shadow-lg hover:shadow-xl transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroDesktop