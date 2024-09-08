import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from '../components/layouts/user/UserLayout.jsx';
import {UserHomePage} from "../pages/user/UserHomePage.jsx"; 
import { BookingPage } from "../pages/user/BookingPage.jsx";
import { ProfilePage } from "../pages/user/ProfilePage.jsx";
import { MovieDetailsPage } from "../pages/user/MovieDetailsPage.jsx";
import { PaymentPage } from "../pages/user/PaymentPage.jsx";
import {SettingsPage} from '../pages/user/SettingsPage.jsx';
import {WatchListPage} from '../pages/user/WatchListPage.jsx';
import {NotificationsPage} from '../pages/user/NotificationsPage.jsx';
import {UserReviewsPage} from '../pages/user/UserReviewsPage.jsx';
import {SupportPage} from '../pages/user/SupportPage.jsx';
import {HistoryPage} from '../pages/user/HistoryPage.jsx';
import { RootLayout } from "../components/layouts/RootLayout.jsx";
import { HomePage } from "../pages/user/HomePage.jsx";
import { LoginPage } from "../pages/user/LoginPage.jsx";
import { SignUpPage } from "../pages/user/SignUpPage.jsx";
import { AboutPage } from "../pages/user/AboutPage.jsx";
import { ErrorPage } from "../pages/user/ErrorPage.jsx";
import {LogoutPage} from '../pages/user/LogoutPage.jsx';


import { UserAuth } from "./protectedRoutes/UserAuth.jsx"; // Middleware for general user authentication
// import { TheaterOwnerAuth } from "./protectedRoutes/TheaterOwnerAuth.jsx"; // Middleware for theater owner authentication
// import { AdminAuth } from "./protectedRoutes/AdminAuth.jsx"; // Middleware for admin authentication

import { TheaterOwnerLayout } from "../components/layouts/theaterOwner/TheaterOwnerLayout.jsx";
import { TheaterOwnerSettingsPage} from "../pages/theaterOwner/TheaterOwnerSettingsPage.jsx";
import { TheaterOwnerDashboard } from "../pages/theaterOwner/TheaterOwnerDashboard.jsx";
import { ManageTheatersPage } from "../pages/theaterOwner/ManageTheatersPage.jsx";
import { ManageMoviesPage } from "../pages/theaterOwner/ManageMoviesPage.jsx";
import { ManageShowsPage } from "../pages/theaterOwner/ManageShowsPage.jsx";
import { ManageSeatsPage } from "../pages/theaterOwner/ManageSeatsPage.jsx";


import { AdminLayout } from "../components/layouts/admin/AdminLayout.jsx";
import { AdminSettingsPage } from "../pages/admin/AdminSettingsPage.jsx";
import { ManageUsersPage } from "../pages/admin/ManageUsersPage.jsx";
// import { ManageMoviesPage } from "../pages/admin/ManageMoviesPage.jsx";
import { AdminLoginPage } from "../pages/admin/AdminLogin.jsx";
 
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signUp", element: <SignUpPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "user",
    element: (
      <UserAuth>
        <UserLayout />
      </UserAuth>
    ),
    children: [
      { path: "user-homepage", element: <UserHomePage /> },            // My Bookings
      
      { path: "my-bookings", element: <BookingPage /> },            // My Bookings
      { path: "profile", element: <ProfilePage /> },                // Profile
      { path: "movie-details/:id", element: <MovieDetailsPage /> }, // Movie Details
      { path: "payment", element: <PaymentPage /> },                // Payment
      { path: "settings", element: <SettingsPage /> },              // Account Settings
      { path: "watch-list", element: <WatchListPage /> },            // WatchList
      { path: "notifications", element: <NotificationsPage /> },    // Notifications
      { path: "reviews", element: <UserReviewsPage /> },            // User Reviews
      { path: "support", element: <SupportPage /> },                // Support/Help
      { path: "history", element: <HistoryPage /> },                // Booking History
      { path: "logout", element: <LogoutPage /> },                  // Logout
    ],
  },
 
  {
    path: "/theater-owner",
    element: (
      
        <TheaterOwnerLayout />
    ),
    children: [
      { path: "theater-owner-dashboard", element: <TheaterOwnerDashboard /> },
      { path: "manage-theaters", element: <ManageTheatersPage /> },
      { path: "manage-movies", element: <ManageMoviesPage /> },
      { path: "manage-shows", element: <ManageShowsPage /> },
      { path: "manage-seats", element: <ManageSeatsPage /> },
      { path: "theater-owner-settings", element: <TheaterOwnerSettingsPage /> },
    
    ],
  },
  
    {
      path: "/admin-login",
      element: <AdminLoginPage />,
    },
    {
      path: "/admin",
      element: (
        
          <AdminLayout />
       
      ),
      children: [
        { path: "manage-users", element: <ManageUsersPage /> },
        { path: "manage-movies", element: <ManageMoviesPage /> },
        { path: "manage-theaters", element: <ManageTheatersPage /> },
        { path: "manage-shows", element: <ManageShowsPage /> },
        { path: "settings", element: <AdminSettingsPage /> },
      ],
    }
]);


