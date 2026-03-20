"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Zap, Mail, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, navLinks, services } from "@/lib/constants";

const socialIcons = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  instagram: <Instagram size={18} />,
};

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div
        className="relative"
        style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(10px)" }}
      >
        <div className="section-container pt-24 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 md:gap-4 mb-6 group">
                <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl transition-transform duration-300 group-hover:scale-105 shrink-0">
                  {/* Animated Glow Background */}
                  <div className="absolute inset-0 rounded-xl opacity-0 blur-md bg-gradient-to-r from-[#6b7280] via-[#6366f1] to-[#6b7280] transition-opacity duration-500" />

                  {/* Dark inner container */}
                  <div className="absolute inset-[1px] rounded-xl bg-[#0a0a0a] z-0 flex items-center justify-center overflow-hidden"
                    style={{ border: "1px solid rgba(107,114,128,0.3)" }}>
                    {/* Logo Image with Invert Filter */}
                    <img
                      src="/logo.png"
                      alt="Geetorus Logo"
                      className="relative z-10 w-full h-full object-contain p-1.5 filter invert opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    />
                  </div>
                </div>
                <span className="text-2xl md:text-3xl font-bold tracking-wide">
                  <span className="gradient-text-blue">Gee</span>
                  <span className="text-white">torus</span>
                </span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Building the future of cybersecurity and AI. Protecting, educating, and innovating for a safer digital world.
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(siteConfig.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:text-[#6b7280] transition-all duration-200 hover:scale-110"
                    style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                    aria-label={key}
                  >
                    {socialIcons[key as keyof typeof socialIcons]}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Navigation
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#6b7280] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((s) => (
                  <li key={s.id}>
                    <Link
                      href="/services"
                      className="text-sm text-gray-500 hover:text-[#6b7280] transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                      <Mail size={15} className="text-[#6b7280] mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-gray-500 hover:text-[#6b7280] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-[#6b7280] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-500">{siteConfig.location}</span>
                </li>
                <li>
                  <a
                    href="https://udhayauk-2907.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#6b7280] transition-colors"
                  >
                    <ExternalLink size={14} />
                    Founder Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Geetorus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
