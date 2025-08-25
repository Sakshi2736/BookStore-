import { useEffect, useState } from "react";
import axios from "axios";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/orders");
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch orders", err);
        setError("Could not load orders.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status = "completed") => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      processing: "bg-blue-100 text-blue-800 border-blue-200",
      shipped: "bg-purple-100 text-purple-800 border-purple-200",
      delivered: "bg-green-100 text-green-800 border-green-200",
      completed: "bg-green-100 text-green-800 border-green-200"
    };
    return colors[status] || colors.completed;
  };

  const getStatusIcon = (status = "completed") => {
    const icons = {
      pending: "⏳",
      processing: "🔄",
      shipped: "🚛",
      delivered: "✅",
      completed: "✅"
    };
    return icons[status] || icons.completed;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin" style={{animationDelay: '0.15s'}}></div>
        </div>
        <p className="mt-6 text-lg text-gray-600 font-medium">Loading your orders...</p>
        <p className="text-sm text-gray-400 mt-2">Fetching your order history</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-red-500">⚠️</span>
        </div>
        <h3 className="text-xl font-semibold text-red-600 mb-2">Failed to Load Orders</h3>
        <p className="text-gray-600 mb-6">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-gray-400">📦</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No orders found</h3>
        <p className="text-gray-500 mb-6">You haven't placed any orders yet</p>
        <button 
          onClick={() => window.location.href = "/customer/books"}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Browse Books
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
          <span className="text-2xl text-white">📦</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
          Your Orders
        </h2>
        <p className="text-gray-600">Track and manage your book orders</p>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order, orderIndex) => (
          <div
            key={order.orderId}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            style={{
              animation: `fadeInUp 0.6s ease-out ${orderIndex * 0.1}s both`
            }}
          >
            {/* Order Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-100">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🆔</span>
                    <div>
                      <p className="text-sm text-gray-600">Order ID</p>
                      <p className="font-semibold text-gray-800">{order.orderId}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">📅</span>
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-800">
                        {new Date(order.orderDate).toLocaleDateString("en-IN", {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor()}`}>
                    <span className="mr-1">{getStatusIcon()}</span>
                    Completed
                  </span>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Total Amount</p>
                    <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ₹{order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📚</span>
                Order Items ({order.items.length})
              </h4>
              
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-blue-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Book Title</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Quantity</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Unit Price</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {order.items.map((item, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-sm">📖</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-800">{item.bookTitle}</p>
                                <p className="text-sm text-gray-500">Book Item</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                              {item.quantity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-medium text-gray-800">
                            ₹{item.price}
                          </td>
                          <td className="px-6 py-4 text-right font-bold text-gray-900">
                            ₹{item.quantity * item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Order Footer */}
              <div className="mt-6 flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <span className="mr-1">📦</span>
                    {order.items.length} items
                  </span>
                  <span className="flex items-center">
                    <span className="mr-1">🚚</span>
                    Free delivery
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Order Total</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CustomerOrders;