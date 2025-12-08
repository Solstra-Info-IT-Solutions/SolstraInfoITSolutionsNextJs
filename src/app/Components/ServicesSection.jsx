"use client";
import { useState, useEffect } from "react";

export default function Services() {
  const items = [
    {
      image: "/web-development.png",
      title: "Web Development",
      subtitle: "Modern, scalable and secure websites.",
    },
    {
      image: "/mobile-app-development.png",
      title: "Mobile Apps",
      subtitle: "User-friendly mobile applications.",
    },
    {
      image: "/ai-ml-development.png",
      title: "AI Development",
      subtitle: "Smart automation and AI solutions.",
    },
    {
      image: "/e-commerce-development.png",
      title: "E-commerce Solutions",
      subtitle: "Immersive experiences for businesses.",
    },
    {
      image: "/digital-marketing-service.png",
      title: "Digital Marketing",
      subtitle: "Grow your brand online efficiently.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Update cardsPerView based on window width
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3); // desktop
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto slider only on mobile
  useEffect(() => {
    if (cardsPerView === 1) {
      const interval = setInterval(next, 3000); // every 3 seconds
      return () => clearInterval(interval);
    }
  }, [cardsPerView]); // run effect when cardsPerView changes

  const cardWidth = 40 / cardsPerView;

  return (
    <section className="bg-[#0a3d62] rounded-3xl p-6 sm:p-10 mt-10 m-4 text-white relative">
      <h3 className="tracking-widest text-2xl mb-1">SERVICES</h3>
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
        Explore the innovative solutions <br />
        we provide to meet your needs.
      </h2>
      <p className="mt-3 text-gray-300 max-w-xl text-sm sm:text-base">
        Solstra Info IT Solutions provides top-notch Web & Mobile App Solutions.
      </p>

      {/* Arrow buttons */}
      <div className="flex gap-3 absolute right-6 sm:right-10 top-6 sm:top-8 z-10">
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30  transition-transform active:scale-95 cursor-pointer"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30  transition-transform active:scale-95 cursor-pointer"
        >
          →
        </button>
      </div>

      {/* Slider */}
      <div className="mt-8 overflow-hidden">
        <div
          className="flex gap-4 sm:gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * cardWidth}%)`,
            width: `${(items.length * 100) / cardsPerView}%`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden relative flex-shrink-0 group"
              style={{ width: `${cardWidth}%` }}
            >
              <div className="h-72 sm:h-80 md:h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/25">
                <h3 className="text-lg sm:text-xl font-bold drop-shadow">{item.title}</h3>
                <p className="text-sm sm:text-base drop-shadow">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
