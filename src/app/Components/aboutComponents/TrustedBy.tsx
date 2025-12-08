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
      <div className="text-center">
        <p className="text-2xl font-semibold tracking-wide text-orange-500 uppercase">
          Why Leading Brands Trust Us
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Trusted by Industry Giants
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Trust is earned through consistency. We adhere to strict SLAs and
          deliver quality with the agility of a startup and the reliability of a
          seasoned enterprise partner.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-xs sm:text-sm font-medium text-gray-800 hover:border-orange-400 hover:shadow-md transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
