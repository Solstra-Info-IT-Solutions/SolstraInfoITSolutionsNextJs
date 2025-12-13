"use client";

export default function HomeSection({
  heroTitle = "Building Your Digital Foundation for the Future.",
  heroDescription,
  heroImages = [],
  whyTitle = "Why Solstra Info IT Solutions?",
  whyPoints = [],
  stats = [],
  services = [],
  serviceImage,
  offerings = [],
  offeringImages = [],
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-linear-to-r from-[#f7f4e9] to-[#eef3f7] py-30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-gray-600 leading-relaxed">{heroDescription}</p>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center md:justify-end mt-8">
            <div className="grid grid-cols-2 gap-6 md:gap-8 justify-items-center items-center">
              {heroImages.map((img, index) => (
                <div
                  key={index}
                  className={`
              relative
              w-32 md:w-40 lg:w-48
              rounded-full
              hover:scale-105 hover:shadow-2xl
              transition-transform duration-500
              ${index % 2 === 0 ? "md:-translate-y-4" : "md:translate-y-4"}
            `}
                >
                  {/* Inner white circle */}
                  <div className="bg-white rounded-full overflow-hidden w-full h-full">
                    <img
                      src={img.src}
                      alt={`Hero ${index}`}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-full pointer-events-none ring-2 ring-white/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="w-full px-6 lg:px-20 py-20 w-ful">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
              {whyTitle}
            </h2>

            <div className="mt-8 space-y-3 text-sm">
              {whyPoints.map((item, i) => (
                <p key={i}>
                  ✅ <strong>{item.title}:</strong> {item.text}
                </p>
              ))}
            </div>

            <p className="mt-6 text-lg">
              Need expert <strong>web & mobile development services?</strong>
              Contact <strong>Solstra Info Technology</strong> today!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 p-2">
            {stats.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  bg-white 
                  rounded-2xl 
                  p-6 
                  text-center 
                  border 
                  border-gray-100 
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all 
                  duration-300
                "
              >
                {/* Icon wrapper */}
                <div
                  className={`
                      w-16 h-16 mx-auto flex items-center justify-center 
                      rounded-full 
                      bg-gray-100
                      // text-${item.color}-600
                      text-3xl
                      shadow-sm
                      // ring-4 ring-${item.color}-500/10
                      // group-hover:ring-${item.color}-500/30
                      transition-all duration-300
                      animate-softFloat
                    `}
                >
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-3xl font-bold text-gray-900 mt-4">
                  {item.count}+
                </h3>

                {/* Label */}
                <p className="text-gray-500 text-[15px] mt-1 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-2 gap-6 p-2">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white shadow rounded p-4 text-center hover:shadow-2xl duration-300"
              >
                <div className={`text-${item.color}-500 text-4xl mb-4`}>
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-4xl font-bold">{item.count}</h3>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Services */}
      <section className="w-full bg-[#fdf5ef] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Our Services
            </h2>

            <p className="text-gray-700 text-lg mb-10">
              The Solstra Advantage: We build for performance, security, and
              scalability. Our agile development process ensures transparency
              and rapid delivery, while our focus on clean code guarantees a
              sustainable product that grows with your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <a
                  key={i}
                  className="bg-white shadow-md hover:bg-orange-200 hover:text-white hover:shadow-xl rounded-xl p-6 text-center duration-500"
                >
                  <img src={service.img} className="w-16 mx-auto mb-3" />
                  <h5 className="font-semibold text-gray-800">
                    {service.title}
                  </h5>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-xl mt-5 overflow-hidden shadow-2xl border-4 border-orange-500">
            <img
              src={serviceImage}
              className="w-full h-[380px] md:h-[450px] object-cover"
              alt="Service Illustration"
            />
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="grid grid-cols-2 gap-6">
            {offeringImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                className={`rounded-xl w-full shadow-md ${img.className}`}
                alt={`Offer IMG ${i}`}
              />
            ))}
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Key Offerings
            </h2>

            <div className="space-y-2 text-gray-700 leading-relaxed">
              {offerings.map((off, i) => (
                <p key={i}>
                  <strong>{off.title}:</strong> {off.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
