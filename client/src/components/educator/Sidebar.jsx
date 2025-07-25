import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-courses', icon: assets.my_course_icon },
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: assets.person_tick_icon },
  ];

  return isEducator && (
    <div className="md:w-1/4 w-full bg-gradient-to-b from-white-100 via-white-200 to-white min-h-screen p-4 flex flex-col gap-4 shadow-md">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className="flex items-center gap-3 p-2 rounded hover:bg-purple-100 transition duration-200"
        >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
          <p className="md:block hidden">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
