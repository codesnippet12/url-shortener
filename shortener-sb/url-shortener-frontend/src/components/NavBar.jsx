import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaLink } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, setToken } = useStoreContext();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  if (token) {
    navItems.push({
      title: "Dashboard",
      path: "/dashboard",
    });
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-4 z-50 px-4"
    >
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-xl h-20 px-6 flex justify-between items-center">

        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex justify-center items-center shadow-lg">
            <FaLink className="text-white text-lg" />
          </div>

          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Linklytics
          </motion.h1>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-5">

          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-xl font-semibold transition-all duration-300
              ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
            >
              {item.title}

              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-2 right-2 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                />
              )}
            </Link>
          ))}

          {token && (
            <div className="hidden lg:flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">

              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-sm font-semibold text-green-700">
                Logged In
              </span>

            </div>
          )}

          {!token ? (
            <Link to="/register">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                Sign Up
              </button>
            </Link>
          ) : (
            <button
              onClick={onLogOutHandler}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FiLogOut />
              Logout
            </button>
          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden"
        >
          {navbarOpen ? (
            <RxCross2 className="text-3xl text-slate-700" />
          ) : (
            <IoIosMenu className="text-3xl text-slate-700" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {navbarOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-5">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setNavbarOpen(false)}
                className={`font-semibold px-3 py-2 rounded-lg transition
                ${
                  location.pathname === item.path
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.title}
              </Link>
            ))}

            {!token ? (
              <Link
                to="/register"
                onClick={() => setNavbarOpen(false)}
              >
                <button className="w-full rounded-xl py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold">
                  Sign Up
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setNavbarOpen(false);
                  onLogOutHandler();
                }}
                className="w-full rounded-xl py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold flex justify-center items-center gap-2"
              >
                <FiLogOut />
                Logout
              </button>
            )}

          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;