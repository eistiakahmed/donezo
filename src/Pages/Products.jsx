import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import DashboardNav from '../Components/DashboardNav';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { FiPlus, FiSearch } from 'react-icons/fi';

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://task-api-eight-flax.vercel.app/api/products');
        const result = await res.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search query from navigation
  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchTerm(location.state.searchQuery);
      // Clear the state after using it
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4 mb-6">
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Products</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your products and inventory</p>
          </div>
          <button className="px-4 py-2 bg-linear-to-br from-green-800 to-green-500 text-white font-medium rounded-2xl flex items-center gap-2 hover:scale-105 transition-all">
            <FiPlus size={20} />
            Add Product
          </button>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-2xl font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-6 shadow-sm animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <BiSolidShoppingBags className="mx-auto text-gray-300 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-linear-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BiSolidShoppingBags className="text-green-700" size={24} />
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full capitalize">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Price</p>
                    <p className="text-2xl font-bold text-green-600">${product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Sales</p>
                    <p className="text-lg font-semibold text-gray-700">{product.sales}</p>
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-green-600 hover:text-white transition-all">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}

        
        {!loading && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pb-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Products</p>
              <p className="text-3xl font-bold text-gray-900">{filteredProducts.length}</p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-green-600">
                {filteredProducts.reduce((sum, p) => sum + p.sales, 0)}
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">
                ${filteredProducts.reduce((sum, p) => sum + (p.price * p.sales), 0).toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
