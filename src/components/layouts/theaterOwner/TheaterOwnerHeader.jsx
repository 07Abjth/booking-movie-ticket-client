import { useState } from "react";
import { DarkMode } from "../../ui/DarkMode";
import { Briefcase, CircleUserRound, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const TheaterOwnerHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between w-full h-32 px-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Theater Logo</h1>

      {/* Dark Mode and Business Icon */}
      <div className="flex items-center gap-4">
        <DarkMode />
        <Briefcase />

        {/* Hamburger Icon for Mobile Menu and Optional Profile Icon */}
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? <X /> : <Menu />}
        </div>
        <CircleUserRound className="hidden md:block cursor-pointer" />
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {menuOpen && (
        <div className="absolute top-20 right-8 bg-gray-800 text-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-2">
          <Link to="/theaterowner/dashboard" className="text-lg" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/theaterowner/my-shows" className="text-lg" onClick={() => setMenuOpen(false)}>My Shows</Link>
          <Link to="/theaterowner/seat-management" className="text-lg" onClick={() => setMenuOpen(false)}>Seat Management</Link>
          <Link to="/theaterowner/profile" className="text-lg" onClick={() => setMenuOpen(false)}>Profile</Link>
          <Link to="/theaterowner/settings" className="text-lg" onClick={() => setMenuOpen(false)}>Settings</Link>
        </div>
      )}
    </div>
  );
};

// Sidebar Component for Larger Screens
export const TheaterOwnerSidebar = () => {
  return (
    <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-6">
      <nav className="flex flex-col space-y-4">
        <Link to="/theaterowner/dashboard" className="text-lg">Dashboard</Link>
        <Link to="/theaterowner/my-shows" className="text-lg">My Shows</Link>
        <Link to="/theaterowner/seat-management" className="text-lg">Seat Management</Link>
        <Link to="/theaterowner/profile" className="text-lg">Profile</Link>
        <Link to="/theaterowner/settings" className="text-lg">Settings</Link>
      </nav>
    </div>
  );
};
