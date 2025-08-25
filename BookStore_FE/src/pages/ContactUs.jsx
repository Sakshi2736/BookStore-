
export default function ContactUs() {
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
            <a
              href="/"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/about"
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></span>
            </a>
            <a
              href="/login" 
              className="px-6 py-2.5 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
            >
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/register" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Enhanced floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating Book Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-16 text-4xl text-white/20 animate-bounce" style={{ animationDelay: '0s' }}>📞</div>
          <div className="absolute top-1/3 right-24 text-3xl text-white/25 animate-bounce" style={{ animationDelay: '0.5s' }}>✉️</div>
          <div className="absolute bottom-1/4 left-1/4 text-5xl text-white/15 animate-bounce" style={{ animationDelay: '1s' }}>📍</div>
          <div className="absolute top-1/2 right-1/3 text-3xl text-white/20 animate-bounce" style={{ animationDelay: '1.5s' }}>📚</div>
          <div className="absolute bottom-1/3 right-16 text-4xl text-white/25 animate-bounce" style={{ animationDelay: '2s' }}>💬</div>
        </div>
        
        <div className="relative container mx-auto px-6 py-16 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 font-light">
              We'd love to hear from you! Reach out to us for any questions, recommendations, or just to share your love for books
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Book Image Side */}
          <div className="relative">
            <div className="relative group">
              {/* Main book stack image */}
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="aspect-square flex items-center justify-center text-9xl p-12">
                  📚
                </div>
              </div>
              
              {/* Floating book elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-4xl shadow-xl animate-bounce">
                📖
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center text-3xl shadow-xl animate-bounce delay-500">
                📕
              </div>
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-bounce delay-1000">
                📗
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-16 w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-ping delay-700"></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping delay-300"></div>
            </div>
          </div>

          {/* Contact Details Side */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                Contact Information
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full mb-4 mx-auto lg:mx-0"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect with us through any of these channels. We're here to help you find your next great read!
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600 text-lg">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm">Monday - Saturday, 9 AM - 8 PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 text-lg">hello@bookstore.com</p>
                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Visit Our Store</h3>
                    <p className="text-gray-600 text-lg mb-1">123 Book Street, Literary District</p>
                    <p className="text-gray-600 text-lg mb-1">Nagpur, Maharashtra 440001</p>
                    <p className="text-gray-500 text-sm">Open daily: 10 AM - 9 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-1">Follow Us</h3>
                    <p className="text-gray-600">Stay connected on social media</p>
                  </div>
                </div>
                <div className="flex space-x-3 ml-18">
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
                    <span className="text-white font-bold text-sm">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
                    <span className="text-white font-bold text-sm">t</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
                    <span className="text-white font-bold text-sm">i</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md">
                    <span className="text-white font-bold text-sm">y</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Quick Tip</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Looking for a specific book? Call us directly - our book experts can help you find exactly what you're searching for or recommend something perfect for your taste!
                </p>
              </div>
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