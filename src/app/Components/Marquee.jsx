"use client";

export default function Marquee() {
  const items = [
    { text: "Web Development", filled: true },
    { text: "AI Development", filled: false },
    { text: "ECommerce Development", filled: true },
    { text: "AR/VR Development", filled: false },
    { text: "Digital Marketing", filled: true },
    { text: "Digital Transformation", filled: false },
    { text: "Blockchain Development", filled: true },
    { text: "Business Automation", filled: false },
  ];

  return (
    <div 
      className="overflow-hidden whitespace-nowrap py-4" 
      aria-label="Our Services We Provide"
    >
      <div className="animate-marquee flex gap-8 sm:gap-12 md:gap-16">
        {items.concat(items).map((item, index) => (
          <span
            key={index}
            className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold ${
              item.filled ? "text-orange-500" : "outline-text"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
