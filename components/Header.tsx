"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";

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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Industries Served", href: "/industries" },
    { name: "Testing / R&D", href: "/testing" },
    { name: "ISO", href: "/quality" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <div className={clsx("fixed top-0 w-full z-[60] transition-transform duration-300", isScrolled ? "-translate-y-full" : "translate-y-0")}>
        <TopBar />
      </div>
      <header
        className={clsx(
          "fixed w-full z-50 transition-all duration-300 border-b border-gray-200",
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md py-4 shadow-sm text-charcoal"
            : "top-0 md:top-8 bg-white py-4 md:py-6 text-charcoal shadow-sm"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">

          {/* LOGO - Blends into solid white navbar perfectly */}
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/logo.gif"
              alt="Hi-Tech Rubber Industries"
              width={240}
              height={45}
              className="group-hover:scale-105 transition-transform object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-bold text-[13px] xl:text-[14px] text-charcoal hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 hover:shadow-premium-hover transition-all duration-300 font-bold text-[13px] tracking-widest uppercase ml-2 shadow-sm"
            >
              Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={clsx(
              "lg:hidden hover:text-primary transition-colors focus:outline-none",
              isScrolled ? "text-charcoal" : "text-white"
            )}
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
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-premium py-8 border-t border-gray-100"
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
    </>
  );
}
