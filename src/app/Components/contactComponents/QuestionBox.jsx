"use client";

export default function QuestionBox() {
  return (
    <section
      className="max-w-6xl mx-auto bg-[#eaf0ff] mt-12 mb-12 p-10 rounded-2xl 
                 flex flex-col lg:flex-row justify-between items-center shadow-md"
    >
      {/* LEFT SIDE CONTENT */}
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">Have a Question?</h2>

        <p className="text-gray-800 text-base md:text-lg">
          <span className="font-semibold">Get Free Consultation :</span>{" "}
          <span className="text-orange-500 font-semibold">
            sjain01ajmer@gmail.com
          </span>
        </p>

        <p className="text-gray-800 text-base md:text-lg">
          <span className="font-semibold">For Job Inquiry :</span>{" "}
          <span className="text-orange-500 font-semibold">
            sjain01ajmer@gmail.com
          </span>
        </p>

        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold 
                     hover:bg-orange-600 transition-all flex items-center justify-center 
                     lg:justify-start gap-2 w-full lg:w-auto"
        >
          LET'S TALK →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-10 mb-16 lg:mt-0">
        <img
          src="https://plus.unsplash.com/premium_vector-1682298091836-ee6685c84f47?q=80&w=959&auto=format&fit=crop"
          alt="Customer Support Illustration"
          className="w-72 md:w-96 mx-auto lg:mx-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
