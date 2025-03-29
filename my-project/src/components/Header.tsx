import { Link } from 'react-router-dom';
import { useAuth } from '../authContext';
import { FaSearch, FaBars, FaBarcode, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-yellow-400 shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-blue-700 font-bold text-xl tracking-wide">
        <div className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-inner">
          📚
        </div>
        <span>Library</span>
      </Link>

      {/* Navigation + Search */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/my-books" className="text-gray-700 hover:text-blue-600 transition font-medium">My Books</Link>
        <Link to="#" className="text-gray-700 hover:text-blue-600 transition font-medium flex items-center gap-1">
          Browse <span className="text-xs">▼</span>
        </Link>

        {/* Search box */}
        <div className="flex items-center border rounded-full px-2 py-1 bg-gray-100 shadow-inner">
          <select className="bg-transparent text-sm text-gray-600 outline-none">
            <option>All</option>
            <option>Title</option>
            <option>Author</option>
          </select>
          <input
            type="text"
            placeholder="Search books..."
            className="bg-transparent px-2 py-1 text-sm text-gray-700 outline-none w-40"
          />
          <button className="text-gray-500 hover:text-blue-600">
            <FaSearch />
          </button>
          <button className="text-gray-500 hover:text-blue-600 ml-2">
            <FaBarcode />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition">Log In</Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/profile"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition"
            >
              <FaUserCircle className="text-xl" />
              {user.name}
            </Link>
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-700 font-medium transition"
            >
              Logout
            </button>
          </>
        )}
        <button className="md:hidden text-2xl text-gray-600 hover:text-black">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;
