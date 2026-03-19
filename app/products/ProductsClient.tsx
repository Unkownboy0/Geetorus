"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, Cpu, BookOpen, Wrench, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { products } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "secure-link-detector": <LinkIcon size={32} />,
  "ai-threat-scanner": <Cpu size={32} />,
  "geetorus-learnhub": <BookOpen size={32} />,
  "pentest-toolkit": <Wrench size={32} />,
};

const colorMap = {
  blue: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.25)" },
  green: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.25)" },
  purple: { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)" },
};

const statusColors = {
  Live: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.25)" },
  Beta: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.25)" },
  "Coming Soon": { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)" },
};

export default function ProductsClient() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,255,159,0.06), transparent)" }} />
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionBadge color="green" className="mb-6">Security Tools</SectionBadge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
              Products Built for{" "}
              <span className="gradient-text-green">Defenders</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              AI-powered tools, learning platforms, and security toolkits — designed for the real world by people who live in it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => {
              const c = colorMap[product.color as keyof typeof colorMap];
              const sc = statusColors[product.status as keyof typeof statusColors];
              return (
                <ScrollReveal key={product.id} delay={i * 0.1}>
                  <GlassCard className="p-8 h-full group" glowColor={product.color as "blue" | "green" | "purple"}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, boxShadow: `0 0 20px ${c.bg}` }}
                        >
                          {iconMap[product.id]}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                            {product.title}
                          </h3>
                          <p className="text-sm" style={{ color: c.text }}>{product.tagline}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                        >
                          {product.badge}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1"
                          style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: sc.text }} />
                          {product.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{product.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <Check size={12} style={{ color: c.text }} className="shrink-0" />
                          <span className="text-xs text-gray-500">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/products/${product.id}`}
                        className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-center transition-all hover:scale-[1.02]"
                        style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="px-5 py-2.5 rounded-xl text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-[1.02]"
                        style={{ background: c.text }}
                      >
                        Try Now
                      </Link>
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
        <div className="section-container text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black font-poppins text-white mb-4">
              Want a{" "}
              <span className="gradient-text-blue">Custom Tool?</span>
            </h2>
            <p className="text-gray-500 mb-8">We build custom security automation and AI tools tailored to your needs.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
              style={{ background: "linear-gradient(135deg, #00f0ff, #8b5cf6)", boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
            >
              Discuss Your Project <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
