import { TiPlus } from 'react-icons/ti';
import DashboardNav from '../Components/DashboardNav';
import Overview from '../Components/Overview';
import AnalyticsCard from '../Components/AnalyticsCard';
import { IoVideocam } from 'react-icons/io5';


export default function Dashboard() {
  return (
    <div className="">
      <DashboardNav />
      <section className="px-6  bg-[#f7f7f7] rounded-2xl p-2">
        <div className="flex justify-between items-center pt-3">
          <div className="">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <p className=" text-gray-600">Welcome to your dashboard!</p>
          </div>
          <div className=" flex">
            <button className="px-4 py-2 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl flex items-center hover:scale-105 transition-all">
              <TiPlus />
              Add Product
            </button>
            <button className="px-4 py-2 border-2 border-green-700 font-medium text-green-800 hover:bg-linear-to-t from-green-800 to-green-500 hover:text-white hover:border-0 rounded-2xl ml-2 transition-all">
              Import Data
            </button>
          </div>
        </div>

        <Overview />
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <AnalyticsCard />
          </div>
          <div className="col-span-1 bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Reminders</h2>
            <div className="flex flex-col h-full justify-center space-y-3">
              <h4 className="text-2xl font-semibold text-green-800">
                Meeting With Arc Company
              </h4>
              <h5 className="text-sm text-gray-500">Time: 2:00 pm - 4:00 pm</h5>

              <a
                href="https://meet.google.com/landing"
                className="flex items-center gap-2 justify-center px-6 py-3 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl hover:scale-105 transition-all shadow-md"
              >
                <IoVideocam size={24} />
                Start Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
