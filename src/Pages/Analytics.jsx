import { useEffect, useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { FiEye, FiMousePointer } from 'react-icons/fi';
import { BiTargetLock } from 'react-icons/bi';

export default function Analytics() {
  const [analyticsData, setAnalyticsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await fetch('https://task-api-eight-flax.vercel.app/api/analytics');
        const result = await res.json();
        setAnalyticsData(result);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const getDayLabel = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const getMaxValue = (key) => {
    if (analyticsData.length === 0) return 100;
    return Math.max(...analyticsData.map((item) => item[key]));
  };

  const getBarHeight = (value, key) => {
    const maxValue = getMaxValue(key);
    return (value / maxValue) * 100;
  };

  const totalViews = analyticsData.reduce((sum, item) => sum + item.views, 0);
  const totalClicks = analyticsData.reduce((sum, item) => sum + item.clicks, 0);
  const totalConversions = analyticsData.reduce((sum, item) => sum + item.conversions, 0);

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="pt-3 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Analytics</h1>
          <p className="text-sm sm:text-base text-gray-600">Track your performance metrics</p>
        </div>

        {loading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-sm animate-pulse">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <FiEye className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Total Views</p>
                    <p className="text-3xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <FiMousePointer className="text-purple-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Total Clicks</p>
                    <p className="text-3xl font-bold text-gray-900">{totalClicks.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <BiTargetLock className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Total Conversions</p>
                    <p className="text-3xl font-bold text-gray-900">{totalConversions}</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Views Chart */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Views</h2>
                <div className="flex items-end justify-between gap-2 sm:gap-3 h-64 relative">
                  {analyticsData.map((item, index) => {
                    const heightPercent = getBarHeight(item.views, 'views');
                    return (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center justify-end h-full relative group"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-1 rounded font-semibold whitespace-nowrap z-10">
                          {item.views}
                        </div>
                        <div
                          className="w-full rounded-t-xl bg-linear-to-t from-blue-600 to-blue-400 transition-all duration-500 hover:from-blue-700 hover:to-blue-500 cursor-pointer"
                          style={{ height: `${heightPercent}%`, minHeight: '30px' }}
                        ></div>
                        <div className="mt-3 text-gray-600 text-xs font-medium text-center">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Clicks</h2>
                <div className="flex items-end justify-between gap-2 sm:gap-3 h-64 relative ">
                  {analyticsData.map((item, index) => {
                    const heightPercent = getBarHeight(item.clicks, 'clicks');
                    return (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center justify-end h-full relative group"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded font-semibold whitespace-nowrap z-10">
                          {item.clicks}
                        </div>
                        <div
                          className="w-full rounded-t-xl bg-linear-to-t from-purple-600 to-purple-400 transition-all duration-500 hover:from-purple-700 hover:to-purple-500 cursor-pointer"
                          style={{ height: `${heightPercent}%`, minHeight: '30px' }}
                        ></div>
                        <div className="mt-3 text-gray-600 text-xs font-medium text-center">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Conversions</h2>
                <div className="flex items-end justify-between gap-2 sm:gap-3 h-64 relative">
                  {analyticsData.map((item, index) => {
                    const heightPercent = getBarHeight(item.conversions, 'conversions');
                    return (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center justify-end h-full relative group"
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold whitespace-nowrap z-10">
                          {item.conversions}
                        </div>
                        <div
                          className="w-full rounded-t-xl bg-linear-to-t from-green-600 to-green-400 transition-all duration-500 hover:from-green-700 hover:to-green-500 cursor-pointer"
                          style={{ height: `${heightPercent}%`, minHeight: '30px' }}
                        ></div>
                        <div className="mt-3 text-gray-600 text-xs font-medium text-center">
                          {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Detailed Analytics</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Views</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Clicks</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Conversions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 text-sm text-gray-900 font-medium">
                          {getDayLabel(item.date)}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 text-right">
                          {item.views.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 text-right">
                          {item.clicks.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 text-right">
                          {item.conversions}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
