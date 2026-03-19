"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Link as LinkIcon, Cpu, BookOpen, Wrench, Check, ArrowLeft, ArrowRight, Zap } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import CyberBackground from "@/components/animations/CyberBackground";

interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  badge: string;
  features: string[];
  status: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Link: <LinkIcon size={40} />,
  Cpu: <Cpu size={40} />,
  BookOpen: <BookOpen size={40} />,
  Wrench: <Wrench size={40} />,
};

const colorMap = {
  blue: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.25)", glow: "rgba(0,240,255,0.15)" },
  green: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.25)", glow: "rgba(0,255,159,0.15)" },
  purple: { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.25)", glow: "rgba(139,92,246,0.15)" },
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const c = colorMap[product.color as keyof typeof colorMap];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <CyberBackground />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${c.bg}, transparent)` }}
        />
        <div className="relative z-10 section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Products
            </Link>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 animate-float"
                style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text, boxShadow: `0 0 40px ${c.glow}` }}
              >
                {iconMap[product.icon]}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <SectionBadge color={product.color as "blue" | "green" | "purple"}>
                    {product.badge}
                  </SectionBadge>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                    style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: c.text }} />
                    {product.status}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-poppins text-white mb-2">
                  {product.title}
                </h1>
                <p className="text-lg font-medium mb-4" style={{ color: c.text }}>
                  {product.tagline}
                </p>
                <p className="text-gray-500 max-w-2xl leading-relaxed">{product.description}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
                style={{ background: c.text, boxShadow: `0 0 25px ${c.glow}` }}
              >
                Try Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                style={{ border: `1px solid ${c.border}`, color: c.text }}
              >
                Get Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="text-3xl font-black font-poppins text-white mb-10">
              Key <span className="gradient-text-blue">Features</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat, i) => (
              <ScrollReveal key={feat} delay={i * 0.08}>
                <GlassCard className="p-6 flex items-start gap-4" glowColor={product.color as "blue" | "green" | "purple"}>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}
                  >
                    <Check size={14} style={{ color: c.text }} />
                  </div>
                  <span className="text-sm text-gray-300 leading-relaxed">{feat}</span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Decorative) */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-black font-poppins text-white mb-4">
              How It <span className="gradient-text-green">Works</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {["Input", "Analyze", "Report"].map((step, i) => (
              <ScrollReveal key={step} delay={i * 0.12}>
                <GlassCard className="p-8 text-center relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg"
                    style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                  >
                    {i + 1}
                  </div>
                  <Zap size={24} className="mx-auto mb-3" style={{ color: c.text }} />
                  <h3 className="text-lg font-bold text-white mb-2">{step}</h3>
                  <p className="text-sm text-gray-500">
                    {["Provide your data or URL to the system.", "AI processes and analyzes for threats.", "Get a detailed, actionable security report."][i]}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black font-poppins text-white mb-4">Start Using {product.title}</h2>
                <p className="text-gray-500 mb-8">Contact us to get access, request a demo, or discuss enterprise plans.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
                  style={{ background: c.text, boxShadow: `0 0 30px ${c.glow}` }}
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
