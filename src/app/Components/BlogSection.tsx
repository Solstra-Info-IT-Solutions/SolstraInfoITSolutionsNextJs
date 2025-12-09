"use client";

import Image from "next/image";
import React from "react";

const blogs = [
  {
    date: "06 Dec 2025",
    title:
      "Cross-Platform App Development in 2026: A Strategic Guide for Smart Businesses",
      href: "/",    
      img: "https://nextbigtechnology.com/wp-content/uploads/2025/12/Cross-Platform-App-Development-in-2025-740x400.jpg",
     excerpt:
      "In the ever-evolving digital ecosystem, building mobile apps is no longer about choosing between Android and iOS—it’s...",
  },
  {
    date: "06 Dec 2025",
    title:
      "The Future of Outsourcing: Cloud-Native, Remote Staffing & Hybrid Teams",
    href: "/",
    img: "https://nextbigtechnology.com/wp-content/uploads/2025/12/The-Future-of-Outsourcing-Cloud-Native-Remote-Staffing-Hybrid-Teams-740x400.jpeg",
    excerpt:
      "The world of outsourcing is changing fast, thanks to new tech and shifts in the workforce. Cloud-native...",
  },
  {
    date: "06 Dec 2025",
    title:
      "When to Choose Progressive Web Apps (PWA) vs Native vs Hybrid Mobile Apps — Pros & Cons for Startups",
    href: "/",
    img: "https://nextbigtechnology.com/wp-content/uploads/2025/12/Web-Apps-PWA-vs-Native-vs-Hybrid-Mobile-Apps-—-Pros-Cons-for-Startups-740x400.jpeg",
    excerpt:
      "Choosing the right mobile app is key for startups. You have three options: Progressive Web Apps, Native...",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h6 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
              Blog
            </h6>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
              Our <span className="text-orange-500">Blog</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Words that describe our quality and keep us motivated
            </p>
          </div>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-2 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
          >
            View All Blog
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Blog list */}
        <div className="grid gap-8 mt-10 md:grid-cols-3">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition bg-white"
            >
              {/* Image + Date */}
              <div className="relative">
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                  {blog.date}
                </div>

                <a href={blog.href} target="_blank">
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <a
                  href={blog.href}
                  target="_blank"
                  className="font-semibold text-gray-900 hover:text-orange-500 leading-tight line-clamp-2"
                >
                  {blog.title}
                </a>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
