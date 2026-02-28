export default function UserProgress({ data }) {
  const activeUsers = data?.filter((user) => user.status === 'active').length || 0;
  const inactiveUsers = data?.filter((user) => user.status === 'inactive').length || 0;
  const totalUsers = data?.length || 0;

  const activePercent = totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0;
  const inactivePercent = totalUsers > 0 ? Math.round((inactiveUsers / totalUsers) * 100) : 0;

  
  const radius = 80;
  const circumference = Math.PI * radius; 
  const activeLength = (activePercent / 100) * circumference;
  const inactiveLength = (inactivePercent / 100) * circumference;

  return (
    <div className="bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-3xl p-6 sm:p-8 w-full border border-gray-50 h-full flex flex-col justify-center">
      <h2 className="text-base sm:text-2xl font-bold text-gray-900 mb-8 sm:mb-10 tracking-tight">
        Users Progress
      </h2>

      <div className="flex flex-col items-center">
        <div className="relative w-64 sm:w-72 h-32 sm:h-36">
          <svg
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 200 100"
          >
            
            <path
              d="M 20 90 A 80 80 0 0 1 180 90"
              fill="none"
              stroke="#f3f4f6"
              strokeLinecap="round"
              strokeWidth="22"
            />

            
            <path
              d="M 20 90 A 80 80 0 0 1 180 90"
              fill="none"
              stroke="#9ca3af"
              strokeLinecap="round"
              strokeWidth="22"
              strokeDasharray={`${inactiveLength} ${circumference}`}
              strokeDashoffset={-circumference}
            />

            
            <path
              d="M 20 90 A 80 80 0 0 1 180 90"
              fill="none"
              stroke="#10b981"
              strokeLinecap="round"
              strokeWidth="22"
              strokeDasharray={`${activeLength} ${circumference}`}
            />
          </svg>

          
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <span className="text-[36px] sm:text-[44px] leading-none font-extrabold text-black tracking-tighter">
              {activePercent}%
            </span>
            <span className="text-[11px] sm:text-[13px] font-semibold text-[#10b981] mt-1 uppercase tracking-wide">
              Active Users
            </span>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center items-center mt-10 sm:mt-12 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#10b981]"></div>
          <span className="text-[10px] sm:text-xs text-gray-500 font-semibold">
            Active ({activeUsers})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#9ca3af]"></div>
          <span className="text-[10px] sm:text-xs text-gray-500 font-semibold">
            Inactive ({inactiveUsers})
          </span>
        </div>
      </div>
    </div>
  );
}
