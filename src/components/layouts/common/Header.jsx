import { Link } from "react-router-dom";
import { DarkMode } from "../../ui/DarkMode";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-32 px-8">
      <h1 className="text-2xl font-bold">Logo</h1>

      <nav className="flex space-x-5">
        <Link to="/" className="text-lg">Home</Link>
        <Link to="/about" className="text-lg">About</Link>
      </nav>

      <div className="flex items-center gap-8">
        <Link to="/sign-up">
          <button className="btn btn-active btn-primary">Join us</button>
        </Link>
      </div>

      <DarkMode />
    </div>
  );
};
