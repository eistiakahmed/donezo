import { Outlet } from 'react-router';
import Logo from '../Components/Logo';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 to-green-300">
      <div className="absolute top-4 left-4">
        <Logo />
      </div>
      <main className="flex justify-center items-center min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
