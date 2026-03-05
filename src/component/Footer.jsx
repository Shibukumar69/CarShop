import React from "react";
import { Link } from "react-router-dom";
import {
  FaCar,
  FaShareAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-4 md:px-10 lg:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 text-red-600 mb-8">
            <FaCar className="text-4xl" />
            <h2 className="text-white text-2xl font-black italic uppercase tracking-tight">
              Shibu Lucky Cars
            </h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The premium destination for automotive excellence.
          </p>

          <div className="flex gap-4">
            <a className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300">
              <FaShareAlt />
            </a>

            <a className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300">
              <FaGlobe />
            </a>

            <a
              href="mailto:info@luckycars.com"
              className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
    <div>
  <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 italic">
    Quick Links
  </h4>

  <ul className="space-y-4">
    {[
      { name: "Inventory", link: "/inventory" },
      { name: "About Us", link: "/about" },
      { name: "Our Services", link: "/services" },
      { name: "Sell Your Car", link: "/sell" },
    ].map((item, i) => (
      <li key={i}>
        <Link
          to={item.link}
          className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-all"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 italic">
            Contact Info
          </h4>

          <ul className="space-y-6 text-gray-400 text-sm">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-600 mt-1" />
              <span className="font-medium">
                123 Performance Way, Miami, FL 33101
              </span>
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-600" />
              <span className="font-medium">+1 (555) 987-6543</span>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="text-red-600" />
              <span className="font-medium">info@luckycars.com</span>
            </li>
          </ul>
        </div>

        {/* Location Placeholder */}
        <div>
          <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8 italic">
            Our Location
          </h4>

          <div className="w-full h-44 bg-zinc-900 border border-white/10 flex items-center justify-center">
            <FaMapMarkerAlt className="text-zinc-700 text-6xl" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs font-black tracking-widest uppercase italic text-center md:text-left">
          © 2024 Shibu Lucky Cars. All Rights Reserved.
        </p>

        <div className="flex gap-10">
          <a className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest">
            Privacy Policy
          </a>
          <a className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest">
            Terms of Service
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;