// src/components/about/MissionVision.tsx
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-2xl font-semibold tracking-wide text-orange-500 uppercase">
          Our Mission &amp; Vision
        </p>
        <h2 className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why Solstra Exists &amp; Where We&apos;re Headed
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 m-10">
        {/* Mission */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-orange-500">Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To democratize access to high-quality technology and elite talent.
            We aim to empower businesses—from garage startups to multinational
            corporations—by providing cost-effective, innovative, and reliable
            solutions that drive tangible results.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-orange-500">Our Vision</h3>
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
