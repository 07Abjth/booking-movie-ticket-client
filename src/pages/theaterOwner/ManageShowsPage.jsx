import { useState, useEffect } from 'react';
import axios from 'axios';

export const ManageShowsPage = () => {
  const [shows, setShows] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    movieId: '',
    theaterId: '',
    showTime: '',
    price: '',
  });
  const [editingShow, setEditingShow] = useState(null);

  // Fetch all shows, theaters, and movies when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [showsRes, moviesRes, theatersRes] = await Promise.all([
          axios.get('http://localhost:4000/api/v1/admin/shows'),
          axios.get('http://localhost:4000/api/v1/movie/moviesList'),
          axios.get('http://localhost:4000/api/v1/admin/theaters'),
        ]);
        setShows(showsRes.data.shows);
        setMovies(moviesRes.data.data);
        setTheaters(theatersRes.data.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingShow ? `http://localhost:4000/api/v1/admin/shows/${editingShow._id}` : 'http://localhost:4000/api/v1/admin/shows';
    const method = editingShow ? 'PUT' : 'POST';

    try {
      const res = await axios({ method, url, data: form });
      const data = res.data;

      if (data.success) {
        if (editingShow) {
          setShows(shows.map((show) => (show._id === data.show._id ? data.show : show)));
        } else {
          setShows([...shows, data.show]);
        }
        setForm({ movieId: '', theaterId: '', showTime: '', price: '' });
        setEditingShow(null);
      } else {
        console.error('Failed to save show:', data.message);
      }
    } catch (error) {
      console.error('Error saving show:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this show?')) {
      try {
        const res = await axios.delete(`http://localhost:4000/api/v1/admin/shows/${id}`);
        const data = res.data;
        if (data.success) {
          setShows(shows.filter((show) => show._id !== id));
        } else {
          console.error('Failed to delete show:', data.message);
        }
      } catch (error) {
        console.error('Error deleting show:', error);
      }
    }
  };

  // Handle edit
  const handleEdit = (show) => {
    setForm({
      movieId: show.movie._id,
      theaterId: show.theater._id,
      showTime: show.showTime,
      price: show.price,
    });
    setEditingShow(show);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Shows</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <select
          name="movieId"
          value={form.movieId}
          onChange={handleChange}
          className="block mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Movie</option>
          {movies.map((movie) => (
            <option key={movie._id} value={movie._id}>
              {movie.title}
            </option>
          ))}
        </select>

        <select
          name="theaterId"
          value={form.theaterId}
          onChange={handleChange}
          className="block mb-2 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Theater</option>
          {theaters.map((theater) => (
            <option key={theater._id} value={theater._id}>
              {theater.name}
            </option>
          ))}
        </select>

        <input
          type="datetime-local"
          name="showTime"
          value={form.showTime}
          onChange={handleChange}
          className="block mb-2 p-2 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="block mb-2 p-2 border border-gray-300 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingShow ? 'Update Show' : 'Create Show'}
        </button>
      </form>

      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Movie</th>
            <th className="py-2">Theater</th>
            <th className="py-2">Show Time</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <tr key={show._id}>
              <td className="py-2">{show.movie.title}</td>
              <td className="py-2">{show.theater.name}</td>
              <td className="py-2">{new Date(show.showTime).toLocaleString()}</td>
              <td className="py-2">{show.price}</td>
              <td className="py-2">
                <button onClick={() => handleEdit(show)} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(show._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
