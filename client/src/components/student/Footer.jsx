import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white w-full mt-10 px-6 md:px-36 py-10'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>

        {/* Logo and Description */}
        <div className='flex flex-col items-start gap-4 md:w-1/3'>
          <img src={assets.logo_dark} alt="logo" className='w-16 h-16 object-contain' />
          <p className='text-sm text-white/80 leading-relaxed'>
            LearnScape is a versatile educational platform offering tailored learning solutions for diverse audiences.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col md:w-1/4'>
          <h2 className='text-lg font-semibold mb-4'>Company</h2>
          <ul className='space-y-2 text-white/70 text-sm'>
            <li><a href='' className='hover:text-white transition duration-200'>Home</a></li>
            <li><a href='' className='hover:text-white transition duration-200'>About us</a></li>
            <li><a href='' className='hover:text-white transition duration-200'>Contact us</a></li>
            <li><a href='' className='hover:text-white transition duration-200'>Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col md:w-1/3'>
          <h2 className='text-lg font-semibold mb-4'>Subscribe to our newsletter</h2>
          <p className='text-sm text-white/70'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex mt-4'>
            <input
              type="email"
              placeholder="Enter your email"
              className='w-full px-4 py-2 rounded-l-md border-none text-sm text-gray-800 placeholder-gray-400 focus:outline-none'
            />
            <button className='bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md text-sm font-medium'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className='pt-10 text-center text-xs text-white/60'>
        © 2025 LearnScape. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
