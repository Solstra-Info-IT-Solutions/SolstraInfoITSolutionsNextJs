// Components/aboutComponents/ContactSection.tsx
import Link from "next/link";
export default function ContactSection() {
  return (
    <section className="relative mt-20">
      {/* Background Image Section */}
      <div
        className="relative h-[450px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nextbigtechnology.com/wp-content/uploads/2021/08/about-contact-bg.jpg')",
        }}
      >
        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            Connect With Us To Know More About Our <br className="hidden md:block" />
            Services And Team
          </h2>

          <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-200">
            We are available to assist you for all your queries and inquiry. Our
            team is always ready on priority basis to assist regarding all your
            needs.
          </p>
        </div>
      </div>

      {/* FORM CARD */}
      <div className="max-w-6xl mx-auto -mt-40 md:-mt-32 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-xl bg-white overflow-hidden">

          {/* LEFT BLUE PANEL */}
          <div
            className="p-8 md:p-10 text-white bg-linear-to-b from-sky-400 to-blue-700 bg-cover"
            style={{
              backgroundImage:
                "url('https://nextbigtechnology.com/wp-content/themes/nbt/images/perfect-business-bg.jpg')",
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              Best Solution As Per <br /> Your Business Needs
            </h3>

            <p className="mt-4 text-sm md:text-base text-gray-100">
              We deliver the quality solution as per your business requirements...
            </p>

            <ul className="mt-6 space-y-3 text-sm md:text-base">
              <li className="flex items-center gap-2">✔ Unique and Creative Ideas</li>
              <li className="flex items-center gap-2">✔ High Performing Product Delivery</li>
              <li className="flex items-center gap-2">✔ Affordable Rates & Timely Delivery</li>
              <li className="flex items-center gap-2">✔ Long Term Support & Maintenance</li>
            </ul>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
              >
                Get A Quote
              </Link>

              <Link
                href="/contact"
                className="text-white underline font-medium hover:text-gray-300 transition py-2"
              >
                Get Started &gt;
              </Link>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="p-8 md:p-10 bg-white">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 border rounded-md p-3 focus:outline-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-2 border rounded-md p-3 focus:outline-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full mt-2 border rounded-md p-3 focus:outline-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Telephone</label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full mt-2 border rounded-md p-3 focus:outline-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">Additional Details</label>
                <textarea
                  rows={4}
                  placeholder="Additional Details"
                  className="w-full mt-2 border rounded-md p-3 focus:outline-blue-500"
                ></textarea>
              </div>

              <div className="sm:col-span-2 flex justify-center md:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-48 py-3 rounded-full mt-2 transition">
                  Submit Request
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
