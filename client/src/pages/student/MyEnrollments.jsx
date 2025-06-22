import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext);

  return (
    <div className="md:px-36 px-6 pt-10 pb-16 min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Enrollments</h1>

      <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-6 py-4 text-left">Course</th>
              <th className="px-6 py-4 text-left">Duration</th>
              <th className="px-6 py-4 text-left">Completed</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr
                key={index}
                className="odd:bg-purple-50 even:bg-white hover:bg-purple-100 transition duration-150"
              >
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={course.courseThumbnail}
                    alt={course.courseTitle}
                    className="w-20 h-14 object-cover rounded-lg border"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{course.courseTitle}</p>
                    <p className="text-xs text-gray-600">Instructor: {course.instructorName || "Unknown"}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-800">{calculateCourseDuration(course)}</td>
                <td className="px-6 py-4 text-gray-800">
                  4 / 10 <span className="text-gray-500">Lectures</span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    On Going
                  </span>
                </td>
              </tr>
            ))}
            {enrolledCourses.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  You are not enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollments;
