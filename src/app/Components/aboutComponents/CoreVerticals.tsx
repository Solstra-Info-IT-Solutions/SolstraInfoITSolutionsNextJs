"use client";

export default function CoreVerticals() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* LEFT TOP TRIANGLE */}

      {/* RIGHT SIDE TRIANGLES */}

      {/* BACK BLUE TRIANGLE */}
      <div className="w-36 h-36 bg-[#1E2A57] rotate-45 absolute -right-18 top-15 z-0 opacity-90"></div>

      {/* FRONT ORANGE TRIANGLE */}
      <div className="w-40 h-40 bg-[#f5800b] rotate-45 absolute -right-20 top-32 z-10"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2A57] leading-tight">
          Our Two Core <br /> Verticals
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
                {" "}
                💻{" "}
              </span>
              <div>
                <h4 className="font-semibold text-lg">The Technology Arm</h4>
                <p className="text-sm text-gray-500">Product & Services</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              We don’t just write code; we engineer solutions. Our IT division
              turns complex business challenges into streamlined digital
              products. From startups needing an MVP to enterprises requiring
              large-scale digital transformation, our approach is agile, secure,
              and scalable.
            </p>

            <h5 className="font-semibold mt-4">What We Do:</h5>
            <p className="text-gray-700 text-sm">
              Custom Software Development, Mobile App Development
              (iOS/Android/Flutter), Web Development, and UI/UX Design.
            </p>

            <h5 className="font-semibold mt-4">Our Standard:</h5>
            <p className="text-gray-700 text-sm">
              We follow enterprise-grade coding standards learned from giants
              like TCS & Infosys to ensure high-quality deliverables.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                {" "}
                👥{" "}
              </span>
              <div>
                <h4 className="font-semibold text-lg">The Talent Arm</h4>
                <p className="text-sm text-gray-500">Recruitment & Staffing</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              Technology is useless without the right people. Our recruitment
              division strategically partners with HR departments globally,
              technically vetting candidates to match skill requirements and
              culture.
            </p>

            <h5 className="font-semibold mt-4">What We Do:</h5>
            <p className="text-gray-700 text-sm">
              IT Staffing, Executive Search, Non-IT Recruitment, and RPO
              (Process Outsourcing).
            </p>

            <h5 className="font-semibold mt-4">Our Reach:</h5>
            <p className="text-gray-700 text-sm">
              Successfully placed talent for firms like NeevSystem, OpenMalo
              Technologies, and Capgemini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
