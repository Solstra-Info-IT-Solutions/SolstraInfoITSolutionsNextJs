// app/mobile-app-development/page.jsx

export const metadata = {
  title: "Mobile App Development - Solstra Info IT Solution LLP",
  description:
    "We develop high-performance Android, iOS, and cross-platform mobile apps tailored for businesses.",
};

export default function MobileAppDevelopment() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Mobile App Development
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          We build powerful and scalable Android, iOS, and cross-platform mobile applications 
          tailored to your business needs. From concept to deployment, Solstra Info delivers 
          modern, high-performance mobile apps.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Android Development</h3>
            <p className="text-gray-600">
              Native Android apps built with Java/Kotlin for top performance and user experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">iOS Development</h3>
            <p className="text-gray-600">
              High-quality iOS apps powered by Swift and designed for Apple's strict UI standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3">Cross-Platform Apps</h3>
            <p className="text-gray-600">
              Build once and launch on both Android & iOS using Flutter and React Native.
            </p>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build Your Mobile App
          </h2>
          <p className="mb-6 text-lg text-white/90">
            Share your idea and we will turn it into a fully functional mobile solution.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
