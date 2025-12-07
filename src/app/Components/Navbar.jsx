"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ type = "home", icons = [] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careerHub" },
  ];

  const isHome = type === "home";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50 h-24">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6">

        {/* Logo */}
        <img
          src="/image1.png"
          alt="Logo"
          className="h-12 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => router.push("/")}
        />

        {/* Desktop Menu - Only on HOME */}
        {isHome && (
          <nav className="hidden md:flex flex-1 justify-center relative">
            <ul className="flex gap-10 text-lg ">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:text-orange-500"
                  onClick={() => router.push(item.path)}
                >
                  {item.name}
                  <span
                    className="absolute left-0 -bottom-1 h-1 bg-orange-500 transition-all duration-300"
                    style={{
                      width: hoveredIndex === index ? "100%" : "0%",
                    }}
                  ></span>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* HOME → only CTA */}
          {isHome && (
            <button
              onClick={() => router.push("/contact")}
              className="bg-orange-500 text-white px-5 py-2 rounded-full hover:-translate-y-1 hover:shadow-lg transition"
            >
              Get a Quote →
            </button>
          )}

          {/* OTHER → Icons become dynamic */}
          {!isHome && (
            <>
              {icons.map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:-translate-y-1 hover:shadow-md transition inline-flex items-center justify-center"
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
                </a>
              ))}

              <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:-translate-y-1 hover:shadow-lg transition">
                Get a Quote →
              </button>

              <button className="border px-5 py-2 rounded-md hover:-translate-y-1 hover:shadow-md transition">
                <span className="text-orange-500">Hire Us</span>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border rounded-md transition hover:scale-110"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}
