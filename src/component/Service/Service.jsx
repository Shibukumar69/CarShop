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
function Service() {
return ( <div className="bg-[#0a0a0a] text-white font-sans">
  {/* HERO SECTION */}
  <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <img
        alt="Service Hero"
        className="w-full h-full object-cover opacity-40 grayscale"
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>

    <div className="relative z-10 text-center px-4">
      <span className="text-red-600 text-sm font-black uppercase tracking-[0.5em] mb-4 block">
        Precision Care
      </span>

      <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tight leading-none mb-6">
        Premium <span className="text-red-600">Automotive</span> Services
      </h1>

      <p className="max-w-2xl mx-auto text-gray-300 text-lg font-medium italic">
        Experience world-class maintenance and specialized repair services
        tailored for the most prestigious performance vehicles.
      </p>
    </div>
  </section>

  {/* SERVICES GRID */}
  <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD */}
      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          calendar_today
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Periodic Maintenance
        </h3>
        <p className="text-gray-400 text-sm">
          Comprehensive scheduled check-ups ensuring your vehicle operates
          at its peak factory performance year-round.
        </p>
      </div>

      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          query_stats
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Engine Diagnostics
        </h3>
        <p className="text-gray-400 text-sm">
          Advanced electronic testing and precision analysis to identify
          complex mechanical issues.
        </p>
      </div>

      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          build
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Brake & Suspension
        </h3>
        <p className="text-gray-400 text-sm">
          Professional brake inspection and suspension tuning for safe and
          comfortable driving.
        </p>
      </div>

      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          tire_repair
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Tire & Wheel Service
        </h3>
        <p className="text-gray-400 text-sm">
          Precision balancing, alignment and tire replacements for ultimate
          road grip.
        </p>
      </div>

      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          auto_fix_high
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Detailing & Waxing
        </h3>
        <p className="text-gray-400 text-sm">
          Premium aesthetic restoration including paint correction and
          ceramic protection.
        </p>
      </div>

      <div className="bg-[#121212] p-10 border border-white/5 group hover:border-red-600/50 transition-all duration-500">
        <span className="material-symbols-outlined text-red-600 text-[70px] mb-6 group-hover:scale-110 transition-transform">
          oil_barrel
        </span>
        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">
          Oil Change
        </h3>
        <p className="text-gray-400 text-sm">
          High-performance synthetic oil replacements using manufacturer
          approved lubricants.
        </p>
      </div>

    </div>
  </section>

  {/* BOOK SERVICE SECTION */}
  <section className="bg-red-600 py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-5xl font-black uppercase italic mb-6">
          Book Your <br /> Service Now
        </h2>

        <p className="text-white/80 font-bold uppercase tracking-widest text-sm">
          Schedule a maintenance slot with our experts today.
        </p>
      </div>

      <div className="bg-black p-10 shadow-2xl">
        <form className="space-y-6">

          <select className="w-full h-12 px-4 bg-white/10 border border-white/20">
            <option>Select Your Vehicle</option>
            <option>Sedan / Luxury</option>
            <option>SUV / Off-road</option>
            <option>Sports / Exotic</option>
          </select>

          <select className="w-full h-12 px-4 bg-white/10 border border-white/20">
            <option>Select Service</option>
            <option>Full Maintenance</option>
            <option>Engine Tune-up</option>
            <option>Detailing Service</option>
          </select>

          <input
            type="date"
            className="w-full h-12 px-4 bg-white/10 border border-white/20"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4">
            CONFIRM APPOINTMENT
          </button>

        </form>
      </div>

    </div>
  </section>

  {/* QUALITY SECTION */}
  <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-24 grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <img
        className="w-full border border-white/10"
        src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc"
        alt="Service Center"
      />
    </div>

    <div className="space-y-6">
      <span className="text-red-600 text-sm font-black uppercase tracking-[0.4em]">
        Guaranteed Quality
      </span>

      <h2 className="text-4xl font-black uppercase italic">
        Certified Service <span className="text-red-600">Excellence</span>
      </h2>

      <p className="text-gray-400">
        Our service center is equipped with the latest diagnostic
        technology and staffed by certified technicians capable of handling
        the world's most sophisticated automotive machinery.
      </p>

      <ul className="space-y-4 text-sm font-bold uppercase">
        <li className="flex items-center gap-3">
          <span className="material-symbols-outlined text-red-600">
            check_circle
          </span>
          Genuine Manufacturer Parts Guarantee
        </li>

        <li className="flex items-center gap-3">
          <span className="material-symbols-outlined text-red-600">
            check_circle
          </span>
          Master Level Certified Technicians
        </li>

        <li className="flex items-center gap-3">
          <span className="material-symbols-outlined text-red-600">
            check_circle
          </span>
          State-of-the-art Diagnostic Equipment
        </li>
      </ul>
    </div>

  </section>

  {/* FOOTER */}
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

</div>

);
}

export default Service;
