import React from 'react'

function SectionC() {
  return (
    <div>
         <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            We provide more than just cars; we provide a luxury experience that begins the moment you step into our dealership.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-12 bg-zinc-900 border border-white/10 transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/10">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-300">
              <span className="material-symbols-outlined text-red-600 group-hover:text-white text-4xl">
                payments
              </span>
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white">
              Best Price
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We offer the most competitive pricing in the market with absolute transparency on every deal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-12 bg-zinc-900 border border-white/10 transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/10">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-300">
              <span className="material-symbols-outlined text-red-600 group-hover:text-white text-4xl">
                verified_user
              </span>
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white">
              Certified Cars
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Every vehicle undergoes a rigorous 150-point inspection by our certified master technicians.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-12 bg-zinc-900 border border-white/10 transition-all duration-300 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/10">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors duration-300">
              <span className="material-symbols-outlined text-red-600 group-hover:text-white text-4xl">
                credit_score
              </span>
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase italic text-white">
              Easy Finance
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Flexible payment plans and low interest rates tailored to fit your specific budget and needs.
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default SectionC