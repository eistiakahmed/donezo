import { NavLink, useNavigate } from 'react-router';
import { LayoutDashboard, Settings } from 'lucide-react';
import { BsPeopleFill } from 'react-icons/bs';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { IoLogOutOutline } from 'react-icons/io5';
import { IoHelpBuoyOutline } from 'react-icons/io5';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';

export default function Sidebar({ onLinkClick }) {
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/products', label: 'Products', icon: BiSolidShoppingBags },
    { path: '/overview', label: 'Overview', icon: TbDeviceDesktopAnalytics },
    { path: '/analytics', label: 'Analytics', icon: TbBrandGoogleAnalytics },
    { path: '/users', label: 'Users', icon: BsPeopleFill },
  ];

  const generalItems = [
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/help', label: 'Help', icon: IoHelpBuoyOutline },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    if (onLinkClick) {
      onLinkClick();
    }

    navigate('/login');
  };

  return (
    <>
      <nav className="flex flex-col h-full py-6 mt-5">
        <div className="">
          <h3 className="px-6 mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            MENU
          </h3>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onLinkClick}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 transition-colors relative ${
                      isActive
                        ? 'text-gray-900 font-semibold'
                        : 'text-gray-400 hover:text-gray-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b from-green-800 to-green-500 rounded-r-full" />
                      )}
                      <div className={isActive ? 'text-green-800' : ''}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h3 className="px-6 mb-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            GENERAL
          </h3>
          <ul className="space-y-1">
            {generalItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onLinkClick}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-6 py-3 transition-colors relative ${
                      isActive
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-400 hover:text-gray-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-linear-to-b from-green-800 to-green-500 rounded-r-full" />
                      )}
                      <div className={isActive ? 'text-green-800' : ''}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-6 py-3 transition-colors relative text-gray-400 hover:text-red-600"
              >
                <IoLogOutOutline className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
