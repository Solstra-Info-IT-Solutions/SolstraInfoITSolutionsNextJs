"use client";
import Link from "next/link";

import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export default function OurOffices() {
  const offices = [
    {
      country: "JAIPUR",
      image: "/usa.png.webp",
      address1: "48-B, Uday Nagar - A, Jaipur",
      address2: "Rajasthan, India",
      address3: "302019",
    },
    {
      country: "NOIDA",
      image: "/australia.png.webp",
      address1: "B - 59, 3rd Floor, B Block, Sector 2",
      address2: "Noida, Uttar Pradesh",
      address3: "201301",
    },

    {
      country: "BIHAR",
      image: "/india.png.webp",
      address1: "Shandilya Complex, Pandaul",
      address2: "Madhubani ,Bihar ",
      address3: "847234",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-[5%] py-16 bg-white">
      {/* Heading */}
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#06114f] mb-12">
        Our Offices
      </h2> */}

      <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
        Our <span className="font-semibold text-[#E28217]">Offices</span>
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 ">
        {offices.map((office, index) => (
          <div key={index} className="text-left">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-sm  bg-gray-100">
              <img
                src={office.image}
                alt={`${office.country} office`}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mt-4 justify-center flex text-[#06114f]">
              {office.country}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mt-2 text-center">
              {office.address1} <br />
              {office.address2} <br />
              {office.address3}
            </p>

            {/* Icons */}
            <div className="flex gap-4 mt-3 justify-center text-[#06114f] text-lg cursor-pointer">
              {/* Location */}
              <Link href="/" target="_blank">
                <MdLocationPin className="w-5 h-5" />
              </Link>

              {/* Phone */}
              <button
                onClick={() => alert("+91-9001638396")}
                className="cursor-pointer"
              >
                <IoMdCall className="w-5 h-5" />
              </button>

              {/* Email → alert only */}
              <button
                onClick={() => alert("sjain01ajmer@gmail.com")}
                className="cursor-pointer"
              >
                <IoIosMail className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
