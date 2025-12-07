"use client";

import Image from "next/image";
import { useState } from "react";

// Tab data
const tabData = [
  {
    id: 1,
    title: "Mobile Application Development",
    desc: "Being a Top Mobile Application Development Company, we provide all Mobile App Development Services for all types of businesses using the latest & trending technologies. We have an excellent in-house team of Mobile App Developers who is well experienced and skilled in Android App Development, Ios App Development and Cross platform App Development.",
    img: "/TabServices Images/Mobile Development.png",
    imgicons: "/mobile-application-development.png",
    icons: [
      "/TabServices Images/apple.png",
      "/TabServices Images/android.png",
      "/TabServices Images/ipad.png",
      "/TabServices Images/window.jfif",
      "/TabServices Images/flutter.png",
      "/TabServices Images/hybrid.png",
      "/TabServices Images/xamarin.png",
      "/TabServices Images/React.jfif",
      "/TabServices Images/PhoneGap.jfif",
      "/TabServices Images/Ionic.jfif",
      "/TabServices Images/Swift.jfif",
      "/TabServices Images/Java.jfif",
    ],
  },
  {
    id: 2,
    title: "Web Application Development",
    desc: "As one of the Top Web Development Company we provide high quality Web Development Services for all kind of Web Application Development requirements which cover different industries all over the World. We have a great pool of in-house Web Developers who is proficient in all latest and trending technologies.",
    img: "/TabServices Images/Web Development.png",
    imgicons: "/web-applications.png",
    icons: [
      "/TabServices Images/apple.png",
      "/TabServices Images/android.png",
      "/TabServices Images/ipad.png",
      "/TabServices Images/window.jfif",
      "/TabServices Images/flutter.png",
      "/TabServices Images/hybrid.png",
      "/TabServices Images/xamarin.png",
      "/TabServices Images/React.jfif",
      "/TabServices Images/PhoneGap.jfif",
      "/TabServices Images/Ionic.jfif",
      "/TabServices Images/Swift.jfif",
      "/TabServices Images/Java.jfif",
    ],
  },
  {
    id: 3,
    title: "Hire Dedicated Developers",
    desc: "We have a great pool of Web and Mobile App Developers, who have excellent skills in all trending technologies of Web and Mobile App. We are known as Top PHP Development Company, Top Android App Development Company, Top IOS App Development Company. Which make us experts in all Web and App Development Services. Hire Web & App Developers with Next Big Technology for any Web or App needs.",
    img: "/hire-developers-main.png",
    imgicons: "/hire-developers.png",
    icons: [
      "/TabServices Images/cake-php-developer.png",
      "/TabServices Images/codeigniter-developer.png",
      "/TabServices Images/ios-developers.png",
      "/TabServices Images/laravel-developers.png",
      "/TabServices Images/magento-developers.png",
      "/TabServices Images/node-js-developers.png",
      "/TabServices Images/php-developers.png",
      "/TabServices Images/react-native-developers.png",            
      "/TabServices Images/shopify-developers.png",
      "/TabServices Images/wordpress-developers.png",
    ],
  },
  {
    id: 4,
    title: "CMS Framework Development",
    desc: "As a Top Website Development Company we work with all popular CMS & Frameworks. We are one of the Best WordPress Development Company, Best Laravel Development Company, Best Codeigniter Development Company and Best Magento Development Company, who have an expert team of each CMS and Framework. Our Team is well experienced in using any CMS and Framework with best of it.",
    img: "/TabServices Images/Web Development.png",
    imgicons: "/cms-franework.png",
    icons: [
      "/TabServices Images/apple.png",
      "/TabServices Images/android.png",
      "/TabServices Images/ipad.png",
      "/TabServices Images/window.jfif",
      "/TabServices Images/flutter.png",
      "/TabServices Images/hybrid.png",
      "/TabServices Images/xamarin.png",
      "/TabServices Images/React.jfif",
      "/TabServices Images/PhoneGap.jfif",
      "/TabServices Images/Ionic.jfif",
      "/TabServices Images/Swift.jfif",
      "/TabServices Images/Java.jfif",
    ],
  },
  {
    id: 5,
    title: "Digital Marketing Services",
    desc: "Our team is well versed and skilled enough to work on all Open Source Platforms. As a Best Open Source Development Company we provide high quality Open Source Development Services for kind of Frontend and Backend Web Application Needs. That's why we are Top Angularjs Development Company, Top Nodejs Development Company, Top ReactJS Development Company and Top VueJs Development Company.",
    img: "/digital-marketing-service-main.png",
    imgicons: "/digital-marketing.png",
    icons: [
      "/TabServices Images/ppc-digital-marketing.png",
      "/TabServices Images/seo-digital-marketing.png",
      "/TabServices Images/e-mail-marketing.png",
      "/TabServices Images/content-marketing.png",
      "/TabServices Images/facebook-marketing.png",
      "/TabServices Images/instagram-marketing.png",
      "/TabServices Images/linkedIn-marketing.png",
    ],
  },
  {
    id: 6,
    title: "Trending Solutions",
    desc: "Our team is experienced and knowledgable in all trending technologies, we cover all latest technologies. Our team is quick learn and we can easily adopt any new technology. We have worked with all latest platforms. We can cover all your requirements with any preffered platform. We are one of the Best Salesforce Development Company, Best Python Development Company and Best AI Development Company.",
    img: "/trending-solution-main-image.png",
    imgicons: "/trending-solutions.png",
    icons: [
      "/Trending Solutions/angular-js-may.png",
      "/Trending Solutions/Artificial-intelligence.png",
      "/Trending Solutions/Big-Data.png",
      "/Trending Solutions/Django-may.png",
      "/Trending Solutions/Golang.png",
      "/Trending Solutions/Machine-Learning.png",
      "/Trending Solutions/NodeJS-may.png",
      "/Trending Solutions/Python.png",
      "/Trending Solutions/SalesForce.png",
      "/Trending Solutions/VueJS-may.png",
      "/Trending Solutions/wearable.png",
      "/Trending Solutions/Xamarin-may.png",
    ],
  },
];

export default function TabsSection() {
  const [active, setActive] = useState(0); // FIRST TAB ACTIVE BY DEFAULT

  return (
    <section className="max-w-7xl mx-auto py-2 mb-10 px-4">

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-10">
        {tabData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActive(index)}
            className={`rounded-xl transition-all duration-300
              flex justify-center items-center h-20 w-20 mx-auto
              ${active === index
                ? "border border-orange-500 scale-105"
                : "border border-transparent"
              }`}
          >
            <Image
              src={item.imgicons}
              alt={item.title}
              width={50}
              height={50}
              className="object-cover"
            />
            
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
            width={340}
            height={180}
            className="w-full rounded-2xl"
          />
        </div>

        {/* Text + Icons */}
        <div>
          <h2 className="text-5xl font-bold text-orange-500 mb-3">
            {tabData[active].title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {tabData[active].desc}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-7">
            {tabData[active].icons.map((icon, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <Image
                  src={icon}
                  alt={`icon-${i}`}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

