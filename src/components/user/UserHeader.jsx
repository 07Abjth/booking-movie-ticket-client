import { useNavigate } from "react-router-dom";
import { DarkMode } from "../ui/DarkMode";
import { BriefcaseBusiness, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";


export const UserHeader = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/user/profile");
  };

  return (
    <div className="flex items-center justify-between w-full h-32 px-8">
      <h1 className="text-2xl font-bold">Logo</h1>

      <nav className="flex space-x-5">
        <Link to={"/"} className="text-lg">Home</Link>
        <Link to={"/user/my-bookings"} className="text-lg">My bookings</Link>
        {/* <Link to={"/user/profile"} className="text-lg">Profile</Link> */}
      </nav>

      <div className="flex items-center gap-4">
        <DarkMode />
        <BriefcaseBusiness />
        
        {/* OnClick function for the profile icon */}
        <CircleUserRound className="cursor-pointer" onClick={handleProfileClick} />
      </div>
    </div>
  );
};
