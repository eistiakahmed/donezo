export default function ProductsWork({ data }) {
  
  const activeUsers = data?.filter(user => user.status === 'active').length || 0;
  const inactiveUsers = data?.filter(user => user.status === 'inactive').length || 0;
  const totalUsers = data?.length || 0;
  
  const completedPercent = totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0;
  const inProgressPercent = 20; 
  const pendingPercent = totalUsers > 0 ? Math.round((inactiveUsers / totalUsers) * 100) : 0;

  
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  const completedOffset = circumference - (completedPercent / 100) * circumference;
  const inProgressOffset = circumference - (inProgressPercent / 100) * circumference;
  const pendingOffset = circumference - (pendingPercent / 100) * circumference;

  return (
    <div className='h-full bg-white w-full rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center'>
      <div className="relative w-36 h-36 sm:w-48 sm:h-48 mb-4 sm:mb-6">
        <svg className="transform -rotate-90 w-36 h-36 sm:w-48 sm:h-48">
          
          <circle
            cx={radius === 70 ? "96" : "72"}
            cy={radius === 70 ? "96" : "72"}
            r={radius}
            stroke="#f3f4f6"
            strokeWidth="20"
            fill="none"
          />
          
        
          <defs>
            <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#10b981" strokeWidth="3" opacity="0.3" />
            </pattern>
          </defs>
          <circle
            cx={radius === 70 ? "96" : "72"}
            cy={radius === 70 ? "96" : "72"}
            r={radius}
            stroke="url(#stripes)"
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={pendingOffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
          
          
          <circle
            cx={radius === 70 ? "96" : "72"}
            cy={radius === 70 ? "96" : "72"}
            r={radius}
            stroke="#047857"
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={inProgressOffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
            style={{ strokeDashoffset: completedOffset }}
          />
          
          
          <circle
            cx={radius === 70 ? "96" : "72"}
            cy={radius === 70 ? "96" : "72"}
            r={radius}
            stroke="#10b981"
            strokeWidth="20"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={completedOffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl sm:text-5xl font-bold text-gray-900">{completedPercent}%</div>
          <div className="text-gray-400 text-xs sm:text-sm mt-1">Project Ended</div>
        </div>
      </div>

      
      <div className="flex flex-col gap-2 sm:gap-3 w-full">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#10b981]"></div>
          <span className="text-gray-500 text-xs sm:text-sm">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#047857]"></div>
          <span className="text-gray-500 text-xs sm:text-sm">In Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm bg-[#10b981] opacity-30" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(45deg, #10b981, #10b981 2px, transparent 2px, transparent 6px)'
               }}>
          </div>
          <span className="text-gray-500 text-xs sm:text-sm">Pending</span>
        </div>
      </div>
    </div>
  );
}
