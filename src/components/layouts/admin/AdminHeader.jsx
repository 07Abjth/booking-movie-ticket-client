import { useState } from "react";
import { DarkMode } from "../../ui/DarkMode";
import { Briefcase, CircleUserRound, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const AdminHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between w-full h-32 px-8 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Admin Panel</h1>

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
          <Link to="/admin/dashboard" className="text-lg" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/admin/user-management" className="text-lg" onClick={() => setMenuOpen(false)}>User Management</Link>
          <Link to="/admin/theater-management" className="text-lg" onClick={() => setMenuOpen(false)}>Theater Management</Link>
          <Link to="/admin/settings" className="text-lg" onClick={() => setMenuOpen(false)}>Settings</Link>
        </div>
      )}
    </div>
  );
};
