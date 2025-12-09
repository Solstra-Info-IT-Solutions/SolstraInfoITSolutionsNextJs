"use client";

import React, { useState } from "react";
import Image from "next/image";

const offices = [
  {
    country: "USA",
    img: "https://nextbigtechnology.com/wp-content/uploads/2018/06/usa.jpg",
    address1: "2710 Pace West Dr, Tucson",
    address2: "AZ 85730",
    phone: "+1 305-482-6524",
    email: "sales@nextbigtechnology.com",
  },
  {
    country: "Australia",
    img: "https://nextbigtechnology.com/wp-content/uploads/2018/06/aus.jpg",
    address1: "21 Benalia Cres Marayong",
    address2: "2148",
    phone: "+61 478053599",
    email: "sales@nextbigtechnology.com",
  },
  {
    country: "UK",
    img: "https://nextbigtechnology.com/wp-content/uploads/2018/06/uk.jpg",
    address1: "18 Tuesday Market Place,",
    address2: "Norfolk, PE30 1JW",
    phone: "+44 01553600090",
    email: "sales@nextbigtechnology.com",
  },
  {
    country: "India",
    img: "https://nextbigtechnology.com/wp-content/uploads/2021/08/Indiay.jpg",
    address1: "Sikar Road, Jaipur",
    address2: "Rajasthan",
    phone: "+91 9950726570",
    email: "sales@nextbigtechnology.com",
  },
];

const items = [
  "Web Development",
  "Mobile App Development",
  "Digital Marketing",
  "Enhancing an Existing Product",
  "Partnership Opportunities",
  "Enterprise Solutions",
  "Others",
];

export default function TalkToConsultantSection() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Web Development");

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#003A63] text-white rounded-[2.5rem] shadow-xl p-6 sm:p-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT SECTION */}
            <div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-sky-100" />
                <span className="text-sky-100 text-sm font-medium tracking-wide">
                  Get in touch
                </span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
                Talk to Consultant
              </h2>

              <p className="mt-2 text-sky-100 text-sm sm:text-base">
                Let’s Build the Next Big Thing Together
              </p>

              {/* FORM */}
              <form className="mt-8 space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <label className="sr-only">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <label className="sr-only">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  <label className="sr-only">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                  />

                  {/* CUSTOM DROPDOWN */}
                  <div className="relative w-full">
                    <div
                      role="button"
                      aria-haspopup="listbox"
                      aria-expanded={open}
                      onClick={() => setOpen(!open)}
                      className="w-full bg-white text-gray-900 px-5 py-3 rounded-full border border-gray-300 cursor-pointer flex justify-between items-center"
                    >
                      {value}
                      <img src="/down-arrow.png" className="w-6 h-6" alt="Dropdown" />
                    </div>

                    {open && (
                      <div
                        role="listbox"
                        className="absolute w-full mt-2 bg-white border border-gray-300 shadow-lg rounded-2xl z-50 overflow-hidden"
                      >
                        {items.map((item, i) => (
                          <div
                            key={i}
                            role="option"
                            onClick={() => {
                              setValue(item);
                              setOpen(false);
                            }}
                            className="px-4 py-3 hover:bg-orange-400 text-black hover:text-white cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <input
                      type="file"
                      name="file"
                      className="w-full rounded-full bg-white text-gray-800 file:bg-gray-400 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-full cursor-pointer"
                    />
                  </div>

                </div>

                <label className="sr-only">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-3xl bg-white text-gray-900 px-5 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button className="mt-2 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-transform active:scale-95 cursor-pointer">
                  Submit
                </button>
              </form>
            </div>

            {/* RIGHT SECTION */}
            <div className="bg-white text-gray-900 rounded-[2rem] p-6 sm:p-8 shadow-lg">

              <div className="flex items-center gap-2">
                <span className="w-12 h-[2px] bg-orange-500"></span>
                <p className="text-sm text-gray-600 uppercase tracking-wide">Office</p>
              </div>

              <h3 className="text-3xl font-bold mt-2">
                Our <span className="text-orange-500">Offices</span>
              </h3>

              <ul className="mt-6 space-y-6">
                {offices.map((office) => (
                  <li key={office.country} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-10 overflow-hidden rounded-sm">
                        <Image
                          src={office.img}
                          alt={`${office.country} office`}
                          fill
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">{office.country}</h4>
                    </div>

                    <p className="text-sm mt-2 leading-snug">
                      {office.address1} <br /> {office.address2}
                    </p>

                    <div className="flex gap-4 mt-2 text-gray-600 text-lg">
                      <a href={`tel:${office.phone}`} className="hover:text-orange-500">
                        <i className="fa-solid fa-phone"></i>
                      </a>
                      <a href={`mailto:${office.email}`} className="hover:text-orange-500">
                        <i className="fa-solid fa-envelope"></i>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
