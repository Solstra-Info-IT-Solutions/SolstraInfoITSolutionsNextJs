import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] mt-20">
      <Image
        src="/aboutpage/bgabout.png"
        alt="About Solstra"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
          About SOLSTRA
        </h1>
      </div>
    </section>
  );
}
