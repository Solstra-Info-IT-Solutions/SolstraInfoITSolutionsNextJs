'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import FooterSection from '../Components/FooterSection';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-600">
      <Head>
        <title>Refund Policy | Solstra Info IT Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <Navbar/>

      {/* Header Section */}
      <header
        className="relative w-full h-48 flex items-center justify-center mt-16 sm:mt-20"
        style={{
          // Using the same consistent gradient & image style
          backgroundImage: "linear-gradient(to right, #6D28D9, #DB2777), url('/earth.jpg')",
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="z-10 flex flex-col items-center mt-10">
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-wider mb-2 drop-shadow-md">
            Refund Policy
          </h1>
          <div className="w-16 sm:w-24 h-0.5 bg-orange-500 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-3xl text-justify">
          
          {/* Intro Block */}
          <div className="text-center mb-10">
            <p className="text-sm sm:text-base leading-relaxed mb-6">
              <span className="text-lg sm:text-xl font-bold text-orange-600 block mb-4">
                Transparent & Fair Pricing.
              </span>
              At Solstra Info IT Solutions, we strive to ensure that our clients are satisfied with our services. 
              However, due to the nature of digital services and recruitment, our refund policy is governed by the 
              specific terms outlined below.
            </p>
          </div>

          <p className="mb-6 text-sm leading-relaxed">
            Please read this policy carefully to understand your rights and obligations regarding cancellations 
            and refunds for our IT Services, Product Development, and Recruitment solutions.
          </p>

          <hr className="border-gray-200 my-8" />

          {/* Numbered Sections */}
          <Section title="1. General Refund Terms">
            <p className="mb-2">
              As a service-based company, Solstra Info IT Solutions operates on a model where resources, time, and 
              expertise are allocated immediately upon project commencement. Therefore:
            </p>
            <CustomList>
              <li>
                <strong>Non-Tangible Irrevocability:</strong> Since we provide non-tangible irrevocable goods (digital services), 
                we generally do not issue refunds once the order is accomplished and the product/service is sent.
              </li>
              <li>
                <strong>Change of Mind:</strong> We do not provide refunds for "change of mind" situations after a project 
                agreement has been signed and work has commenced.
              </li>
            </CustomList>
          </Section>

          <Section title="2. IT Services & Product Development">
            <p className="mb-2">
              For projects involving Website Development, Mobile Apps, or Custom Software:
            </p>
            <CustomList>
              <li>
                <strong>Milestone-Based Payments:</strong> Refunds are not available for completed milestones that have been 
                approved by the client.
              </li>
              <li>
                <strong>Project Cancellation:</strong> If you wish to cancel a project mid-way, you will be billed for 
                all work completed up to the cancellation date. Any advance payment exceeding the value of completed work 
                may be refunded at our discretion within 30 days.
              </li>
              <li>
                <strong>Bugs & Errors:</strong> Technical issues or bugs reported within the support period (as defined in your contract) 
                will be fixed at no extra cost. This does not constitute grounds for a refund.
              </li>
            </CustomList>
          </Section>

          <Section title="3. Recruitment Services">
            <p className="mb-2">
              For our Staffing and Recruitment solutions:
            </p>
            <CustomList>
              <li>
                <strong>Replacement Guarantee:</strong> If a candidate we placed leaves within the guarantee period (usually 30-90 days, 
                as per contract), we will provide a <strong>free replacement</strong>. We do not offer monetary refunds for recruitment fees.
              </li>
              <li>
                <strong>Service Fees:</strong> Retainer fees or initial search fees paid to initiate a recruitment drive are non-refundable 
                as they cover the operational costs of sourcing and screening.
              </li>
            </CustomList>
          </Section>

          <Section title="4. Digital Marketing & SEO">
            <CustomList>
              <li>
                Marketing budgets paid to third-party platforms (e.g., Google Ads, Facebook Ads) are strictly non-refundable.
              </li>
              <li>
                Service fees for the current month of ongoing marketing management are non-refundable once the month has started. 
                Cancellation requests must be submitted 30 days in advance.
              </li>
            </CustomList>
          </Section>

          <Section title="5. How to Request a Cancellation">
            <p className="mb-2">
              To request a cancellation or discuss a billing issue, you must contact us formally via email.
            </p>
            <CustomList>
              <li>Requests must be sent to <a href="mailto:sjain01ajmer@gmail.com" className="text-blue-600 hover:underline">sjain01ajmer@gmail.com</a>.</li>
              <li>Please include your Project ID, Invoice Number, and a detailed reason for the request.</li>
              <li>We aim to review and respond to all disputes within 7-10 business days.</li>
            </CustomList>
          </Section>

          <Section title="6. Policy Updates">
            Solstra Info IT Solutions reserves the right to modify this Refund Policy at any time. 
            Any changes will be effective immediately upon posting to the website. Your continued use of our services 
            constitutes acceptance of the modified policy.
          </Section>

          <hr className="border-gray-200 my-8" />

          {/* Contact Section */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-sm leading-relaxed mb-4 text-gray-600">
              If you have any questions regarding our Refund Policy, please reach out:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a
                  href="mailto:sjain01ajmer@gmail.com"
                  className="text-blue-600 hover:underline transition-colors"
                >
                  sjain01ajmer@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold mr-2">Phone:</span>
                +91-9001638396
              </li>
              <li>
                <span className="font-semibold mr-2">Location:</span>
                Rajasthan, India
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <FooterSection/>
    </div>
  );
};

// --- Helper Components (Reused for consistency) ---

// 1. Section Helper
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-6">
    <h2 className="text-xl font-bold text-gray-900 mt-6 mb-2">{title}</h2>
    <div className="text-sm leading-relaxed text-gray-600">
      {children}
    </div>
  </section>
);

// 2. Custom Bullet List Helper (With TypeScript Fix)
const CustomList = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-none pl-0 mb-6 text-sm text-gray-600 leading-relaxed">
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const element = child as React.ReactElement<{ children: React.ReactNode }>;
        return (
          <li className="relative pl-6 mb-2">
            <span className="absolute left-0 top-0 text-slate-900 font-bold text-xl leading-snug">
              •
            </span>
            {element.props.children}
          </li>
        );
      }
      return child;
    })}
  </ul>
);

export default RefundPolicy;