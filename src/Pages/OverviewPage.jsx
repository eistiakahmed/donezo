import { useEffect, useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import { FiArrowUpRight, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs';

export default function OverviewPage() {
  const [overviewData, setOverviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch('https://task-api-eight-flax.vercel.app/api/overview');
        const result = await res.json();
        setOverviewData(result);
      } catch (error) {
        console.error('Error fetching overview data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD', 
      minimumFractionDigits: 0 
    }).format(num);
  };

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="pt-3 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Overview</h1>
          <p className="text-sm sm:text-base text-gray-600">Complete overview of your business metrics</p>
        </div>

        {loading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              
              <div className="bg-linear-to-br from-green-600 to-green-700 text-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-medium text-green-100">Total Users</h3>
                  <button className="bg-white/20 text-white p-2 rounded-full hover:scale-110 transition-transform">
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-3">
                  {formatNumber(overviewData?.totalUsers)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded">
                    <FiTrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs text-green-100">All registered users</span>
                </div>
              </div>

              
              <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Active Users</h3>
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-full hover:scale-110 transition-transform">
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900">
                  {formatNumber(overviewData?.activeUsers)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded">
                    <FiTrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-xs text-gray-500">Currently active</span>
                </div>
              </div>

              
              <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Revenue</h3>
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-full hover:scale-110 transition-transform">
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900">
                  {formatCurrency(overviewData?.revenue)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded">
                    <FiTrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-xs text-gray-500">Total earnings</span>
                </div>
              </div>

              
              <div className="bg-white text-gray-800 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Growth</h3>
                  <button className="bg-gray-100 text-gray-600 p-2 rounded-full hover:scale-110 transition-transform">
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-3 text-gray-900">
                  {overviewData?.growth}%
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-1 rounded">
                    <FiTrendingUp className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-xs text-gray-500">Growth rate</span>
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <BsPeopleFill className="text-green-700" size={24} />
                  User Statistics
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Total Users</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatNumber(overviewData?.totalUsers)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Active Users</span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatNumber(overviewData?.activeUsers)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600 font-medium">Inactive Users</span>
                    <span className="text-2xl font-bold text-gray-600">
                      {formatNumber(overviewData?.totalUsers - overviewData?.activeUsers)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-200">
                  <p className="text-sm text-green-700 font-medium mb-1">User Engagement</p>
                  <p className="text-xs text-green-600">
                    {((overviewData?.activeUsers / overviewData?.totalUsers) * 100).toFixed(1)}% of users are currently active
                  </p>
                </div>
              </div>

              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FiDollarSign className="text-green-700" size={24} />
                  Financial Overview
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">Total Revenue</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(overviewData?.revenue)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">Growth Rate</span>
                      <span className="text-2xl font-bold text-green-600">
                        {overviewData?.growth}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        style={{ width: `${overviewData?.growth}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">Revenue per User</span>
                      <span className="text-2xl font-bold text-purple-600">
                        {formatCurrency(overviewData?.revenue / overviewData?.totalUsers)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-linear-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </>
        )}
      </section>
    </div>
  );
}
