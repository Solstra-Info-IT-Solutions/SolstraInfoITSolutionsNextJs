import Image from "next/image";
import React from "react";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-10">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="https://media.istockphoto.com/id/1464853466/photo/place-of-work.jpg?s=2048x2048&w=is&k=20&c=x6ttaQkyoWzWq1wh2HoY-mE3dEEkFAYwrJ87iSCu3wI="
          alt="Office workspace"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        {/* LEFT HERO CONTENT */}
        <div className="text-white space-y-6 px-2 md:px-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Let’s Discuss Your Next <br /> Project
          </h1>
          <p className="text-sm md:text-base">
            You have the idea & we have the tools to make it happen.
          </p>

          {/* Steps Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { num: 1, title: "First Contact", desc: "Quick response", anim: "animation-floatStep1" },
                { num: 2, title: "Requirement Analysis", desc: "Expert discussion", anim: "animation-floatStep2" },
                { num: 3, title: "Proposal Creation", desc: "Professional proposal", anim: "animation-floatStep3" },
              ].map((step) => (
                <div key={step.num} className={step.anim}>
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-white">
                    {step.num}
                  </div>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                  <p className="text-xs opacity-80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: "ri-group-fill", text: "Leadership", color: "text-orange-400", anim: "animation-floatStep1" },
                { icon: "ri-shield-check-fill", text: "Secure & Trusted", color: "text-orange-400", anim: "animation-floatStep2" },
                { icon: "ri-award-fill", text: "Certified Experts", color: "text-orange-400", anim: "animation-floatStep3" },
                 ].map((feat, i) => (
              <div key={i} className={`flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 backdrop-blur-md shadow-md w-full md:w-auto ${feat.anim}`}>
                   <i className={`${feat.icon} ${feat.color} text-2xl`}></i>
                   <p className="text-sm md:text-base">{feat.text}</p>
                  </div>
                   ))}
            
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="bg-white shadow-xl rounded-xl p-6 md:p-8" method="POST" action="/api/contact">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Get a Free Quote!</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input type="text" name="name" placeholder="Full Name" className="border p-3 rounded-md w-full" required />
            <input type="email" name="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
            <input type="text" name="phone" placeholder="Phone Number" className="border p-3 rounded-md w-full" />
            <select name="service" className="border p-3 rounded-md w-full">
              <option>Web Development</option>
              <option>AI Development</option>
              <option>UI/UX Designing</option>
            </select>
          </div>

          <textarea rows="4" name="message" placeholder="Project Description" className="border p-3 rounded-md w-full mt-4"></textarea>

          <button type="submit" className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full mt-4 w-full md:w-auto transition hover:shadow-xl hover:scale-105">
            SUBMIT <i className="ri-send-plane-fill"></i>
          </button>

          {/* Social Media */}
          <p className="text-gray-700 font-medium mt-6">Follow Us On Social Media</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
            {[
              { href: "https://facebook.com", alt: "Facebook", src: "/facebook.png" },
              { href: "https://youtube.com", alt: "YouTube", src: "/youtube.png" },
              { href: "https://twitter.com", alt: "Twitter", src: "/twitter.png" },
              { href: "https://linkedin.com", alt: "LinkedIn", src: "/linkedin.png" },
              { href: "https://pinterest.com", alt: "Pinterest", src: "/pinterest.png" },
              { href: "https://instagram.com", alt: "Instagram", src: "/instagram.png" },
            ].map((item) => (
              <a key={item.alt} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Image src={item.src} alt={item.alt} width={32} height={32} priority />
              </a>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
