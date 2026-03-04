import React from "react";

function PartA() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-12 text-white bg-black">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-xs font-bold uppercase tracking-widest text-gray-400 italic">
        <a className="hover:text-red-600" href="#">
          Home
        </a>
        <span className="mx-2">/</span>
        <a className="hover:text-red-600" href="#">
          Inventory
        </a>
        <span className="mx-2">/</span>
        <span className="text-white">Performance Sedan Details</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-12">
          {/* Main Image */}
          <div className="relative aspect-video overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              className="w-full h-full object-cover"
              alt="car"
            />

            <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 text-xs font-black uppercase italic">
              New Arrival
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-4">
            {[
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
              "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
              "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
              "https://images.unsplash.com/photo-1542362567-b07e54358753",
              "https://tse1.mm.bing.net/th/id/OIP.dsiC7a1xQd-CPZpBuMeCDgHaE8?pid=Api&h=220&P=0",
            ].map((img, index) => (
              <img
                key={index}
                src={img}
                className="aspect-square border border-white/20 object-cover cursor-pointer"
              />
            ))}
          </div>

          {/* Title + Price */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <span className="text-red-600 text-sm font-bold uppercase tracking-widest">
                2024 Performance Edition
              </span>

              <h1 className="text-5xl font-black italic mt-2 text-white">
                Apex RS-7 <span className="text-red-600">Sport</span>
              </h1>
            </div>

            <div>
              <span className="text-gray-400 text-sm uppercase font-bold">
                Asking Price
              </span>

              <h2 className="text-4xl font-black text-red-600">$142,900</h2>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-white/10 text-center">
            <div>
              <p className="text-gray-400 text-xs uppercase">Engine</p>
              <h4 className="text-lg font-bold italic text-white">
                4.0L V8 BI-TURBO
              </h4>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase">Horsepower</p>
              <h4 className="text-lg font-bold italic text-white">591 HP</h4>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase">0-60 MPH</p>
              <h4 className="text-lg font-bold italic text-white">3.5 SEC</h4>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase">Top Speed</p>
              <h4 className="text-lg font-bold italic text-white">190 MPH</h4>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-black italic mb-4 text-white">
              The Pinnacle of <span className="text-red-600">Performance</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              The 2024 Apex RS-7 Sport represents the perfect fusion of
              executive luxury and track-bred performance. Powered by a
              twin-turbo V8 engine producing 591 horsepower.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Featuring premium materials and advanced driving technology, this
              vehicle delivers an unmatched driving experience.
            </p>
          </div>

          {/* Premium Features */}
          <div>
            <h3 className="text-2xl font-black italic mb-8 border-b border-white/10 pb-4 text-white">
              Premium Features
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Interior */}
              <div>
                <h4 className="text-red-600 text-xs uppercase font-bold mb-4">
                  Interior & Comfort
                </h4>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>✔ Valcona Leather Sport Seats</li>
                  <li>✔ Bang & Olufsen 3D Sound System</li>
                  <li>✔ Four-zone Climate Control</li>
                  <li>✔ Carbon Fiber Inlays</li>
                </ul>
              </div>

              {/* Safety */}
              <div>
                <h4 className="text-red-600 text-xs uppercase font-bold mb-4">
                  Safety & Technology
                </h4>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>✔ Adaptive Cruise Assist</li>
                  <li>✔ Night Vision Assistant</li>
                  <li>✔ 360° Camera System</li>
                  <li>✔ Matrix LED Headlights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside>
          <div className="sticky top-28 bg-zinc-900 border border-white/10 p-8 space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-black uppercase italic text-white">
                Interested in this car?
              </h3>

              <p className="text-gray-400 text-sm">Take the next step today</p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 uppercase font-bold">
              Book Test Drive
            </button>

            <button className="w-full border border-white/20 text-white hover:border-red-600 hover:bg-red-600 py-4 uppercase font-bold">
              Enquire Now
            </button>

            {/* Contact Form */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-xs text-red-600 uppercase font-bold mb-4 text-center">
                Quick Contact
              </h4>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white"
                />

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white"
                />

                <button className="w-full bg-white text-black py-3 text-xs font-bold uppercase hover:bg-red-600 hover:text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default PartA;
