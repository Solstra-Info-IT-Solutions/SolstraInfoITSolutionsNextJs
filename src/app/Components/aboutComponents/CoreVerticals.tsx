"use client";
import React, { useRef, useEffect, useState } from "react";

const CoreVerticals: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else setVisible(false);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="py-10 md:py-16">
      {/* Section Header */}
      <div className="text-center px-5 md:px-0">
        
        <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
          Our Two  <span className="font-semibold text-[#E28217]">Core Verticals</span> 
        </p>
        <h2 className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Technology &amp; Talent Under One Roof
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Solstra Info IT Solutions operates on two powerful pillars — a robust
          technology arm that builds products and services, and a talent arm
          that connects businesses with elite professionals.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={ref}
        className={`grid gap-6 md:gap-8 md:grid-cols-2 px-5 md:px-0 mt-10 transition-all   duration-700 lg:m-8 md:m-3   ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Technology Arm Card */}
        <article className="bg-white rounded-2xl shadow-black/40 shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-4 ">
          <header className="flex items-center gap-3  shadow-black/40">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
              💻
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              The Technology Arm{" "}
              <span className="block text-sm font-normal text-gray-500">
                Product &amp; Services
              </span>
            </h3>
          </header>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            We don't just write code; we engineer solutions. Our IT division
            turns complex business challenges into streamlined digital products.
            From startups needing an MVP to enterprises requiring large-scale
            digital transformation, our approach is agile, secure, and scalable.
          </p>

          <div className="space-y-3 text-sm sm:text-base ">
            <div>
              <p className="font-semibold text-gray-900">What We Do:</p>
              <p className="text-gray-700">
                Custom Software Development, Mobile App Development (iOS/Android/Flutter),
                Web Development, and UI/UX Design.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Our Standard:</p>
              <p className="text-gray-700">
                We follow enterprise-grade coding standards learned from giants like TCS
                and Infosys to ensure high-quality deliverables.
              </p>
            </div>
          </div>
        </article>

        {/* Talent Arm Card */}
        <article className="bg-white rounded-2xl  shadow-black/40 shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-4 ">
          <header className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
              👥
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              The Talent Arm{" "}
              <span className="block text-sm font-normal text-gray-500">
                Recruitment &amp; Staffing
              </span>
            </h3>
          </header>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Technology is useless without the right people. Our recruitment division
            is a strategic partner to HR departments globally, technically vetting
            candidates to match skill requirements and company culture.
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
                Successfully placed talent for leading firms like NeevSystem,
                OpenMalo Technologies, and Capgemini.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default CoreVerticals;
