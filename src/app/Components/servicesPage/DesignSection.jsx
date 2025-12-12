"use client";

import Image from "next/image";
import React from "react";

export default function DesignSection() {
  return (
    <section className="relative py-28 bg-linear-to-b from-indigo-50 to-white overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Designing <span className="text-indigo-600">Experiences</span>
            {" "}That People{" "}
            <span className="text-purple-600">Remember</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            At Solstra Info IT Solutions, we blend creativity, psychology and innovation
            to transform ordinary screens into engaging, delightful user journeys.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                num: "01",
                color: "bg-indigo-600/90",
                text: "Human-centered decision making powered by real user behavior.",
              },
              {
                num: "02",
                color: "bg-purple-600/90",
                text: "Intuitive interactions that feel natural and effortless.",
              },
              {
                num: "03",
                color: "bg-pink-600/90",
                text: "Visually stunning interfaces with pixel-perfect beauty.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 ${item.color} text-white flex items-center justify-center rounded-xl shadow`}
                >
                  {item.num}
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-10 px-10 py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition"
          >
            Start Your Design Journey
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative">

          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-300 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

          <div className="relative group">

            {/* Main Image */}
            <div className="opacity-0 translate-y-6 animate-[fadeSlideUp_1s_ease-out_forwards]">
              <Image
                src="https://www.arvato-systems.com/resource/blob/81580/227ae5b7b8abe48c35c64ee2097892a5/arvatosystems-digitalexperiences-ux-ui-design-grafik-en-data.png"
                alt="Creative UI Design"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white/30 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/40 
                w-52 transform -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition duration-500">
              <h4 className="text-lg font-bold text-gray-900">Creative Thinking</h4>
              <p className="text-sm text-gray-700 mt-1">Where imagination meets innovation.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
