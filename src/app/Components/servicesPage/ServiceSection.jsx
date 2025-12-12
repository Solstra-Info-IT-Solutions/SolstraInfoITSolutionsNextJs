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

  // Auto-change image
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className={`w-full bg-linear-to-br ${bg} py-20`}
      aria-labelledby="service-title"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">

        {/* ROW: Heading + Description (Left) + Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2
              id="service-title"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              {title}
            </h2>

            {subtitle && (
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                {subtitle}
              </h3>
            )}

            <p className="text-gray-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: Auto-changing image */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
            {images.length > 0 && (
              <Image
                key={currentIndex}
                src={images[currentIndex]}
                alt="Professional service"
                fill
                priority={false}
                className="object-cover transition-opacity duration-700"
              />
            )}
          </div>
        </div>

        {/* ROW: Points 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, index) => (
            <article
              key={index}
              className="p-4 rounded-xl bg-white shadow hover:shadow-lg duration-300 border-l-4 border-orange-500"
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </article>
          ))}
        </div>

        {/* ROW: Center Button */}
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-3 bg-orange-600 text-white rounded-xl shadow hover:bg-orange-700 duration-300 text-center text-lg font-medium"
          >
            Get a Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
