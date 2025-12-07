"use client";

export default function PrivacyHeader() {
  return (
    <header className="relative bg-[#2e2a69] text-white py-48 md:py-56 overflow-hidden">

      {/* Background SVG Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-20 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="scale-[2] md:scale-[2.5]"
        >
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 100 L100 0" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 opacity-20 pointer-events-none">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          className="scale-[2] md:scale-[2.5] rotate-45"
        >
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 100 L100 0" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Privacy Policy
        </h1>

        <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
          We value your trust and are committed to protecting your personal information.
        </p>

        <div className="mt-8 flex justify-center space-x-2 text-sm text-blue-100">
          <a href="/" className="hover:text-white underline">Home</a>
          <span>/</span>
          <span className="text-white font-semibold">Privacy Policy</span>
        </div>
      </div>
    </header>
  );
}
