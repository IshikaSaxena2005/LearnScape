import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration } = useContext(AppContext);
  const navigate = useNavigate();

  const [progressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 6, totalLectures: 6 },
    { lectureCompleted: 0, totalLectures: 4 },
    { lectureCompleted: 2, totalLectures: 3 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 3, totalLectures: 8 },
    { lectureCompleted: 4, totalLectures: 6 },
    { lectureCompleted: 9, totalLectures: 10 },
    { lectureCompleted: 5, totalLectures: 5 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 2 },
    { lectureCompleted: 4, totalLectures: 5 },
  ]);

  return (
    <>
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
              {enrolledCourses.map((course, index) => {
                const progress = progressArray[index];
                const isCompleted =
                  progress &&
                  progress.lectureCompleted === progress.totalLectures;
                const percentCompleted =
                  progress && progress.totalLectures > 0
                    ? (progress.lectureCompleted / progress.totalLectures) * 100
                    : 0;

                return (
                  <tr
                    key={index}
                    className="odd:bg-purple-50 even:bg-white hover:bg-purple-100 transition duration-150"
                  >
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <img
                          src={course.courseThumbnail}
                          alt={course.courseTitle}
                          className="w-20 h-14 object-cover rounded-lg border"
                        />
                        <Line
                          strokeWidth={2}
                          percent={percentCompleted}
                          strokeColor="#7c3aed"
                          trailColor="#e5e7eb"
                          className="mt-2 w-20"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{course.courseTitle}</p>
                        <p className="text-xs text-gray-600">
                          Instructor: {course.instructorName || 'Unknown'}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {calculateCourseDuration(course)}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {progress &&
                        `${progress.lectureCompleted} / ${progress.totalLectures}`}
                      <span className="text-gray-500"> Lectures</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        onClick={() => {
                          if (!isCompleted) navigate(`/player/${course._id}`);
                        }}
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full cursor-pointer ${
                          isCompleted
                            ? 'bg-green-200 text-green-800'
                            : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                        }`}
                      >
                        {isCompleted ? 'Completed' : 'On Going'}
                      </span>
                    </td>
                  </tr>
                );
              })}
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
      <Footer />
    </>
  );
};

export default MyEnrollments;
