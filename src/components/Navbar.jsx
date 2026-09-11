import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ searchQuery: externalQuery, onSearchChange }) {
  const navigate = useNavigate();
  const [internalQuery, setInternalQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const query = externalQuery !== undefined ? externalQuery : internalQuery;

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (onSearchChange) {
      onSearchChange(val);
    } else {
      setInternalQuery(val);
    }
  };

  const handleClear = () => {
    if (onSearchChange) {
      onSearchChange("");
    } else {
      setInternalQuery("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-6">
      
      {/* 🌟 Logo + Brand */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2.5 group cursor-pointer shrink-0 focus:outline-none"
        title="PinVerse Home"
      >
        {/* Brand Icon: Stylized Pin + Orbit */}
        <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 via-red-600 to-red-500 flex items-center justify-center shadow-md shadow-red-500/25 group-hover:scale-105 group-hover:shadow-red-500/40 transition-all duration-300">
          <svg
            className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {/* Elegant Pinterest-style Pin Icon */}
            <path d="M12 2C7.58 2 4 5.58 4 10c0 3.4 2.12 6.3 5.14 7.42-.07-.63-.13-1.6.03-2.29.14-.62.92-3.9.92-3.9s-.23-.47-.23-1.16c0-1.09.63-1.9 1.42-1.9.67 0 .99.5 0.99 1.11 0 .67-.43 1.68-.65 2.61-.18.79.4 1.43 1.18 1.43 1.42 0 2.51-1.5 2.51-3.66 0-1.92-1.38-3.25-3.34-3.25-2.44 0-3.87 1.83-3.87 3.72 0 .74.28 1.53.64 1.96.07.08.08.16.06.24-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.13-.53-1.84-2.18-1.84-3.51 0-2.86 2.08-5.48 6-5.48 3.15 0 5.6 2.25 5.6 5.25 0 3.13-1.97 5.65-4.71 5.65-.92 0-1.78-.48-2.08-1.05l-.57 2.16c-.2.79-.76 1.77-1.13 2.38.86.27 1.77.41 2.71.41 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          {/* Sparkle badge indicator */}
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </div>

        {/* Brand Text */}
        <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 group-hover:opacity-90 transition">
          Pin<span className="text-red-600">Verse</span>
        </span>
      </button>

      {/* 🔍 Centre Search Bar */}
      <div className="flex-1 max-w-2xl mx-2 sm:mx-4">
        <div className="relative flex items-center w-full bg-gray-100 hover:bg-gray-200/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500/20 focus-within:border-gray-200 border border-transparent rounded-full px-4 py-2 sm:py-2.5 transition-all duration-200 shadow-inner">
          {/* Search Icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2.5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Search Input */}
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for inspiration, pins, wallpapers..."
            className="w-full bg-transparent text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none font-medium"
          />

          {/* Clear Button */}
          {query && (
            <button
              onClick={handleClear}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200/60 transition"
              title="Clear search"
            >
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* 🚀 Right Navigation Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <button
          onClick={() => navigate("/")}
          className="hidden md:inline-flex px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
        >
          Home
        </button>

        {/* Upload Button */}
        <button
          onClick={() => navigate("/upload")}
          className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span>Upload</span>
        </button>

        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/profile")}
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 rounded-full transition"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-3 py-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 active:scale-95 text-gray-800 text-xs sm:text-sm font-semibold rounded-full transition duration-200"
            >
              Log in
            </button>

            <button
              onClick={() => navigate("/register")}
              className="hidden sm:inline-flex px-3 sm:px-4 py-2 bg-black hover:bg-gray-800 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-full shadow-sm transition duration-200"
            >
              Sign up
            </button>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;