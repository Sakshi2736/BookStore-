import React, { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../../context/axios"; // ✅ FIXED import
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CustomerCart = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/cart");
      setCartItems(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch cart", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const increaseQuantity = async (bookId) => {
    await axios.post(`http://localhost:8080/api/cart/add?bookId=${bookId}`);
    fetchCart();
  };

  const decreaseQuantity = async (bookId) => {
    await axios.post(`http://localhost:8080/api/cart/decrease?bookId=${bookId}`);
    fetchCart();
  };

 const removeItem = async (bookId) => {
  try {
    await axios.delete(`http://localhost:8080/api/cart/delete?bookId=${bookId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    fetchCart(); // refresh cart after deletion
  } catch (err) {
    console.error("Failed to remove item", err.response?.data || err.message);
    alert("Error removing item from cart.");
  }
};


  const handleCheckout = () => {
    navigate("/customer/checkout");
  };

  if (loading) return <div>Loading cart...</div>;
  if (cartItems.length === 0) return <div>Your cart is empty.</div>;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map(({ bookId, title, price, quantity }) => (
          <div key={bookId} className="flex justify-between items-center border p-4 rounded shadow">
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p>Price: ₹{price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => decreaseQuantity(bookId)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => increaseQuantity(bookId)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeItem(bookId)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-lg font-semibold">Total: ₹{total}</div>
        <button
          onClick={handleCheckout}
          className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CustomerCart;
