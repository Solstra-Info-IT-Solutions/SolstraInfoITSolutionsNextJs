"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper/types";   // ⭐ TypeScript Fix

function TrustedLeadingCompany() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null); // ⭐ Type added

  const logos = [
    "/brand-1.png",
    "/brand-2.png",
    "/brand-3.png",
    "/brand-4.png",
    "/brand-5.png",
    "/brand-6.png",
    "/brand-7.png",
  ];

  return (
    <section className="mb-16">
      <div>
        <div
          className="py-12"
          onMouseEnter={() => swiperInstance?.autoplay?.stop()}    // ⭐ Safe access
          onMouseLeave={() => swiperInstance?.autoplay?.start()}   // ⭐ Safe access
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}        // ⭐ Set typed instance
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className=" w-40 "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TrustedLeadingCompany;
