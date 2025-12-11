"use client";

import Navbar from "../Components/Navbar";

export default function ComingSoon() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white">
        {/* Background Image */}
        {/* <img
                src="/assets/images/comingsoon.png"
                alt="Coming Soon"
                className="absolute inset-0 w-full h-full object-cover"
            /> */}

        {/* Overlay */}

        <div className="absolute inset-0 "></div>

        {/* Text Content */}
        <div className="relative text-center text-black px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to SOLSTRA INFO IT SOLUTION{" "}
          </h1>
          <h2 className="text-xl">We&apos;re Launching Something Awesome!</h2>
          <p className="text-lg md:text-2xl mb-6">
            This page is under development — stay tuned 🚀
          </p>

          {/* Home Button */}
          <a
            href="/"
            className="inline-block bg-amber-500   text-whitefont-semibold px-6 py-3 rounded-full text-lg transition-all duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </>
  );
}
