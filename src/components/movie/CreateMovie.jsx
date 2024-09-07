 import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateMovie = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/v1/admin/movies', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token storage
        },
      });

      if (response.data.success) {
        toast.success('Movie created successfully');
        navigate('/admin/manage-movies');
      } else {
        toast.error(response.data.message || 'Error creating movie');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            placeholder="Movie Title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Movie Description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        {/* Release Date */}
        <div>
          <label htmlFor="releaseDate" className="block text-sm font-medium text-gray-700">Release Date</label>
          <input
            type="date"
            {...register('releaseDate', { required: 'Release Date is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.releaseDate && <p className="text-red-500 text-sm">{errors.releaseDate.message}</p>}
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (in minutes)</label>
          <input
            type="number"
            {...register('duration', { required: 'Duration is required' })}
            placeholder="Movie Duration"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}
        </div>

        {/* Language */}
        <div>
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Language</label>
          <input
            type="text"
            {...register('language', { required: 'Language is required' })}
            placeholder="Movie Language"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.language && <p className="text-red-500 text-sm">{errors.language.message}</p>}
        </div>

        {/* Genre */}
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
          <input
            type="text"
            {...register('genre', { required: 'Genre is required' })}
            placeholder="Movie Genre"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
        </div>

        {/* Director */}
        <div>
          <label htmlFor="director" className="block text-sm font-medium text-gray-700">Director</label>
          <input
            type="text"
            {...register('director', { required: 'Director is required' })}
            placeholder="Movie Director"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.director && <p className="text-red-500 text-sm">{errors.director.message}</p>}
        </div>

        {/* Cast */}
        <div>
          <label htmlFor="cast" className="block text-sm font-medium text-gray-700">Cast</label>
          <input
            type="text"
            {...register('cast', { required: 'Cast is required' })}
            placeholder="Movie Cast (comma-separated)"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.cast && <p className="text-red-500 text-sm">{errors.cast.message}</p>}
        </div>

        {/* Trending */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('trending')}
            className="mr-2"
          />
          <label htmlFor="trending" className="text-sm font-medium text-gray-700">Trending</label>
        </div>

        {/* Upcoming */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('upcoming')}
            className="mr-2"
          />
          <label htmlFor="upcoming" className="text-sm font-medium text-gray-700">Upcoming</label>
        </div>

        {/* New Release */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('isNewRelease')}
            className="mr-2"
          />
          <label htmlFor="isNewRelease" className="text-sm font-medium text-gray-700">New Release</label>
        </div>

        {/* Average Rating */}
        <div>
          <label htmlFor="avgRating" className="block text-sm font-medium text-gray-700">Average Rating</label>
          <input
            type="number"
            step="0.1"
            {...register('avgRating')}
            placeholder="Average Rating"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Total Ratings */}
        <div>
          <label htmlFor="totalRatings" className="block text-sm font-medium text-gray-700">Total Ratings</label>
          <input
            type="number"
            {...register('totalRatings')}
            placeholder="Total Ratings"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Create Movie
          </button>
        </div>
      </form>
    </div>
  );
};
