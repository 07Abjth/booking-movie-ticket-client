import { Outlet } from "react-router-dom";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
<div className="min-h-96">
 <Outlet />  {/* The Outlet will render the matched child route */}


</div>

     
      <Footer/>
    </div>
  );
};
