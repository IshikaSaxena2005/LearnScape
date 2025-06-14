import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">

      {/* Stronger full-page gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EEE6FA] via-[#E6D3FA] to-white z-0"></div>

      {/* Hero content on top of gradient */}
      <div className="relative z-10 flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 text-center space-y-6 pt-32 pb-16">

        <h1 className="md:text-home-heading-large text-home-heading-small font-bold text-gray-800 max-w-3xl mx-auto relative">
          Step into LearnScape — <span className="text-purple-500">Your Gateway to Limitless Learning</span>
          <img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0" />
        </h1>

        <p className="hidden md:block text-gray-600 max-w-2xl mx-auto">
          Dive into an immersive landscape of knowledge where innovation meets education.
          <br />
          Explore expert-led courses, hands-on learning, and a community driven by curiosity.
        </p>

        <p className="md:hidden text-gray-600 max-w-sm mx-auto">
          Unlock your potential, one skill at a time.
        </p>

        <SearchBar />
      </div>
    </div>
  )
}

export default Hero
