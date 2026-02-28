import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { LuMail } from 'react-icons/lu';
import DemoProfile from '../assets/demo_profile.png';

export default function DashboardNav() {
  const searchInputRef = useRef(null);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const email = localStorage.getItem('userEmail') || 'user@example.com';
    const name = localStorage.getItem('userName') || 'Demo User';
    setUserEmail(email);
    setUserName(name);
  }, []);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://task-api-eight-flax.vercel.app/api/products');
        const result = await res.json();
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      if (e.key === 'Escape') {
        setShowResults(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowResults(true);
    } else {
      setFilteredProducts([]);
      setShowResults(false);
    }
  }, [searchQuery, products]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductClick = (productId) => {
    setSearchQuery('');
    setShowResults(false);
    navigate(`/products/${productId}`);
  };

  const handleViewAllResults = () => {
    setShowResults(false);
    navigate('/products', { state: { searchQuery } });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(false);
      navigate('/products', { state: { searchQuery } });
    }
  };

  return (
    <div>
      <div className="bg-[#f7f7f7] rounded-2xl w-full h-22 mb-3 flex justify-between items-center px-6">
        <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <IoSearchOutline size={24} />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-white w-full pl-12 pr-20 py-3 rounded-xl outline-none border-2 border-gray-200 focus:border-green-500 text-gray-700 placeholder-gray-400"
            placeholder="Search Products"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <kbd className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm font-semibold">
              ⌘ F
            </kbd>
          </div>

          
          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-96 overflow-y-auto z-50">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="p-2">
                    {filteredProducts.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleProductClick(product.id)}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-green-700 font-bold text-sm">
                            {product.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500 capitalize">
                            {product.category} • ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {filteredProducts.length > 5 && (
                    <div className="border-t border-gray-200 p-2">
                      <button
                        onClick={handleViewAllResults}
                        className="w-full text-center py-2 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
                      >
                        View all {filteredProducts.length} results
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No products found</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>
          )}
        </form>

        <div className="flex items-center gap-4">
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer hover:scale-105 transition duration-300">
            <LuMail size={22} />
          </div>
          <div className="bg-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-100 cursor-pointer hover:scale-105 transition duration-300">
            <IoMdNotificationsOutline size={24} />
          </div>
          <div className="flex items-center gap-2 ml-1 hover:border-2 hover:border-white hover:p-2 rounded-2xl hover:scale-105 cursor-pointer duration-100 transform-all">
            <img
              src={DemoProfile}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
