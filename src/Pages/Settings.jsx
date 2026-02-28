import { useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import { FiUser, FiBell, FiLock, FiMail, FiSave } from 'react-icons/fi';
import { Settings as SettingsIcon } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  
  const [profileData, setProfileData] = useState({
    fullName: 'Demo User',
    email: 'user1@example.com',
    phone: '+1 234 567 8900',
    company: 'Acme Inc',
    role: 'Administrator',
  });

  
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReport: true,
    productUpdates: true,
    securityAlerts: true
  });

  
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationToggle = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key]
    });
  };

  const handleSecurityChange = (e) => {
    setSecurityData({
      ...securityData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FiUser },
    { id: 'notifications', label: 'Notifications', icon: FiBell },
    { id: 'security', label: 'Security', icon: FiLock }
  ];

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="pt-3 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Settings</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage your account settings and preferences</p>
        </div>

        
        {saved && (
          <div className="mb-6 bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-2xl flex items-center gap-2">
            <FiSave size={20} />
            <span className="font-medium">Settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-4 shadow-sm">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-green-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiUser className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Profile Settings</h2>
                    <p className="text-sm text-gray-600">Update your personal information</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={profileData.fullName}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={profileData.company}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role
                    </label>
                    <select
                      name="role"
                      value={profileData.role}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="Administrator">Administrator</option>
                      <option value="Manager">Manager</option>
                      <option value="User">User</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <FiSave size={20} />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <FiBell className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Notification Settings</h2>
                    <p className="text-sm text-gray-600">Manage how you receive notifications</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <FiMail className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('emailNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.emailNotifications ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <FiBell className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Push Notifications</p>
                        <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('pushNotifications')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.pushNotifications ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <SettingsIcon className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Weekly Report</p>
                        <p className="text-sm text-gray-600">Get weekly summary of your activity</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('weeklyReport')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.weeklyReport ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.weeklyReport ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <SettingsIcon className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Product Updates</p>
                        <p className="text-sm text-gray-600">Stay informed about new features</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('productUpdates')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.productUpdates ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.productUpdates ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                      <FiLock className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Security Alerts</p>
                        <p className="text-sm text-gray-600">Important security notifications</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('securityAlerts')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        notifications.securityAlerts ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.securityAlerts ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <FiSave size={20} />
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            
            {activeTab === 'security' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <FiLock className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                    <p className="text-sm text-gray-600">Update your password and security preferences</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={securityData.currentPassword}
                      onChange={handleSecurityChange}
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={securityData.newPassword}
                      onChange={handleSecurityChange}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={securityData.confirmPassword}
                      onChange={handleSecurityChange}
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800 font-medium mb-1">Password Requirements:</p>
                    <ul className="text-xs text-yellow-700 space-y-1 ml-4 list-disc">
                      <li>At least 8 characters long</li>
                      <li>Contains uppercase and lowercase letters</li>
                      <li>Contains at least one number</li>
                      <li>Contains at least one special character</li>
                    </ul>
                  </div>

                  <button
                    onClick={handleSave}
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  >
                    <FiSave size={20} />
                    Update Password
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
