// context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // For initial auth check
const fetchProfile = async () => {
  try {
    console.log("🔄 Fetching user profile...");
    const res = await axios.get('/api/v1/user/profile', { withCredentials: true });

    console.log("🟢 Response received:", res);

    if (res?.data?.success) {
      console.log("✅ User data:", res.data.data);
      setUser(res.data.data);
    } else {
      console.warn("⚠️ Profile fetch unsuccessful");
      setUser(null);
    }
  } catch (error) {
    console.error('❌ Error in fetchProfile:', error.message);
    setUser(null);
  } finally {
    setLoading(false);
    console.log("✅ AuthContext loading complete");
  }
};

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
