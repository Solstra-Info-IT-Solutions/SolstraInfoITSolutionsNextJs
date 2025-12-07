export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn }) {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-blue-900 to-orange-500 text-white mt-12 px-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {subtitle && <p className="text-lg mb-8">{subtitle}</p>}

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-full shadow hover:scale-105 transition">
          {primaryBtn}
        </button>

        <button className="bg-blue-900 text-white border border-white font-medium px-6 py-3 rounded-full shadow hover:bg-white hover:text-blue-900 hover:scale-105 transition">
          {secondaryBtn}
        </button>
      </div>
    </section>
  );
}
