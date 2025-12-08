"use client";
import React, { useRef, useEffect, useState } from "react";

const MeetTheTeam: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && containerRef.current) {
            // Animate cards one by one
            setVisibleCards([true, true, true]);
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
          Meet <span className="font-semibold text-[#E28217]">The Team</span>
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          The Minds Behind Solstra
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          A company is only as good as its people. At Solstra Info IT Solutions,
          we are a collective of dreamers, doers, and problem solvers. Our
          leadership combines decades of experience in Software Architecture and
          Human Resources.
        </p>
      </div>

      <div ref={containerRef} className="grid gap-8 md:grid-cols-3 m-10">
        {/* Leadership & Strategy */}
        <div
          className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-3 transform transition-all duration-700 ease-out
            ${visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl font-bold">
              SJ
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                Shubham Jain – Co-Founder &amp; MD
              </p>
              <p className="text-xs text-gray-500">Leadership &amp; Strategy</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The Visionary. With a deep understanding of the IT landscape and the
            recruitment market, Shubham Jain founded Solstra to solve the
            fragmentation in the industry. He oversees the strategic direction
            of the company, ensuring that every client relationship—from
            OpenMalo to Infosys—is built on trust and delivered value.
          </p>
          <p className="mt-2 text-xs sm:text-sm font-medium text-orange-500 italic">
            Motto: &quot;Technology solves problems, but people create the
            solutions.&quot;
          </p>
        </div>

        {/* Tech Innovators */}
        <div
          className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-3 transform transition-all duration-700 ease-out
            ${visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
              🧠
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                The Tech Innovators (Product Team)
              </p>
              <p className="text-xs text-gray-500">Solutions &amp; Experience</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The Builders. Our technical team is led by experts who live and
            breathe code. They are responsible for the architecture, security,
            and scalability of every product we deliver. They ensure that our
            clients&apos; apps don&apos;t just work today, but scale for
            tomorrow.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">Expertise:</span> Full Stack
            Development, Cloud Infrastructure, Agile Methodologies. Our UI/UX
            Design Lead—the Artist—ensures every product offers an intuitive and
            engaging user experience.
          </p>
        </div>

        {/* Talent Scouts */}
        <div
          className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100 flex flex-col gap-3 transform transition-all duration-700 ease-out
            ${visibleCards[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
              🎯
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                The Talent Scouts (Recruitment Team)
              </p>
              <p className="text-xs text-gray-500">
                Talent, Alignment &amp; Success
              </p>
            </div>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The Matchmakers. Led by our Head of Talent Acquisition, this
            division is responsible for our high placement success rate. Unlike
            generalist HRs, they understand tech stacks (Java, Python, React),
            allowing them to filter candidates with technical precision before
            they ever reach the client.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Our Client Success Managers act as the bridge—whether you are a
            startup founder or an HR Manager at a large MNC, they ensure your
            requirements are heard, understood, and met on time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
