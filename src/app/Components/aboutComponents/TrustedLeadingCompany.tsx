"use client"

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// Import Autoplay from modules
import { Autoplay } from "swiper/modules";

function TrustedLeadingCompany() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // * trusted brand logo for dynamic rendering
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
        
        {/* //*header */}
        {/* <div className="space-y-2 text-center ">
         
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins text-center font-normal  mb-6 mt-10">
         Trusted by <span className="font-semibold text-[#E28217]">  Leading Companies</span>
      </h2>
      
          <p className="text-xl mb-10 mt-10">Join thousands of professionals working at top organizations</p>
        </div> */}

        <div
          className="py-12"
          onMouseEnter={() => swiperInstance?.autoplay.stop()}
          onMouseLeave={() => swiperInstance?.autoplay.start()}
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Swiper
            onSwiper={setSwiperInstance} // Get the swiper instance here
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
            // freeModeMomentum={false}
          >
            {/* //! rendering the trusted brand here */}
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
                  style={{ maxHeight: "80px" }}
                  // className="max-sm:w-45"
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
