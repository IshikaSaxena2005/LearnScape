// src/components/educator/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added import for Link
import { assets, dummyEducatorData } from '../../assets/assets';
import { UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>

      {/* Greeting and Profile */}
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-medium">Hi! {user ? user.fullName : 'Developer'}</p>
        {user ? (
          <UserButton />
        ) : (
          <img src={assets.profile_img} alt="Profile" className="w-8 h-8 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
