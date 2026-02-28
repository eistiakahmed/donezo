import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Logo from '../Components/Logo';
import Sidebar from '../Components/Sidebar';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-30 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      <div className="flex min-h-screen">
        
        <aside
          className={`
            fixed lg:static
            top-0 left-0 
            h-screen lg:h-auto
            bg-[#f7f7f7] 
            z-50
            transition-transform duration-300 ease-in-out
            ${isMobile ? (isSidebarOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
            w-64 lg:w-auto
            flex flex-col
            lg:rounded-2xl lg:m-10 lg:min-h-[90vh]
            overflow-y-auto
          `}
        >
          
          <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200 bg-[#f7f7f7] sticky top-0 z-10">
            <Logo />
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          
          <div className="hidden lg:block">
            <Logo />
          </div>

          
          <Sidebar onLinkClick={closeSidebar} />
        </aside>

        
        <main className="flex-1 lg:m-10 lg:ml-0 pt-20 lg:pt-0 px-4 lg:px-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
