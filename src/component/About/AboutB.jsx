import React from "react";

function AboutB() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 pt-24 pb-12 px-4 md:px-10 lg:px-20 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

        {/* LOGO */}
        <div>

          <div className="flex items-center gap-3 text-red-600 mb-8">

            <span className="material-symbols-outlined text-4xl">
              directions_car
            </span>

            <h2 className="text-2xl font-black italic uppercase tracking-tighter">
              Lucky Cars
            </h2>

          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            The premium destination for automotive excellence. Dedicated to
            providing superior customer service and a world-class selection of
            luxury vehicles.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">

            {["share", "public", "mail"].map((icon, i) => (
              <a
                key={i}
                className="w-12 h-12 bg-white/5 flex items-center justify-center text-white hover:bg-red-600 hover:scale-110 transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}

          </div>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
            Quick Links
          </h4>

          <ul className="space-y-4">

            {["Inventory", "About Us", "Our Services", "Sell Your Car"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-all"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              )
            )}

          </ul>

        </div>


        {/* CONTACT */}
        <div>

          <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
            Contact Info
          </h4>

          <ul className="space-y-6 text-gray-400 text-sm">

            <li className="flex items-start gap-4">

              <span className="material-symbols-outlined text-red-600">
                location_on
              </span>

              <span className="font-medium">
                123 Performance Way, Motor District
                <br />
                Miami, FL 33101
              </span>

            </li>

            <li className="flex items-center gap-4">

              <span className="material-symbols-outlined text-red-600">
                phone_iphone
              </span>

              <span className="font-medium">+1 (555) 987-6543</span>

            </li>

            <li className="flex items-center gap-4">

              <span className="material-symbols-outlined text-red-600">
                mail
              </span>

              <span className="font-medium">info@luckycars.com</span>

            </li>

          </ul>

        </div>


        {/* MAP */}
        <div>

          <h4 className="text-white font-black uppercase tracking-[0.2em] text-sm mb-8 italic">
            Our Location
          </h4>

          <div className="w-full h-44 overflow-hidden grayscale brightness-50 border border-white/10 hover:brightness-100 hover:grayscale-0 transition-all duration-500">

            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">

              <span className="material-symbols-outlined text-zinc-700 text-6xl">
                map
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-500 text-xs font-black tracking-[0.3em] uppercase italic">
          © 2024 LUCKY CARS MOTORS. ALL RIGHTS RESERVED.
        </p>

        <div className="flex gap-10">

          <a
            className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
            href="#"
          >
            Privacy Policy
          </a>

          <a
            className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all"
            href="#"
          >
            Terms of Service
          </a>

        </div>

      </div>

    </footer>
  );
}

export default AboutB;