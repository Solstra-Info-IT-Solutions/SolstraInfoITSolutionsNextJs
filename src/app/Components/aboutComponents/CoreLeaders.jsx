const leaders = [
  {
    name: "Shubham Jain",
    role: "Co-Founder & MD",
    desc: "Expert in strategy, operations and business growth.",
    img: "/aboutpage/user.png",
  },
  {
    name: "Bharti Sarawgi",
    role: "Founder",
    desc: "Visionary leader with 10+ years of industry experience.",
    img: "/aboutpage/user.png",
  },

  {
    name: "Nishant Baibhav",
    role: "Director",
    desc: "Focused on innovation, execution and team leadership.",
    img: "/aboutpage/user.png",
  },
  {
    name: "Shiv Ramesh",
    role: "Vice President",
    desc: "Driving performance, culture and scalable systems.",
    img: "/aboutpage/user.png",
  },
];

import Image from "next/image";

export default function CoreLeaders() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-8 bg-blue-950">
      {leaders.map(({ name, role, desc, img }) => (
        <article
          key={name}
          className="
            bg-white text-blue-900 m-5 rounded-lg p-6 flex flex-col items-center text-center shadow-md
            transform transition-transform duration-300
            hover:-translate-y-3 hover:scale-105
          "
        >
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            {img ? (
              <Image
                src={img}
                alt={name}
                width={80}
                height={80}
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center bg-black text-white font-bold text-xl w-20 h-20 rounded-full">
                {name.split(" ")[0][0]}
              </div>
            )}
          </div>

          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm opacity-80">{role}</p>
          <p className="mt-3 text-sm leading-relaxed">{desc}</p>
        </article>
      ))}
    </div>
  );
}
