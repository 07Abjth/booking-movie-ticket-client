import { Outlet } from "react-router-dom";
import { Header } from "../../layouts/common/Header";
import { Footer } from "../common/Footer";
 
 
export const UserLayout = () => {
  return (
    <div className="">
      <Header />
      <main className="flex-grow pt-[72px] pb-16 px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};




