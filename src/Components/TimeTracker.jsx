import { FiPause, FiSquare } from 'react-icons/fi';

export default function TimeTracker() {
  return (
    <div className="h-full bg-linear-to-br from-green-700 to-green-600 rounded-3xl p-6 shadow-lg text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 Q100,50 200,100 T400,100 L400,400 L0,400 Z" fill="white" opacity="0.1"/>
          <path d="M0,150 Q100,100 200,150 T400,150 L400,400 L0,400 Z" fill="white" opacity="0.1"/>
          <path d="M0,200 Q100,150 200,200 T400,200 L400,400 L0,400 Z" fill="white" opacity="0.1"/>
          <path d="M0,250 Q100,200 200,250 T400,250 L400,400 L0,400 Z" fill="white" opacity="0.1"/>
        </svg>
      </div>
      
     
      <div className="relative z-10 flex flex-col h-full">
        <h2 className="text-2xl font-bold mb-auto">Time Tracker</h2>
        
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="text-6xl font-bold mb-6">01:24:08</div>
          <div className="flex gap-4">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <FiPause className="text-green-700" size={28} />
            </button>
            <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <FiSquare className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
