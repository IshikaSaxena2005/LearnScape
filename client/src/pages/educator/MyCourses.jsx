import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null);

  const fetchEducatorCourses = async () => {
    // Simulating fetching courses data
    setCourses(allCourses);
  }

  useEffect(() => {
    fetchEducatorCourses();
  }, []);

  return courses ? (
    <div className="min-h-screen w-full p-6 md:p-10 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-2 text-gray-600 font-semibold">Title</th>
                <th className="px-4 py-2 text-gray-600 font-semibold">Earnings</th>
                <th className="px-4 py-2 text-gray-600 font-semibold">Students</th>
                <th className="px-4 py-2 text-gray-600 font-semibold">Published On</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-b last:border-none hover:bg-gray-50">
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img
                      src={course.courseThumbnail}
                      alt={course.courseTitle}
                      className="w-10 h-10 rounded object-cover mr-2"
                    />
                    <span>{course.courseTitle}</span>
                  </td>
                  <td className="px-4 py-2">
                    {currency}{Math.floor(course.enrolledStudents.length * course.coursePrice)}
                  </td>
                  <td className="px-4 py-2">{course.enrolledStudents.length}</td>
                  <td className="px-4 py-2">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {courses.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-400">No courses found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <Loading message="Loading your courses..." />
    </div>
  );
}

export default MyCourses;
