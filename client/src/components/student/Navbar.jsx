import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const {navigate, isEducator}= useContext(AppContext);
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const {openSignIn} = useClerk();
  const { user } = useUser();
//howver bg color will 
  return (
    <div
      className={`flex items-center justify-between px-3 lg:px-10 py-3 border-b border-gray-300 shadow-sm ${
        isCourseListPage ? 'bg-white' : 'bg-[#ede7f6]' // light violet
      }`}
    >
      {/* Logo */}
<Link to="/" className="flex items-center h-full bg-[#ede7f6] px-2 py-1 rounded-md">
  <img
    onClick={() => navigate('/')}
    src={assets.logo}
    alt="LearnScape Logo"
    className="h-16 w-auto object-contain cursor-pointer"
    style={{ backgroundColor: '#ede7f6' }} // Optional inline style
  />
</Link>



      {/* Navigation & Button */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        { user && 
        <>
          <button onClick={()=>{navigate('/educator')}}
          to="/become-educator"
          className="hover:text-purple-700 transition duration-200"
        >
          {isEducator?'Educator Dashboard' : 'Become Educator'} </button>
        
        <Link
          to="/my-enrollments"
          className="hover:text-purple-700 transition duration-200"
        >
          My Enrollments
        </Link>
        </>
        }
        <Link to="/create-account">
          { user ? <UserButton/> : 
            
            <button onClick={()=>openSignIn()}className="bg-purple-700 hover:bg-purple-800 transition-colors text-white px-5 py-2 rounded-full">
            Create Account
          </button>}
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-700">
        <div className="flex items-center space-x-4">
          <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'> 
            {user &&
            <>
          <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard' : 'Become Educator'} </button>
          <Link to="/my-enrollments">My Enrollments</Link>
          </>
      }
        </div>
        {
          user? <UserButton/> :<button onClick={()=>openSignIn()}><img src={assets.user_icon} alt="" /></button>
        }
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
