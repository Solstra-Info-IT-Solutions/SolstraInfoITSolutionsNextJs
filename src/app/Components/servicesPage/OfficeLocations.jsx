"use client";

import Image from "next/image";

export default function OfficeLocations() {
  const offices = [
    {
      name: "JAIPUR",
      img: "https://nextbigtechnology.com/wp-content/uploads/2022/09/usafay.png.webp",
      address: ["48-B, Uday Nagar - A, Jaipur", "302019 Rajasthan, India"],
    },
    {
      name: "NOIDA",
      img: "https://nextbigtechnology.com/wp-content/uploads/2022/09/australiafay.png.webp",
      address: ["B-59, Sector 2, Noida", "201301"],
    },
    {
      name: "BIHAR",
      img: "https://nextbigtechnology.com/wp-content/uploads/2022/09/australiafay.png.webp",
      address: ["Shandilya Complex, Pandaul Madhubani", "Bihar 847234"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-wrap justify-center gap-10">
          {offices.map((office, index) => (
            <div
              key={index}
              className="text-center w-full sm:w-[45%] lg:w-[22%]"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg shadow-md">
                <div className="relative w-full h-56">
                  <Image
                    src={office.img}
                    alt={office.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-5">{office.name}</h3>

              {/* Address */}
              <p className="text-gray-600 mt-2 leading-relaxed">
                {office.address.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              {/* Icons */}
              <div className="flex justify-center gap-5 mt-4 text-indigo-900 text-xl">
                <a href="#">
                  <i className="fa fa-map-marker" />
                </a>
                <a href="#">
                  <i className="fa fa-phone" />
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
