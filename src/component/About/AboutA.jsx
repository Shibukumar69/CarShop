import React from "react";

function AboutA() {

  const team = [
    {
      name: "Marcus Sterling",
      role: "Chief Executive Officer",
      img: "https://tse3.mm.bing.net/th/id/OIP.ShBl0daSHVhATYHqHF5W4QHaEK?pid=Api&h=220&P=0",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Sales",
      img: "https://tse4.mm.bing.net/th/id/OIP._z3WM9yVLp7YeX5gRAcJBgHaE7?pid=Api&h=220&P=0",
    },
    {
      name: "David Chen",
      role: "Lead Technical Specialist",
      img: "https://tse3.mm.bing.net/th/id/OIP.fXxiuvTQVXAOe640qnFCfAHaEK?pid=Api&h=220&P=0",
    },
    {
      name: "Sophia Vance",
      role: "Brand Experience Director",
      img: "https://tse3.mm.bing.net/th/id/OIP.I_a_EfKR6Yc1TfZ7X8Ji4AHaE8?pid=Api&h=220&P=0",
    },
  ];

  return (
    <main className="text-white">

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative order-2 lg:order-1">

            <div className="aspect-[4/5] overflow-hidden border border-white/10 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763"
                className="w-full h-full object-cover"
                alt="showroom"
              />
            </div>

            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-red-600/30"></div>

            <div className="absolute -bottom-8 -right-8 p-8 bg-red-600 z-20 hidden md:block">
              <span className="text-4xl font-black italic tracking-tighter">
                EST. 2014
              </span>
            </div>

          </div>

          {/* TEXT */}
          <div className="space-y-8 order-1 lg:order-2">

            <div className="space-y-2">

              <span className="text-red-600 text-sm font-black uppercase tracking-[0.4em]">
                Defining Excellence
              </span>

              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                The Lucky Cars <span className="text-red-600">Legacy</span>
              </h1>

            </div>

            <p className="text-gray-400 text-lg">
              Founded on a passion for precision engineering and unmatched luxury,
              Lucky Cars has evolved from a boutique showroom into a premier
              destination for automotive enthusiasts worldwide.
            </p>

            <p className="text-gray-400">
              We don't just sell cars; we curate experiences that ignite the spirit
              of performance.
            </p>

            <button className="border-2 border-red-600 px-10 py-4 text-xs font-black uppercase hover:bg-red-600 transition-all">
              Learn More About Our Values
            </button>

          </div>

        </div>
      </section>


      {/* MISSION SECTION */}
      <section className="bg-[#111111] py-24 ">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#0f0f0f] p-12 border border-white/5 group hover:border-red-600/50 transition-all duration-500">

              <span
  className="material-symbols-outlined text-red-600 mb-8 group-hover:scale-110 transition-transform"
  style={{ fontSize: "80px" }}
>
  workspace_premium
</span>

              <h3 className="text-3xl font-black uppercase italic mb-4">
                Our <span className="text-red-600">Excellence</span>
              </h3>

              <p className="text-gray-400">
                To provide an elite automotive experience by sourcing only the most
                exceptional vehicles and delivering service beyond expectations.
              </p>

            </div>

            <div className="bg-[#0f0f0f] p-12 border border-white/5 group hover:border-red-600/50 transition-all duration-500">

                   <span
  className="material-symbols-outlined text-red-600 mb-8 group-hover:scale-110 transition-transform"
  style={{ fontSize: "80px" }}
>
  verified_user
</span>

              <h3 className="text-3xl font-black uppercase italic mb-4">
                Our <span className="text-red-600">Trust</span>
              </h3>

              <p className="text-gray-400">
                Building lifelong relationships through transparency, integrity,
                and a commitment to quality.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="relative py-24 bg-black overflow-hidden">

        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <h2 className="text-[20vw] font-black italic tracking-tighter uppercase select-none">
            PERFORMANCE
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 relative z-10">

          <div className="grid md:grid-cols-3 gap-12 text-center">

            <div>
              <h4 className="text-6xl md:text-8xl font-black text-red-600 italic">
                10+
              </h4>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 italic">
                Years Experience
              </p>
            </div>

            <div>
              <h4 className="text-6xl md:text-8xl font-black text-red-600 italic">
                5000+
              </h4>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 italic">
                Happy Customers
              </p>
            </div>

            <div>
              <h4 className="text-6xl md:text-8xl font-black text-red-600 italic">
                500+
              </h4>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 italic">
                Luxury Cars Sold
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TEAM */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-24">

        <div className="text-center mb-16 space-y-4">

          <span className="text-red-600 text-sm font-black uppercase tracking-[0.4em]">
            The Drive Behind The Brand
          </span>

          <h2 className="text-5xl font-black uppercase italic tracking-tighter">
            Meet The <span className="text-red-600">Experts</span>
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <div key={index} className="group">

              <div className="aspect-[3/4] overflow-hidden bg-[#111] border border-white/10 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">

                <img
                  src={member.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={member.name}
                />

              </div>

              <h4 className="text-xl font-black uppercase italic group-hover:text-red-600 transition-colors">
                {member.name}
              </h4>

              <p className="text-xs text-gray-500 uppercase tracking-widest">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}

export default AboutA;