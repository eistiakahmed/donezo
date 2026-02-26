import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../Components/Logo';
import Sidebar from '../Components/Sidebar';

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-[90vh] m-10">
      <aside className="col-span-2 bg-[#f7f7f7] rounded-2xl flex flex-col">
        <Logo />
        <Sidebar />
      </aside>
      <main className="col-span-10 border border-red-400 rounded-2xl">
        <Outlet />
      </main>
    </div>
  );
}
