"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  projectType: string;
  details: string;
  termsAccepted: boolean;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  projectType: "",
  details: "",
  termsAccepted: false,
};

const GetQuoteDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: e.target.value }));
    }
  };

  // ------------------
  // VALIDATION FUNCTION (UNCHANGED)
  // ------------------
  const validateForm = () => {
    const nameRegex = /^[A-Za-z ]{3,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(form.name.trim())) {
      alert("Please enter a valid full name (only letters, minimum 3 characters).");
      return false;
    }

    if (!emailRegex.test(form.email.trim())) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!phoneRegex.test(form.phone.trim())) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (form.details.trim().length < 10) {
      alert("Project details must be at least 10 characters long.");
      return false;
    }

    if (!form.termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return false;
    }

    return true;
  };

  // ----------------------------
  // UPDATED SUBMIT - JSON SAVE
  // ----------------------------
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/saveQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you! Your quote request has been submitted.");
        setForm(initialFormState); // blank form
        setOpen(false);
      } else {
        alert("Something went wrong while saving your data.");
      }
    } catch (error) {
      alert("Server error! Unable to save.");
    }

    setSubmitting(false);
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_5px_15px_rgba(37,99,235,0.5)] transition-all hover:translate-y-px hover:shadow-[0_5px_10px_rgba(37,99,235,0.6)]"
      >
        <span className="flex text-sm">Get a Premium Quote</span>
        <span className="pointer-events-none absolute -inset-px rounded-full border border-white/40 opacity-0 transition-opacity group-hover:opacity-100" />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md animate-fadeIn overflow-y-auto py-6"
          onClick={() => setOpen(false)}
        >
          {/* DIALOG CARD */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-4 flex w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_24px_80px_rgba(15,23,42,0.85)] backdrop-blur-2xl animate-scaleIn"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/25 via-transparent to-purple-500/25" />

            <div className="relative flex w-full flex-col md:flex-row">
              
              {/* LEFT PANEL (UNCHANGED) */}
              <aside className="flex flex-1 flex-col justify-between bg-linear-to-br from-slate-900/90 via-slate-900/75 to-slate-950/90 px-6 py-2 md:max-w-sm md:px-7 md:py-7  ">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-sky-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    100% Free Consultation – No upfront charges
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    Solstra Info IT Solutions
                  </h2>
                  <p className="mt-2 text-xs text-slate-200/80 md:text-sm">
                    Tailored IT, Product & Consulting solutions to transform your
                    business with modern technology and reliable execution.
                  </p>

                  {/* STATS */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/5 p-3 text-center">
                      <div className="text-sm font-semibold text-white">10+</div>
                      <div className="mt-1 text-[11px] text-slate-300">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-3 text-center">
                      <div className="text-sm font-semibold text-white">4.9★</div>
                      <div className="mt-1 text-[11px] text-slate-300">
                        Client Rating
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-3 text-center">
                      <div className="text-sm font-semibold text-white">1+</div>
                      <div className="mt-1 text-[11px] text-slate-300">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
                      We specialise in
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-100">
                        Mobile & Web Apps
                      </span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-100">
                        Product Development
                      </span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-100">
                        IT Consulting
                      </span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-100">
                        Automation & Integrations
                      </span>

                      <div className="flex items-center gap-2 text-[11px] text-slate-300 py-10">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-[13px] text-emerald-300">
                          ✓
                        </span>
                        <p>We respond within 24 working hours with a customised quote.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* RIGHT PANEL – FORM (UNCHANGED except submit) */}
              <section className="flex-1 bg-slate-950/80 px-5 py-5 md:px-7 md:py-7 
                   max-h-[90vh] overflow-y-auto scrollbar ">

                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Share your project details
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      The more clear you are, the better we can estimate.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-slate-800/70 px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSubmit}  className="space-y-4">
                  {/* Name / Email / Phone / Company */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={handleChange}
                        value={form.name}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        value={form.email}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                        placeholder="example@company.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        onChange={handleChange}
                        value={form.phone}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        onChange={handleChange}
                        value={form.company}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Service / Budget */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Services Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        required
                        onChange={handleChange}
                        value={form.service}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                      >
                        <option value="">Select a service</option>
                        <option value="it-consulting">IT Consulting</option>
                        <option value="product-development">
                          Product Development
                        </option>
                        <option value="mobile-web-apps">
                          Mobile / Web App Development
                        </option>
                        <option value="automation">Automation & Workflows</option>
                        <option value="integration">
                          API / Third-party Integrations
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Estimated Budget <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="budget"
                        required
                        onChange={handleChange}
                        value={form.budget}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                      >
                        <option value="">Select range</option>
                        <option value="25k-50k">₹25,000 – ₹50,000</option>
                        <option value="50k-1lakh">₹50,000 – ₹1,00,000</option>
                        <option value="1lakh-3lakh">₹1,00,000 – ₹3,00,000</option>
                        <option value="3lakh-plus">₹3,00,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline / Project Type */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        onChange={handleChange}
                        value={form.timeline}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                      >
                        <option value="">When do you plan to start?</option>
                        <option value="immediate">Immediately</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">Within 1–3 months</option>
                        <option value="3-months-plus">After 3 months</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-200">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        onChange={handleChange}
                        value={form.projectType}
                        className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                      >
                        <option value="">Select type</option>
                        <option value="new-product">
                          New Product / Greenfield
                        </option>
                        <option value="modernization">
                          Existing System Modernization
                        </option>
                        <option value="integration">Integration Project</option>
                        <option value="consulting-only">
                          Consulting Only (No Dev)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-200">
                      Project Details / Requirements{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="details"
                      rows={4}
                      required
                      onChange={handleChange}
                      value={form.details}
                      className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-slate-500 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40"
                      placeholder="Tell us about your idea, tech stack (if any), key features, target users, and any deadlines you have in mind..."
                    />
                  </div>

                  {/* TERMS */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-300">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={form.termsAccepted}
                      onChange={handleChange}
                      className="mt-0.5 h-4 w-4 rounded border-slate-500 bg-slate-900 text-sky-500 focus:ring-sky-500/40"
                    />
                    <p>
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="font-medium text-sky-400 hover:underline"
                      >
                        Terms &amp; Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="font-medium text-sky-400 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . <span className="text-red-400">*</span>
                    </p>
                  </div>

                  {/* CTA + INFO */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-400 to-blue-950 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_5px_10px_rgba(56,189,248,0.6)] transition hover:translate-y-px hover:shadow-[0_6px_12px_rgba(56,189,248,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-transparent" />
                          Processing…
                        </>
                      ) : (
                        <>
                          <span>Request a Custom Quote</span>
                          <span className="text-lg">➜</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400">
                      No spam. No sharing your details with third parties. We use
                      this information only to understand your project and contact
                      you back.
                    </p>
                  </div>
                </form>
       </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetQuoteDialog;