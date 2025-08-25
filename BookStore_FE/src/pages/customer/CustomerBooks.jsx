import { useEffect, useState } from "react";
import axios from "axios";

const CustomerBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingToCartId, setAddingToCartId] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/books");
        setBooks(res.data);
      } catch (err) {
        console.error("Failed to fetch books", err);
        alert("Could not load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleAddToCart = async (bookId) => {
    setAddingToCartId(bookId);
    try {
      await axios.post(`http://localhost:8080/api/cart/add?bookId=${bookId}`);
      alert("Book added to cart!");
    } catch (err) {
      console.error("Error adding to cart", err);
      alert("Failed to add book to cart.");
    } finally {
      setAddingToCartId(null);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin" style={{animationDelay: '0.15s'}}></div>
        </div>
        <p className="mt-6 text-lg text-gray-600 font-medium">Loading books...</p>
        <p className="text-sm text-gray-400 mt-2">Discovering amazing reads for you</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
          Browse Books
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover your next favorite read from our curated collection of books
        </p>
        <div className="mt-4 flex justify-center">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
  {books.map((book, index) => (
    <div
      key={book.id}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.6s ease-out both'
      }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={book.imageUrl || "/default-book.png"}
          alt={book.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ₹{book.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {book.title}
          </h4>

          {/* Author */}
          <p className="text-sm text-gray-500 italic mt-1">by {book.author}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">{book.description}</p>

          <div className="flex items-center mt-2 space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
            <span className="text-xs text-gray-500">(4.5)</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(book.id)}
          className="w-full relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
          disabled={addingToCartId === book.id}
        >
          {addingToCartId === book.id ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Adding...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <span>🛒</span>
              <span>Add to Cart</span>
            </div>
          )}

          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
        </button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-0 h-0 border-l-8 border-t-8 border-l-blue-500 border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>


      {/* Empty State */}
      {books.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">📚</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No books available</h3>
          <p className="text-gray-500">Check back later for new arrivals</p>
        </div>
      )}

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
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-shine {
          animation: shine 1s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default CustomerBooks;