"use client";

import { useState, FormEvent } from "react";

export default function HireUsModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = (data: any) => {
    const newErrors: any = {};

    // NAME → only letters
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(data.name)) {
      newErrors.name = "Only alphabets allowed";
    }

    // EMAIL
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter a valid email";
    }

    // PHONE → only digits
    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]+$/.test(data.phone)) {
      newErrors.phone = "Only numbers allowed";
    } else if (data.phone.length < 10) {
      newErrors.phone = "Phone must be minimum 10 digits";
    }

    // MESSAGE
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: (e.currentTarget.name as any).value,
      email: (e.currentTarget.email as any).value,
      phone: (e.currentTarget.phone as any).value,
      message: (e.currentTarget.message as any).value,
    };

    if (!validate(formData)) return;

    alert("Thank you! We'll contact you shortly.");
    setIsOpen(false);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="border border-gray-300 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-orange-500 px-6 py-2.5 rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-medium text-sm bg-white cursor-pointer"
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
              {/* Name */}
              <div>
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  name="email"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  required
                  name="phone"
                  className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  required
                  name="message"
                  className="w-full px-3 py-2 border rounded-md h-24 dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
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
