import React from 'react'

function SectionB() {
  return (
    <div>
        <section className="py-24 px-4 md:px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase tracking-tight">
              Featured Inventory
            </h2>
            <div className="h-1.5 w-32 bg-red-600 mt-4"></div>
          </div>

          <a
            href="#"
            className="text-red-600 font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform inline-flex items-center gap-2"
          >
            View All Inventory →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-zinc-900 overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZ06l0ed-Ycy7oJkderiMqr7QKZwLVX6NhJ9SFLW_j2rM7inC_MOvP5OgEKoRUcXJAQolBl7XyTkCPl-pn7_IIJgCFkxjMi9YsBHvl5Bytl2-RjgHvG-2MC9MpIHXIAIFLoGO3dR_QKoxZsd0LYWjCp3PxfL5-mrJ-07f5s7MGmhPqwpAZUq_GLHNn1v4GPADJLya6Jq3R7gMDMNCdlQOUCMYfnaazA9FiPjuiK52fHQBLWZ89PiCbhg68qg3XL-INwPM3POgEwd8')",
              }}
            ></div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold text-white uppercase italic">
                  2023 Luxury Sedan
                </h3>
                <span className="text-red-600 text-2xl font-black">
                  $45,000
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Cutting-edge technology meets timeless elegance.
              </p>

              <button className="w-full py-4 border border-white/20 text-white hover:border-red-600 hover:bg-red-600 font-bold transition-all uppercase text-xs tracking-wider">
                View Details
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-zinc-900 overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqkIr7nppzndJ8a4NyWE-yivHqKqCPmTx0b4ev3gSqEynPCdH9GGA3XneEYdvJiMyaXSEBhZeHFGP32aHJwUneSLUf4V221rJMyA9DRf2z4mZ2HgaqmnzemPw_Fcm0ERULEp64-G50mip_VmrU-X9U_wilsHKuA3MqnnP-Q1eiOCbgNOced1hbFliqDfyV3geoMpc5YcyjEnIGKZcjp-2TiC-9nB5UyzR1j29YuncL6CaP-jNnvIRVCCmxqoelLjChONXx77Ck9cg')",
              }}
            ></div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold text-white uppercase italic">
                  2024 Sport SUV
                </h3>
                <span className="text-red-600 text-2xl font-black">
                  $55,000
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Spacious and powerful performance for every family adventure.
              </p>

              <button className="w-full py-4 border border-white/20 text-white hover:border-red-600 hover:bg-red-600 font-bold transition-all uppercase text-xs tracking-wider">
                View Details
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-zinc-900 overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
            <div
              className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASa2sWkRMuQLGkjT8N86YLIZ2aBB7CDGp6zTwCyg4DWlawH5F0TJZencMdmXO40F8aNG0i9DGN7akxUPiOe-PvYdblbdF9uon52O8QKHvyTf-K3OLK4RNKcF-sdXDXuHDsXGugMuOwJW20ntvretTbF52SQe_-NDyDaOfM3dXne9GRnluSeENZ_As9Vmp7rsQUVztn1mBhq8G1Rm6ui2kNdhNe1fbTDOcA27O6e0KcE6wrdhKbjXmFMLxfWb37BEruDMXRPmbrz7A')",
              }}
            ></div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-extrabold text-white uppercase italic">
                  2023 Electric Coupe
                </h3>
                <span className="text-red-600 text-2xl font-black">
                  $62,000
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Instant torque and zero emissions.
              </p>

              <button className="w-full py-4 border border-white/20 text-white hover:border-red-600 hover:bg-red-600 font-bold transition-all uppercase text-xs tracking-wider">
                View Details
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default SectionB