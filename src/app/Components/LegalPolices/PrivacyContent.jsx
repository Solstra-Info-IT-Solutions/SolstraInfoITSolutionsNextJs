// app/privacy-policy/page.jsx

import { Metadata } from "next";
import { useState } from "react";

export const metadata = {
  title: "Privacy Policy - Solstra Info IT Solution LLP",
  description:
    "Learn how Solstra Info IT Solution LLP collects, uses, protects, and handles your personal information.",
  keywords: [
    "Privacy Policy",
    "Solstra Info IT Solution LLP",
    "Data Protection",
    "Cookies",
  ],
  openGraph: {
    title: "Privacy Policy - Solstra Info IT Solution LLP",
    description:
      "Understand how Solstra Info IT Solution LLP collects, manages, and protects your information.",
    url: "https://solstrainfo.com/privacy-policy",
    siteName: "Solstra Info IT Solution LLP",
    type: "website",
  },
};


export default function PrivacyContent() {
  const [active, setActive] = useState("collection");

  return (
    <main className="grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

      {/* Intro Text */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
        <p className="text-gray-600 leading-relaxed">
          This Privacy Policy has been designed to provide clarity on how{" "}
          <span className="font-bold text-[#2e2a69]">
            Solstra Info IT Solution LLP
          </span>{" "}
          collects, uses, protects, and handles your Personally Identifiable
          Information (PII).
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">

        {/* Left Side Navigation */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-28 space-y-1">

            {[
              { id: "collection", label: "Data Collection" },
              { id: "usage", label: "How We Use Data" },
              { id: "protection", label: "Data Protection" },
              { id: "cookies", label: "Cookies Policy" },
              { id: "disclosure", label: "Third-Party Disclosure" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`block px-4 py-2 rounded-md text-sm font-medium border-l-4 
          ${active === item.id
                    ? "text-[#2e2a69] bg-blue-50 border-brand-orange"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#2e2a69] border-transparent"
                  }`}
              >
                {item.label}
              </a>
            ))}

          </div>
        </aside>


        {/* Content */}
        <div className="md:col-span-9 space-y-10">

          {/* Section 1 */}
          <section id="collection" className="scroll-mt-28">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2e2a69] mr-4">
                <i data-lucide="database" className="w-5 h-5"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                What Personal Information Do We Collect?
              </h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <p className="text-gray-600 mb-4">
                When ordering or registering on our site, you may be asked to
                enter:
              </p>

              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  { icon: "user", label: "Full Name" },
                  { icon: "mail", label: "Email Address" },
                  { icon: "phone", label: "Phone Number" },
                  { icon: "map-pin", label: "Mailing Address" },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 bg-gray-50 p-3 rounded"
                  >
                    <i
                      data-lucide={item.icon}
                      className="w-4 h-4 text-[#f59e0b] mr-3"
                    ></i>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="usage" className="scroll-mt-28">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mr-4">
                <i data-lucide="file-text" className="w-5 h-5"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                How Do We Use Your Information?
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600">
              {[
                "To personalize your experience.",
                "To improve website performance.",
                "To respond to customer service requests.",
                "To quickly process your transactions.",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <i
                    data-lucide="check-circle-2"
                    className="w-5 h-5 text-green-500 mr-3"
                  ></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section id="protection" className="scroll-mt-28">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2e2a69] mr-4">
                <i data-lucide="shield-check" className="w-5 h-5"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                How Do We Protect Your Information?
              </h2>
            </div>

            <div className="bg-linear-to-r from-[#2e2a69] to-[#1e1b4b] rounded-xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="mb-4 text-blue-100">
                  Your personal information is stored securely…
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                    <i
                      data-lucide="lock"
                      className="w-4 h-4 text-[#f59e0b] mr-2"
                    ></i>
                    SSL Encrypted
                  </div>
                  <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                    <i
                      data-lucide="server"
                      className="w-4 h-4 text-[#f59e0b] mr-2"
                    ></i>
                    Secure Databases
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="cookies" className="scroll-mt-28">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mr-4">
                <i data-lucide="cookie" className="w-5 h-5"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Do We Use Cookies?
              </h2>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600 mb-4">
                We do not use cookies for tracking purposes…
              </p>

              <h4 className="font-bold text-[#2e2a69] mb-2 text-sm uppercase">
                Third-Party Cookies
              </h4>
              <p className="text-gray-600 text-sm">
                We may use analytics tools like Google Analytics…
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="disclosure" className="scroll-mt-28">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2e2a69] mr-4">
                <i data-lucide="share-2" className="w-5 h-5"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Third-Party Disclosure
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              We do not sell or trade your personal data…
            </p>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-sm text-gray-500 italic">
                Data may be released when necessary to comply with the law…
              </p>
            </div>
          </section>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Contacting Us
            </h3>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center text-gray-700">
                <i data-lucide="mail" className="w-5 h-5 text-[#f59e0b] mr-3"></i>
                <a href="mailto:info@solstrainfo.com" className="hover:text-[#2e2a69]">
                  info@solstrainfo.com
                </a>
              </div>

              <div className="flex items-center text-gray-700">
                <i data-lucide="map-pin" className="w-5 h-5 text-[#f59e0b] mr-3"></i>
                Bawani Nagar, Jaipur, Rajasthan
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
