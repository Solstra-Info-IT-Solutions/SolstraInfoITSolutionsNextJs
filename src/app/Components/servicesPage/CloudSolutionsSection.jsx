"use client";

import Image from "next/image";

export default function CloudSolutionsSection() {
  return (
    <section className="py-20 px-6 md:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT TEXT */}
      <div className="opacity-0 translate-y-6 animate-[fadeSlideUp_1s_ease-out_forwards]">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
          Cloud Solutions for Modern Businesses
        </h2>

        <p className="mt-5 text-gray-700 leading-relaxed">
          Migrating to the cloud is no longer optional — it's essential to stay competitive.
          Solstra Info IT Solutions helps businesses unlock the full potential of cloud computing
          to boost agility, reduce costs, and increase operational efficiency.
          Our certified cloud experts guide you across AWS, Azure, and Google Cloud.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="opacity-0 translate-y-6 animate-[fadeSlideUp_1s_ease-out_forwards] [animation-delay:200ms]">
        <div className="relative w-full h-72 md:h-96 rounded-3xl shadow-2xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1181315/pexels-photo-1181315.jpeg"
            alt="Cloud Solutions"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
