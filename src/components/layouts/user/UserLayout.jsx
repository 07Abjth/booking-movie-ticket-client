import { Outlet } from "react-router-dom";
import { Header } from "../../layouts/common/Header";
import { Footer } from "../common/Footer";
 
 
  

export const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow pt-[72px] px-0">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

 




