import { useState } from "react";
import { DarkMode } from "../../ui/DarkMode";
import { BriefcaseBusiness, CircleUserRound, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../../services/userApi";
import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications

export const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await userLogout();  // API call to backend to remove session
      toast.success("Logged out successfully"); // Notify the user
      navigate("/login");  // Redirect to login or homepage
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header className="flex items-center justify-between w-full h-16 px-8 bg-gray-800 text-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/user/homepage")}>Logo</h1>

      {/* Dark Mode Toggle and Business Icon */}
      <div className="flex items-center gap-4">
        <DarkMode />
        <BriefcaseBusiness />

        {/* Hamburger Menu Icon for Mobile and Profile Icon */}
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? <X /> : <Menu />}
        </div>
        <CircleUserRound className="hidden md:block cursor-pointer" onClick={() => navigate("/user/profile")} />
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white text-black shadow-lg rounded-lg flex flex-col items-start p-4 space-y-2">
          <Link to="/user/user-homepage" className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/user/my-bookings" className="text-lg" onClick={() => setMenuOpen(false)}>My Bookings</Link>
          <Link to="/user/watch-list" className="text-lg" onClick={() => setMenuOpen(false)}>Watch List</Link>
          <Link to="/user/settings" className="text-lg" onClick={() => setMenuOpen(false)}>Profile Settings</Link>
          <Link to="/user/notifications" className="text-lg" onClick={() => setMenuOpen(false)}>Notifications</Link>
          <button className="text-lg" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};
