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

type GetQuoteDialogProps = {
  open: boolean;
  onClose: () => void;
};

const GetQuoteDialog: React.FC<GetQuoteDialogProps> = ({ open, onClose }) => {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.termsAccepted) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    setSubmitting(true);

    console.log("Quote form submitted:", form);

    setTimeout(() => {
      setSubmitting(false);
      setForm(initialFormState);
      onClose(); // <- use onClose prop to close modal
      alert("Thank you! Your quote request has been submitted.");
    }, 900);
  };

  if (!open) return null; // render only if open

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-4 flex w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_24px_80px_rgba(15,23,42,0.85)] backdrop-blur-2xl animate-scaleIn"
      >
        {/* GRADIENT AURA */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/25 via-transparent to-purple-500/25" />

        <div className="relative flex w-full flex-col md:flex-row">
          {/* LEFT PANEL */}
          <aside className="flex flex-1 flex-col justify-between bg-gradient-to-br from-slate-900/90 via-slate-900/75 to-slate-950/90 px-6 py-6 md:max-w-sm md:px-7 md:py-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-sky-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                100% Free Consultation – No upfront charges
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Shubham IT Consultancy
              </h2>
              <p className="mt-2 text-xs text-slate-200/80 md:text-sm">
                Tailored IT, Product & Consulting solutions to transform your
                business with modern technology and reliable execution.
              </p>

              {/* STATS */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/5 p-3 text-center">
                  <div className="text-sm font-semibold text-white">50+</div>
                  <div className="mt-1 text-[11px] text-slate-300">
                    Projects Delivered
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-3 text-center">
                  <div className="text-sm font-semibold text-white">4.9★</div>
                  <div className="mt-1 text-[11px] text-slate-300">Client Rating</div>
                </div>
                <div className="rounded-2xl bg-white/5 p-3 text-center">
                  <div className="text-sm font-semibold text-white">7+</div>
                  <div className="mt-1 text-[11px] text-slate-300">Years Experience</div>
                </div>
              </div>

              {/* TAGS */}
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
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-slate-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-[13px] text-emerald-300">
                ✓
              </span>
              <p>We respond within 24 working hours with a customised quote.</p>
            </div>
          </aside>

          {/* RIGHT PANEL – FORM */}
          <section className="flex-1 bg-slate-950/80 px-5 py-5 md:px-7 md:py-7">
            {/* Header row */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Share your project details
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  The more clear you are, the better we can estimate timelines
                  and budget for you.
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-slate-800/70 px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ...rest of form remains exactly the same */}
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetQuoteDialog;
