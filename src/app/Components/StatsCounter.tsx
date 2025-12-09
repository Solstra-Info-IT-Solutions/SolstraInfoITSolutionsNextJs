"use client";

import { useEffect, useState, useRef } from "react";

// --- Types ---
interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

// --- Data ---
const statsData: StatItem[] = [
  { value: 10, label: "Completed Project", suffix: "+" },
  { value: 1, label: "Countries Served", suffix: "+" },
  { value: 1000, label: "Hours of Coding", suffix: "+" },
  { value: 1, label: "Years of Business", suffix: "+" },
];

// --- Helper Component for Animation ---
const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth effect (easeOutQuad)
      // const ease = 1 - (1 - progress) * (1 - progress); 
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}</span>;
};

// --- Main Component ---
export default function StatsCounter() {
  return (
    <section className="w-full py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((item, index) => (
            <li 
              key={index} 
              className="flex flex-col items-center justify-center text-center p-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl md:text-5xl font-bold text-orange-500 font-sans">
                  <AnimatedNumber end={item.value} />
                  {item.suffix}
                </span>
                <p className="text-gray-600 font-medium text-lg uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}