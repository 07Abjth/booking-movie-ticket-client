import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const UserAuth = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Start with null to signify no user check initially
  const location = useLocation();

  const checkUser = async () => {
    try {
      const response = await axios({
        url: "http://localhost:4000/api/v1/user/check-user",
        method: "GET",
        withCredentials: true, // If you're handling cookies for auth
      });

      // Assuming the response contains success
      if (response.data && response.data.success) {
        setUser(true);
      } else {
        setUser(false);
        navigate("/login");
      }
    } catch (error) {
      setUser(false); // Set user to false when there's an error
      console.error(error.message); // Log error for debugging
      navigate("/login"); // Navigate to login if the request fails
    }
  };

  useEffect(() => {
    checkUser();
  }, [location.pathname]);

  // Only render children if the user is authenticated
  if (user === null) {
    return <div>Loading...</div>; // Placeholder while checking authentication
  }

  return user ? children : null;
};
