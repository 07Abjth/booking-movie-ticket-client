import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../services/userApi";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleLogout = async () => {
    const response = await userLogout();
    if (!response.error) {
      toast.success("Logged out successfully!");
      navigate("/"); // Redirect to the homepage after successful logout
    } else {
      toast.error(error); // Display error using toast notification
    }
  };

  const fetchUserProfile = async (userId) => {
    try {
      // const response = await axios({
      //   url: `http://localhost:4000/api/v1/user/profile/${userId}`, // Adjust the URL as needed
      //   method: "GET",
      //   withCredentials: true, // Include credentials if necessary
      // });

      const response = await axiosInstance({
        url: `/user/profile/${userId}`,
        method: "GET",
      })

      setUser(response?.data?.data);

      console.log(response, "====response");
    } catch (error) {
      console.log("Error fetching user data");
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    const userId = "your-user-id"; // Replace with actual user ID
    fetchUserProfile(userId);
  }, []);

  return (
    <div className="flex flex-col gap-5 items-start px-20 py-10">
      <h1>welcome : {user.name}</h1>
      <p>Email :{user.email}</p>
      <p>phone :{user.phoneNumber}</p>

      <div className="w-24 rounded-xl">
        <img src={user.profilePic} alt="" />
      </div>
      <div>
        <p>Here you can view and edit your personal information.</p>
        <br />
        <button className="btn btn-secondary">Edit profile</button>
        <br /> <br />
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
