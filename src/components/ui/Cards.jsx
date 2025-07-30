import { useNavigate } from "react-router-dom";
import { Star, Clock, Play } from "lucide-react";

export const MovieCard = ({ movie, gradient = "from-purple-500 to-pink-500" }) => {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate(`/user/movie-info-and-booking/${movie._id}`);
  };

  const fallbackImage = "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80";
  const imageSrc = movie?.image || fallbackImage;
  const movieTitle = movie?.title || "Untitled Movie";
  const movieDescription = movie?.description || "Description not available";
  const rating = movie?.rating || 4.2;
  const duration = movie?.duration || "2h 15m";
  const genre = movie?.genre || "Action";

  return (
    <div className="group relative bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-purple-500/20">
      {/* Movie Poster */}
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt={movieTitle}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`p-4 rounded-full bg-gradient-to-r ${gradient} shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300`}>
            <Play className="w-8 h-8 text-white ml-1" />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>

        {/* Genre Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-bold text-white bg-gradient-to-r ${gradient} rounded-full uppercase tracking-wider`}>
            {genre}
          </span>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {movieTitle}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {movieDescription}
        </p>

        {/* Movie Info */}
        <div className="flex items-center gap-4 mb-6 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleBookTicket}
          className={`w-full py-3 px-6 bg-gradient-to-r ${gradient} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25`}
        >
          Book Tickets
        </button>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl bg-gradient-to-r ${gradient} blur-xl -z-10`}></div>
    </div>
  );
};