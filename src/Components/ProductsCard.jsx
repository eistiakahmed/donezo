import { FiPlus } from 'react-icons/fi';

export default function ProductsCard({ data }) {
  return (
    <div className="h-full bg-white rounded-3xl p-6 shadow-sm flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <button className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600 hover:bg-gray-50 transition flex items-center gap-2">
          <FiPlus size={16} />
          New
        </button>
      </div>
      <div className="space-y-3 flex-1 overflow-y-auto">
        {data && data.map((product) => (
          <div key={product.id} className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <span className="text-green-600 font-bold">${product.price}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{product.category}</span>
              <span className="text-gray-600">{product.sales} sales</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
