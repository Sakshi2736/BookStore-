import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Bookstore</Link>

      <nav className="flex gap-4">
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user?.role === "ADMIN" && (
          <>
            <Link to="/admin/dashboard">Dashboard</Link>
            <button onClick={logout} className="ml-4 text-red-400 hover:text-red-600">Logout</button>
          </>
        )}

        {user?.role === "CUSTOMER" && (
          <>
            <Link to="/customer/dashboard">Dashboard</Link>
            <button onClick={logout} className="ml-4 text-red-400 hover:text-red-600">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
