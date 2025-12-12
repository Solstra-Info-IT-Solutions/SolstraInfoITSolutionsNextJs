import Image from "next/image";

export default function AboutValues() {
  const cards = [
    {
      img: "/about-ic1.png",
      title: "Our Approach",
      text: "We always listen our client very carefully and make a proper plan for project as per client ideas.",
      bg: "hover:bg-orange-500",
      textColor: "group-hover:text-white",
    },
    {
      img: "/about-ic2w.png",
      title: "Our Values",
      text: "We always value our relationship with clients, we value each project whether its small or large.",
      bg: "hover:bg-orange-500",
      textColor: "group-hover:text-white",
    },
    {
      img: "/about-ic3.png",
      title: "Our Support",
      text: "We provide long term support for any project, We always available for priority support and assistance.",
      bg: "hover:bg-blue-900",
      textColor: "group-hover:text-white",
    },
    {
      img: "/about-ic4.png",
      title: "Our Resources",
      text: "We have skilled resources, who is well experienced in their relative technologies and required skills.",
      bg: "hover:bg-blue-900",
      textColor: "group-hover:text-white",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group bg-white p-6 sm:p-8 rounded-xl shadow hover:shadow-xl shadow-black/40 transform hover:scale-105 transition-all duration-300 ${card.bg}`}
          >
            <Image
              src={card.img}
              alt={card.title}
              width={60}
              height={60}
              className="w-12 mb-4 transition group-hover:brightness-0 group-hover:invert"
            />

            <h3
              className={`text-lg font-semibold mb-3 transition ${card.textColor}`}
            >
              {card.title}
            </h3>

            <p
              className={`text-gray-600 transition leading-relaxed text-sm sm:text-base ${card.textColor}`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
