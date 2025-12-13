// Components/aboutComponents/ContactSection.tsx
import Link from "next/link";
export default function ContactSection() {
  return (
    <section className="relative mt-20">
      {/* Background Image Section */}
      <div
        className="relative h-[450px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nextbigtechnology.com/wp-content/uploads/2021/08/about-contact-bg.jpg')",
        }}
      >
        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Connect With Us To Know More About Our{" "}
            <br className="hidden md:block" />
            Services And Team
          </h2>

          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
            We are available to assist you for all your queries and inquiry. Our
            team is always ready on priority basis to assist regarding all your
            needs.
          </p>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="max-w-6xl mx-auto  px-4 justify-center relative z-10">
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
            businesses build and scale effectively. Unlike firms focused on only
            one area, we specialise in both software development and
            recruitment.
          </p>

          <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            Founded in Rajasthan, India, Solstra was created with one purpose to
            close the gap between great ideas and great execution. Whether you
            need a custom digital product or top-tier talent to build it,
            Solstra serves as your single, reliable partner for growth.
          </p>
        </div>
      </div>
    </section>
  );
}
