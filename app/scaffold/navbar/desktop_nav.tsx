import Link from "next/link"
import Image from "next/image"

const DesktopNav = () => {
  return (
    <div className='w-full h-full  flex flex-row justify-between items-center'>
      <div className="">
      <h2 className='text-3xl font-extrabold text-primary-gradient'>
        GTG
      </h2>
      </div>

        <div className=' h-full flex flex-row gap-8 items-center text-[1.1rem] font-light text-[#162456]'>
          <Link href='/'>
            Home
          </Link>
          <Link href='/'>
          <div className='flex flex-row gap-2 items-center'>
          <span> Shop </span><Image src="/assets/icons/down_arrow.svg" alt="down_arrow" width={20} height={20} />
          </div>
          </Link>
          <Link href='/'>
          Fragrances
          </Link>
          <Link href='/'>
          About Us
          </Link>
          <Link href='/'>
          Blog
          </Link>
          <Link href='/'>
          Contact
          </Link>

        </div>

        <div className='cursor-pointer flex flex-row gap-3 items-center'>
          <Image src='/assets/icons/search.svg' alt='search' width={28} height={28} />
          <button className='bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-medium h-[3.06rem] w-[9.06rem] shadow-lg hover:shadow-xl transition-all duration-300'>
            Shop Now
          </button>
        </div>



    </div>
  )
}

export default DesktopNav