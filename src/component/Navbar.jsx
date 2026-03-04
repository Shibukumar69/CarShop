import React from "react";
import { NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 px-4 md:px-10 lg:px-20 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <FaCar className="text-white text-xl" />
          Lucky Cars
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "text-gray-400 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "text-gray-400 hover:text-white transition"
            }
          >
            Inventory
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "text-gray-400 hover:text-white transition"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "text-gray-400 hover:text-white transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-white pb-1"
                : "text-gray-400 hover:text-white transition"
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