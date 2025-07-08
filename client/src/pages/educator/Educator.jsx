// src/pages/educator/Educator.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/Navbar';
import Sidebar from '../../components/educator/Sidebar';
import Footer from '../../components/educator/Footer';

const Educator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-100 via-white-200 to-white text-default">
      <Navbar />
      {/* Apply top padding to avoid content being hidden behind the fixed navbar */}
      <div className="flex pt-20 px-4">
        <Sidebar />
        <div className="w-full md:w-3/4 p-4">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Educator;
