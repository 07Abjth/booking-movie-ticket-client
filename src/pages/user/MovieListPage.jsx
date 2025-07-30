import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";
import { HorizontalMovieCarousel } from "../../components/ui/HorizontalMovieCarousel";
import { ChevronDown, Sparkles, TrendingUp, Calendar } from "lucide-react";

const MovieListPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const upcoming = await axiosInstance.get("/movie/upcoming");
      const trending = await axiosInstance.get("/movie/trending");
      const newReleases = await axiosInstance.get("/movie/new-releases");

    setNewReleases(newReleases.data.data || []);
    setUpcomingMovies(upcoming.data.data || []);
    setTrendingMovies(trending.data.data || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      toast.error("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const carousels = [

       { 
      title: "Fresh Releases", 
      movies: newReleases,
      icon: Sparkles,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10"
    },
    { 
      title: "Trending Now", 
      movies: trendingMovies,
      icon: TrendingUp,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10"
    },
    { 
      title: "Coming Soon", 
      movies: upcomingMovies,
      icon: Calendar,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
 
  ];

  const visibleCarousels = showAll ? carousels : carousels.slice(0, 2);
  const showMoreAvailable = carousels.length > 2;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 sm:px-8 md:px-16 py-16">
        <div className="text-center py-32">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-400 mx-auto mb-6"></div>
          <p className="text-2xl font-semibold text-white animate-pulse">
            Loading amazing movies...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-4 sm:px-8 md:px-16 py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
          Discover Movies
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From blockbusters to indie gems, find your next favorite film
        </p>
      </div>

      {/* Movie Carousels */}
      <div className="space-y-16">
        {visibleCarousels.map((section, idx) => {
          const IconComponent = section.icon;
          return (
            <div key={idx} className="relative">
              {/* Section Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${section.bgGradient} rounded-3xl blur-3xl opacity-20`}></div>
              
              {/* Section Content */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                {/* Section Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${section.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${section.gradient}`}>
                    {section.title}
                  </h3>
                </div>

                {/* Carousel */}
                <HorizontalMovieCarousel
                  title=""
                  movies={section.movies}
                  gradient={section.gradient}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button */}
      {showMoreAvailable && (
        <div className="flex justify-center pt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span>{showAll ? "Show Less" : "Discover More"}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default MovieListPage;