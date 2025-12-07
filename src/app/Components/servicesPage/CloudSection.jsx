"use client";

import Image from "next/image";

export default function CloudSection() {
  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1102787/pexels-photo-1102787.jpeg"
          alt="Cloud Services Background"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Cloud Services
            <span className="block text-indigo-300">
              Scale Smarter. Stay Secure.
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-200">
            Empowering your business with secure, scalable & cutting-edge cloud solutions.
            We help organizations embrace AWS, Azure & Google Cloud with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
