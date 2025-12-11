"use client";

import React, { useState, useRef } from "react"; // ✅ Added useRef
import Image from "next/image";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const offices = [
  {
    country: "Noida",
    img: "https://nextbigtechnology.com/wp-content/uploads/2021/08/Indiay.jpg",
    address1: "21 Benalia Cres Marayong",
    address2: "2148",
    phone: "+91 9001638396",
    email: "sjain01ajmer@gmail.com ",
  },
  {
    country: "Jaipur",
    img: "https://nextbigtechnology.com/wp-content/uploads/2021/08/Indiay.jpg",
    address1: "Uday Nagar",
    address2: "A Mansarovar",
    phone: "+91 9001638396",
    email: "sjain01ajmer@gmail.com ",
  },
  {
    country: "Indore",
    img: "https://nextbigtechnology.com/wp-content/uploads/2021/08/Indiay.jpg",
    address1: "Sikar Road, Jaipur",
    address2: "Rajasthan",
    phone: "+91 9001638396",
    email: "sjain01ajmer@gmail.com ",
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

  // ✅ Create ref for file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = { fullName: "", email: "", phone: "" };
    let isValid = true;

    if (!form.fullName.trim()) {
      tempErrors.fullName = "Full Name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(form.fullName)) {
      tempErrors.fullName = "Full Name must be letters only";
      isValid = false;
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      tempErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!form.phone.trim()) {
      tempErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d+$/.test(form.phone)) {
      tempErrors.phone = "Phone must be numbers only";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // ✅ Log form data including dropdown
      console.log({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        selectedService: value,
      });

      alert("Form submitted successfully!");

      // ✅ Reset form fields
      setForm({ fullName: "", email: "", phone: "", message: "" });

      // ✅ Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <section className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#003A63] text-white rounded-[2.5rem] shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SECTION */}
            <div>
              <div className="flex items-center gap-3">
                <span className="w-12 h-px bg-sky-100 " />
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
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="sr-only">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      value={form.fullName}
                      onChange={handleChange}
                      className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="sr-only">Phone</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="rounded-full bg-white text-gray-900 px-5 py-3 w-full outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

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
                      <img
                        src="/down-arrow.png"
                        className="w-6 h-6"
                        alt="Dropdown"
                      />
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

                  {/* ✅ Added ref here */}
                  <div className="sm:col-span-2">
                    <input
                      type="file"
                      name="file"
                      ref={fileInputRef} // ✅ reference added
                      className="w-full rounded-full bg-white text-gray-800 file:bg-gray-400 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-full cursor-pointer"
                    />
                  </div>
                </div>

                <label className="sr-only">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl bg-white text-gray-900 px-5 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button className="mt-2 bg-orange-500 hover:bg-orange-600 px-8 py-3  rounded-full font-semibold transition-transform active:scale-95 cursor-pointer">
                  Submit
                </button>
              </form>
            </div>

            {/* RIGHT SECTION */}
            <div className="bg-white text-gray-900 rounded-[2rem] p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-12 h-[2px] bg-gradient-to-r from-orange-400 to-blue-950"></span>
                <p className="text-sm  uppercase bg-clip-text text-transparent bg-gradient-to-r font-bold from-orange-500 to-blue-950 tracking-wide">
                  Office
                </p>
              </div>

              <h3 className="text-3xl font-bold mt-2">
                Our <span className="text-orange-500">Offices</span>
              </h3>

              <ul className="mt-6 space-y-2">
                {offices.map((office) => (
                  <li
                    key={office.country}
                    className="border-t pt-1 border-gray-200 pb-4"
                  >
                    <div className="flex items-center gap-3 py-1">
                      <div className="relative h-6 w-10 overflow-hidden  rounded-sm">
                        <Image
                          src={office.img}
                          alt={`${office.country} office`}
                          fill
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-lg">
                        {office.country}
                      </h4>
                    </div>

                    <p className="text-sm mt-2 leading-snug py-1">
                      {office.address1}
                    </p>

                    <div className="flex gap-4 mt-3 text-[#06114f]  text-lg cursor-pointer">
                      {/* Location */}
                      <Link href="https://maps.google.com" target="_blank">
                        <MdLocationPin className="w-5 h-5" />
                      </Link>

                      {/* Phone */}
                      <Link href="tel:+919999999999">
                        <IoMdCall className="w-5 h-5" />
                      </Link>

                      {/* Email */}
                      <Link href="mailto:example@gmail.com">
                        <IoIosMail className="w-5 h-5" />
                      </Link>
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
