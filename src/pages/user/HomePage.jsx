// import { useNavigate } from 'react-router-dom';
// import MovieListPage from './MovieListPage';
 

// export const HomePage = () => {

  
//   const navigate = useNavigate();

//   return (
//     <div className="home-container text-center p-8 px-20" >
//       <h1 className="text-4xl font-bold mb-6">Welcome to CineTicketsBook</h1>

//       <p className="text-lg mb-4">
//         Your ultimate destination for booking movie tickets. Discover the latest movies and book your seats now!
//       </p>
//       <div className="cta-buttons mt-6">
//         <button
//           onClick={() => navigate('/movies')}
//           className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600 transition"
//         >
//           Explore Movies
//         </button>
//         <button
//           onClick={() => navigate('/book-tickets')}
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//         >
//           Book Tickets
//         </button>
//       </div>
//       <br />
//       {/* Carousel */}
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//             className="w-full"
//             alt="Slide 1"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">❮</a>
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//             className="w-full"
//             alt="Slide 2"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">❮</a>
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//             className="w-full"
//             alt="Slide 3"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">❮</a>
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//             className="w-full"
//             alt="Slide 4"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide3" className="btn btn-circle">❮</a>
//             <a href="#slide1" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//       </div>

//       {/* Movie Listings */}
//       <MovieListPage />
//     </div>
//   );
// };


// import { useNavigate } from 'react-router-dom';
// import MovieListPage from './MovieListPage';

// export const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container text-center p-8 px-20">
//       <h1 className="text-4xl font-bold mb-6">Welcome to CineTicketsBook</h1>

//       <p className="text-lg mb-4">
//         Your ultimate destination for booking movie tickets. Discover the latest movies and book your seats now!
//       </p>
//       <div className="cta-buttons mt-6">
//         <button
//           onClick={() => navigate('/movies')}
//           className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600 transition"
//         >
//           Explore Movies
//         </button>
//         <button
//           onClick={() => navigate('/book-tickets')}
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
//         >
//           Book Tickets
//         </button>
//       </div>
//       <br />
//       {/* Carousel */}
//       <div className="carousel w-full">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img
//             src="https://images.unsplash.com/photo-1491458981945-2c8ed45c6a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdmllfGVufDB8fHx8MTY4NTg5ODI1Mg&ixlib=rb-1.2.1&q=80&w=1080"
//             className="w-full"
//             alt="Movie Scene 1"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide4" className="btn btn-circle">❮</a>
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide2" className="carousel-item relative w-full">
//           <img
//             src="https://images.unsplash.com/photo-1496781431441-dc6ecdf6f147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxtb3ZpZXxlbnwwfHx8fDE2ODU4OTgyNTY&ixlib=rb-1.2.1&q=80&w=1080"
//             className="w-full"
//             alt="Movie Scene 2"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide1" className="btn btn-circle">❮</a>
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide3" className="carousel-item relative w-full">
//           <img
//             src="https://images.unsplash.com/photo-1542631876-3c8cd60b5ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxtb3ZpZXxlbnwwfHx8fDE2ODU4OTgyNjA&ixlib=rb-1.2.1&q=80&w=1080"
//             className="w-full"
//             alt="Movie Scene 3"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide2" className="btn btn-circle">❮</a>
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//         <div id="slide4" className="carousel-item relative w-full">
//           <img
//             src="https://images.unsplash.com/photo-1519491974734-c507ac8cc37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxsb2dpY2FsaXplZCUyMGJpbGxlJTIwbG9uZ3xlbnwwfHx8fDE2ODU4OTgyNzE&ixlib=rb-1.2.1&q=80&w=1080"
//             className="w-full"
//             alt="Movie Scene 4"
//           />
//           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//             <a href="#slide3" className="btn btn-circle">❮</a>
//             <a href="#slide1" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//       </div>

//       {/* Movie Listings */}
//       <MovieListPage />
//     </div>
//   );
// };


import { useNavigate } from 'react-router-dom';
import MovieListPage from './MovieListPage';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container text-center p-4 sm:p-6 md:p-8 lg:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
        Welcome to CineTicketsBook
      </h1>

      <p className="text-sm sm:text-base md:text-lg mb-4">
        Your ultimate destination for booking movie tickets. Discover the latest movies and book your seats now!
      </p>

      <div className="cta-buttons mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => navigate('/movies')}
          className="w-40 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Explore Movies
        </button>
        <button
          onClick={() => navigate('/book-tickets')}
          className="w-40 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Book Tickets
        </button>
      </div>

      <br />

      {/* Carousel */}
      <div className="carousel w-full mt-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1491458981945-2c8ed45c6a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdmllfGVufDB8fHx8MTY4NTg5ODI1Mg&ixlib=rb-1.2.1&q=80&w=1080"
            className="w-full object-cover h-40 sm:h-60 md:h-80 lg:h-96"
            alt="Movie Scene 1"
          />
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle text-2xl">❮</a>
            <a href="#slide2" className="btn btn-circle text-2xl">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1496781431441-dc6ecdf6f147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxtb3ZpZXxlbnwwfHx8fDE2ODU4OTgyNTY&ixlib=rb-1.2.1&q=80&w=1080"
            className="w-full object-cover h-40 sm:h-60 md:h-80 lg:h-96"
            alt="Movie Scene 2"
          />
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle text-2xl">❮</a>
            <a href="#slide3" className="btn btn-circle text-2xl">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1542631876-3c8cd60b5ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxtb3ZpZXxlbnwwfHx8fDE2ODU4OTgyNjA&ixlib=rb-1.2.1&q=80&w=1080"
            className="w-full object-cover h-40 sm:h-60 md:h-80 lg:h-96"
            alt="Movie Scene 3"
          />
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle text-2xl">❮</a>
            <a href="#slide4" className="btn btn-circle text-2xl">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.unsplash.com/photo-1519491974734-c507ac8cc37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxsb2dpY2FsaXplZCUyMGJpbGxlJTIwbG9uZ3xlbnwwfHx8fDE2ODU4OTgyNzE&ixlib=rb-1.2.1&q=80&w=1080"
            className="w-full object-cover h-40 sm:h-60 md:h-80 lg:h-96"
            alt="Movie Scene 4"
          />
          <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle text-2xl">❮</a>
            <a href="#slide1" className="btn btn-circle text-2xl">❯</a>
          </div>
        </div>
      </div>

      {/* Movie Listings */}
      <MovieListPage />
    </div>
  );
};
