import React from "react";
import {
  FaCar,
  FaShareAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

function Contact() {
return ( <div className="bg-[#0a0a0a] text-white">

  {/* HERO SECTION */}
  <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <img
        className="w-full h-full object-cover opacity-50 grayscale"
        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
        alt="Dealership"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>

    <div className="relative z-10 text-center px-4">
      <span className="text-red-600 text-sm font-black uppercase tracking-[0.5em] mb-4 block italic">
        Connect With Us
      </span>

      <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tight mb-6">
        Get In <span className="text-red-600">Touch</span>
      </h1>

      <p className="max-w-2xl mx-auto text-gray-300 text-lg italic">
        Our team of automotive experts is standing by to assist you with
        sales, service, or performance inquiries.
      </p>
    </div>
  </section>

  {/* CONTACT SECTION */}
  <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-24">
    <div className="grid lg:grid-cols-2 gap-16">

      {/* CONTACT FORM */}
      <div className="space-y-12">

        <div>
          <h2 className="text-4xl font-black uppercase italic">
            Send a <span className="text-red-600">Message</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Have a question? Fill out the form and we’ll reply within 24
            hours.
          </p>
        </div>

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              className="w-full h-14 px-4 bg-white/5 border border-white/10"
              placeholder="Full Name"
            />
            <input
              className="w-full h-14 px-4 bg-white/5 border border-white/10"
              placeholder="Email Address"
              type="email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              className="w-full h-14 px-4 bg-white/5 border border-white/10"
              placeholder="Phone Number"
            />
            <select className="w-full h-14 px-4 bg-white/5 border border-white/10">
              <option>General Inquiry</option>
              <option>Vehicle Sales</option>
              <option>Service Booking</option>
              <option>Financing</option>
            </select>
          </div>

          <textarea
            className="w-full px-4 py-4 bg-white/5 border border-white/10 min-h-[160px]"
            placeholder="Your message..."
          ></textarea>

          <button className="w-full bg-red-600 hover:bg-red-700 py-5 font-bold uppercase flex justify-center items-center gap-2">
            SEND MESSAGE
            <span className="material-symbols-outlined">send</span>
          </button>

        </form>

      </div>

      {/* CONTACT INFO */}
      <div className="space-y-12">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#121212] p-8 border border-white/5">
            <span className="material-symbols-outlined text-red-600 text-4xl mb-4">
              location_on
            </span>

            <h4 className="text-lg font-black uppercase italic">
              Our Showroom
            </h4>

            <p className="text-gray-400 text-sm mt-2">
              123 Performance Way <br />
              Motor District, Miami, FL
            </p>
          </div>

          <div className="bg-[#121212] p-8 border border-white/5">
            <span className="material-symbols-outlined text-red-600 text-4xl mb-4">
              call
            </span>

            <h4 className="text-lg font-black uppercase italic">
              Call Us
            </h4>

            <p className="text-gray-400 text-sm mt-2">
              Sales: +1 (555) 987-6543 <br />
              Service: +1 (555) 987-6544
            </p>
          </div>

        </div>

        {/* MAP PLACEHOLDER */}
        <div className="w-full h-[350px] bg-[#121212] border border-white/5 flex items-center justify-center">
          <div className="text-center opacity-30">
            <span className="material-symbols-outlined text-8xl">
              map
            </span>
            <p className="uppercase text-sm mt-3">Google Map Location</p>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* BUSINESS HOURS */}
  <section className="bg-[#121212] py-24">
    <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <h2 className="text-5xl font-black uppercase italic">
          Business <span className="text-red-600">Hours</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-md">
          Visit our showroom or contact our experts during the following
          working hours.
        </p>
      </div>

      <table className="w-full text-left">
        <tbody>
          <tr className="border-b border-white/10">
            <td className="p-6 text-gray-400">Monday - Friday</td>
            <td className="p-6 text-right">08:00 AM - 08:00 PM</td>
          </tr>

          <tr className="border-b border-white/10">
            <td className="p-6 text-gray-400">Saturday</td>
            <td className="p-6 text-right">09:00 AM - 06:00 PM</td>
          </tr>

          <tr>
            <td className="p-6 text-gray-400">Sunday</td>
            <td className="p-6 text-right text-red-600">
              Closed (Appointment)
            </td>
          </tr>
        </tbody>
      </table>

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
        <a
          href={item.link}
          className="text-gray-400 hover:text-red-600 text-sm font-bold uppercase tracking-widest transition-all"
        >
          {item.name}
        </a>
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



export default Contact;
