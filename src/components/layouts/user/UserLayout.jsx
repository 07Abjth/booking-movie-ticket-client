import { Outlet } from "react-router-dom";
import { UserHeader } from "../user/UserHeader";
import { Footer } from "../common/Footer";


export const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UserHeader />
      <div className="min-h-96">
        <Outlet />  {/* The Outlet will render the matched child route */}
      </div>
      <Footer />
    </div>
  );
};
