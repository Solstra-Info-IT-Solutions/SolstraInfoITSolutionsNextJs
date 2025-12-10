"use client";

import { useState, FormEvent } from "react";

export default function HireUsModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setIsOpen(false);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="border border-gray-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer"
      >
        Hire Us
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-md relative"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Hire Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fill out the form and we'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your E-mail"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Phone</label>
                {/* <input
                  type="Number"
                  required
                  placeholder="Ex- +91-9001638396"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                /> */}

                <input
                    type="tel"
                    name="phone"
                    max={10}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="Enter your phone number"
                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only numbers
                    }}
                  />
              </div>

              

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  required
                  
                  className="w-full px-3 py-2 border rounded-md h-24 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
