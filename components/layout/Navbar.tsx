"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-none shadow-none"
            : "bg-transparent"
        )}
      >
        <div className="section-container flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl transition-transform duration-300 group-hover:scale-105 shrink-0">
              {/* Animated Glow Background */}
              <div className="absolute inset-0 rounded-xl opacity-60 blur-md bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#00f0ff] animate-gradient-shift group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Dark inner container */}
              <div className="absolute inset-[1px] rounded-xl bg-[#0a0a0a] z-0 flex items-center justify-center overflow-hidden"
                   style={{ border: "1px solid rgba(0,240,255,0.3)" }}>
                {/* Logo Image with Invert Filter */}
                <img 
                  src="/logo.png" 
                  alt="Geetorus Logo" 
                  className="relative z-10 w-full h-full object-contain p-1.5 filter invert opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" 
                />
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-bold font-poppins tracking-wide">
              <span className="gradient-text-blue">Gee</span>
              <span className="text-white">torus</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium animated-underline transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#00f0ff]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-[#0a0a0a] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                boxShadow: "0 0 20px rgba(0,240,255,0.3)"
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 hover:text-white transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl font-semibold transition-colors",
                      pathname === link.href ? "text-[#00f0ff]" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <Link
                  href="/contact"
                  className="mt-4 px-8 py-3 rounded-xl text-base font-bold text-[#0a0a0a]"
                  style={{ background: "linear-gradient(135deg, #00f0ff, #8b5cf6)" }}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
