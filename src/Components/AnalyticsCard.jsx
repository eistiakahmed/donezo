import { useEffect, useState } from 'react';

export default function AnalyticsCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://task-api-eight-flax.vercel.app/api/analytics'
        );
        const result = await res.json();
        console.log('Analytics data:', result);
        setData(result);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDayLabel = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0);
  };

  const getMaxValue = () => {
    if (data.length === 0) return 100;
    return Math.max(...data.map((item) => item.views));
  };

  const getBarHeight = (value) => {
    const maxValue = getMaxValue();
    return (value / maxValue) * 100;
  };

  const getBarColor = (index) => {
    const colors = [
      'bg-gradient-to-t from-green-400/30 to-green-400/30',
      'bg-gradient-to-t from-green-600 to-green-500',
      'bg-gradient-to-t from-green-500 to-green-400',
      'bg-gradient-to-t from-green-700 to-green-600',
      'bg-gradient-to-t from-green-400/30 to-green-400/30',
      'bg-gradient-to-t from-green-400/30 to-green-400/30',
      'bg-gradient-to-t from-green-400/30 to-green-400/30',
    ];
    return colors[index] || colors[0];
  };

  const getBarPattern = (index) => {
    return [0, 4, 5, 6].includes(index);
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Analytics</h2>
        <div className="animate-pulse flex items-end justify-between gap-4 h-64">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="flex-1 bg-gray-200 rounded-full"
              style={{ height: `${Math.random() * 100}%` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Analytics</h2>

      {data.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          No analytics data available
        </div>
      ) : (
        <div className="flex items-end justify-between gap-4 h-50 relative">
          {data.slice(0, 7).map((item, index) => {
            const heightPercent = getBarHeight(item.views);
            const isPattern = getBarPattern(index);
            const showPercentage = index === 2;

            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-end h-full relative group"
              >
                {showPercentage && (
                  <div className="absolute -top-8 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold">
                    {Math.round((item.views / getMaxValue()) * 100)}%
                  </div>
                )}

                <div
                  className={`w-full rounded-full transition-all duration-500 relative overflow-hidden ${
                    isPattern
                      ? 'bg-transparent border-2  border-green-300'
                      : getBarColor(index)
                  }`}
                  style={{ height: `${heightPercent}%`, minHeight: '20%' }}
                >
                  {isPattern && (
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                        45deg,
                        #10b981,
                        #10b981 2px,
                        transparent 2px,
                        transparent 8px
                      )`,
                      }}
                    ></div>
                  )}

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
                </div>

                <div className="mt-4 text-gray-400 text-sm font-medium">
                  {getDayLabel(item.date)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
