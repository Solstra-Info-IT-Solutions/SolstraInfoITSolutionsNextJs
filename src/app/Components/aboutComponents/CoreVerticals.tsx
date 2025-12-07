// src/components/about/CoreVerticals.tsx
import React from "react";

const CoreVerticals: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase">
          Our Two Core Verticals
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Technology &amp; Talent Under One Roof
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Solstra Info IT Solutions operates on two powerful pillars — a robust
          technology arm that builds products and services, and a talent arm
          that connects businesses with elite professionals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Technology Arm */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
              💻
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              The Technology Arm{" "}
              <span className="block text-sm font-normal text-gray-500">
                Product &amp; Services
              </span>
            </h3>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We don&apos;t just write code; we engineer solutions. Our IT division
            specializes in turning complex business challenges into streamlined
            digital products. From startups needing an MVP to enterprises
            requiring large-scale digital transformation, our approach is agile,
            secure, and scalable.
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-gray-900">What We Do:</p>
              <p className="text-gray-700">
                Custom Software Development, Mobile App Development
                (iOS/Android/Flutter), Web Development, and UI/UX Design.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Our Standard:</p>
              <p className="text-gray-700">
                We bring enterprise-grade coding standards—learned from working
                with giants like TCS and Infosys—to every project we touch.
              </p>
            </div>
          </div>
        </div>

        {/* Talent Arm */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
              👥
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              The Talent Arm{" "}
              <span className="block text-sm font-normal text-gray-500">
                Recruitment &amp; Staffing
              </span>
            </h3>
          </div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Technology is useless without the right people to drive it. Our
            recruitment division acts as a strategic partner to HR departments
            globally. We go beyond keyword matching; we technically vet
            candidates to ensure they fit both the skill requirements and the
            company culture.
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <div>
              <p className="font-semibold text-gray-900">What We Do:</p>
              <p className="text-gray-700">
                IT Staffing, Executive Search, Non-IT Recruitment, and RPO
                (Recruitment Process Outsourcing).
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Our Reach:</p>
              <p className="text-gray-700">
                We have successfully placed talent for leading firms like
                NeevSystem, OpenMalo Technologies, and Capgemini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreVerticals;
