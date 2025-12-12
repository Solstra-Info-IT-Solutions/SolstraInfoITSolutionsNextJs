"use client";

import Image from "next/image";

export default function MissionVision() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-labelledby="mission-vision-heading"
    >
      {/* TOP BLUE BAR */}
      <div className="bg-[#1E2A57] py-10 text-center">
        <h2
          id="mission-vision-heading"
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Our Mission & Vision
        </h2>
      </div>

      {/* LEFT DECORATIVE TRIANGLES */}
      <div className="hidden md:block absolute left-0 top-56">
        <div className="w-40 h-40 bg-[#1E2A57] rotate-45 -ml-20"></div>
        <div className="w-32 h-32 bg-[#f5800b] rotate-45 -ml-16 mt-6"></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* LEFT IMAGE */}
        <div
          className="
            w-full
            flex
            justify-center
            md:justify-start
            md:-mt-6
            lg:-mt-10
          "
        >
          <Image
            src="/aboutpage/mission.jpg"
            alt="Team collaboration defining mission and vision"
            width={500}
            height={350}
            className="
              rounded-xl object-cover
              w-full
              sm:w-[90%]
              md:w-[85%]
              lg:w-[70%]
              xl:w-[65%]
              mx-auto
              md:mx-0
              lg:mx-30
              lg:py-10
            "
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-10">
          {/* MISSION */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-orange-500 text-2xl">🎯</span>
              <h3 className="text-2xl font-bold text-orange-500">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              To democratize access to high-quality technology and elite talent.
              We aim to empower businesses—from garage startups to multinational
              corporations—by providing cost-effective, innovative, and reliable
              solutions that drive tangible results.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="h-1 w-full bg-orange-500 rounded-full"></div>

          {/* VISION */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-orange-500 text-2xl">👁️</span>
              <h3 className="text-2xl font-bold text-orange-500">Our Vision</h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              To become a global leader in the “Tech-Talent” ecosystem,
              recognized for our integrity, speed of delivery, and the ability
              to solve the most complex workforce and software challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
