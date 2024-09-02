import { Outlet } from "react-router-dom";
import { TheaterOwnerHeader } from "../theaterOwner/TheaterOwnerHeader";
import { Footer } from "../common/Footer";

export const TheaterOwnerLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TheaterOwnerHeader />
      <div className="flex-grow">
        {/* This is where the main content will be rendered */}
        <Outlet />  {/* The Outlet will render the matched child route */}
      </div>
      <Footer />
    </div>
  );
};
