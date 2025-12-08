"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
// Importing specific icons for the modal
import { FaPhoneAlt, FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx"; // For the grid icon in the image
import GetQuoteDialog from "./GetADialog";

export default function Navbar({ type = "home", icons = [] }) {
  const [open, setOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "Case Study", path: "/case-study" },
    { name: "Company Profile", path: "/profile" },
  ];

  const isHome = type === "home";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50 h-24 font-sans">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6 h-full">
        {/* --- LEFT: LOGO --- */}
        <div className="flex-shrink-0">
          <img
            src="/image1.png" // Ensure you have your logo here
            alt="Solstra Logo"
            className="h-12 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => router.push("/")}
          />
        </div>

        {/* --- CENTER: MENU (Desktop) --- */}
        <nav className="hidden xl:flex items-center justify-center">
          <ul className="flex gap-8 text-[15px] font-semibold text-gray-600 uppercase tracking-wide">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer hover:text-orange-500 transition-colors duration-200"
                onClick={() => router.push(item.path)}
              >
                {item.name}
                {/* Hover Underline Effect */}
                <span
                  className="absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300"
                  style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- RIGHT: BUTTONS & ACTIONS --- */}
        <div className="hidden md:flex items-center gap-4">
          {/* 1. Get a Quote Button */}
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="
            bg-orange-500 hover:bg-orange-600 
            text-white px-6 py-2.5 
              rounded-full font-medium text-sm 
              relative transition-all duration-300

              shadow-[0_0_10px_2px_rgba(0,0,0,0.35)]

              before:content-[''] before:absolute before:inset-1/6 before:rounded-full
              before:shadow-[0_0_8px_2px_rgba(0,0,0,0.8)]
              before:animate-ping before:scale-110

              after:content-[''] after:absolute after:inset-1/6 after:rounded-full
              after:shadow-[0_0_12px_3px_rgba(0,0,0,0.7)]
              after:animate-ping after:scale-110

             hover:scale-105 cursor-pointer
              "
          >
            Get a Quote
          </button>
          <GetQuoteDialog
  open={isQuoteModalOpen}
  onClose={() => setIsQuoteModalOpen(false)}
/>


          {/* 2. Hire Us Button */}
          <button className="border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer">
            Hire Us
          </button>

          {/* 3. CALL ICON WITH MODAL */}
          <div
            className="relativrounded-full"
            onMouseEnter={() => setIsCallModalOpen(true)}
            onMouseLeave={() => setIsCallModalOpen(false)}
          >
            {/* Trigger Icon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-md">
              <img src="/telephone-call (2).png" />
            </div>

            {/* --- THE MODAL --- */}
            <div
              className={`absolute right-0 top-full mt-4 w-[340px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 p-6 z-[60] transition-all duration-300 origin-top-right transform ${
                isCallModalOpen
                  ? "opacity-100 scale-100 translate-y-0 visible"
                  : "opacity-0 scale-95 -translate-y-2 invisible"
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Get In Touch
                </h3>
              </div>

              {/* Section: Sales Team */}
              <div className="mb-6">
                <h4 className="text-gray-500 font-medium mb-4 text-sm">
                  Solstra Sales Team
                </h4>
                <div className="space-y-5">
                  {/* Item: USA Phone */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:border-orange-500 group-hover:text-orange-500 transition-colors duration-300 shrink-0">
                      <img src="/telephone-call (2).png" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">USA</p>
                      <a
                        href="tel:+13054826524"
                        className="text-gray-700 font-medium text-sm hover:text-orange-500 transition"
                      >
                        +1-3054826524
                      </a>
                    </div>
                  </div>

                  {/* Item: Teams */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#5c6bc0] group-hover:border-[#5c6bc0] transition-colors duration-300 shrink-0">
                      <BsMicrosoftTeams size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Teams</p>
                      <a
                        href="#"
                        className="text-gray-700 font-medium text-sm hover:text-orange-500 transition"
                      >
                        Nextbigtechnology
                      </a>
                    </div>
                  </div>

                  {/* Item: Email Sales */}
                  <div className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-orange-500 group-hover:border-orange-500 transition-colors duration-300 shrink-0">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Email</p>
                      <a
                        href="mailto:Sales@nextbigtechnology.com"
                        className="text-gray-700 font-medium text-sm hover:text-orange-500 transition"
                      >
                        Sales@nextbigtechnology.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: HR Team */}
              <div>
                <h4 className="text-gray-500 font-medium mb-4 text-sm">
                  Solstra HR Team
                </h4>
                {/* Item: Email HR */}
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-orange-500 group-hover:border-orange-500 transition-colors duration-300 shrink-0">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <a
                      href="mailto:Hr@Nextbigtechnology.com"
                      className="text-gray-700 font-medium text-sm hover:text-orange-500 transition"
                    >
                      Hr@Nextbigtechnology.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE: BURGER MENU --- */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-gray-700 hover:text-orange-500 transition"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>
    </header>
  );
}
