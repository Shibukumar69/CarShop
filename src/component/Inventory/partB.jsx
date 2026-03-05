import React from "react";
import { Link } from "react-router-dom";
function partB() {
  return (
    <div>
      <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-2 text-red-600 mb-8">
              <span className="material-symbols-outlined text-4xl font-bold">
                directions_car
              </span>

              <h2 className="text-white text-2xl font-black italic uppercase tracking-tighter">
                Lucky Cars
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              The premium destination for automotive excellence. Dedicated to
              providing superior customer service and a world-class selection of
              luxury vehicles.
            </p>

            <div className="flex gap-4">
              <a
                className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>

              <a
                className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">
                  public
                </span>
              </a>

              <a
                className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
                href="#"
              >
              
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
         <div>
  <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
    Quick Links
  </h4>

  <ul className="space-y-4">
    <li>
      <Link
        className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest"
        to="/inventory"
      >
        Inventory
      </Link>
    </li>

    <li>
      <Link
        className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest"
        to="/about"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest"
        to="/services"
      >
        Our Services
      </Link>
    </li>

    <li>
      <Link
        className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest"
        to="/sell"
      >
        Sell Your Car
      </Link>
    </li>
  </ul>
</div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
              Contact Info
            </h4>

            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-red-600">
                  location_on
                </span>

                <span className="font-medium">
                  123 Performance Way, Motor District
                  <br />
                  Miami, FL 33101
                </span>
              </li>

              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-red-600">
                  phone_iphone
                </span>

                <span className="font-medium">+1 (555) 987-6543</span>
              </li>

              <li className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-red-600">
                  mail
                </span>

                <span className="font-medium">info@luckycars.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
              Our Location
            </h4>

            <div className="w-full h-44 overflow-hidden grayscale brightness-125 border border-white/10 hover:brightness-100 transition-all duration-500">
              <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-zinc-700 text-6xl">
                  map
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-black tracking-[0.3em] uppercase italic">
            © 2024 LUCKY CARS MOTORS. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-10">
            <a
              className="text-gray-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest"
              href="#"
            >
              Privacy Policy
            </a>

            <a
              className="text-gray-400 hover:text-red-600 text-xs font-bold uppercase tracking-widest"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default partB;
