import { Link } from "react-router-dom";

export const AdminSidebar = () => {
  return (
    <div className="hidden md:block fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-6">
      <nav className="flex flex-col space-y-4">
        <Link to="/admin/manage-users" className="text-lg">Manage Users</Link>
        <Link to="/admin/manage-movies" className="text-lg">Manage Movies</Link>
        <Link to="/admin/manage-theaters" className="text-lg">Manage Theaters</Link>
        <Link to="/admin/manage-shows" className="text-lg">Manage Shows</Link>
        <Link to="/admin/settings" className="text-lg">Admin Settings</Link>
      </nav>
    </div>
  );
};
