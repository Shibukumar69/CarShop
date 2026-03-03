import React from "react";
import { FaCar } from "react-icons/fa";

function Navbar() {
  return (
    <div>
    <nav className="sticky top-0 z-50 w-full bg-black backdrop-blur-md border-b border-white/10 px-4 md:px-10 lg:px-20 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-2 text-red-600">
        
          <FaCar className="text-4xl" />
          <h2 className="text-white text-2xl font-black tracking-tighter uppercase italic">
           Shibu Lucky Cars
          </h2>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a className="text-white hover:text-red-600 text-sm font-bold uppercase tracking-widest" href="#">Home</a>
          <a className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest" href="#">Inventory</a>
          <a className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest" href="#">About</a>
          <a className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest" href="#">Services</a>
          <a className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest" href="#">Contact</a>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 text-sm font-black transition-all">
          LOGIN
        </button>

      </div>
    </nav>
    
    </div>
  );
}

export default Navbar;