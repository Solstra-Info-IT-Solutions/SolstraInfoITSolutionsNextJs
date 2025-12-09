"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";

// Tab data with updated icons structure (src + label)
const tabData = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "Being a Top Mobile Application Development Company, we provide all Mobile App Development Services for all types of businesses using the latest & trending technologies. We have an excellent in-house team of Mobile App Developers who is well experienced and skilled in Android App Development, Ios App Development and Cross platform App Development.",
    img: "/TabServices Images/Mobile Development.png",
    imgicons: "/mobile-application-development.png",
    icons: [
      { src: "/TabServices Images/apple.png", label: "iOS" },
      { src: "/TabServices Images/android.png", label: "Android" },
      { src: "/TabServices Images/ipad.png", label: "iPad" },
      { src: "/TabServices Images/window.jfif", label: "Windows" },
      { src: "/TabServices Images/flutter.png", label: "Flutter" },
      { src: "/TabServices Images/hybrid.png", label: "Hybrid" },
      { src: "/TabServices Images/xamarin.png", label: "Xamarin" },
      { src: "/TabServices Images/React.jfif", label: "React Native" },
      { src: "/TabServices Images/PhoneGap.jfif", label: "PhoneGap" },
      { src: "/TabServices Images/Ionic.jfif", label: "Ionic" },
      { src: "/TabServices Images/Swift.jfif", label: "Swift" },
      { src: "/TabServices Images/Java.jfif", label: "Java" },
    ],
  },
  {
    id: 2,
    title: "Web App Development",
    desc: "As one of the Top Web Development Company we provide high quality Web Development Services for all kind of Web Application Development requirements which cover different industries all over the World. We have a great pool of in-house Web Developers who is proficient in all latest and trending technologies.",
    img: "/TabServices Images/Web Development.png",
    imgicons: "/web-applications.png",
    // Assuming same icons for now based on previous code, or you can update these to Web specific technologies
    icons: [
      { src: "/TabServices Images/apple.png", label: "iOS" },
      { src: "/TabServices Images/android.png", label: "Android" },
      { src: "/TabServices Images/flutter.png", label: "Flutter" },
      { src: "/TabServices Images/React.jfif", label: "React" },
      { src: "/TabServices Images/Java.jfif", label: "Java" },
    ],
  },
  {
    id: 3,
    title: "Hire Developers",
    desc: "We have a great pool of Web and Mobile App Developers, who have excellent skills in all trending technologies of Web and Mobile App. We are known as Top PHP Development Company, Top Android App Development Company, Top IOS App Development Company.",
    img: "/hire-developers-main.png",
    imgicons: "/hire-developers.png",
    icons: [
      { src: "/TabServices Images/cake-php-developer.png", label: "CakePHP" },
      { src: "/TabServices Images/codeigniter-developer.png", label: "CodeIgniter" },
      { src: "/TabServices Images/ios-developers.png", label: "iOS" },
      { src: "/TabServices Images/laravel-developers.png", label: "Laravel" },
      { src: "/TabServices Images/magento-developers.png", label: "Magento" },
      { src: "/TabServices Images/node-js-developers.png", label: "Node.js" },
      { src: "/TabServices Images/php-developers.png", label: "PHP" },
      { src: "/TabServices Images/react-native-developers.png", label: "React Native" },
      { src: "/TabServices Images/shopify-developers.png", label: "Shopify" },
      { src: "/TabServices Images/wordpress-developers.png", label: "WordPress" },
    ],
  },
  {
    id: 4,
    title: "CMS Development",
    desc: "As a Top Website Development Company we work with all popular CMS & Frameworks. We are one of the Best WordPress Development Company, Best Laravel Development Company, Best Codeigniter Development Company and Best Magento Development Company.",
    img: "/TabServices Images/Web Development.png",
    imgicons: "/cms-franework.png",
    icons: [
      { src: "/TabServices Images/wordpress-developers.png", label: "WordPress" },
      { src: "/TabServices Images/magento-developers.png", label: "Magento" },
      { src: "/TabServices Images/laravel-developers.png", label: "Laravel" },
      { src: "/TabServices Images/codeigniter-developer.png", label: "CodeIgniter" },
    ],
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "Our team is well versed and skilled enough to work on all Open Source Platforms. As a Best Open Source Development Company we provide high quality Open Source Development Services.",
    img: "/digital-marketing-service-main.png",
    imgicons: "/digital-marketing.png",
    icons: [
      { src: "/TabServices Images/ppc-digital-marketing.png", label: "PPC" },
      { src: "/TabServices Images/seo-digital-marketing.png", label: "SEO" },
      { src: "/TabServices Images/e-mail-marketing.png", label: "Email Mkt" },
      { src: "/TabServices Images/content-marketing.png", label: "Content" },
      { src: "/TabServices Images/facebook-marketing.png", label: "Facebook" },
      { src: "/TabServices Images/instagram-marketing.png", label: "Instagram" },
      { src: "/TabServices Images/linkedIn-marketing.png", label: "LinkedIn" },
    ],
  },
  {
    id: 6,
    title: "Trending Solutions",
    desc: "Our team is experienced and knowledgable in all trending technologies, we cover all latest technologies. Our team is quick learn and we can easily adopt any new technology.",
    img: "/trending-solution-main-image.png",
    imgicons: "/trending-solutions.png",
    icons: [
      { src: "/Trending Solutions/angular-js-may.png", label: "Angular" },
      { src: "/Trending Solutions/Artificial-intelligence.png", label: "AI" },
      { src: "/Trending Solutions/Big-Data.png", label: "Big Data" },
      { src: "/Trending Solutions/Django-may.png", label: "Django" },
      { src: "/Trending Solutions/Golang2.png", label: "Golang" },
      { src: "/Trending Solutions/Machine-Learning.png", label: "ML" },
      { src: "/Trending Solutions/NodeJS-may.png", label: "Node.js" },
      { src: "/Trending Solutions/Python.jpeg", label: "Python" },
      { src: "/Trending Solutions/SalesForce.png", label: "Salesforce" },
      { src: "/Trending Solutions/VueJS-may.png", label: "Vue.js" },
      { src: "/Trending Solutions/wearable.png", label: "Wearable" },
      { src: "/Trending Solutions/Xamarin-may.png", label: "Xamarin" },
    ],
  },
];

