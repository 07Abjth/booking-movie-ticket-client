// import { Outlet } from "react-router-dom";
// import { UserHeader } from "../user/UserHeader";
// import { Footer } from "../common/Footer";


// export const UserLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <UserHeader />
//       <div className="min-h-96">
//         <Outlet />  {/* The Outlet will render the matched child route */}
//       </div>
//       <Footer />
//     </div>
//   );
// };


import { Outlet } from "react-router-dom";
import { UserHeader } from "../user/UserHeader";
import { Footer } from "../common/Footer";
import UserHomePage from "../../../pages/user/UserHomePage";

export const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* User Header */}
      <UserHeader />

      {/* Main content area */}
      <main className="flex-grow min-h-96 p-4">
        <Outlet />  {/* The Outlet will render the matched child route, such as UserHomePage */}
        <UserHomePage/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
