import Image from "next/image";

export default function CultureSection() {
  return (
    <section
      aria-label="Our Culture"
      className="relative w-full overflow-hidden mt-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/aboutpage/culture-bg.jpg" // apni image ka path
          alt="Technology background representing company culture"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="flex items-center justify-center px-4 py-14 sm:py-20">
        <h2
          className="text-center text-white font-semibold tracking-wide
          text-xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
        "
        >
          Our Culture Code, <span className="text-blue-400">Connect</span>,
          Create
        </h2>
      </div>
    </section>
  );
}
