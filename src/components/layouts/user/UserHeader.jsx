import { useState } from "react";
import { DarkMode } from "../../ui/DarkMode";
import { BriefcaseBusiness, CircleUserRound, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between w-full h-32 px-8">
      <h1 className="text-2xl font-bold">Logo</h1>

      {/* Dark Mode and Business Icon */}
      <div className="flex items-center gap-4">
        <DarkMode />
        <BriefcaseBusiness />

        {/* Hamburger Icon for Mobile Menu and Optional Profile Icon */}
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {menuOpen ? <X /> : <Menu />}
        </div>
        <CircleUserRound className="hidden md:block cursor-pointer" />
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      {menuOpen && (
        <div className="absolute top-20 right-8 bg-white shadow-lg rounded-lg flex flex-col items-start p-4 space-y-2">
          <Link to={"/"} className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={"/user/my-bookings"} className="text-lg" onClick={() => setMenuOpen(false)}>My bookings</Link>
          <Link to={"/user/profile"} className="text-lg" onClick={() => setMenuOpen(false)}>Profile</Link>
          <Link to={"/user/settings"} className="text-lg" onClick={() => setMenuOpen(false)}>Settings</Link>
        </div>
      )}
    </div>
  );
};

 