import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../Layouts/DashboardLayout';
import Dashboard from '../Pages/Dashboard';
import Products from '../Pages/Products';
import Calendar from '../Pages/Calendar';
import Analytics from '../Pages/Analytics';
import Settings from '../Pages/Settings';
import Help from '../Pages/Help';
import Users from '../Pages/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'help',
        element: <Help />,
      },
    ],
  },
]);
