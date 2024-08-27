import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/RootLayout";
import { HomePage } from "../pages/user/HomePage";
import { LoginPage } from "../pages/user/LoginPage";
import { SignUpPage } from "../pages/user/SignUpPage";
import { AboutPage } from "../pages/user/AboutPage";
import {UserLayout} from "../components/layouts/UserLayout"
import {BookingPage} from "../pages/user/BookingPage";
import { ErrorPage } from "../pages/user/ErrorPage";
import {ProfilePage} from "../pages/user/ProfilePage";
import { MovieDetailsPage } from "../pages/user/MovieDetailsPage";
import { UserAuth } from "./protectedRoutes/UserAuth";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> }, // This handles the homepage route
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "about", element: <AboutPage /> }
    ],
  },

{
    path:"/user",
    element: <UserAuth>
       <UserLayout/>
    </UserAuth>,


    children:[
        // { index: true, element: <HomePage /> }, // This handles the homepage route
        { path: "my-bookings", element: <BookingPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "movie-details", element: <MovieDetailsPage/> },

    ],
}

]);
