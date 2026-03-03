import React from 'react'

function SectionD() {
  return (
    <div>
           <section className="py-24 px-4 md:px-10 lg:px-20 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase tracking-tight mb-4">
            Happy Clients
          </h2>
          <p className="text-gray-500 font-medium italic">
            Hear from those who found their perfect ride with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Testimonial 1 */}
          <div className="bg-zinc-900 p-12 border-l-8 border-red-600 relative overflow-hidden">
            
            {/* Stars */}
            <div className="flex text-red-600 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  star
                </span>
              ))}
            </div>

            <p className="italic text-gray-200 text-xl mb-10 leading-relaxed font-medium">
              "The selection at Lucky Cars is unmatched. I found my dream sedan
              at a price that actually made sense. The team was professional
              from start to finish."
            </p>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center font-black text-white italic">
                JD
              </div>
              <div>
                <h4 className="font-black text-lg uppercase italic text-white">
                  James Donaldson
                </h4>
                <p className="text-xs text-red-600 font-bold uppercase tracking-widest">
                  Business Owner
                </p>
              </div>
            </div>

            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 text-9xl">
              format_quote
            </span>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-zinc-900 p-12 border-l-8 border-red-600 relative overflow-hidden">
            
            <div className="flex text-red-600 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  star
                </span>
              ))}
            </div>

            <p className="italic text-gray-200 text-xl mb-10 leading-relaxed font-medium">
              "Easiest financing process I've ever experienced. They worked with
              my budget and got me into a 2024 SUV within the same day. Highly
              recommended!"
            </p>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center font-black text-white italic">
                SR
              </div>
              <div>
                <h4 className="font-black text-lg uppercase italic text-white">
                  Sarah Richards
                </h4>
                <p className="text-xs text-red-600 font-bold uppercase tracking-widest">
                  Marketing Director
                </p>
              </div>
            </div>

            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/5 text-9xl">
              format_quote
            </span>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default SectionD