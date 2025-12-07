import HomeSection from "../Components/servicesPage/HomeSection";
import ServiceSection from "../Components/servicesPage/ServiceSection";
import DesignSection from "../Components/servicesPage/DesignSection";
import CloudSection from "../Components/servicesPage/CloudSection";
import CloudSolutionsSection from "../Components/servicesPage/CloudSolutionsSection"
import CloudKeyOfferings from "../Components/servicesPage/CloudKeyOfferings"
import OfficeLocations from "../Components/servicesPage/OfficeLocations"
import Navbar from "../Components/Navbar"
import FooterSection  from "../Components/FooterSection"

export const metadata = {
  title: "Solstra Info IT Solutions – Web Development, Mobile Apps, IT Services",
  description: "We build scalable websites, mobile apps, AI solutions, and enterprise digital systems.",
};

export default function HomePage() {
  return (
    <>
      <Navbar 
                 type="other"
                 icons={[
                   { src: "/telephone2.png", alt: "Email", link: "mailto:test@gmail.com" },
                   { src: "/whatsapp.png", alt: "WhatsApp", link: "https://wa.me/9999" },
                   { src: "/skype.png", alt: "Skype", link: "skype:live:username" },
                   { src: "/orangeemail.png", alt: "Email", link: "mailto:test@gmail.com" },
                   
                 ]}
               />
    <HomeSection
      heroDescription="At Solstra Info IT Solutions, we don't just build websites; we create powerful, scalable web platforms that drive business growth. Whether you're a startup needing a launchpad or an enterprise requiring complex system integration, our full-stack developers deliver custom solutions tailored to your unique needs. We combine cutting-edge technology with strategic design to ensure your web presence is robust, secure, and engaging.st build websites; we create powerful, scalable web platforms that drive business growth. Whether you're a startup needing a launchpad or an enterprise requiring complex system integration, our full-stack developers deliver custom solutions tailored to your unique needs."
      heroImages={[
        { src: "/images/image1.webp", className: "bottom-5 left-0" },
        { src: "/images/image2.webp", className: "right-0 top-10" },
        { src: "/images/image3.jfif", className: "top-0 left-10 rounded-xl" },
        { src: "/images/image4.webp", className: "bottom-3 right-5" },
      ]}
      whyPoints={[
        { title: "Experienced Team", text: "Skilled developers & designers" },
        { title: "Agile Process", text: "Fast & transparent development" },
        { title: "End-to-End Support", text: "From idea to final launch" },
        { title: "Cost-Effective Solutions", text: "High-quality development at competitive" },
        { title: "100% Client Satisfaction  ", text: "Customer success & long-term partnerships" },
      ]}
      stats={[
        { icon: "ri-database-2-line", color: "purple", count: "300", label: "Completed Projects" },
        { icon: "ri-database-2-line", color: "orange", count: "6000", label: "Happy Clients" },
        { icon: "ri-database-2-line", color: "Blue", count: "1200", label: "Award Wins" },
        { icon: "ri-database-2-line", color: "Green", count: "500", label: "Years of Business" },
      ]}
      services={[
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png", title: "Web Development" },
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Ecommerce-Development.png", title: "Ecommerce Development" },
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png", title: "Web Development" },
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Ecommerce-Development.png", title: "Ecommerce Development" },
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png", title: "Web Development" },
        { img: "https://nextbigtechnology.com/wp-content/uploads/2023/06/Ecommerce-Development.png", title: "Ecommerce Development" },
      ]}
      serviceImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
      offeringImages={[
        { src: "/images/image5.webp", className: "h-48 object-cover" },
        { src: "/images/image6.webp", className: "h-48 object-cover" },
        { src: "/images/image7.webp", className: "col-span-2 h-64 object-cover" },
      ]}
      offerings={[
        { title: "Custom Applications", text: " We build tailor-made web applications from the ground up using modern frameworks like React, Angular, Node.js, and Python, ensuring a perfect fit for your business logic." },
        { title: "E-commerce Solutions", text: "From storefront design to secure payment gateway integration and inventory management, we create seamless B2B and B2C e-commerce experiences using platforms like Magento, Shopify, and WooCommerce." },
        { title: "CMS Development", text: "We specialize in developing and customizing Content Management Systems (CMS) like WordPress, Drupal, and Joomla, empowering you to manage your content with ease." },
        { title: "Website Maintenance & Support", text: "Our partnership doesn't end at launch. We provide ongoing maintenance, security updates, and performance optimization to keep your site running smoothly." },
        
      ]}
    />

    {/* 1 */}
         <ServiceSection
        title="Web Servicese"
        subtitle="Building Your Digital Foundation for the Future."
        description="At Solstra Info IT Solutions, we don't just build websites; we create powerful, scalable web
                    platforms that drive business growth. Whether you're a startup needing a launchpad or an
                    enterprise requiring complex system integration, our full-stack developers deliver custom
                    solutions tailored to your unique needs. We combine cutting-edge technology with strategic
                    design to ensure your web presence is robust, secure, and engaging."
        points={[
          { title: "Custom Web Application Development:", text: " We build tailor-made web applications from the ground up using modern frameworks like React,Angular, Node.js, and Python, ensuring a perfect fit for your business logic." },
          { title: "E-commerce Solutions:", text: " From storefront design to secure payment gateway integration and inventory management, we create seamless B2B and B2C e-commerce experiences using platforms like Magento, Shopify,and WooCommerce." },
          { title: "CMS Development:", text: "We specialize in developing and customizing Content Management Systems (CMS) like WordPress,Drupal, and Joomla, empowering you to manage your content with ease." },
          { title: "Website Maintenance & Support:", text: "Our partnership doesn't end at launch. We provide ongoing maintenance, security updates, and performance optimization to keep your site running smoothly." },
          { title:"The Solstra Advantage:", text: "We build for performance, security, and scalability. Our agile development process ensures transparency and rapid delivery, while our focus on clean code guarantees a sustainable product that grows with your business." },

        ]}
        images={[
          "/images/webservice.png",
          "/images/images/webservice2.jfif",
          "/images/image3.jfif",
          "/images/webservice3.png",
        ]}
        bg="from-[#f7f4e9] to-[#eef3f7]"
      />


{/* 2 */}

      <ServiceSection
        title="Mobile App Development"
        subtitle="Transforming Ideas into Powerful Mobile Experiences."
        description="                    In a mobile-first world, a powerful app is essential for connecting with your audience. Solstra Info
                    IT Solutions is your end-to-end partner for creating user-centric mobile applications. From initial
                    concept and design to development, testing, and app store deployment, we handle the entire
                    lifecycle.
                    Our expertise spans native and cross-platform technologies, ensuring you reach your users on any
                    device.
"
        points={[
          { title: "iOS App Development:", text: "We build high-performance, secure, and visually stunning native apps for iPhones and iPads using Swift and Objective-C, leveraging the full power of the iOS ecosystem." },
          { title: "Android App Development:", text: "Our team develops robust and scalable native Android applications using Kotlin and Java, ensuring compatibility across the fragmented Android device market." },
          { title: "Cross-Platform Development:", text: "                            Save time and cost with a single codebase that runs on both iOS and Android. We are experts in leading frameworks like Flutter and React Native." },
          { title: "App Strategy & Consulting:", text: "We help you define your product vision, identify your target audience, and create a roadmap for a successful mobile app launch." },
          { title: "The Solstra Advantage:", text: "We focus on creating intuitive, engaging, and reliable mobile experiences that users love.Our rigorous testing process ensures your app is bug-free and performs flawlessly under various conditions." },
        ]}
        images={[
          "/images/MobDev.png",
          "/images/MobDev2.png",
          "/images/MobDev3.png",
      
        ]}
        bg="from-orange-50 to-orange-100"
      />

      {/* 3 */}

      <ServiceSection
        title="UI/UX Design"
        subtitle="Designing Experiences That Captivate and Convert."
        description="Great technology needs great design. At Solstra Info IT Solutions, we believe that user experience
                    (UX) and user interface (UI) design are at the heart of every successful digital product. Our design
                    process is human-centered, focusing on understanding your users' needs and behaviors to create
                    intuitive, accessible, and aesthetically pleasing interfaces that drive engagement and loyalty."
        points={[
          { title: "User Research & Analysis:", text: "We conduct in-depth user research, including surveys, interviews, and competitor analysis,to, define user personas and journeys." },
          { title: "Wireframing & Prototyping:", text: "We create low-fidelity wireframes to map out the structure and high-fidelity interactive prototypes to test and refine the user flow before development begins." },
          { title: "Visual Design (UI):", text: "Our designers craft beautiful, on-brand visual elements, including color palettes, typography, icons, and layout, to create a stunning and consistent user interface." },
          { title: "Usability Testing:", text: " We observe real users interacting with your product to identify pain points and gather feedback for continuous improvement." },
          { title:"The Solstra Advantage:", text: "                            We don't just make things look pretty; we make them work beautifully. Our data-driven design approach ensures that every decision is backed by user insights, resulting in products that are both functional and delightful to use." },

        ]}
        images={[
          "/images/UI.png",
          "/images/UI2.jfif",
          "/images/UI3.jfif",
         
        ]}
        bg="from-[#f7f4e9] to-[#eef3f7]"
      />

      {/* 4 */}


          <ServiceSection
        title="Cloud Services"
        subtitle="Empowering Your Business with Scalable & Secure Cloud Solutions."
        description="Migrating to the cloud is no longer an option; it's a necessity for staying competitive.
                    Solstra Info IT Solutions helps businesses leverage the full potential of cloud computing
                    to increase agility, reduce costs, and improve operational efficiency. Whether you're looking
                    to migrate existing infrastructure or build cloud-native applications, our certified experts
                    guide you through every step of your cloud journey on major platforms like AWS, Azure, and Google
                    Cloud.
"
        points={[
          { title: "Cloud Migration Strategy & Execution:", text: " We assess your current infrastructure, develop a customized migration plan, and execute aseamless transition of your applications and data to the cloud with minimal downtime." },
          { title: "Cloud Infrastructure Management:", text: "We provide ongoing management, monitoring, and optimization of your cloud resources to ensure high availability, performance, and cost-effectiveness." },
          { title: "Cloud-Native Application Development:", text: "                          Save time and cost with a single codebase that runs on both iOS and Android. We are experts in leading frameworks like Flutter and React Native." },
          { title: "App Strategy & Consulting:", text: "We design and build scalable applications using microservices, serverless computing, and containers (Docker/Kubernetes) optimized for the cloud environment." },
          { title: "Cloud Security & Compliance::", text: "We implement robust security measures and ensure your cloud environment complies with industry standards and regulations." },
           { title: "The Solstra Advantage:", text: "                            We are vendor-agnostic, meaning we recommend the cloud platform and solutions that best fit your specific business needs and budget. Our focus is on creating a secure, resilient, and cost-optimized cloud foundation for your growth." },
        ]}
        images={[
          "/images/Cloud.png",
          "/images/Cloud2.jfif",
          "/images/Cloud3.png",
      
        ]}
        bg="from-orange-50 to-orange-100"
      />


      {/* 5 */}


          <ServiceSection
        title="Cloud Services"
        subtitle="Empowering Your Business with Scalable & Secure Cloud Solutions."
        description="Migrating to the cloud is no longer an option; it's a necessity for staying competitive.
                    Solstra Info IT Solutions helps businesses leverage the full potential of cloud computing
                    to increase agility, reduce costs, and improve operational efficiency. Whether you're looking
                    to migrate existing infrastructure or build cloud-native applications, our certified experts
                    guide you through every step of your cloud journey on major platforms like AWS, Azure, and Google
                    Cloud.
"
        points={[
          { title: "Cloud Migration Strategy & Execution:", text: " We assess your current infrastructure, develop a customized migration plan, and execute aseamless transition of your applications and data to the cloud with minimal downtime." },
          { title: "Cloud Infrastructure Management:", text: "We provide ongoing management, monitoring, and optimization of your cloud resources to ensure high availability, performance, and cost-effectiveness." },
          { title: "Cloud-Native Application Development:", text: "                          Save time and cost with a single codebase that runs on both iOS and Android. We are experts in leading frameworks like Flutter and React Native." },
          { title: "App Strategy & Consulting:", text: "We design and build scalable applications using microservices, serverless computing, and containers (Docker/Kubernetes) optimized for the cloud environment." },
          { title: "Cloud Security & Compliance::", text: "We implement robust security measures and ensure your cloud environment complies with industry standards and regulations." },
           { title: "The Solstra Advantage:", text: "                            We are vendor-agnostic, meaning we recommend the cloud platform and solutions that best fit your specific business needs and budget. Our focus is on creating a secure, resilient, and cost-optimized cloud foundation for your growth." },
        ]}
        images={[
          "/images/Cloud.png",
          "/images/Cloud2.jfif",
          "/images/Cloud3.png",
      
        ]}
        bg="from-orange-50 to-orange-100"
      />



       {/* 6 */}


          <ServiceSection
        title="Cloud Services"
        subtitle="Empowering Your Business with Scalable & Secure Cloud Solutions."
        description="Migrating to the cloud is no longer an option; it's a necessity for staying competitive.
                    Solstra Info IT Solutions helps businesses leverage the full potential of cloud computing
                    to increase agility, reduce costs, and improve operational efficiency. Whether you're looking
                    to migrate existing infrastructure or build cloud-native applications, our certified experts
                    guide you through every step of your cloud journey on major platforms like AWS, Azure, and Google
                    Cloud.
"
        points={[
          { title: "Cloud Migration Strategy & Execution:", text: " We assess your current infrastructure, develop a customized migration plan, and execute aseamless transition of your applications and data to the cloud with minimal downtime." },
          { title: "Cloud Infrastructure Management:", text: "We provide ongoing management, monitoring, and optimization of your cloud resources to ensure high availability, performance, and cost-effectiveness." },
          { title: "Cloud-Native Application Development:", text: "                          Save time and cost with a single codebase that runs on both iOS and Android. We are experts in leading frameworks like Flutter and React Native." },
          { title: "App Strategy & Consulting:", text: "We design and build scalable applications using microservices, serverless computing, and containers (Docker/Kubernetes) optimized for the cloud environment." },
          { title: "Cloud Security & Compliance::", text: "We implement robust security measures and ensure your cloud environment complies with industry standards and regulations." },
           { title: "The Solstra Advantage:", text: "                            We are vendor-agnostic, meaning we recommend the cloud platform and solutions that best fit your specific business needs and budget. Our focus is on creating a secure, resilient, and cost-optimized cloud foundation for your growth." },
        ]}
        images={[
          "/images/Cloud.png",
          "/images/Cloud2.jfif",
          "/images/Cloud3.png",
      
        ]}
        bg="from-orange-50 to-orange-100"
      />

    <DesignSection />
    <CloudSection />
    <CloudSolutionsSection />
    <CloudKeyOfferings />
    <OfficeLocations />
    <FooterSection />
    </>
    
  );
}
