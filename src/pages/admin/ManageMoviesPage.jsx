import   { useState, useEffect } from 'react';

export const ManageMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from the backend
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/v1/admin/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Movies</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">Add New Movie</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Movie ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Genre</th>
            <th className="py-2">Release Date</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td className="py-2">{movie._id}</td>
              <td className="py-2">{movie.title}</td>
              <td className="py-2">{movie.genre}</td>
              <td className="py-2">{new Date(movie.releaseDate).toLocaleDateString()}</td>
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
