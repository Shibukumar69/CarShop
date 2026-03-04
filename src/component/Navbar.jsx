import React from "react";
import { NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 px-4 md:px-10 lg:px-20 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold text-2xl">
          <FaCar className="text-red-600 text-4xl" />
          Lucky Cars
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1 text-xl"
                : "text-gray-400 hover:text-red-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1 text-xl"
                : "text-gray-400 hover:text-red-600 transition"
            }
          >
            Inventory
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1 text-xl"
                : "text-gray-400 hover:text-red-600 transition"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1 text-xl"
                : "text-gray-400 hover:text-red-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1 text-xl"
                : "text-gray-400 hover:text-red-600 transition"
            }
          >
            Contact
          </NavLink>

        </div>

        {/* BUTTON */}
        <button className="hidden md:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
          Book Test Drive
        </button>

      </div>

    </nav>
  );
}

export default Navbar;