import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-1 px-4 sm:px-6 mt-10">
      {/* LEFT IMAGE BLOCK */}
      <div className="relative w-full">
        {/* Main Image */}
        <Image
          // src="/about-sec1.png"
          src="/aboutsection-1.jpg"
          alt="About section image"
          width={600}
          height={200}
          className="w-full h-140 object-cover rounded-md"
        />

        {/* Quote Card */}
        {/* Quote Card */}
        <div
          className="
                  absolute bottom-2 right-2 sm:bottom-4 sm:right-4
                  bg-linear-to-b from-sky-400 to-blue-600 text-white
                  p-4 sm:p-6 w-[92%] sm:w-[70%]
                  rounded-xl

                  transition-all duration-500 ease-out
                  hover:-translate-y-2

                  // /* Normal blue glow */
                  // shadow-[0_0_2px_4px_rgba(59,130,246,0.8)]

                  /* Hover glow */
                  hover:shadow-[0_20px_45px_rgba(30,144,255,0.55)]
                "
          aria-label="Quote from Managing Director"
        >
          <blockquote className="text-xs py-2 sm:text-sm md:text-base leading-relaxed">
            <span className="text-white text-base sm:text-xl align-top mr-1">
              "We focus on building long-term partnerships with our clients,
              supporting them through every challenge and celebrating every
              success together".
            </span>
          </blockquote>

          <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
            Shubham Jain{" "}
            <span className="font-normal">
              Co-Founder &amp; Managing Director
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT + MISSION & VISION */}
      <div className="flex flex-col gap-6">
        {/* About Content */}
        <div>
          <p className="text-blue-600 uppercase tracking-wide text-2xl font-extrabold sm:text-2xl">
            About Solstra Info IT Solutions
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
            We Deliver Your Thoughts <br />
            Long Term IT Partner
          </h2>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Solstra Info IT Solutions provides high-quality Web &amp; Mobile App
            Development Services. Our excellent in-house team of experienced and
            skilled Web &amp; Mobile App Developers delivers
            requirement-specific and business-oriented Web &amp; Mobile App
            Development Solutions.
          </p>

          {/* Highlight Box */}
          <div className="mt-5 border-l-4 border-orange-500 pl-4  font-semibold text-gray-700 text-sm sm:text-base leading-relaxed">
            Being a Top Web &amp; Mobile App Development Company, our team of
            skilled professionals execute excellent Web &amp; App Development
            Services.
          </div>

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            We have experts in all latest and trending technologies who work
            hard to achieve client requirements and deliver top-notch solutions
            on time with affordable costs. We have deep experience working with
            various industries worldwide.
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
