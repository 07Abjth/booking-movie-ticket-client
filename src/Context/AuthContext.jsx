// src/context/AuthContext.jsx

import { createContext, useContext, useState, useEffect } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // to avoid flash during check

  // Refresh user from backend
  const refreshUser = async () => {
    try {
      const res = await axiosInstance.get("/user/check-user", {
        withCredentials: true,
      });

      if (res.data && res.data.success) {
        setUser(res.data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("User not authenticated:", error?.response?.data?.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Load user on app load
  useEffect(() => {
    refreshUser();
  }, []);

  const logout = async () => {
    try {
      await axiosInstance.post("/user/logout", {}, { withCredentials: true });
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, refreshUser, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
