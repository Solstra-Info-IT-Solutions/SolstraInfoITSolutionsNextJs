"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 

export default function Herosection() {
  const [current, setCurrent] = useState(0);
  const router = useRouter(); 

  const slides = [
    {
      type: "video",
      src: "/WhatsApp Video 2025-11-29 at 5.10.11 PM.mp4",
      title: "Empowering Next-gen Apps with AI Solutions",
    },
    {
      type: "image",
      src: "/ARVR-Technology11.jpg",
      title: "Build Scalable Digital Products With Us",
    },
    {
      type: "image",
      src: "/Leading-With-AI11.jpg",
      title: "Transform Your Business Using AI & Automation",
    },
  ];

  // AUTO SLIDE EVERY 3 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full mt-20 ">

      <div className="relative w-full">

        {/* BUTTONS → now hidden on mobile */}
       {/* <div className="flex justify-between items-center absolute w-full top-1/2 -translate-y-1/2 z-20 e">
  Previous Slide
        <button
            onClick={prevSlide}
            className="hidden sm:flex pointer-events-auto bg-white text-black shadow-md p-3 rounded-full h-20 w-20  hover:bg-gray-200 transition items-center justify-center cursor-pointer "
             >
            <img src="/smalll-left-arrow.png" alt="Previous" className="w-6 h-6"/>
        </button>

  Next Slide
         <button
              onClick={nextSlide}
              className="hidden sm:flex pointer-events-auto bg-white text-black shadow-md p-3 rounded-full h-20 w-20 hover:bg-gray-200 transition items-center justify-center  cursor-pointer"
               >    
             <img src="/icons8-right-arrow-24.png" alt="Next" className="w-6 h-6"/>
          </button>
      </div> */}


        {/* SLIDER */}
        <div className="flex overflow-hidden ">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-[70vh] sm:h-[75vh] md:h-[80vh] relative"
              >
                {/* VIDEO OR IMAGE */}
                {slide.type === "video" ? (
                  <video
                    className="w-full h-full object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={slide.src}
                    className="w-full h-full object-cover "
                    alt=""
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0  bg-black/40 flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 ">
                  <div className="max-w-xl">
                    <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>

                    <button className="mt-6 sm:mt-8 md:mt-10 py-2.5 sm:py-3 border border-white rounded-full text-white text-sm sm:text-base backdrop-blur-md hover:bg-white/30 transition w-full sm:w-48 md:w-56 cursor-pointer transition-transform active:scale-95">
                      Talk To Consultant
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
