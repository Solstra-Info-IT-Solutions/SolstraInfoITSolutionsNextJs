import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-2 px-4 sm:px-6 mt-20">
      {/* LEFT IMAGE BLOCK */}
      <div className="relative w-full">
        {/* Main Image */}
        <Image
          src="/about-sec1.png"
          alt="About section image"
          width={600}
          height={200}
          className="w-full h-140 object-cover rounded-md"
        />

        {/* Quote Card */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-gradient-to-b from-sky-400 to-blue-600 text-white p-4 sm:p-6 w-[90%] sm:w-[70%] rounded-md shadow-lg">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            <span className="text-white text-xl sm:text-2xl align-top mr-1">
              &#8220;
            </span>
            We focus on building long-term partnerships with our clients,
            supporting them through every challenge and celebrating every success
            together.
            <span className="text-white text-xl sm:text-2xl align-top ml-1">
              &#8221;
            </span>
          </p>

          <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
            Shubham Jain{" "}
            <span className="font-normal">Co-Founder &amp; Managing Director</span>
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT + MISSION & VISION */}
      <div className="flex flex-col gap-6">
        {/* About Content */}
        <div>
          <p className="text-blue-600 uppercase tracking-wide text-2xl font-extrabold sm:text-base">
            About Solstra Info IT Solutions
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
            We Deliver Your Thoughts <br />
            Long Term IT Partner
          </h2>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Solstra Info IT Solutions provides high-quality Web &amp; Mobile App
            Development Services. Our excellent in-house team of experienced and
            skilled Web &amp; Mobile App Developers delivers requirement-specific
            and business-oriented Web &amp; Mobile App Development Solutions.
          </p>

          {/* Highlight Box */}
          <div className="mt-5 border-l-4 border-orange-500 pl-4 italic font-semibold text-gray-700 text-sm sm:text-base leading-relaxed">
            Being a Top Web &amp; Mobile App Development Company, our team of
            skilled professionals execute excellent Web &amp; App Development
            Services.
          </div>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            We have experts in all latest and trending technologies who work hard
            to achieve client requirements and deliver top-notch solutions on time
            with affordable costs. We have deep experience working with various
            industries worldwide.
          </p>

          {/* Bullets */}
          <ul className="mt-6 space-y-3 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">✔</span>
              <span>Top-notch Web &amp; App Development Services</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">✔</span>
              <span>Highly Skilled Team With Excellent Communication</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">✔</span>
              <span>Delivery As Per Requirements &amp; Client Ideas</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
