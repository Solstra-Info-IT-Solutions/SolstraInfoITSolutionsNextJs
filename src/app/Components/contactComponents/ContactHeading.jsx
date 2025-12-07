"use client";

export default function ContactPage() {
  return (
    <main className="pt-10 pb-16 px-4 md:px-0">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center pb-6">
        Let's Get In Touch
      </h2>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Email Box */}
        <div className="bg-white shadow-sm p-6 rounded-lg flex items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email Icon"
              className="w-7 h-7"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 text-sm">Sales@nextbigtechnology.com</p>
          </div>
        </div>

        {/* Call Box */}
        <div className="bg-white shadow-sm p-6 rounded-lg flex items-center gap-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Call Icon"
              className="w-7 h-7"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Call</h3>
            <p className="text-gray-600 text-sm">+1-3054826524</p>
          </div>
        </div>

      </div>
    </main>
  );
}
