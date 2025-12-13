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
  const [cardsPerView, setCardsPerView] = useState(3);
  const sliderRef = useRef(null);

  // Responsive
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3); // ✅ desktop
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Infinite reset
  useEffect(() => {
    if (index >= items.length * 2) {
      setTimeout(() => setIndex(items.length), 400);
    }
    if (index <= items.length - 1) {
      setTimeout(() => setIndex(items.length), 400);
    }
  }, [index]);

  // Move slider (PIXEL PERFECT)
  useEffect(() => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.children[0];
    const cardWidth = card.offsetWidth;
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index, cardsPerView]);

  return (
    <section className="bg-[#0a3d62] p-6 sm:p-10 mt-10 text-white relative">
      <h3 className="tracking-widest text-2xl mb-1 font-bold">SERVICES</h3>

      <h2 className="text-3xl sm:text-4xl leading-tight">
        Explore the innovative solutions <br />
        we provide to meet your needs.
      </h2>

      <p className="mt-3 text-gray-300 max-w-xl text-sm sm:text-base">
        Solstra Info IT Solutions provides top-notch Web & Mobile App Solutions.
      </p>


      {/* Buttons */}
      <div className="flex gap-3 absolute right-6 top-6 z-10">
        <button onClick={() => setIndex(p => p - 1)} className="w-10 h-10 bg-white/20 rounded-full">←</button>
        <button onClick={() => setIndex(p => p + 1)} className="w-10 h-10 bg-white/20 rounded-full">→</button>
      </div>

      {/* VIEWPORT */}
      <div className="mt-8 overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
        >
          {infiniteItems.map((item, i) => (
            <div
              key={i}
              className="shrink-0 px-3"
              style={{ width: `calc(100% / ${cardsPerView})` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden relative group">
                <div className="h-82">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
