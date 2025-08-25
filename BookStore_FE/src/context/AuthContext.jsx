import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  });

  const login = async (username, password) => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });

      const { token } = res.data;

      // 👇 Decode the token to extract claims
      const decoded = jwtDecode(token);
      console.log("Decoded JWT:", decoded);

      const userData = {
        token,
        role: decoded.role,
        id: decoded.id,
        username: decoded.username,
      };

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      if (userData.role === "ADMIN") navigate("/admin/dashboard");
      else if (userData.role === "CUSTOMER") navigate("/customer/dashboard");
    } catch (err) {
      console.error("Login failed", err);
      alert("Invalid credentials");
    }
  };

  const register = async (username, password, role) => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        username,
        password,
        role,
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Register failed", err);
      alert("Registration failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // Clear all axios headers manually just in case
    delete axios.defaults.headers.common["Authorization"];

    // Optionally reload the app to reset everything
    window.location.href = "/";
    navigate("/");
  };

  // useEffect(() => {
  //   // Setup Axios interceptor
  //   axios.interceptors.request.use((config) => {
  //     if (user?.token) {
  //       config.headers.Authorization = `Bearer ${user.token}`;
  //     }
  //     return config;
  //   });
  // }, [user]);

    useEffect(() => {
    const interceptor = axios.interceptors.request.use((config) => {
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      return config;
    });
  
    // Cleanup interceptor on unmount or user change to avoid stacking
    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
