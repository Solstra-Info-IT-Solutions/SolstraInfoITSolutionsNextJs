"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import GetQuoteDialog from "./GetADialog";

export default function Navbar({ type = "home", extraIcons = [] }) {
  const [open, setOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/commingsoon" },
    { name: "Case Study", path: "/commingsoon" },
    { name: "Company Profile", path: "/commingsoon" },
  ];

  const isHome = type === "home";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-sm z-50 h-24 font-sans">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-6 h-full">
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <img
            src="/image1.png"
            alt="Solstra Logo"
            className="h-12 w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => router.push("/")}
          />
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden xl:flex items-center justify-center">
          {isHome && (
            <ul className="flex gap-5 text-[15px] font-semibold text-gray-600 uppercase tracking-wide">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative cursor-pointer hover:text-orange-500 transition-colors duration-200"
                  onClick={() => router.push(item.path)}
                >
                  {item.name}
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300"
                    style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  ></span>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          {extraIcons && extraIcons.map((icon, i) => (
            <a
              key={i}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
            </a>
          ))}

          <GetQuoteDialog open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

          <button className="border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer">
            Hire Us
          </button>

          <div
            className="relative rounded-full"
            onMouseEnter={() => setIsCallModalOpen(true)}
            onMouseLeave={() => setIsCallModalOpen(false)}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-md">
              <img src="/telephone-call (2).png" />
            </div>

            {/* CALL MODAL */}
            <div className={`absolute right-0 top-full mt-4 w-[340px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 z-[60] transition-all duration-300 origin-top-right transform ${
                isCallModalOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
              }`}>
              {/* Modal content (same as your code) */}
            </div>
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-gray-700 hover:text-orange-500 transition"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="xl:hidden bg-white shadow-md w-full absolute top-24 left-0 z-40 p-4">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-orange-500 transition-colors duration-200"
                onClick={() => {
                  router.push(item.path);
                  setOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}

            {/* Hire Us Button */}
            <li>
              <button
                className="w-full border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Hire Us
              </button>
            </li>

            {/* Extra Icons */}
            {extraIcons && extraIcons.map((icon, i) => (
              <li key={i} className="flex items-center gap-2">
                <a href={icon.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                  <span className="text-sm">{icon.alt}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
