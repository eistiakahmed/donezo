import { useState } from 'react';
import DashboardNav from '../Components/DashboardNav';
import { IoHelpBuoyOutline } from 'react-icons/io5';
import {
  FiSearch,
  FiBook,
  FiMessageCircle,
  FiMail,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: IoHelpBuoyOutline,
      color: 'blue',
      description: 'Learn about dashboard features and overview',
    },
    {
      id: 'products',
      title: 'Products',
      icon: BiSolidShoppingBags,
      color: 'green',
      description: 'Manage your products and inventory',
    },
    {
      id: 'users',
      title: 'Users',
      icon: BsPeopleFill,
      color: 'purple',
      description: 'User management and permissions',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: TbBrandGoogleAnalytics,
      color: 'orange',
      description: 'Track and analyze your data',
    },
  ];

  const faqs = [
    {
      category: 'dashboard',
      question: 'How do I navigate the dashboard?',
      answer:
        'The dashboard provides an overview of your key metrics including total users, active users, revenue, and growth. Use the sidebar to navigate between different sections like Products, Analytics, Users, and Settings.',
    },
    {
      category: 'dashboard',
      question: 'What do the overview cards show?',
      answer:
        'The overview cards display real-time statistics: Total Users shows all registered users, Active Users shows currently active accounts, Revenue displays total earnings, and Growth shows the percentage increase from the previous period.',
    },
    {
      category: 'products',
      question: 'How do I add a new product?',
      answer:
        'Click the "Add Product" button on the Products page. Fill in the product details including name, price, category, and description. Click Save to add the product to your inventory.',
    },
    {
      category: 'products',
      question: 'How can I view product details?',
      answer:
        'Click on any product card in the Products page to view detailed information including sales statistics, pricing, category, and performance metrics.',
    },
    {
      category: 'products',
      question: 'Can I filter products by category?',
      answer:
        'Yes, use the category filter buttons at the top of the Products page to filter by subscription, addon, or view all products. You can also use the search bar to find specific products.',
    },
    {
      category: 'users',
      question: 'How do I manage users?',
      answer:
        'Navigate to the Users page from the sidebar. Here you can view all users, search by name or email, filter by status (active/inactive), and click on any user to view their detailed profile.',
    },
    {
      category: 'users',
      question: 'What does user status mean?',
      answer:
        'User status indicates whether an account is active or inactive. Active users can access the system, while inactive users are temporarily disabled but their data is preserved.',
    },
    {
      category: 'users',
      question: 'How do I add a new user?',
      answer:
        'Click the "Add User" button on the Users page. Enter the user\'s information including name, email, and role. The user will receive an invitation email to set up their account.',
    },
    {
      category: 'analytics',
      question: 'What metrics are tracked in Analytics?',
      answer:
        'Analytics tracks three main metrics: Views (page visits), Clicks (user interactions), and Conversions (completed actions). Each metric is displayed with historical data and trends.',
    },
    {
      category: 'analytics',
      question: 'How do I interpret the analytics charts?',
      answer:
        'The bar charts show daily metrics over time. Hover over any bar to see exact values. The summary cards at the top show totals for the displayed period. Use this data to identify trends and optimize performance.',
    },
    {
      category: 'analytics',
      question: 'Can I export analytics data?',
      answer:
        'Yes, click the "Export Report" button to download your analytics data in CSV format for further analysis or reporting purposes.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="pt-3 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Help Center
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Find answers and get support
          </p>
        </div>
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <FiSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 ${getColorClasses(category.color)} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <FiBook className="mx-auto text-gray-300 mb-4" size={64} />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No results found
                </h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-left font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      {expandedFaq === index ? (
                        <FiChevronUp
                          className="text-green-600 shrink-0 ml-4"
                          size={20}
                        />
                      ) : (
                        <FiChevronDown
                          className="text-gray-400 shrink-0 ml-4"
                          size={20}
                        />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4 text-gray-600 bg-gray-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiMessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Live Chat</h3>
                <p className="text-sm text-gray-600">
                  Chat with our support team
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Get instant help from our support team. Available Monday to
              Friday, 9 AM - 6 PM EST.
            </p>
            <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-all">
              Start Chat
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiMail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Email Support
                </h3>
                <p className="text-sm text-gray-600">Send us an email</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Send us a detailed message and we'll get back to you within 24
              hours.
            </p>
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all">
              Send Email
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-linear-to-br from-green-50 to-green-100 rounded-3xl p-6 sm:p-8 border border-green-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="#"
              className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
            >
              <FiBook size={16} />
              Documentation
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
            >
              <FiBook size={16} />
              Video Tutorials
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
            >
              <FiBook size={16} />
              API Reference
            </a>
            <a
              href="#"
              className="text-green-700 hover:text-green-800 font-medium flex items-center gap-2"
            >
              <FiBook size={16} />
              Community Forum
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
