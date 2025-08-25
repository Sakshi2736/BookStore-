import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8080/api/books", {
          headers: {
            Authorization: user?.token ? `Bearer ${user.token}` : undefined,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch books");

        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Top Navigation Bar */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              BookStore
            </span>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link
                to="/"
                className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
                Home
               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
           </Link>
            <Link
              to="/about"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/login" 
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/register" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Enhanced floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-pink-300/20 to-purple-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
        
        {/* Floating Book Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-16 text-4xl text-white/20 animate-bounce" style={{ animationDelay: '0s' }}>📚</div>
          <div className="absolute top-1/3 right-24 text-3xl text-white/25 animate-bounce" style={{ animationDelay: '0.5s' }}>📖</div>
          <div className="absolute bottom-1/4 left-1/4 text-5xl text-white/15 animate-bounce" style={{ animationDelay: '1s' }}>📕</div>
          <div className="absolute top-1/2 right-1/3 text-3xl text-white/20 animate-bounce" style={{ animationDelay: '1.5s' }}>📘</div>
          <div className="absolute bottom-1/3 right-16 text-4xl text-white/25 animate-bounce" style={{ animationDelay: '2s' }}>📗</div>
          <div className="absolute top-16 left-1/3 text-2xl text-white/30 animate-bounce" style={{ animationDelay: '2.5s' }}>📙</div>
          <div className="absolute bottom-16 left-1/2 text-3xl text-white/20 animate-bounce" style={{ animationDelay: '3s' }}>📓</div>
          <div className="absolute top-3/4 left-20 text-4xl text-white/15 animate-bounce" style={{ animationDelay: '3.5s' }}>📔</div>
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-700"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
                BookStore
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 font-light">
              Discover extraordinary stories, explore new worlds, and embark on literary adventures that will transform your imagination
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 group">
                <span className="flex items-center space-x-2">
                  <span>Explore Collection</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              <button className="px-10 py-4 border-2 border-white/80 text-white rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                Best Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 relative">
              Featured Books
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
            </h2>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Handpicked selections from our curated collection of literary masterpieces
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-32">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
              <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
              <div className="absolute top-2 left-2 w-16 h-16 border-4 border-purple-400 rounded-full animate-spin border-t-transparent" style={{ animationDelay: '150ms' }}></div>
              <div className="absolute top-4 left-4 w-12 h-12 border-4 border-indigo-300 rounded-full animate-spin border-t-transparent" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.length === 0 ? (
              <div className="col-span-full text-center py-32">
                <div className="relative inline-block mb-8">
                  <div className="text-8xl mb-4 animate-bounce">📚</div>
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No Books Available</h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                  Our collection is being curated. Check back soon for amazing titles!
                </p>
              </div>
            ) : (
              books.map((book, index) => (
                <div
                  key={book.id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 transform-gpu relative border border-gray-100"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Enhanced gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-105"></div>
                  
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={book.imageUrl || "/default-book.png"}
                        alt={book.title}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="hidden w-full h-72 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 items-center justify-center text-6xl"
                        style={{ display: 'none' }}
                      >
                        📖
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Enhanced overlay content */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="flex items-center justify-center space-x-1 mb-2">
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="text-gray-300">★</span>
                          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    {/* Enhanced price badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                      ₹{book.price?.toFixed(2) || '0.00'}
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium mb-3">
                        by {book.author || "Unknown Author"}
                      </p>
                      
                      {/* Book description preview */}
                      {book.description && (
                        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                          {book.description}
                        </p>
                      )}
                    </div>
                    
                    {/* Enhanced rating section */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-yellow-400 text-sm">★</span>
                          <span className="text-gray-300 text-sm">★</span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">(4.0)</span>
                      </div>
                      
                      {/* Availability indicator */}
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600 font-medium">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-20 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-12 text-xl leading-relaxed">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and literary events that will inspire your reading journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-8 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
              />
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="text-2xl font-bold text-white">BookStore</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your gateway to endless stories and knowledge. Discover, explore, and transform your world through the power of books.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Browse Books</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Best Sellers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Author Spotlight</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg">Follow Us</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold">t</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold">i</span>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Join our community of book lovers and get daily inspiration.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 BookStore. All rights reserved. | Made with ❤️ for book lovers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}