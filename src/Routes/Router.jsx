import { createBrowserRouter } from 'react-router';
import DashboardLayout from '../Layouts/DashboardLayout';
import AuthLayout from '../Layouts/AuthLayout';
import Products from '../Pages/Products';
import Dashboard from '../Pages/Dashboard';
import Calendar from '../Pages/Calendar';
import Analytics from '../Pages/Analytics';
import Settings from '../Pages/Settings';
import Help from '../Pages/Help';
import Login from '../Pages/Login';
import Users from '../Pages/Users';


export const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <DashboardLayout />,
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
