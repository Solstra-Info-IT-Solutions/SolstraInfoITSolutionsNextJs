"use client";
import { useState, useEffect, useRef } from "react";

export default function Services() {
  const items = [
    { image: "/web-development.png", title: "Web Development", subtitle: "Modern, scalable and secure websites." },
    { image: "/mobile-app-development.png", title: "Mobile Apps", subtitle: "User-friendly mobile applications." },
    { image: "/ai-ml-development.png", title: "AI Development", subtitle: "Smart automation and AI solutions." },
    { image: "/e-commerce-development.png", title: "E-commerce Solutions", subtitle: "Immersive experiences for businesses." },
    { image: "/digital-marketing-service.png", title: "Digital Marketing", subtitle: "Grow your brand online efficiently." }
  ];

  const infiniteItems = [...items, ...items, ...items];
  const [index, setIndex] = useState(items.length);
  const [cardsPerView, setCardsPerView] = useState(1);

  const sliderRef = useRef(null);

  // Responsive Cards per View
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto slide on mobile
  useEffect(() => {
    if (cardsPerView === 1) {
      const i = setInterval(() => setIndex((p) => p + 1), 3000);
      return () => clearInterval(i);
    }
  }, [cardsPerView]);

  // Infinite Loop Reset
  useEffect(() => {
    if (index >= items.length * 2) {
      setTimeout(() => setIndex(items.length), 300);
    }
    if (index <= items.length - 2) {
      setTimeout(() => setIndex(items.length), 300);
    }
  }, [index]);

  // Move slider
  useEffect(() => {
    const cardWidth = sliderRef.current?.children[0]?.offsetWidth || 0;
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index]);

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

      {/* Buttons */}
      <div className="flex gap-3 absolute right-6 sm:right-10 top-6 sm:top-8 z-10">
<<<<<<< HEAD
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center bg-white/20  rounded-full  hover:bg-white/30 transition-transform active:scale-95 cursor-pointer "
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-transform active:scale-95 cursor-pointer"
        >
          →
        </button>
=======
        <button onClick={() => setIndex((p) => p - 1)} className="w-10 h-10 bg-white/20 rounded-full">←</button>
        <button onClick={() => setIndex((p) => p + 1)} className="w-10 h-10 bg-white/20 rounded-full">→</button>
>>>>>>> 906022163bce22cc37653d3616c0a5634dae77b8
      </div>

      {/* Slider */}
      <div className="mt-8 overflow-hidden">
        <div ref={sliderRef} className="flex gap-4 sm:gap-6 transition-transform duration-500">
          {infiniteItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden relative flex-shrink-0 group
                w-50 sm:w-80 lg:w-80]"
            >
              <div className="h-72 sm:h-80 md:h-96 overflow-hidden">
                <img src={item.image} className="w-full h-full object-cover" />
              </div>

              {/* Overlay */}
              <div className="  absolute inset-0 flex flex-col justify-center items-center text-white 
    bg-black/40 
    opacity-100
    sm:opacity-0 sm:hover:opacity-100 
    transition
  ">
                <h3 className="text-xl mx-5  font-bold">{item.title}</h3>
                <p className="text-sm hidden sm:block">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
