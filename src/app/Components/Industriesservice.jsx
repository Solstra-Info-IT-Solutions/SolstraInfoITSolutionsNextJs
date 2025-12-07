"use client";
import { useEffect, useState } from "react";

export default function Industriesservice() {
  const cards = [
    { img: "/fitness.jpeg", title: "Fitness", sub: "Industry Experts" },
    { img: "/music.jpeg", title: "Music", sub: "Creative Artists" },
    { img: "/education.jpeg", title: "Education", sub: "Learning & Coaching" },
    { img: "/hospitality.jpeg", title: "Hospitality", sub: "Hotels & Service" },
    { img: "/corporate.jpeg", title: "Corporate", sub: "Consultancy" },
    { img: "/lifestyle.jpeg", title: "Lifestyle", sub: "Personal & Family" },
  ];

  const loopedCards = [...cards, ...cards]; // duplicate for seamless loop
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const speed = 0.5; // pixels per frame
    const totalWidth = loopedCards.length * 260; // card width + gap

    const step = () => {
      setTranslateX(prev => {
        let next = prev + speed;
        if (next >= totalWidth / 2) next = 0; // loop
        return next;
      });
      animationFrameId = requestAnimationFrame(step);
    };

    step();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="space-y-3 mb-12">
        <div className="flex items-center gap-2">
          <span className="w-10 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></span>
          <p className="text-gray-700 text-2xl font-semibold">Industries</p>
        </div>
        <h2 className="text-3xl md:text-6xl font-bold leading-tight">
          We Serve All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-700">
            Industries
          </span>
        </h2>
        <p className="text-gray-600 text-sm md:text-xl">
          We stay on top of our industry by being experts in yours.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative">
        <div
          className="flex gap-4 w-max transition-transform will-change-transform"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {loopedCards.map((card, index) => (
            <div
              key={index}
              className="relative w-[250px] sm:w-[300px] md:w-[230px] h-[330px] md:h-[360px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 group"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-xs mt-1">{card.sub}</p>
                <button className="mt-3 w-10 h-10 border border-white rounded-full flex items-center justify-center">
                  ➤
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
