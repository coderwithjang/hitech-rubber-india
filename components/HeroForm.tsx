"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroForm() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 w-full max-w-[280px] bg-white shadow-premium rounded-lg overflow-hidden z-30 border border-gray-100"
        >
          <div className="bg-primary px-4 py-3 flex justify-between items-center text-white">
            <h3 className="font-display font-bold text-base">Quick Inquiry</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close form"
            >
              <X size={18} />
            </button>
          </div>
          <form className="p-4 space-y-3 bg-white" onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted!"); setIsOpen(false); }}>
            <div>
              <label htmlFor="name" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 px-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full border border-gray-200 p-2 text-sm rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary" 
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 px-1">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full border border-gray-200 p-2 text-sm rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-primary" 
                placeholder="Phone Number"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 text-xs tracking-widest uppercase rounded transition-colors shadow-sm"
            >
              Submit Now
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
