import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/student/SearchBar';
import CourseCard from '../../components/student/CourseCard';
import { assets } from '../../assets/assets';
import Footer from '../../components/student/Footer';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses];
      if (input) {
        setFilteredCourse(
          tempCourses.filter(item =>
            item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourse(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-[#EEE6FA] via-[#E6D3FA] to-white p-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">Course List</h1>
            <p className="text-gray-500 text-sm">
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate('/')}
              >
                Home
              </span>{' '}
              / <span>Course List</span>
            </p>
          </div>

          <SearchBar data={input} />

          {input && (
            <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600 rounded-md shadow-sm">
              <p>{input}</p>
              <img
                src={assets.cross_icon}
                alt="Clear filter"
                className="cursor-pointer w-4 h-4"
                onClick={() => navigate('/course-list')}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredCourse.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;
