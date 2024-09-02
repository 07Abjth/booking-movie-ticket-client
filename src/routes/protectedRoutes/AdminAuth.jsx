import { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const AdminAuth = ({ children }) => {

    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false);
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
                navigate("/admin-login");
            }
        } catch (error) {
            navigate("/admin-login");
            console.error("Admin authentication failed", error);
        }
    };

    useEffect(() => {
        checkAdmin();
    }, [location.pathname]);

    return admin ? children : null;
};

AdminAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
