"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import GetQuoteDialog from "./GetADialog";
import { usePathname } from "next/navigation";
import HireUsModal from "./hireuspopup";

export default function Navbar({ type = "home", extraIcons = [] }) {
  const [open, setOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const router = useRouter();

  // navbar color changes
  const pathname = usePathname();
    const isActive = (path) =>
    pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "text-black hover:text-orange-500";

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
                  onClick={() => router.push(item.path)}
                  className={`${isActive(item.path)} relative cursor-pointer hover:text-orange-500 transition-colors duration-200`}
                >
                  {item.name}
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300"
                    // style={{ width: hoveredIndex === index ? "100%" : "0%" }}
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

          {/* <button
            className="border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer"
            onClick={() => setIsQuoteModalOpen(true)}
          >
            Hire Us
          </button> */}

          <HireUsModal />

          {/* CALL ICON */}
          <div
            className="relative rounded-full"
            onMouseEnter={() => setIsCallModalOpen(true)}
            onMouseLeave={() => setIsCallModalOpen(false)}
          >
            <div className=" rounded-full flex items-center justify-center text-white cursor-pointer transition-transform duration-300 hover:scale-110 shadow-md">
              <img src="/telephone.png" alt="Call" className="w-10 h-10 " />
            </div>

            {/* CALL MODAL */}
                  {isCallModalOpen && (
                  <div
                    className="absolute right-0 top-full mt-3 z-[60]"
                    onClick={(e) => e.stopPropagation()} // modal click se close nahi hoga
                  >
                    <div className="w-[280px] bg-white rounded-xl shadow-lg border border-gray-100 p-4">

                      {/* Header */}
                      <div className="mb-4 ">
                        <div className="w-8 h-1 bg-orange-500 rounded-full mb-1"></div>
                        <h3 className="text-lg font-semibold text-gray-900">Get In Touch</h3>
                      </div>

                      {/* Sales Team */}
                      <div className="space-y-4">
                        <h4 className="text-base font-semibold text-gray-900">
                          Solstra Sales Team
                        </h4>

                        {/* Phone */}
                        <div className="flex items-start gap-2 cursor-pointer">
                          <div className="w-8 h-8 rounded-full flex items-center bg-gray-100 justify-center">
                            <img src="/phone-call (1).png" className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">INDIA</p>
                            <p className="text-sm font-semibold text-gray-900">
                              +91-9001638396
                            </p>
                          </div>
                        </div>

                        {/* Teams */}
                        <div className="flex items-start gap-2 cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src="/blackteamicons.png" className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Teams</p>
                            <p className="text-sm font-semibold text-gray-900">
                              SolstraInfoItsolutions
                            </p>
                          </div>
                        </div>

                        {/* Email
                        <div className="flex items-start gap-2 cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src="/emailorange.png" className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="text-sm font-semibold text-gray-900">
                              sjain01ajmer@gmail.com
                            </p>
                          </div>
                        </div> */}
                      </div>

                      {/* HR Team */}
                      <div className="space-y-4 pt-4 border-t mt-5">
                        <h4 className="text-base font-semibold text-gray-900">
                          Solstra HR Team
                        </h4>

                        <div className="flex items-start gap-2 cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src="/blackmailicons.png" className="w-6 h-6"  />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Email</p>
                            <p className="text-sm font-semibold text-gray-900">
                              sjain01ajmer@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Close Button */}
                      <button
                        className="w-full mt-5 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
                        onClick={() => setIsCallModalOpen(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}


          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="xl:hidden p-2 text-gray-700 hover:text-orange-500 transition md:hidden"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="xl:hidden fixed inset-0 bg-white z-50 overflow-auto p-6 flex flex-col">
          {/* Header with Logo and Close */}
          <div className="flex justify-between items-center mb-10">
            <img
              src="/image1.png"
              alt="Solstra Logo"
              className="h-12 w-auto cursor-pointer"
              onClick={() => {
                router.push("/");
                setOpen(false);
              }}
            />
            <button
              className="p-2 rounded-full hover:bg-gray-200 transition"
              onClick={() => setOpen(false)}
            >
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-6 mb-6 text-lg font-semibold text-gray-700 uppercase">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-orange-500  justify-center flex transition"
                onClick={() => {
                  router.push(item.path);
                  setOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Hire Us Button */}
          <button
            className="w-full border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm mb-6"
            onClick={() => {
              setIsQuoteModalOpen(true);
              setOpen(false);
            }}
          >
            Hire Us
          </button>
        </div>
      )}
    </header>
  );
}
