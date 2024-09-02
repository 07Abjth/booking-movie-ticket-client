import   { useState, useEffect } from 'react';

export const ManageTheatersPage = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    // Fetch theaters from the backend
    const fetchTheaters = async () => {
      try {
        const response = await fetch('/api/v1/admin/theaters');
        const data = await response.json();
        setTheaters(data);
      } catch (error) {
        console.error('Error fetching theaters:', error);
      }
    };
    fetchTheaters();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Theaters</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Add New Theater</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Theater ID</th>
            <th className="py-2">Name</th>
            <th className="py-2">Location</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {theaters.map(theater => (
            <tr key={theater._id}>
              <td className="py-2">{theater._id}</td>
              <td className="py-2">{theater.name}</td>
              <td className="py-2">{theater.location}</td>
              <td className="py-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
