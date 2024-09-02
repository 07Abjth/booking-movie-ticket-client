import  { useState, useEffect } from 'react';

export const ManageShowsPage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetch shows from the backend
    const fetchShows = async () => {
      try {
        const response = await fetch('/api/v1/admin/shows');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };
    fetchShows();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Shows</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Add New Show</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Show ID</th>
            <th className="py-2">Movie</th>
            <th className="py-2">Theater</th>
            <th className="py-2">Date & Time</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show._id}>
              <td className="py-2">{show._id}</td>
              <td className="py-2">{show.movie.title}</td>
              <td className="py-2">{show.theater.name}</td>
              <td className="py-2">{new Date(show.datetime).toLocaleString()}</td>
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
