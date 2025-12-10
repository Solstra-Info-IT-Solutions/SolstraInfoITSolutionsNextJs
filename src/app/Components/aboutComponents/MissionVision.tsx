"use client";
import React, { useRef, useEffect, useState } from "react";

const MissionVision: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && containerRef.current) {
            setVisibleCards([true, true]); // animate both cards
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <section >
      <div className="text-center">
        <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal m-2 ">
          Our Mission <span className="font-semibold text-[#E28217]">Vision</span> 
        </p>
        <h2 className="mt-2 text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
          Why Solstra Exists &amp; Where We&apos;re Headed
        </h2>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 m-2 lg:m-8  ">
        {/* Mission */}
        <div
          className={`bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl shadow-black/50  p-6 flex flex-col gap-3 transform transition-all duration-700 ease-out
            ${visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h3 className="text-2xl  font-semibold text-orange-500">Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To democratize access to high-quality technology and elite talent.
            We aim to empower businesses—from garage startups to multinational
            corporations—by providing cost-effective, innovative, and reliable
            solutions that drive tangible results.
          </p>
        </div>

        {/* Vision */}
        <div
          className={`bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition shadow-black/50 p-6 flex flex-col gap-3 transform transition-all duration-700 ease-out
            ${visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <h3 className="text-2xl lg:text-2xl font-semibold text-orange-500">Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To become a global leader in the &quot;Tech-Talent&quot; ecosystem,
            recognized for our integrity, speed of delivery, and the ability to
            solve the most complex workforce and software challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
