import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-purple-100 text-gray-700 py-8 px-4 mt-12 shadow-inner border-t border-purple-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        
        {/* Logo */}
        <div className="bg-white/50 backdrop-blur-sm p-2 rounded-lg shadow-md">
          <img
            src={assets.logo}
            alt="LearnScape Logo"
            className="w-32 mx-auto"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-700 font-light">
          © 2025 <span className="font-semibold text-purple-800">LearnScape</span>. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/ishika-saxena2005/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src={assets.linkedin_logo} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/ishika_2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img src={assets.instagram_icon} alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
