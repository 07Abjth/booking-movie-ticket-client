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
import { TheatersDetailsPage } from "../pages/theaterOwner/TheatersDetailsPage.jsx";


import { UserAuth } from "./protectedRoutes/UserAuth.jsx"; // Middleware for general user authentication
import { TheaterOwnerAuth } from "./protectedRoutes/TheaterOwnerAuth.jsx"; // Middleware for theater owner authentication
import { AdminAuth } from "./protectedRoutes/AdminAuth.jsx"; // Middleware for admin authentication

import { TheaterOwnerSignUpPage } from "../pages/theaterOwner/TheaterOwnerSignUpPage.jsx";
import { TheaterOwnerLoginPage } from "../pages/theaterOwner/TheaterOwnerLoginPage.jsx";
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
import { AdminDashboard } from "../pages/admin/AdminDashboard.jsx"; 


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },

  // User Routes
  {
    path: "/user",
    element: (
      <UserAuth>
        <UserLayout />
      </UserAuth>
    ),
    children: [
      { path: "user-homepage", element: <UserHomePage /> },
      { path: "my-bookings", element: <BookingPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "theater-details", element: <TheatersDetailsPage /> },
      { path: "movie-details/:id", element: <MovieDetailsPage /> },
      { path: "payment", element: <PaymentPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "watch-list", element: <WatchListPage /> },
      { path: "notifications", element: <NotificationsPage /> },
      { path: "reviews", element: <UserReviewsPage /> },
      { path: "support", element: <SupportPage /> },
      { path: "history", element: <HistoryPage /> },
    ],
  },

  // Theater Owner Routes
  {
    path: "/theater-owner/login", // Theater owner login
    element: <TheaterOwnerLoginPage />,
  },
  {
    path: "/theater-owner/signup", // Theater owner login
    element: <TheaterOwnerSignUpPage />,
  },
  {
    path: "/theater-owner",
    element: (
      <TheaterOwnerAuth>
        <TheaterOwnerLayout />
      </TheaterOwnerAuth>
    ),
    children: [
      { path: "dashboard", element: <TheaterOwnerDashboard /> },
      { path: "manage-theaters", element: <ManageTheatersPage /> },
      { path: "manage-movies", element: <ManageMoviesPage /> },
      { path: "manage-shows", element: <ManageShowsPage /> },
      { path: "manage-seats", element: <ManageSeatsPage /> },
      { path: "settings", element: <TheaterOwnerSettingsPage /> },
    ],
  },

  // Admin Routes
  {
    path: "/admin/login", // Admin login
    element: <AdminLoginPage />,
  },
  {
    path: "/admin",
    element: (
      <AdminAuth>
        <AdminLayout />
      </AdminAuth>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
      { path: "manage-users", element: <ManageUsersPage /> },
      { path: "manage-movies", element: <ManageMoviesPage /> },
      { path: "manage-theaters", element: <ManageTheatersPage /> },
      { path: "manage-shows", element: <ManageShowsPage /> },
      { path: "settings", element: <AdminSettingsPage /> },
    ],
  },
]);
