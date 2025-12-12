"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl shadow-sm mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-lg font-semibold text-[#06114f] hover:bg-gray-100 transition rounded-2xl"
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <RiArrowDownSLine size={24} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t"
          >
            <div className="p-4 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
