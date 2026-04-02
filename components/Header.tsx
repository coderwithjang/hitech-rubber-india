"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Export", href: "/export" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-gray-200 text-charcoal"
          : "bg-transparent py-6 text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className={clsx("font-display font-bold text-2xl tracking-wide group-hover:text-primary transition-colors", isScrolled ? "text-charcoal" : "text-white")}>
              HI-TECH RUBBER
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] text-primary uppercase font-bold">
              Industries India
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("font-medium text-sm hover:text-primary transition-colors uppercase tracking-widest", isScrolled ? "text-charcoal-light" : "text-gray-200")}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-7 py-2.5 hover:shadow-premium-hover transition-all duration-300 font-semibold text-sm tracking-wide"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={clsx("md:hidden hover:text-primary transition-colors focus:outline-none", isScrolled ? "text-charcoal" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-premium py-8 border-t border-gray-100"
          >
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-lg text-charcoal hover:text-primary transition-colors tracking-widest uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 w-10/12 text-center text-sm font-bold tracking-widest uppercase transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
