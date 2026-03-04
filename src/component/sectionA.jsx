import React from "react";

function SectionA() {
  return (
    <div>
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwTICp_pHUeFCPOaiKOiIiY1ld98cSfdqZ0OPlJKrF_49jfuNgvDqrTQgaYwrvNF8iIz1EOspVS9N0MNG23fae7fkVDa6z414Sjr37AcatoU3qIPZx6RKavr0FoDM6UFq2eqHrKrTmRsAeNRDgSi0kC8nqi8VrMbO5QtuwD1LBanz-6thmtnNHKDdivYJYcneqNh-I-wxyDB2WIlw1PiQ06H2zqa4bM75IpNyknyGxn2nf2tljyrxXoU2yCfWD0BN478KHgfeKtjQ')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-white text-5xl md:text-8xl font-black mb-6 uppercase">
            FIND YOUR <span className="text-red-600 italic">DREAM CAR</span>{" "}
            TODAY
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto">
            Best deals on new and used premium vehicles. Experience performance
            redefined.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300">
              Browse Cars
            </button>

            <button className="w-full sm:w-auto border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionA;
