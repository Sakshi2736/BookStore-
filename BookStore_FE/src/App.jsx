import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import EditBookForm from "./pages/admin/EditBookForm";
import CustomerCart from "./pages/customer/CustomerCart";
import CustomerCheckout from "./pages/customer/CustomerCheckout";
import CustomerBooks from "./pages/customer/CustomerBooks";
import CustomerOrders from "./pages/customer/CustomerOrders";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute role="ADMIN">
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/books/edit/:id"
          element={
            <PrivateRoute role="ADMIN">
              <EditBookForm />
            </PrivateRoute>
          }
        />

        {/* Customer routes */}
        <Route
          path="/customer/dashboard"
          element={
            <PrivateRoute role="CUSTOMER">
              <CustomerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/books"
          element={
            <PrivateRoute role="CUSTOMER">
              <CustomerBooks />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/cart"
          element={
            <PrivateRoute role="CUSTOMER">
              <CustomerCart />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/orders"
          element={
            <PrivateRoute role="CUSTOMER">
              <CustomerOrders />
            </PrivateRoute>
          }
        />
        <Route
          path="/customer/checkout"
          element={
            <PrivateRoute role="CUSTOMER">
              <CustomerCheckout />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
