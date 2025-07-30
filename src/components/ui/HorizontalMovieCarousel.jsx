import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { MovieCard } from "./Cards";

export const HorizontalMovieCarousel = ({ title, movies, gradient = "from-purple-500 to-pink-500" }) => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Limit movies to show max 8 per carousel for better performance
  const displayMovies = movies.slice(0, 12);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [movies]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Card width (280) + gap (40)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      
      // Update scroll indicators after animation
      setTimeout(checkScrollability, 300);
    }
  };

  if (!displayMovies || displayMovies.length === 0) {
    return (
      <div className="mb-12">
        {title && (
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            {title}
          </h2>
        )}
        <div className="flex items-center justify-center h-64 bg-gray-800/50 rounded-3xl border border-gray-700">
          <p className="text-gray-400 text-lg">No movies available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 relative">
      {title && (
        <h2 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient} mb-6 text-center`}>
          {title}
        </h2>
      )}
      
      <div className="relative group">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-gradient-to-r ${gradient} text-white shadow-2xl rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300`}
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={checkScrollability}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          {displayMovies.map((movie, index) => (
            <div 
              key={movie._id || index} 
              className="flex-shrink-0 w-72 transform hover:scale-105 transition-transform duration-300"
            >
              <MovieCard movie={movie} gradient={gradient} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-4 bg-gradient-to-r ${gradient} text-white shadow-2xl rounded-full opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300`}
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Gradient Overlays for Better Visual */}
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Movie Count Indicator */}
      <div className="flex justify-center mt-4">
        <span className="text-sm text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
          Showing {Math.min(displayMovies.length, 4)} of {movies.length} movies
        </span>
      </div>
    </div>
  );
};