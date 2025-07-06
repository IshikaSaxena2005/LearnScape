import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-gray-700 text-center py-4 mt-8">
      <div>
        <img className='hidden md:block h-7 w-px bg-gray-500/60'src={assets.logo} alt="" />
        <div className='hidden md:block text-sm mt-2'>
          </div>
          <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
            Copyright 2025 @LearnScape. All Rights Reseved.
          </p>
      </div>
      <div>
        <a href='/'> 
        {/* linkedin */}
        <img src={assets.linkedin_logo} alt='facebook_icon'/>

        </a>
        <a href='https://x.com/ishika_2005'>
        {/* twitter */}
        <img src={assets.twitter_icon} alt='twitter_icon'/>

        </a>
        {/* github */}
        <a href='/'>
        <img src={assets.instagram_icon} alt='insta'/>

        </a>
      </div>
      </footer>

  )
}

export default Footer

