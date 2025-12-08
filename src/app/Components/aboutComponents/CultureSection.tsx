// src/components/about/CultureSection.tsx
import React from "react";

type CultureCardProps = {
  title: string;
  description: string;
};

const CultureCard: React.FC<CultureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const CultureSection: React.FC = () => {
  return (
    <section className="py-6">
      <div className="text-center">
        <p className="text-2xl font-semibold tracking-wide text-orange-500 uppercase">
          Our Culture
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Code, Connect, Create
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          At Solstra, we foster an environment of continuous learning.
          We code the future, connect people, and create value in everything we do.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 m-10">
        <CultureCard
          title="We Code the Future"
          description="By staying ahead of tech trends like AI and Machine Learning, we build solutions designed not just for today, but for the next decade."
        />
        <CultureCard
          title="We Connect People"
          description="We treat recruitment as a human-first process, aligning the right opportunities with the right talent—not just resumes with job descriptions."
        />
        <CultureCard
          title="We Create Value"
          description="Every engagement is built around ROI, ensuring our clients see measurable business impact from both technology and talent."
        />
      </div>
    </section>
  );
};

export default CultureSection;
