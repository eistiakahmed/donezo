import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import DashboardNav from '../Components/DashboardNav';
import { BsPeopleFill } from 'react-icons/bs';
import { FiArrowLeft, FiMail, FiCalendar, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://task-api-eight-flax.vercel.app/api/users/${id}`);
        const result = await res.json();
        setUser(result);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysSinceJoined = (dateString) => {
    const joinDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today - joinDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="">
        <DashboardNav />
        <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="h-12 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="">
        <DashboardNav />
        <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">User not found</h3>
            <button
              onClick={() => navigate('/users')}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all"
            >
              Back to Users
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        
        <button
          onClick={() => navigate('/users')}
          className="flex items-center gap-2 text-gray-600 hover:text-green-700 mb-6 mt-2 transition-colors"
        >
          <FiArrowLeft size={20} />
          <span className="font-medium">Back to Users</span>
        </button>

        
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-700 font-bold text-3xl">
                {getInitials(user.name)}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-2">
                <FiEdit2 size={18} />
                Edit
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-700 rounded-2xl hover:bg-red-200 transition-all flex items-center gap-2">
                <FiTrash2 size={18} />
                Delete
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FiMail className="text-blue-600" size={24} />
                <p className="text-sm text-blue-700 font-medium">Email Address</p>
              </div>
              <p className="text-lg font-semibold text-blue-900">{user.email}</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <FiCalendar className="text-green-600" size={24} />
                <p className="text-sm text-green-700 font-medium">Join Date</p>
              </div>
              <p className="text-lg font-semibold text-green-900">{formatDate(user.joinDate)}</p>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BsPeopleFill className="text-green-700" size={24} />
              User Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">User ID</span>
                <span className="text-gray-900 font-semibold">#{user.id}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Full Name</span>
                <span className="text-gray-900 font-semibold">{user.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Email</span>
                <span className="text-gray-900 font-semibold">{user.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Status</span>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {user.status}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 font-medium">Member Since</span>
                <span className="text-gray-900 font-semibold">{formatDate(user.joinDate)}</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FiCalendar className="text-green-700" size={24} />
              Activity Summary
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Days as Member</span>
                  <span className="text-2xl font-bold text-gray-900">{getDaysSinceJoined(user.joinDate)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Account Status</span>
                  <span className={`text-2xl font-bold ${
                    user.status === 'active' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {user.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      user.status === 'active' 
                        ? 'bg-linear-to-r from-green-500 to-green-600' 
                        : 'bg-linear-to-r from-gray-400 to-gray-500'
                    }`}
                    style={{ width: user.status === 'active' ? '100%' : '50%' }}
                  ></div>
                </div>
              </div>

              <div className={`mt-6 p-4 rounded-2xl border ${
                user.status === 'active' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <p className={`text-sm font-medium mb-1 ${
                  user.status === 'active' ? 'text-green-700' : 'text-gray-700'
                }`}>
                  Account Status
                </p>
                <p className={`text-xs ${
                  user.status === 'active' ? 'text-green-600' : 'text-gray-600'
                }`}>
                  {user.status === 'active' 
                    ? 'This user account is currently active and in good standing'
                    : 'This user account is currently inactive'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