export default function TabsSection() {
  const [active, setActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for Modal
  return (
    <section className="max-w-7xl mx-auto py-16 mb-10 px-4">

      {/* Tabs Container */}
      <div className="flex flex-wrap gap-2 sm:gap-4 mb-10 ">
        {tabData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`rounded-full transition-all duration-300 flex items-center h-20
              ${active === index
                ? "w-auto px-6 gap-4 border-2 border-orange-500 bg-white shadow-lg scale-105 z-10"
                : "w-24 justify-center border border-transparent hover:bg-gray-50"
              }`}
          >
            <Image
              src={item.imgicons}
              alt={item.title}
              width={64}
              height={64}
              className="object-contain shrink-0 cursor-pointer"
            />

            {active === index && (
              <span className="text-left font-bold text-orange-500 text-sm sm:text-base leading-tight animate-fadeIn">
                {item.title}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Main Image */}
        <div>
          <Image
            src={tabData[active].img}
            alt={tabData[active].title}
            width={500}
            height={400}
          />
        </div>

        {/* Text + Icons */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
            {tabData[active].title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {tabData[active].desc}
          </p>

          {/* Icons Grid with Text Below */}
          <div className="flex flex-wrap gap-x-6 gap-y-6 mt-7 mb-8">
            {tabData[active].icons.map((iconItem, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg shadow-sm group-hover:shadow-md transition w-16 h-16">
                  <Image
                    src={iconItem.src}
                    alt={iconItem.label}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                {/* Text Label */}
                <span className="text-xs font-medium text-gray-500 group-hover:text-orange-500 transition-colors">
                  {iconItem.label}
                </span>
              </div>
            ))}
          </div>

          {/* Connect With Our Experts Section */}
          <div className="flex items-center gap-4">


            <button
              onClick={() => setIsModalOpen(true)}
              className=" cursor-pointer
                vibrate-hover
                flex items-center gap-2 
                px-10 py-3 
                border-2 border-orange-400 
                text-orange-500 
                rounded-full 
                text-base sm:text-lg font-medium 
                hover:bg-orange-500 hover:text-white
                 duration-300 transition-transform active:scale-95
             ">
              Connect with Experts <FaArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* 4. POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative modal-animate overflow-hidden">

            {/* Modal Header */}
            <div className="bg-orange-500 px-8 py-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Let's Talk!</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-200 transition"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Form */}
            <div className="p-8">
              <p className="text-gray-600 mb-6">Fill out the form below and our experts will get back to you shortly.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+1 234 567 890" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={3} placeholder="Tell us about your project..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"></textarea>
                </div>

                <button type="button" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors shadow-lg mt-2">
                  Submit Request
                </button>
              </form>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}