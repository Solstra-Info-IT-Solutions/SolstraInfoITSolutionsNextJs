"use client";
import { useRef, useEffect, useState } from "react";

export default function WhySolstra() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // animation repeat on scroll
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* LEFT CONTENT */}
      <div
        ref={ref}
        className={`flex flex-col justify-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="w-10 h-1 bg-gradient-to-r from-blue-950 to-orange-500 rounded-full"></span>
          <p className="text-gray-700 font-semibold text-sm sm:text-base">Why Solstra</p>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-950">
            Why Solstra Info IT Solutions?
          </span>
        </h2>
        <p className="text-gray-700 mt-6 leading-relaxed text-base sm:text-lg">
          <b>Solstra Info IT Solutions</b> stands out as a premier partner for{" "}
          <span className="font-semibold text-orange-600">
            Recruitment, Product Development, and IT Services,
          </span>{" "}
          driven by a commitment to delivering high-quality, innovative, and cost-effective
          solutions. With deep industry experience, Solstra has built a strong reputation for
          empowering businesses by connecting them with top-tier talent and delivering powerful
          digital products.
          <br /><br />
          Our expert team seamlessly bridges the gap between human resources and technology,
          ensuring every project—whether it's complex hiring for a multinational or a custom
          software solution—is tailored to meet unique business goals. Trusted by industry giants
          like <b>Capgemini, TCS, Infosys, NeevSystem, and OpenMalo Technologies,</b> Solstra Info
          IT Solutions continues to be the preferred choice for businesses seeking reliable,
          result-driven growth strategies.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src="/why-solstra-info-it-solutions-home-page.png"
          className="w-[280px] h-[556px] object-cover rounded-[150px] "
          alt="Technology Illustration"
        />
      </div>
     
    </section>
  );
}
