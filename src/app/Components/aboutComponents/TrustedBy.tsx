// src/components/about/TrustedBy.tsx
import React from "react";

const brands = [
  "Tata Consultancy Services (TCS)",
  "Infosys",
  "Capgemini",
  "NeevSystem",
  "OpenMalo Technologies",
];

const TrustedBy: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center ">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-poppins text-center font-normal  mb-6 mt-10">
          Trusted by{" "}
          <span className="font-semibold text-[#E28217]">
            {" "}
            Leading Companies
          </span>
        </h2>
        <span className="mt-3 text-black max-w-3xl font-semibold m-4  text-sm sm:text-xl">
          Trust is earned through consistency. We adhere to strict SLAs and
          deliver quality with the agility of a startup and the reliability of a
          seasoned enterprise partner.
        </span>
        <p className="text-xl mb-10 mt-10">
          Join thousands of professionals working at top organizations
        </p>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-xs sm:text-sm font-medium text-gray-800 hover:border-orange-400 hover:shadow-md transition"
          >
            {brand}
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default TrustedBy;
