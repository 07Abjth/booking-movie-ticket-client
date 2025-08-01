// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../Config/axiosInstance'; // Import your configured axios instance
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // For initial auth check

  const fetchProfile = async () => {
    try {
      // Check if token exists before making the request
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("🔐 No token found, skipping profile fetch");
        setUser(null);
        setLoading(false);
        return;
      }

      console.log("🔄 Fetching user profile...");
      
      // Use the correct endpoint that matches your backend
      const res = await axiosInstance.get('/user/check-user', { withCredentials: true });

      console.log("🟢 Response received:", res.data);

      if (res?.data?.success) {
        console.log("✅ User data:", res.data.data);
        setUser(res.data.data);
      } else {
        console.warn("⚠️ Profile fetch unsuccessful");
        setUser(null);
      }
    } catch (error) {
      console.error('❌ Error in fetchProfile:', error.response?.data?.message || error.message);
      
      // Handle different error cases
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Token expired or invalid - clear it
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setUser(null);
        console.log("🔑 Token cleared due to auth error");
      } else {
        console.log("Header auth error:", error.response?.data?.message || error.message);
        setUser(null);
      }
    } finally {
      setLoading(false);
      console.log("✅ AuthContext loading complete");
    }
  };

  // Function to manually refresh user data (call this after login)
  const refreshUser = () => {
    setLoading(true);
    fetchProfile();
  };

  // Function to logout
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setUser(null);
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      setUser, 
      loading, 
      refreshUser, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);