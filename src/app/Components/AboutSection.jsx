"use client";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AboutSection() {
  const ref = useRef();
  const router = useRouter();
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
    <section className="w-full py-16 md:py-24 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGES */}
        <div className="relative flex items-center justify-center w-full">
          {/* BIG IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-lg w-[85%] sm:w-[380px] h-[260px] sm:h-[350px] bg-gray-200">
            <img src="/aboutimg1.jpg" className="w-full h-full object-cover" />
          </div>

          {/* TOP-RIGHT SMALL IMAGE */}
          <div className="absolute -top-5 sm:-top-10 -right-5 sm:-right-10 rounded-2xl overflow-hidden shadow-md w-[90px] h-[70px] sm:w-[140px] sm:h-[120px] bg-gray-200">
            <img src="/aboutimg3.jpg" className="w-full h-full object-cover" />
          </div>

          {/* BOTTOM-LEFT SMALL IMAGE */}
          <div className="absolute -bottom-5 sm:-bottom-10 -left-5 sm:-left-10 rounded-2xl overflow-hidden shadow-md w-[90px] h-[70px] sm:w-[140px] sm:h-[120px] bg-gray-200">
            <img src="/aboutimg2.jpg" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          ref={ref}
          className={`text-center md:text-left mx-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-orange-500 font-semibold mb-2 text-sm md:text-base">
            — About Solstra
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About Solstra Info <br />
            <span className="text-orange-500">IT Solutions?</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed text-sm sm:text-base">
            Solstra Info IT Solutions has been a Top Web and App Development
            Company since 2025. Solstra Info IT Solutions always aims at the
            infusion of the latest technologies for the development of Websites
            and Mobile Applications. As a Top Mobile App Development Company, we
            know how a Website and Mobile App can take off with a proper Idea,
            Design, and implementation!
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
            Solstra Info IT Solutions is formulated to serve society by
            providing Web products, Mobile products, and other IT services.
            Being a Top Web and App Development Company, we always work on
            innovative and unique solutions as per client needs.
          </p>

          {/* BUTTON */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={() => router.push("/about")}
              className=" cursor-pointer 
              px-10 py-1 h-12 
              border-2 border-orange-400 
              text-orange-500 
              rounded-full 
              text-base sm:text-lg font-medium 
              hover:bg-orange-500 hover:text-white
              transition-all duration-150
              active:scale-95 active:shadow-sm
              shadow-md
            "
            >
              Explore More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
