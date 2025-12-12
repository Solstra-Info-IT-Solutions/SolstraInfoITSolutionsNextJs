"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

export default function MeetTheTeam() {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards([true, true, true]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <section className="py-10">
      {/* TOP IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-[280px] h-[280px]  sm:w-[330px] sm:h-[330px]">
          <Image
            src="/aboutpage/Meet.jpg"
            alt="Solstra Info IT Solutions Team"
            fill
            className="object-cover rounded-xl border-4 border-orange-500 shadow-xl"
            priority
          />
        </div>
      </div>

      {/* BLUE SECTION */}
      <div className="text-center bg-blue-950 mt-[-40px] pt-24 pb-16 px-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Meet <span className="text-orange-500">The Team</span>
        </h2>

        <p className="mt-4 max-w-3xl text-white mx-auto text-sm sm:text-base leading-relaxed">
          At Solstra Info IT Solutions, our team is our greatest strength.
          Together, we bring deep expertise in Software Architecture, Product
          Engineering, UI/UX, and Talent Acquisition to deliver scalable and
          future-ready solutions.
        </p>
      </div>

      {/* CARDS */}
      <div
        ref={containerRef}
        className="grid gap-6 md:grid-cols-3 px-4 lg:px-20 -mt-10"
      >
        {/* CARD 1 */}
        <article
          className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out
          ${
            visibleCards[0]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
              SJ
            </div>

            <span className="px-3 py-1 bg-gray-100 font-semibold rounded-lg text-[10px]">
              Leadership & Strategy
            </span>
          </div>

          <h3 className="text-orange-600 font-bold mt-3 text-[15px]">
            Shubham Jain – Co-Founder & MD
          </h3>

          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            The Visionary behind Solstra. With deep experience in IT and
            recruitment, he drives the company’s strategic direction and ensures
            every client—from startups to Infosys—receives consistent
            value.Motto: “Technology solves problems, but people create the
            solutions.”
          </p>
        </article>

        {/* CARD 2 */}
        <article
          className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out
          ${
            visibleCards[1]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold">
              🧠
            </div>

            <span className="px-3 py-1 bg-gray-100 font-semibold rounded-lg text-[10px]">
              Tech Innovators - (Product Team)
            </span>
          </div>

          <h3 className="text-yellow-600 font-bold mt-3 text-[15px]">
            Lead Solutions Architect – The Builder
          </h3>

          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Lead Solutions Architect – The Builder Oversees the architecture,
            security, and scalability of all digital products, ensuring they
            work today and scale tomorrow.Expertise: Full Stack Development,
            Cloud Infrastructure, Agile Methods. UI/UX Design Lead – The Artist
            Creates intuitive, modern, user-friendly experiences that connect
            complex logic with simple design.
          </p>
        </article>

        {/* CARD 3 */}
        <article
          className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out
          ${
            visibleCards[2]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
              🎯
            </div>

            <span className="px-3 py-1 bg-gray-100 font-semibold rounded-lg text-[10px]">
              Talent Scouts (Recruitment Team)
            </span>
          </div>

          <h3 className="text-green-600 font-bold mt-3 text-[15px]">
            Head of Talent Acquisition
          </h3>

          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            Head of Talent Acquisition – The Matchmaker Leads a team of
            tech-savvy recruiters who filter candidates with precision across
            stacks like Java, Python, and React. Client Success Manager – The
            Bridge Ensures smooth communication with clients and delivers
            requirements accurately and on time.
          </p>
        </article>
      </div>
    </section>
  );
}
