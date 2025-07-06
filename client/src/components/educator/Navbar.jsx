// src/components/educator/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { assets, dummyEducatorData } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/60 border-b border-purple-200 px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>

      {/* Greeting and Profile */}
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-medium text-sm md:text-base">
          Hi! {user ? user.fullName : 'Developer'}
        </p>
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <img src={assets.profile_img} alt="Profile" className="w-8 h-8 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
