import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const UserAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/check-user", {
          withCredentials: true,
        });
        data.success ? setUser(true) : navigate("/login");
      } catch {
        navigate("/login");
      }
    };
    checkUser();
  }, [navigate, location.pathname]);

  return user ? children : <div>Loading...</div>;
};

export default UserAuth;
