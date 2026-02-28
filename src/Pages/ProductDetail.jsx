import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import DashboardNav from '../Components/DashboardNav';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { FiArrowLeft, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://task-api-eight-flax.vercel.app/api/products/${id}`);
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

  if (!product) {
    return (
      <div className="">
        <DashboardNav />
        <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Product not found</h3>
            <button
              onClick={() => navigate('/products')}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all"
            >
              Back to Products
            </button>
          </div>
        </section>
      </div>
    );
  }

  const totalRevenue = product.price * product.sales;

  return (
    <div className="">
      <DashboardNav />
      <section className="px-3 sm:px-4 md:px-6 bg-[#f7f7f7] rounded-2xl p-2">
        
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-gray-600 hover:text-green-700 mb-6 mt-2 transition-colors"
        >
          <FiArrowLeft size={20} />
          <span className="font-medium">Back to Products</span>
        </button>

        
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <BiSolidShoppingBags className="text-green-700" size={40} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full capitalize">
                  {product.category}
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

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <p className="text-sm text-green-700 font-medium mb-2">Price</p>
              <p className="text-4xl font-bold text-green-800">${product.price}</p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <p className="text-sm text-blue-700 font-medium mb-2">Total Sales</p>
              <p className="text-4xl font-bold text-blue-800">{product.sales}</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <p className="text-sm text-purple-700 font-medium mb-2">Revenue</p>
              <p className="text-4xl font-bold text-purple-800">${totalRevenue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BiSolidShoppingBags className="text-green-700" size={24} />
              Product Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Product ID</span>
                <span className="text-gray-900 font-semibold">#{product.id}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Product Name</span>
                <span className="text-gray-900 font-semibold">{product.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Category</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full capitalize">
                  {product.category}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Unit Price</span>
                <span className="text-gray-900 font-semibold">${product.price}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-600 font-medium">Status</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TbBrandGoogleAnalytics className="text-green-700" size={24} />
              Sales Analytics
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Total Units Sold</span>
                  <span className="text-2xl font-bold text-gray-900">{product.sales}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Total Revenue</span>
                  <span className="text-2xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600 font-medium">Average Order Value</span>
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-linear-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-2xl border border-green-200">
                <p className="text-sm text-green-700 font-medium mb-1">Performance</p>
                <p className="text-xs text-green-600">
                  This product is performing well with consistent sales growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
