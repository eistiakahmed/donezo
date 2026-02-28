import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import DashboardNav from '../Components/DashboardNav';
import { BsPeopleFill } from 'react-icons/bs';
import { FiPlus, FiSearch, FiMail, FiCalendar } from 'react-icons/fi';

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          'https://task-api-eight-flax.vercel.app/api/users'
        );
        const result = await res.json();
        setUsers(result);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const activeUsers = users.filter((u) => u.status === 'active').length;
  const inactiveUsers = users.filter((u) => u.status === 'inactive').length;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4 mb-6">
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Users
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Manage your users and team members
            </p>
          </div>
          <button className="px-4 py-2 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl flex items-center gap-2 hover:scale-105 transition-all">
            <FiPlus size={20} />
            Add User
          </button>
        </div>

        {loading ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 shadow-sm animate-pulse"
                >
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <BsPeopleFill className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Total Users</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {users.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <BsPeopleFill className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {activeUsers}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <BsPeopleFill className="text-gray-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Inactive Users</p>
                    <p className="text-3xl font-bold text-gray-900">
                      {inactiveUsers}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <FiSearch
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setStatusFilter('all')}
                  className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                    statusFilter === 'all'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setStatusFilter('active')}
                  className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                    statusFilter === 'active'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setStatusFilter('inactive')}
                  className={`px-4 py-2 rounded-2xl font-medium transition-all ${
                    statusFilter === 'inactive'
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Inactive
                </button>
              </div>
            </div>

            
            {filteredUsers.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                <BsPeopleFill
                  className="mx-auto text-gray-300 mb-4"
                  size={64}
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No users found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-6">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => navigate(`/users/${user.id}`)}
                    className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-lg group-hover:scale-110 transition-transform">
                        {getInitials(user.name)}
                      </div>
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                      {user.name}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiMail size={16} className="text-gray-400" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FiCalendar size={16} className="text-gray-400" />
                        <span>Joined {formatDate(user.joinDate)}</span>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-green-600 hover:text-white transition-all">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
