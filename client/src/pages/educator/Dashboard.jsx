import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => setDashboardData(dummyDashboardData);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen w-full p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Educator Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {/* Total Enrollments */}
        <div className="flex items-center bg-white shadow-lg rounded-2xl p-6 gap-5 border border-gray-200">
          <span className="bg-blue-100 p-4 rounded-full">
            <img src={assets.patients_icon} alt="students_icon" className="w-12 h-12" />
          </span>
          <div>
            <p className="text-3xl font-bold text-gray-800">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-gray-500 text-base mt-1">Total Enrollments</p>
          </div>
        </div>
        {/* Total Courses */}
        <div className="flex items-center bg-white shadow-lg rounded-2xl p-6 gap-5 border border-gray-200">
          <span className="bg-purple-100 p-4 rounded-full">
            <img src={assets.appointments_icon} alt="appointments_icon" className="w-12 h-12" />
          </span>
          <div>
            <p className="text-3xl font-bold text-gray-800">{dashboardData.totalCourses}</p>
            <p className="text-gray-500 text-base mt-1">Total Courses</p>
          </div>
        </div>
        {/* Total Earnings */}
        <div className="flex items-center bg-white shadow-lg rounded-2xl p-6 gap-5 border border-gray-200">
          <span className="bg-green-100 p-4 rounded-full">
            <img src={assets.earning_icon} alt="earnings_icon" className="w-12 h-12" />
          </span>
          <div>
            <p className="text-3xl font-bold text-gray-800">
              {currency}{dashboardData.totalEarnings}
            </p>
            <p className="text-gray-500 text-base mt-1">Total Earnings</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h2 className="pb-4 text-xl font-semibold text-gray-900">Latest Enrollments</h2>
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-3 py-2 text-gray-600 font-semibold">#</th>
              <th className="px-3 py-2 text-gray-600 font-semibold">Photo</th>
              <th className="px-3 py-2 text-gray-600 font-semibold">Student Name</th>
              <th className="px-3 py-2 text-gray-600 font-semibold">Course Title</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.enrolledStudentsData.map((item, index) => (
              <tr key={index} className="border-b last:border-none hover:bg-gray-50">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">
                  <img
                    src={assets.logo}
                    alt="student"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-3 py-2">{item.student.name}</td>
                <td className="px-3 py-2">{item.courseTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      <Loading message="Loading Dashboard..." />
    </div>
  );
};

export default Dashboard;
