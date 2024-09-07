import { Outlet } from "react-router-dom";
import {AdminHeader} from './AdminHeader.jsx'
 import { Footer } from "../common/Footer";

export const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader /> {/* Header at the top */}
        <div className="flex-grow">
          <Outlet /> {/* Renders the child route */}
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </div>
  );
};
