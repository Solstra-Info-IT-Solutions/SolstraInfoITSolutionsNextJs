"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ServiceSection({
  title,
  subtitle,
  description,
  points = [],
  images = [],
  bg = "from-white to-gray-50",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change image every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className={`w-full bg-gradient-to-br ${bg} py-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
              {subtitle}
            </h4>
          )}

          <p className="text-gray-700 text-lg">{description}</p>

          <div className="space-y-4">
            {points.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white shadow hover:shadow-lg duration-300 border-l-4 border-orange-500"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 duration-300"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Right Auto-Changing Image */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
          <Image
            key={currentIndex}
            src={images[currentIndex]}
            alt="Service Image"
            fill
            className="object-cover transition-opacity duration-700"
          />
        </div>

      </div>
    </section>
  );
}
