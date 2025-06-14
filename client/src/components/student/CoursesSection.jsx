import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div className="py-16 px-6 md:px-40 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-purple-400 mb-4">
        Learn from the best
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
        Discover our top-rated courses across various categories. <br />
        Whether you're looking to enhance your skills or explore new interests, we have something for everyone.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="inline-block bg-gray-100 text-gray-700 border border-gray-300 px-6 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-all duration-200"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CoursesSection;
