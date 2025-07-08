import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { assets, dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const Dashboard = () => {
  const { currency } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen w-full p-6 md:p-10 bg-white">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Educator Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Total Enrolments Card */}
        <div className="flex items-center bg-white shadow-md rounded-xl p-6 gap-5 border border-gray-100 hover:shadow-lg transition">
          <div className="bg-blue-100 p-4 rounded-full">
            <img src={assets.patients_icon} alt="students_icon" className="w-10 h-10" />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {dashboardData.enrolledStudentsData.length}
            </p>
            <p className="text-gray-500 text-sm mt-1">Total Enrollments</p>
          </div>
        </div>
 <div className="flex items-center bg-white shadow-md rounded-xl p-6 gap-5 border border-gray-100 hover:shadow-lg transition">
          <div className="bg-purple-100 p-4 rounded-full">
            <img src={assets.appointments_icon} alt="appointsments_icon" className="w-10 h-10" />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {dashboardData.totalCourses}
            </p>
            <p className="text-gray-500 text-sm mt-1">Total Courses</p>
          </div>
        </div>
        {/* Total Earnings Card */}
        <div className="flex items-center bg-white shadow-md rounded-xl p-6 gap-5 border border-gray-100 hover:shadow-lg transition">
          <div className="bg-purple-100 p-4 rounded-full">
            <img src={assets.earning_icon} alt="earnings_icon" className="w-10 h-10" />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-700">
              {currency}{dashboardData.totalEarnings}
            </p>
            <p className="text-gray-500 text-sm mt-1">Total Earnings</p>
          </div>
        </div>

      </div>
    </div>
  ) : (
    <Loading message="Loading Dashboard..." />
  );
};

export default Dashboard;
