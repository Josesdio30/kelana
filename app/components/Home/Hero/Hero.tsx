import React from 'react'
import SearchBox from '../../Helper/SearchBox'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 z-10'></div>

      {/* Background video */}
      <video
        src='images/hero1.mp4'
        autoPlay
        loop
        muted
        preload="metadata"
        className='w-full h-full object-cover z-0 absolute top-0 left-0'
      />

      {/* Content */}
      <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center'>
        <div className='flex flex-col items-center text-center space-y-4 mb-6'>
          <div data-aos="fade-up">
          <h1 className='text-[25px] md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>
            Lets enjoy the nature
          </h1>
          <p className='text-lg md:text-base text-white font-normal [word-spacing:5px]'>
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </div>
        <SearchBox />
        <Link href="#" className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
          <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
          <span className='relative font-bold'>Search</span>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Hero
