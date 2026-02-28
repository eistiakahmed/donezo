import { useState, useEffect, useRef } from 'react';
import { FiPlay, FiPause, FiSquare } from 'react-icons/fi';

export default function TimeTracker() {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

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
          <div className="text-5xl sm:text-6xl font-bold mb-6 font-mono">
            {formatTime(time)}
          </div>
          <div className="flex gap-4">
            <button 
              onClick={handleStartPause}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              title={isRunning ? 'Pause' : 'Start'}
            >
              {isRunning ? (
                <FiPause className="text-green-700" size={28} />
              ) : (
                <FiPlay className="text-green-700 ml-1" size={28} />
              )}
            </button>
            <button 
              onClick={handleStop}
              className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={time === 0}
              title="Stop"
            >
              <FiSquare className="text-white" size={24} />
            </button>
          </div>
          <div className="mt-4 text-sm opacity-80">
            {isRunning ? 'Timer Running...' : time > 0 ? 'Timer Paused' : 'Click Start to begin'}
          </div>
        </div>
      </div>
    </div>
  );
}
