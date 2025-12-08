"use client";

export default function OurOffices() {
  const offices = [
    {
      country: "Jaipur",
      image: "/usa.png.webp",
      address1: "2710 Pace West Dr, Tucson",
      address2: "AZ 85730",
    },
    {
      country: "Noida",
      image: "/australia.png.webp",
      address1: "21 benalia Cres Marayong",
      address2: "2148",
    },
    {
      country: "UK",
      image: "/usa.png.webp",
      address1: "18 Tuesday Market Place,",
      address2: "King's Lynn, Norfolk, PE30 1JW",
    },
    {
      country: "INDIA",
      image: "/india.png.webp",
      address1: "Bawani Nagar, Jaipur,",
      address2: "Rajasthan",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-[5%] py-16 bg-white">
      {/* Heading */}
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#06114f] mb-12">
        Our Offices
      </h2> */}

      <p className="text-4xl md:text-4xl lg:text-4xl font-poppins text-center font-normal ">
        Our <span className="font-semibold text-[#E28217]">Offices</span> 
        </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
        {offices.map((office, index) => (
          <div key={index} className="text-left">
            
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-sm bg-gray-100">
              <img
                src={office.image}
                alt={`${office.country} office`}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mt-4 text-[#06114f]">
              {office.country}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              {office.address1} <br />
              {office.address2}
            </p>

            {/* Icons */}
            <div className="flex gap-4 mt-3 text-[#06114f] text-lg cursor-pointer">
              <span>📍</span>
              <span>📞</span>
              <span>✉️</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
