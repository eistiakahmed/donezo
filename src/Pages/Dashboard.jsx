import { TiPlus } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import Overview from '../Components/Overview';
import AnalyticsCard from '../Components/AnalyticsCard';
import { IoVideocam } from 'react-icons/io5';
import ProductsCard from '../Components/ProductsCard';
import UserCard from '../Components/UserCard';
import ProductsWork from '../Components/ProductsWork';
import TimeTracker from '../Components/TimeTracker';

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch('https://task-api-eight-flax.vercel.app/api/dashboard');
        const result = await res.json();
        setDashboardData(result);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600">Welcome to your dashboard!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button className="px-4 py-2 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl flex items-center justify-center hover:scale-105 transition-all">
              <TiPlus />
              Add Product
            </button>
            <button className="px-4 py-2 border-2 border-green-700 font-medium text-green-800 hover:bg-linear-to-t from-green-800 to-green-500 hover:text-white hover:border-0 rounded-2xl transition-all">
              Import Data
            </button>
          </div>
        </div>

        <Overview data={dashboardData?.overview} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 my-5">
          <div className="sm:col-span-2 lg:col-span-6">
            <AnalyticsCard data={dashboardData?.analytics} />
          </div>
          <div className="sm:col-span-2 lg:col-span-3 bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Reminders
            </h2>
            <div className="flex flex-col justify-center space-y-3">
              <h4 className="text-lg sm:text-2xl font-semibold text-green-800">
                Meeting With Arc Company
              </h4>
              <h5 className="text-xs sm:text-sm text-gray-500">Time: 2:00 pm - 4:00 pm</h5>

              <a
                href="https://meet.google.com/landing"
                className="flex items-center gap-2 justify-center px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl hover:scale-105 transition-all shadow-md text-sm sm:text-base"
              >
                <IoVideocam size={20} className="sm:w-6 sm:h-6" />
                Start Meeting
              </a>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 flex flex-col gap-4">
            <div className="flex-1">
              <ProductsCard data={dashboardData?.products} />
            </div>
            <div className="flex-1">
              <TimeTracker />
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-5">
            <UserCard data={dashboardData?.users} />
          </div>
          <div className="sm:col-span-2 lg:col-span-4">
            <ProductsWork data={dashboardData?.users} />
          </div>
        </div>
      </section>
    </div>
  );
}
