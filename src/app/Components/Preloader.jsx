"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({
  logoSrc = "/logo.png",
  companyName = "Gift BX Consultancy",
  duration = 4000, // full circle duration in ms
}) {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // After full animation, start fade-out
    const timer = setTimeout(() => {
      setVisible(false); // start fade-out
      setTimeout(() => setLoading(false), 600); // remove from DOM
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-white transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Circular Loader */}
      <div className="relative w-32 h-32 flex justify-center items-center">
        <svg className="w-32 h-32" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#f97316"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: 2 * Math.PI * 45, // circumference
              strokeDashoffset: 2 * Math.PI * 45,
              animation: `circle-loader ${duration}ms linear forwards`,
            }}
          />
        </svg>

        {/* Static Logo */}
        <div className="absolute w-16 h-16 rounded-full overflow-hidden">
          <Image src={logoSrc} alt={`${companyName} Logo`} fill className="object-contain" />
        </div>
      </div>

      <h1 className="mt-6 text-2xl md:text-3xl font-bold text-blue-950 text-center">
        {companyName}
      </h1>
    </div>
  );
}
