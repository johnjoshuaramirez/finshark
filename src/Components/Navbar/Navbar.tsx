import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  return (
    <nav className="bg-white border-b border-gray-300 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="font-bold">Finshark</h1>
        </Link>

        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-8 text-gray-900 font-medium">
            <span>Welcome, {user?.userName}</span>
            <button
              onClick={logout}
              className="px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-none border border-blue-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-gray-900 font-medium">
            <Link
              to="/login"
              className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-none transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-none transition"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
