import { createBrowserRouter, Navigate } from 'react-router';
import DashboardLayout from '../Layouts/DashboardLayout';
import AuthLayout from '../Layouts/AuthLayout';
import PrivateRoute from '../Components/PrivateRoute';
import Products from '../Pages/Products';
import ProductDetail from '../Pages/ProductDetail';
import Dashboard from '../Pages/Dashboard';
import Analytics from '../Pages/Analytics';
import Settings from '../Pages/Settings';
import Help from '../Pages/Help';
import Login from '../Pages/Login';
import Users from '../Pages/Users';
import UserDetail from '../Pages/UserDetail';
import OverviewPage from '../Pages/OverviewPage';


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
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'overview',
        element: <OverviewPage />,
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
        path: 'users/:id',
        element: <UserDetail />,
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
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);
