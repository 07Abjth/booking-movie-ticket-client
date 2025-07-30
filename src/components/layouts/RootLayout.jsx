import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../../components/layouts/user/UserHeader";  
import { Header } from "../../components/layouts/common/Header"; // Regular header for non-authenticated users
import { Footer } from "../../components/layouts/common/Footer"; // Footer component
import { axiosInstance } from "../../config/axiosInstance"; // Assuming axiosInstance is set up

export const RootLayout = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // State to track user login status

  // Check if user is logged in via backend
  const checkUser = async () => {
    try {
      const response = await axiosInstance.get("/user/check-user", {
        withCredentials: true,
      });
      if (response.data && response.data.isAuthenticated) {
        setIsUserLoggedIn(true); // Set logged in state if successful
      } else {
        setIsUserLoggedIn(false); // Set logged out state if response indicates not authenticated
      }
    } catch (error) {
      setIsUserLoggedIn(false); // Set logged out state on error
    }
  };

  useEffect(() => {
    checkUser(); // Check user status on component mount
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Conditionally Rendered based on login status */}
      {isUserLoggedIn ? <UserHeader /> : <Header />}
  
      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>
  
      {/* Footer */}
      <Footer />
    </div>
  );
};
