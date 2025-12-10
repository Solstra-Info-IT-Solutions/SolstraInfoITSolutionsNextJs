"use client";
import React, { useRef, useEffect, useState } from "react";

type CultureCardProps = {
  title: string;
  description: string;
  visible?: boolean;
  delay?: number;
};

const CultureCard: React.FC<CultureCardProps> = ({ title, description, visible, delay = 0 }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md  shadow-black/40 hover:shadow-xl  p-6 border border-gray-100 flex flex-col gap-3 transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const CultureSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && containerRef.current) {
            setVisibleCards([true, true, true]); // animate all cards
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <section className="py-6">
      <div className="text-center">
        {/* <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
          Our Culture
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Code, Connect, Create
        </h2> */}
        <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
          Our Culture <span className="font-semibold text-[#E28217]">Code, Connect, Create</span> 
        </p>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          At Solstra, we foster an environment of continuous learning.
          We code the future, connect people, and create value in everything we do.
        </p>
      </div>

      <div ref={containerRef} className="grid gap-6 md:grid-cols-3 m-4 ">
        <CultureCard
          title="We Code the Future"
          description="By staying ahead of tech trends like AI and Machine Learning, we build solutions designed not just for today, but for the next decade."
          visible={visibleCards[0]}
          delay={100}
        />
        <CultureCard
          title="We Connect People"
          description="We treat recruitment as a human-first process, aligning the right opportunities with the right talent—not just resumes with job descriptions."
          visible={visibleCards[1]}
          delay={200}
        />
        <CultureCard
          title="We Create Value"
          description="Every engagement is built around ROI, ensuring our clients see measurable business impact from both technology and talent."
          visible={visibleCards[2]}
          delay={300}
        />
      </div>
    </section>
  );
};

export default CultureSection;
