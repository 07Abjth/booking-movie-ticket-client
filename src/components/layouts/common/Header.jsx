import { useState, useEffect } from "react";
import { DarkMode } from "../../ui/DarkMode";
import {
  BriefcaseBusiness,
  CircleUserRound,
  Menu,
  X,
  Home,
  Calendar,
  Heart,
  Settings,
  Bell,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../../services/userApi";
import { toast } from "react-hot-toast";
import axios from "axios";
import logo from "../../../assets/logo/logo.png";
import { axiosInstance } from "../../../config/axiosInstance";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

// Check user authentication status
  useEffect(() => {
    const checkUser = async () => {
      try {
        // CHANGE: Use axiosInstance instead of hardcoded axios
        const { data } = await axiosInstance.get("/user/check-user");
        console.log("Header auth check:", data);
        setUser(data.success || data.isAuthenticated);
      } catch (error) {
        console.error("Header auth error:", error);
        setUser(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);


  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await userLogout();
      toast.success("Logged out successfully");
      setUser(false);
      setMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Loading state
  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="h-8 w-32 bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="h-8 w-20 bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate(user ? "/user/homepage" : "/")}
          >
            <div className="relative">
              <img
                src={logo}
                alt="CineTickets Logo"
                className="h-10 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                CineTickets
              </h1>
            </div>
          </div>

          {/* Navigation - Desktop */}
          {user ? (
            // Authenticated User Navigation
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/user/homepage"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                to="/user/my-bookings"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>My Bookings</span>
              </Link>
              <Link
                to="/user/watch-list"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                <Heart className="w-4 h-4" />
                <span>Watchlist</span>
              </Link>
            </nav>
          ) : (
            // Public Navigation
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                About
              </Link>
              <Link
                to="/movies"
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl"
              >
                Movies
              </Link>
            </nav>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {user ? (
              // Authenticated User Actions
              <>
                {/* Business Icon */}
                <div className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer hover:bg-gray-800/50 rounded-xl">
                  <BriefcaseBusiness className="w-5 h-5" />
                </div>

                {/* Notifications */}
                <Link
                  to="/user/notifications"
                  className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-xl relative"
                >
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Link>

                {/* Profile Icon - Desktop */}
                <Link
                  to="/user/profile"
                  className="hidden md:block p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-xl"
                >
                  <CircleUserRound className="w-5 h-5" />
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={handleMenuToggle}
                  className="md:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-xl"
                >
                  {menuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </>
            ) : (
              // Public User Actions
              <>
                <Link to="/login">
                  <button className="hidden sm:block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-xl">
                    Login
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300">
                    <span className="hidden sm:inline">Join Us</span>
                    <Sparkles className="w-4 h-4 sm:hidden" />
                  </button>
                </Link>

                {/* Mobile Menu Toggle for Public */}
                <button
                  onClick={handleMenuToggle}
                  className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 rounded-xl"
                >
                  {menuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700/50">
            <div className="container mx-auto px-6 py-6">
              {user ? (
                // Authenticated Mobile Menu
                <div className="space-y-4">
                  <Link
                    to="/user/homepage"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <Home className="w-5 h-5" />
                    <span className="text-lg">Home</span>
                  </Link>
                  <Link
                    to="/user/my-bookings"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg">My Bookings</span>
                  </Link>
                  <Link
                    to="/user/watch-list"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="text-lg">Watchlist</span>
                  </Link>
                  <Link
                    to="/user/profile"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <CircleUserRound className="w-5 h-5" />
                    <span className="text-lg">Profile</span>
                  </Link>
                  <Link
                    to="/user/settings"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="text-lg">Settings</span>
                  </Link>
                  <Link
                    to="/user/notifications"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50"
                    onClick={closeMenu}
                  >
                    <Bell className="w-5 h-5" />
                    <span className="text-lg">Notifications</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors duration-300 p-3 rounded-xl hover:bg-red-900/20 w-full text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-lg">Logout</span>
                  </button>
                </div>
              ) : (
                // Public Mobile Menu
                <div className="space-y-4">
                  <Link
                    to="/"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50 text-lg"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50 text-lg"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    to="/movies"
                    className="block text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50 text-lg"
                    onClick={closeMenu}
                  >
                    Movies
                  </Link>
                  <div className="pt-4 border-t border-gray-700/50 space-y-4">
                    <Link
                      to="/login"
                      className="block text-gray-300 hover:text-white transition-colors duration-300 p-3 rounded-xl hover:bg-gray-800/50 text-lg"
                      onClick={closeMenu}
                    >
                      Login
                    </Link>
                    <Link to="/sign-up" className="block" onClick={closeMenu}>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg text-lg">
                        Join Us
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
