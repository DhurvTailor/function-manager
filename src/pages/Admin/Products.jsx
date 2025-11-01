import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  const products = [
    { id: 1, name: 'Laptop Pro', category: 'Electronics', price: '$1,299', stock: 45, status: 'In Stock' },
    { id: 2, name: 'Wireless Mouse', category: 'Accessories', price: '$49', stock: 120, status: 'In Stock' },
    { id: 3, name: 'Keyboard RGB', category: 'Accessories', price: '$129', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Monitor 4K', category: 'Electronics', price: '$599', stock: 28, status: 'In Stock' },
    { id: 5, name: 'Webcam HD', category: 'Electronics', price: '$89', stock: 15, status: 'Low Stock' },
  ];

  const getStockColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-700';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-700';
      case 'Out of Stock':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products Management</h1>
          <p className="text-gray-600 mt-1">Manage your product inventory</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} />
          Add New Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="mb-6">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Product Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-semibold">{product.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-800 font-semibold">{product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{product.stock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStockColor(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
