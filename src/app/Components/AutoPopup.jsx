"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  RiCloseLine,
  RiArrowRightCircleFill,
  RiUser3Line,
  RiMailOpenLine,
  RiPhoneLine,
  RiMessage2Line,
  RiArrowRightLine,
} from "react-icons/ri";

export default function AutoPopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
    router.push("/"); // SEO-friendly
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 bg-black/50  flex items-start md:items-center justify-center p-4 md:p-8 overflow-auto md:overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-full md:max-w-4xl lg:max-w-5xl p-5 md:p-8 relative overflow-y-auto md:overflow-visible max-h-[90vh] md:max-h-[unset]">
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close Popup"
          className="absolute top-3 right-3 bg-gray-200 hover:bg-orange-500 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center z-[50]"
        >
          <RiCloseLine className="text-xl md:text-2xl" />
        </button>

        {/* Headings */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          <span className="text-orange-600">Hold On!</span> Don’t Miss Out
        </h1>
        <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-semibold mt-2">
          What’s Waiting for You!
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {/* Left Info */}
          <div className="bg-[#e8f3ff] p-6 rounded-2xl shadow-sm space-y-6">
            {[
              {
                title: "Clear Project Estimates",
                desc: "Get accurate project time & cost — no hidden surprises!",
              },
              {
                title: "Boost Your Revenue with AI",
                desc: "Learn how AI can grow your business faster and smarter.",
              },
              {
                title: "Avoid Common Mistakes",
                desc: "Understand why businesses fail & how to become successful.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <RiArrowRightCircleFill className="text-blue-700 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Form */}
          <form className="space-y-5">
            <div className="relative">
              <RiUser3Line className="absolute left-4 top-4 text-gray-500 text-xl" />
              <input
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 outline-none text-base"
                placeholder="Name"
              />
            </div>

            <div className="relative">
              <RiMailOpenLine className="absolute left-4 top-4 text-gray-500 text-xl" />
              <input
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 outline-none text-base"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <RiPhoneLine className="absolute left-4 top-4 text-gray-500 text-xl" />
              <input
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 outline-none text-base"
                placeholder="Phone Number"
              />
            </div>

            <div className="relative">
              <RiMessage2Line className="absolute left-4 top-4 text-gray-500 text-xl" />
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg py-3 pl-12 pr-4 outline-none text-base"
                placeholder="Project Description"
              />
            </div>

            <button className="px-8 py-3 rounded-lg border border-blue-900 text-blue-900 font-semibold hover:bg-orange-500 transition flex items-center justify-center gap-2 w-full md:w-auto">
              Submit
              <RiArrowRightLine className="text-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
