import Image from "next/image";

export default function AboutSolstra() {
  return (
    <section
      aria-labelledby="about-solstra-heading"
      className="relative w-full min-h-[90svh] pb-40"
    >
      {/* Background Image */}
      <div className="relative h-[90svh] bg-blue-950 sm:bg-transparent">
        <Image
          src="/aboutpage/bgabout3.jpg"
          alt="Solstra Info IT Solutions team collaborating in office"
          fill
          priority
          sizes="50vw"
          className="hidden sm:block object-cover object-center"
        />

        {/* Dark overlay only when image is visible */}
        <div className="absolute inset-0 hidden sm:block bg-black/50" />
      </div>

      {/* Floating Content Card */}
      <article
        className="
                  absolute left-1/2 bottom-45 md:bottom-60
            -translate-x-1/2 translate-y-1/3 md:translate-y-1/2
            bg-white backdrop-blur
            rounded-2xl shadow-lg
            p-6 sm:p-8 md:p-10
            w-[92%] sm:w-[90%] lg:w-[85%]
            px-6 sm:px-8
            text-center sm:text-left
        "
      >
        <h1
          id="about-solstra-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
          About Solstra Info IT Solutions
        </h1>

        <p className="mt-2 text-orange-500 font-semibold text-sm sm:text-base">
          Where Innovation Meets Human Potential
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Solstra Info IT Solutions is a technology-driven company helping
          businesses build, scale, and innovate through modern software
          development and strategic recruitment solutions.
        </p>

        <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
          Founded in Rajasthan, India, Solstra bridges the gap between ideas and
          execution by offering end-to-end digital and talent solutions under
          one roof.
        </p>
      </article>
    </section>
  );
}
