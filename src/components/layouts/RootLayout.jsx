import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

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
