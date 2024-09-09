import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const AdminAuth = ({ children }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null); // null to signify the loading state
  const location = useLocation();

  const checkAdmin = async () => {
    try {
      const response = await axiosInstance({
        url: "/admin/check-admin/",
        method: "GET",
        withCredentials: true,
      });

      if (response?.data?.success) {
        setAdmin(true);
      } else {
        navigate("/admin/login"); // Ensure correct redirection path
      }
    } catch (error) {
      navigate("/admin/login");
      console.error("Admin authentication failed", error);
    }
  };

  useEffect(() => {
    checkAdmin();
  }, [location.pathname]);

  if (admin === null) {
    return <div>Loading...</div>; // Loading state while checking admin authentication
  }

  return admin ? children : null;
};

AdminAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
