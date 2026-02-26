import React, { useEffect, useRef, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';
import DemoProfile from "../assets/demo_profile.png"

export default function Dashboard() {
  const searchInputRef = useRef(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || 'user@example.com';
    const name = localStorage.getItem('userName') || 'Demo User';
    setUserEmail(email);
    setUserName(name);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="">
      <div className="bg-[#f7f7f7] rounded-2xl w-full h-22 mb-8 flex justify-between items-center px-6">
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <IoSearchOutline size={24} />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="bg-white w-full pl-12 pr-20 py-3 rounded-xl outline-none border-2 border-gray-200 focus:border-green-500 text-gray-700 placeholder-gray-400"
            placeholder="Search Products"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
              ⌘ F
            </kbd>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer transition">
            <LuMail size={22} />
          </div>
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer transition">
            <IoMdNotificationsOutline size={24} />
          </div>
          <div className="flex items-center gap-2 ml-1">
            <img
              src={DemoProfile}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
    </div>
  );
}
