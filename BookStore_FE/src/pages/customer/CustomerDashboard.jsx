import { useState } from "react";
import CustomerBooks from "./CustomerBooks";
import CustomerCart from "./CustomerCart";
import CustomerOrders from "./CustomerOrders";
// import CustomerOrderPlaced from "./CustomerOrderPlaced";
import { useAuth } from "../../context/AuthContext";

const CustomerDashboard = () => {
  const { logout } = useAuth();
  const [activePage, setActivePage] = useState("books");

  const renderPage = () => {
    switch (activePage) {
      case "books":
        return <CustomerBooks />;
      case "cart":
        return <CustomerCart setActivePage={setActivePage} />;
      case "orders":
        return <CustomerOrders />;
      // case "orderPlaced":
      //   return <CustomerOrderPlaced setActivePage={setActivePage} />;
      default:
        return <CustomerBooks />;
    }
  };

  const navItems = [
    { id: "books", label: "Books", icon: "📚" },
    { id: "cart", label: "Cart", icon: "🛒" },
    { id: "orders", label: "Orders", icon: "📦" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Navbar */}
      <nav className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-xl">👤</span>
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Customer Dashboard
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`group relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                  activePage === item.id
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
                    : "hover:bg-white/10 text-blue-100 hover:text-white"
                }`}
              >
                <span className="text-sm group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="font-medium">{item.label}</span>
                {activePage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
            
            <div className="w-px h-6 bg-white/30 mx-2"></div>
            
            <button
              onClick={logout}
              className="group px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-200 hover:text-white transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
            >
              <span className="text-sm group-hover:scale-110 transition-transform duration-200">🚪</span>
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
        
        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      </nav>

      {/* Enhanced Page Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 min-h-[600px] transition-all duration-500">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">
                    {navItems.find(item => item.id === activePage)?.icon || "📚"}
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 capitalize">
                  {activePage}
                </h1>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent"></div>
            </div>
            
            <div className="animate-fadeIn">
              {renderPage()}
            </div>
          </div>
        </div>
      </main>
      
{/*       <style jsx>{` */}
{/*         @keyframes fadeIn { */}
{/*           from { opacity: 0; transform: translateY(10px); } */}
{/*           to { opacity: 1; transform: translateY(0); } */}
{/*         } */}
{/*         .animate-fadeIn { */}
{/*           animation: fadeIn 0.5s ease-out; */}
{/*         } */}
{/*       `}</style> */}
    </div>
  );
};

export default CustomerDashboard;