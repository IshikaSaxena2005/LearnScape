// src/pages/educator/Educator.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/educator/Navbar';

const Educator = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Educator;
