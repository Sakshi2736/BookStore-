import { useEffect, useState } from "react";
import {
  fetchBooks,
  deleteBook,
  addBook,
  updateBook,
} from "../../services/bookService";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editBookId, setEditBookId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
  });

  const loadBooks = async () => {
    try {
      const res = await fetchBooks();
      setBooks(res.data);
    } catch (error) {
      console.error("Failed to load books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) return;
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (error) {
      alert("Delete failed");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openAddForm = () => {
    setShowForm(true);
    setIsEditMode(false);
    setEditBookId(null);
    setFormData({
      title: "",
      author: "",
      price: "",
      stock: "",
      description: "",
      imageUrl: "",
    });
  };

  const openEditForm = (book) => {
    setShowForm(true);
    setIsEditMode(true);
    setEditBookId(book.id);
    setFormData({
      title: book.title || "",
      author: book.author || "",
      price: book.price?.toString() || "",
      stock: book.stock?.toString() || "",
      description: book.description || "",
      imageUrl: book.imageUrl || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.price || !formData.stock) {
      alert("Please fill in Title, Author, Price, and Stock.");
      return;
    }

    try {
      const priceNum = parseFloat(formData.price);
      const stockNum = parseInt(formData.stock, 10);

      if (isNaN(priceNum) || priceNum < 0 || isNaN(stockNum) || stockNum < 0) {
        alert("Please enter valid Price and Stock values.");
        return;
      }

      const bookData = {
        title: formData.title,
        author: formData.author,
        price: priceNum,
        stock: stockNum,
        description: formData.description,
        imageUrl: formData.imageUrl,
      };

      if (isEditMode) {
        const res = await updateBook(editBookId, bookData);
        setBooks((prev) => prev.map((b) => (b.id === editBookId ? res.data : b)));
        alert("Book updated successfully");
      } else {
        const res = await addBook(bookData);
        setBooks((prev) => [...prev, res.data]);
        alert("Book added successfully");
      }

      setShowForm(false);
      setIsEditMode(false);
      setEditBookId(null);
      setFormData({
        title: "",
        author: "",
        price: "",
        stock: "",
        description: "",
        imageUrl: "",
      });
    } catch (error) {
      alert(isEditMode ? "Failed to update book." : "Failed to add book.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 text-lg">Manage your book inventory with ease</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">{books.length}</div>
                  <div className="text-sm opacity-90">Total Books</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold">{books.filter(book => book.stock > 0).length}</div>
                  <div className="text-sm opacity-90">In Stock</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={openAddForm}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center space-x-3 group"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <span className="text-xl font-bold">+</span>
            </div>
            <span>Add New Book</span>
          </button>
          
          <button
            onClick={loadBooks}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold flex items-center space-x-2"
          >
            <span className="text-lg">⟳</span>
            <span>Refresh</span>
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform animate-slideUp">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {isEditMode ? "Edit Book" : "Add New Book"}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {isEditMode ? "Update book information" : "Fill in the details to add a new book"}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 text-xl font-bold"
                  >
                    ×
                  </button>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                        required
                        placeholder="Enter book title"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Author <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                        required
                        placeholder="Enter author name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Price (₹) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        step="0.01"
                        min="0"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                        required
                        placeholder="0.00"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Stock <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="stock"
                        min="0"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                        required
                        placeholder="0"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300 resize-none"
                        rows="4"
                        placeholder="Enter book description..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold"
                    >
                      {isEditMode ? "Update Book" : "Add Book"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Books Table */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-800">Book Inventory</h3>
            <p className="text-gray-600 text-sm mt-1">Manage and monitor your book collection</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <div className="ml-4 text-gray-600">Loading books...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Book Details</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {books.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center py-16">
                        <div className="text-8xl mb-6 opacity-50">📚</div>
                        <p className="text-gray-500 text-xl font-medium">No books found</p>
                        <p className="text-gray-400 text-sm mt-2">Add your first book to get started</p>
                      </td>
                    </tr>
                  ) : (
                    books.map((book, index) => (
                      <tr 
                        key={book.id} 
                        className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200 group"
                      >
                        <td className="px-6 py-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {book.id}
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                              {book.imageUrl ? (
                                <img 
                                  src={book.imageUrl} 
                                  alt={book.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <span className="text-xs text-gray-500">📖</span>
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {book.title}
                              </div>
                              {book.description && (
                                <div className="text-xs text-gray-500 mt-1 max-w-xs truncate">
                                  {book.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <span className="text-sm font-medium text-gray-700">{book.author}</span>
                        </td>
                        <td className="px-6 py-6">
                          <span className="text-lg font-bold text-green-600">
                            ₹{book.price.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <span className={`inline-flex px-3 py-2 rounded-full text-xs font-bold ${
                            book.stock > 10 
                              ? 'bg-green-100 text-green-800 border border-green-200' 
                              : book.stock > 0 
                                ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                                : 'bg-red-100 text-red-800 border border-red-200'
                          }`}>
                            {book.stock} in stock
                          </span>
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex justify-center space-x-3">
                            <button
                              onClick={() => openEditForm(book)}
                              className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-200 text-sm font-semibold"
                            >
                              ✏️ Edit
                            </button>
                            <button
                              onClick={() => handleDelete(book.id)}
                              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg hover:scale-110 transition-all duration-200 text-sm font-semibold"
                            >
                              🗑️ Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}