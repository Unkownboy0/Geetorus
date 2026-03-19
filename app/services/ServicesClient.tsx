"use client";

import { motion } from "framer-motion";
import { Shield, Terminal, Globe, Brain, GraduationCap, Eye, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { services } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Terminal: <Terminal size={28} />,
  Globe: <Globe size={28} />,
  Brain: <Brain size={28} />,
  GraduationCap: <GraduationCap size={28} />,
  Eye: <Eye size={28} />,
};

const colorMap = {
  blue: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.25)", glow: "rgba(0,240,255,0.15)" },
  green: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.25)", glow: "rgba(0,255,159,0.15)" },
  purple: { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", glow: "rgba(139,92,246,0.15)" },
};

export default function ServicesClient() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(139,92,246,0.07), transparent)" }} />
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionBadge color="purple" className="mb-6">What We Offer</SectionBadge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
              World-Class{" "}
              <span className="gradient-text-blue">Security</span>
              <br />
              <span className="gradient-text-green">Services</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From penetration testing to AI-powered automation — our services are built by practitioners, for real-world threats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const c = colorMap[service.color as keyof typeof colorMap];
              return (
                <ScrollReveal key={service.id} delay={i * 0.08}>
                  <GlassCard className="p-8 h-full group" glowColor={service.color as "blue" | "green" | "purple"}>
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, boxShadow: `0 0 20px ${c.bg}` }}
                    >
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.description}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check size={13} style={{ color: c.text }} className="shrink-0" />
                          <span className="text-gray-400">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all mt-auto"
                      style={{ color: c.text }}
                    >
                      Learn More <ArrowRight size={14} />
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,240,255,0.06), rgba(139,92,246,0.06))",
                border: "1px solid rgba(0,240,255,0.12)"
              }}
            >
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black font-poppins text-white mb-4">
                  Ready to Get{" "}
                  <span className="gradient-text-blue">Started?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-8">
                  Tell us about your security needs and we&apos;ll tailor a solution just for you.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, #00f0ff, #8b5cf6)", boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
                >
                  Get a Free Consultation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
