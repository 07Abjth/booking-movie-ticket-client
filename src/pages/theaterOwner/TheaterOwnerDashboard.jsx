import { useState } from "react";
import { Link } from "react-router-dom";

export const TheaterOwnerDashboard = () => {
  const [activeSection, setActiveSection] = useState("theaters");

  return (
    <div className="theater-owner-container p-8">
      <h1 className="text-4xl font-bold mb-6">Theater Owner Dashboard</h1>
      <p className="text-lg mb-4">
        Manage your theaters, shows, and seats from this central dashboard.
      </p>
      
      <div className="sidebar bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <ul>
          <li
            className={`cursor-pointer py-2 px-4 rounded-lg mb-2 ${activeSection === "theaters" ? "bg-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActiveSection("theaters")}
          >
            <Link to="/theater-owner/manage-theaters">Manage Theaters</Link>
          </li>
          <li
            className={`cursor-pointer py-2 px-4 rounded-lg mb-2 ${activeSection === "shows" ? "bg-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActiveSection("shows")}
          >
            <Link to="/theater-owner/manage-shows">Manage Shows</Link>
          </li>
          <li
            className={`cursor-pointer py-2 px-4 rounded-lg mb-2 ${activeSection === "seats" ? "bg-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActiveSection("seats")}
          >
            <Link to="/theater-owner/manage-seats">Manage Seats</Link>
          </li>
        </ul>
      </div>

      <div className="content">
        {activeSection === "theaters" && (
          <div className="manage-theaters">
            <h2 className="text-2xl font-semibold mb-4">Manage Theaters</h2>
            <p>Here you can view and manage your theaters.</p>
            {/* Add functionality for managing theaters here */}
          </div>
        )}
        {activeSection === "shows" && (
          <div className="manage-shows">
            <h2 className="text-2xl font-semibold mb-4">Manage Shows</h2>
            <p>Here you can view and manage shows in your theaters.</p>
            {/* Add functionality for managing shows here */}
          </div>
        )}
        {activeSection === "seats" && (
          <div className="manage-seats">
            <h2 className="text-2xl font-semibold mb-4">Manage Seats</h2>
            <p>Here you can view and manage seats in your theaters.</p>
            {/* Add functionality for managing seats here */}
          </div>
        )}
      </div>
    </div>
  );
};
