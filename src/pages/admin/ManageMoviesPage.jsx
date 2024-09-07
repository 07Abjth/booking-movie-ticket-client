import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const ManageMoviesPage = () => {
  const { register, handleSubmit, reset } = useForm();
  const [poster, setPoster] = useState(null);
  const [movies, setMovies] = useState([]);
  const [editingMovie, setEditingMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the list of movies when the component mounts
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/v1/admin/movies');
        const result = await response.json();
        if (result.success) {
          setMovies(result.data);
        } else {
          console.error('Failed to fetch movies:', result.message);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Handle form submission for creating or updating movies
  const onSubmit = async (data) => {
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    if (poster) {
      form.append('poster', poster);
    }

    try {
      let response;
      if (editingMovie) {
        response = await fetch(`/api/v1/admin/movies/${editingMovie._id}`, {
          method: 'PUT',
          body: form,
        });
      } else {
        response = await fetch('/api/v1/admin/movies', {
          method: 'POST',
          body: form,
        });
      }
      const result = await response.json();
      if (result.success) {
        if (editingMovie) {
          setMovies(movies.map(movie => (movie._id === result.data._id ? result.data : movie)));
        } else {
          setMovies([...movies, result.data]);
        }
        reset();
        setPoster(null);
        setEditingMovie(null);
      } else {
        console.error('Failed to save movie:', result.message);
      }
    } catch (error) {
      console.error('Error saving movie:', error);
    }
  };

  // Handle poster file selection
  const handleFileChange = (e) => {
    setPoster(e.target.files[0]);
  };

  // Handle movie edit
  const handleEdit = (movie) => {
    reset({
      title: movie.title,
      description: movie.description,
      releaseDate: movie.releaseDate.split('T')[0],
      duration: movie.duration,
      language: movie.language,
      genre: movie.genre.join(', '),
      director: movie.director,
      cast: movie.cast.join(', '),
      trending: movie.trending,
      upcoming: movie.upcoming,
      isNewRelease: movie.isNewRelease,
      avgRating: movie.avgRating,
      totalRatings: movie.totalRatings,
    });
    setEditingMovie(movie);
  };

  // Handle movie deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        const response = await fetch(`/api/v1/admin/movies/${id}`, { method: 'DELETE' });
        const result = await response.json();
        if (result.success) {
          setMovies(movies.filter(movie => movie._id !== id));
        } else {
          console.error('Failed to delete movie:', result.message);
        }
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Movies</h1>

      {/* Form to create or update a movie */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <input type="text" {...register('title', { required: true })} placeholder="Title" className="block mb-2 p-2 border border-gray-300 rounded" />
        <textarea {...register('description', { required: true })} placeholder="Description" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="date" {...register('releaseDate', { required: true })} className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="number" {...register('duration', { required: true })} placeholder="Duration (minutes)" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" {...register('language', { required: true })} placeholder="Language" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" {...register('genre', { required: true })} placeholder="Genre (comma-separated)" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" {...register('director', { required: true })} placeholder="Director" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="text" {...register('cast', { required: true })} placeholder="Cast (comma-separated)" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="file" onChange={handleFileChange} className="block mb-2 p-2 border border-gray-300 rounded" />
        <div className="mb-4">
          <label>
            <input type="checkbox" {...register('trending')} /> Trending
          </label>
          <label className="ml-4">
            <input type="checkbox" {...register('upcoming')} /> Upcoming
          </label>
          <label className="ml-4">
            <input type="checkbox" {...register('isNewRelease')} /> New Release
          </label>
        </div>
        <input type="number" {...register('avgRating')} placeholder="Average Rating" className="block mb-2 p-2 border border-gray-300 rounded" />
        <input type="number" {...register('totalRatings')} placeholder="Total Ratings" className="block mb-2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{editingMovie ? 'Update Movie' : 'Create Movie'}</button>
      </form>

      {/* Display the list of movies */}
      {loading ? (
        <p>Loading...</p>
      ) : (
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
                <td className="py-2">{movie.genre.join(', ')}</td>
                <td className="py-2">{new Date(movie.releaseDate).toLocaleDateString()}</td>
                <td className="py-2">
                  <button onClick={() => handleEdit(movie)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                  <button onClick={() => handleDelete(movie._id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

