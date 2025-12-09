"use client";

import Link from "next/link";
import {
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";

export default function FooterSection() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= NEWSLETTER START ================= */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* LEFT SIDE TEXT */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900">
              Subscribe Our Newsletter
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Be the first to stay updated on the latest trends, news, new product features, and events.
            </p>
          </div>

          {/* RIGHT SIDE INPUT BOX */}
          <div className="md:w-1/2 flex justify-start md:justify-end">
            <form className="flex w-full md:w-[70%]" aria-label="Subscribe to newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-lg bg-gray-200 text-black outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 bg-gray-500 text-white rounded-r-lg hover:bg-gray-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* ================= NEWSLETTER END ================= */}

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                <RiMailLine className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold">SALES</p>
                <a
                  href="mailto:info@devtechnosys.com"
                  className="text-blue-500 text-sm hover:text-black"
                >
                  sjain01ajmer@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                <RiPhoneLine className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold">SALES</p>
                <a href="tel:+14155787849" className="text-blue-500 text-sm hover:text-black">
                  +91-9001638396

                </a>
                <br />
                <a href="tel:+447733868733" className="text-blue-500 text-sm hover:text-black">
                  +91-9001638396

                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                <RiPhoneLine className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold">HR</p>
                <a href="tel:+911414107667" className="text-blue-500 text-sm hover:text-black">
                  +91-9001638396

                </a>
                <br />
                <a href="tel:+917852883297" className="text-blue-500 text-sm hover:text-black">
                  +91-9001638396

                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                <RiMapPinLine className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-bold">HEADQUARTER INDIA</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Uday Nagar A Mansarovar<br />
                  Jaipur, Rajasthan - INDIA 302017
                </p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Careers", href: "/careerHub" },
                { label: "FAQ", href: "/faq" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="block py-1 hover:text-black text-gray-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our industries</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Real Estate", href: "/industries/real-estate" },
                { label: "On-Demand", href: "/industries/on-demand" },
                { label: "Healthcare", href: "/industries/healthcare" },
                { label: "Event & Tickets", href: "/industries/event-tickets" },
                { label: "Travel & Tours", href: "/industries/travel-tours" },
                { label: "Ecommerce & Retail", href: "/industries/ecommerce-retail" },
                { label: "Auction", href: "/industries/auction" },
                { label: "Food & Restaurant", href: "/industries/food-restaurant" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="block py-1 hover:text-black text-gray-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our services</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Mobile Application Development", href: "/services/mobile-app" },
                { label: "ServiceNow", href: "/services/servicenow" },
                { label: "Blockchain Development", href: "/services/blockchain" },
                { label: "POS Development Solution", href: "/services/pos" },
                { label: "AI Development", href: "/services/ai" },
                { label: "ICO Development", href: "/services/ico" },
                { label: "Custom Web Development", href: "/services/web" },
                { label: "Web3 Development", href: "/services/web3" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="block py-1 hover:text-black text-gray-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SOCIAL ICONS (using images) */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-10">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/facebook.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/youtube.png" alt="YouTube" className="w-8 h-8" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/pinterest.png" alt="Pinterest" className="w-8 h-8" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>

        {/* COPYRIGHT & POLICIES */}
        <div className=" pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Solstra Info IT Solution LLP. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="/LegalPolices" className="text-gray-500 hover:text-black text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-black text-sm">
              Terms of Service
            </Link>
            <Link href="/refund-policy" className="text-gray-500 hover:text-black text-sm">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
