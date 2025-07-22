import React, { useEffect, useState } from 'react';
// Import 'assets' along with 'dummyStudentEnrolled'
import { assets, dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  // Use null as initial state to handle loading
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchUserEnrolledStudents = async () => {
    // Simulating a fetch call
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchUserEnrolledStudents();
  }, []);

  // Render a loading state while data is being "fetched"
  if (!enrolledStudents) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading message="Loading enrolled students..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full p-6 md:p-10 bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Students Enrolled</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-gray-600 font-semibold text-center hidden sm:table-cell">#</th>
                <th className="px-4 py-3 text-gray-600 font-semibold">Student Name</th>
                <th className="px-4 py-3 text-gray-600 font-semibold">Course Title</th>
                <th className="px-4 py-3 text-gray-600 font-semibold hidden sm:table-cell">Purchase Date</th>
              </tr>
            </thead>
            
            <tbody>
              {enrolledStudents.map((item, index) => (
                <tr key={index} className="border-b last:border-none border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-center hidden sm:table-cell">
                    {index + 1}
                  </td>
                  
                  <td className="md:px-4 px-2 py-3 flex items-center gap-3">
                    {/* *** MODIFIED PART *** */}
                    <img
                      src={assets.logo} // Changed from item.student.imageUrl
                      alt="logo"         // Changed from item.student.name
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    {/* *** END OF MODIFIED PART *** */}
                    <span className="truncate font-medium">{item.student.name}</span>
                  </td>
                  
                  <td className="px-4 py-3 truncate">
                    {item.courseTitle}
                  </td>
                  
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {new Date(item.purchaseDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsEnrolled;
