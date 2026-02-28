import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiTrendingUp } from 'react-icons/fi';

export default function Overview({ data }) {
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(num);
  };

  const cards = data ? [
    {
      label: 'Total Users',
      value: formatNumber(data.totalUsers),
      subtitle: 'Increased from last month',
      isPrimary: true
    },
    {
      label: 'Active Users',
      value: formatNumber(data.activeUsers),
      subtitle: 'Increased from last month',
      isPrimary: false
    },
    {
      label: 'Revenue',
      value: formatCurrency(data.revenue),
      subtitle: 'Increased from last month',
      isPrimary: false
    },
    {
      label: 'Growth',
      value: `${data.growth}%`,
      subtitle: 'On Discuss',
      isPrimary: false
    }
  ] : [];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white h-40 w-full rounded-3xl animate-pulse shadow-sm"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${card.isPrimary ? 'bg-linear-to-br from-green-600 to-green-700 text-white' : 'bg-white text-gray-800'} w-full rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className={`text-sm font-medium ${card.isPrimary ? 'text-green-100' : 'text-gray-600'}`}>
              {card.label}
            </h3>
            <button className={`${card.isPrimary ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'} p-2 rounded-full hover:scale-110 transition-transform`}>
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className={`text-5xl font-bold mb-3 ${card.isPrimary ? 'text-white' : 'text-gray-900'}`}>
            {card.value}
          </div>
          
          <div className="flex items-center gap-2">
            <div className={`${card.isPrimary ? 'bg-white/20' : 'bg-green-100'} p-1 rounded`}>
              <FiTrendingUp className={`w-3 h-3 ${card.isPrimary ? 'text-white' : 'text-green-600'}`} />
            </div>
            <span className={`text-xs ${card.isPrimary ? 'text-green-100' : 'text-gray-500'}`}>
              {card.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
