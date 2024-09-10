import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { fetchUserProfile, userLogout } from "../../services/userApi";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Changed initial state to null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      const response = await userLogout();
      if (!response.error) {
        toast.success("Logged out successfully!");
        navigate("/"); // Redirect to the homepage after successful logout
      } else {
        toast.error(response.error || "An error occurred during logout");
      }
    } catch (error) {
      toast.error("An error occurred during logout");
    }
  };

  const getUserProfile = async () => {
    try {
      const response = await fetchUserProfile();
      if (response.error) {
        setError(response.error);
        toast.error(response.error || "Error fetching user data");
      } else {
        setUser(response); // Ensure this is a user object
        setError(null); // Clear any previous errors
      }
    } catch (error) {
      setError("An unexpected error occurred");
      toast.error("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display the error message if there's an error
  }

  return (
    <div className="flex flex-col gap-5 items-start px-20 py-10">
      <h1>Welcome: {user?.name || "User"}</h1>
      <p>Email: {user?.email || "Not available"}</p>
      <p>Phone: {user?.phoneNumber || "Not available"}</p>
      {/* <div className="w-24 rounded-xl">
        <img
          src={user?.profilePic || "/default-profile.png"} 
          alt="Profile"
        />
      </div> */}
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
