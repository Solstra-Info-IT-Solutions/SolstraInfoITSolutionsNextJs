"use client";

import Image from "next/image";

export default function CloudKeyOfferings() {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          alt="Cloud Services Background"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* White Fog Gradient with Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/70 backdrop-blur-xl"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        
        <h2 className="text-3xl md:text-4xl text-center font-bold text-indigo-700 opacity-0 translate-y-6 animate-[fadeSlideUp_1s_ease-out_forwards]">
          Our Cloud Key Offerings
        </h2>

        <div className="mt-12 space-y-10 max-w-3xl mx-auto text-gray-800 text-base md:text-lg font-medium opacity-0 translate-y-6 animate-[fadeSlideUp_1s_ease-out_forwards] [animation-delay:200ms]">

          <p>
            <strong className="text-indigo-600">✔ Cloud Migration Strategy & Execution:</strong><br />
            We assess your infrastructure, craft a migration roadmap, and shift apps & data seamlessly
            with near-zero downtime.
          </p>

          <p>
            <strong className="text-indigo-600">✔ Cloud Infrastructure Management:</strong><br />
            We monitor, optimize, and manage your cloud resources for high availability & cost efficiency.
          </p>

          <p>
            <strong className="text-indigo-600">✔ Cloud-Native Application Development:</strong><br />
            We build scalable apps using microservices, serverless, Docker, and Kubernetes.
          </p>

          <p>
            <strong className="text-indigo-600">✔ Cloud Security & Compliance:</strong><br />
            Strong enterprise-grade security with compliance (GDPR, HIPAA, ISO standards).
          </p>

        </div>

      </div>
    </section>
  );
}
