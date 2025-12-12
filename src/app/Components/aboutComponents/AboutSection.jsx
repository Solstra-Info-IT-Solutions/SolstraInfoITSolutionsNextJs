import Image from "next/image";

export default function AboutSolstra() {
  return (
    <section
      aria-labelledby="about-solstra-heading"
      className="relative w-full bg-[#1f2b5a] mt-25"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* LEFT SPACE (BLUE AREA) */}
          <div className="hidden lg:block h-full"></div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px]">
            <Image
              src="/aboutpage/about-solstra.jpg" // public/about-solstra.jpg
              alt="Solstra Info IT Solutions team collaborating"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* WHITE TEXT CARD (OVERLAY) */}
          <div
            className="
              relative lg:absolute
              lg:left-10
              lg:top-1/2
              lg:-translate-y-1/2
              bg-white
              max-w-xl
              p-6 sm:p-8 md:p-10
              shadow-xl
              z-10
            "
          >
            <h2
              id="about-solstra-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              About Solstra Info IT Solutions
            </h2>

            <p className="mt-2 text-orange-500 font-semibold">
              Where Innovation Meets Human Potential.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Solstra Info IT Solutions combines technology and talent to help
              businesses build and scale effectively. Unlike firms focused on
              only one area, we specialise in both software development and
              recruitment.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Founded in Rajasthan, India, Solstra was created with one purpose
              to close the gap between great ideas and great execution. Whether
              you need a custom digital product or top-tier talent to build it,
              Solstra serves as your single, reliable partner for growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
