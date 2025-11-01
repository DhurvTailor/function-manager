import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDollarSign, 
  faUsers, 
  faShoppingCart, 
  faArrowUp,
  faArrowDown,
  faEllipsisV,
  faEye,
  faEdit,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+12.5%',
      isPositive: true,
      icon: faDollarSign,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Total Users',
      value: '8,282',
      change: '+8.2%',
      isPositive: true,
      icon: faUsers,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Total Orders',
      value: '1,426',
      change: '-3.1%',
      isPositive: false,
      icon: faShoppingCart,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '+5.4%',
      isPositive: true,
      icon: faArrowUp,
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', product: 'Laptop Pro', amount: '$1,299', status: 'Completed', date: '2025-11-01' },
    { id: '#ORD-002', customer: 'Jane Smith', product: 'Wireless Mouse', amount: '$49', status: 'Pending', date: '2025-11-01' },
    { id: '#ORD-003', customer: 'Mike Johnson', product: 'Keyboard RGB', amount: '$129', status: 'Processing', date: '2025-10-31' },
    { id: '#ORD-004', customer: 'Sarah Williams', product: 'Monitor 4K', amount: '$599', status: 'Completed', date: '2025-10-31' },
    { id: '#ORD-005', customer: 'Tom Brown', product: 'Webcam HD', amount: '$89', status: 'Cancelled', date: '2025-10-30' },
  ];

  const topProducts = [
    { name: 'Laptop Pro', sales: 245, revenue: '$318,555', trend: '+15%' },
    { name: 'Wireless Mouse', sales: 892, revenue: '$43,708', trend: '+8%' },
    { name: 'Keyboard RGB', sales: 456, revenue: '$58,824', trend: '+12%' },
    { name: 'Monitor 4K', sales: 189, revenue: '$113,211', trend: '-3%' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Processing':
        return 'bg-blue-100 text-blue-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
                </div>
                <span className={`flex items-center gap-1 text-sm font-semibold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  <FontAwesomeIcon icon={stat.isPositive ? faArrowUp : faArrowDown} className="text-xs" />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
            <div className={`h-1 bg-gradient-to-r ${stat.gradient}`}></div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowUp} className="text-white text-2xl" />
              </div>
              <p className="text-gray-600 font-medium">Chart visualization area</p>
              <p className="text-sm text-gray-500 mt-2">Integrate with Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{product.revenue}</p>
                  <p className={`text-sm font-semibold ${product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {product.trend}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-800">{order.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-800">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">{order.date}</td>
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

export default Dashboard;
