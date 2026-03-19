"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  Shield, Brain, GraduationCap, ArrowRight, ChevronDown,
  Terminal, Globe, Eye, Star, Cpu, Link as LinkIcon, 
  BookOpen, Wrench, Check
} from "lucide-react";
import CyberBackground from "@/components/animations/CyberBackground";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats, testimonials, products } from "@/lib/constants";

const featureHighlights = [
  {
    icon: <Shield size={28} />,
    title: "Cybersecurity",
    desc: "Penetration testing, ethical hacking, and security audits by seasoned experts.",
    color: "blue",
  },
  {
    icon: <Brain size={28} />,
    title: "AI Solutions",
    desc: "Custom AI models, threat detection automation, and intelligent security tools.",
    color: "purple",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    desc: "Hands-on cybersecurity courses, workshops, and CTF challenges for all levels.",
    color: "green",
  },
  {
    icon: <Terminal size={28} />,
    title: "Ethical Hacking",
    desc: "Red team operations and offensive security to expose your vulnerabilities first.",
    color: "blue",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Security",
    desc: "Comprehensive OWASP-aligned web application security testing and hardening.",
    color: "green",
  },
  {
    icon: <Eye size={28} />,
    title: "SOC as a Service",
    desc: "24/7 threat monitoring, incident detection, and rapid response operations.",
    color: "purple",
  },
];

const productIconMap: Record<string, React.ReactNode> = {
  "secure-link-detector": <LinkIcon size={24} />,
  "ai-threat-scanner": <Cpu size={24} />,
  "geetorus-learnhub": <BookOpen size={24} />,
  "pentest-toolkit": <Wrench size={24} />,
};

const colorMap = {
  blue: { text: "#00f0ff", glow: "rgba(0,240,255,0.15)", border: "rgba(0,240,255,0.25)" },
  green: { text: "#00ff9f", glow: "rgba(0,255,159,0.15)", border: "rgba(0,255,159,0.25)" },
  purple: { text: "#8b5cf6", glow: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.25)" },
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <CyberBackground />

        {/* Ambient gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,240,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 0% 100%, rgba(139,92,246,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 section-container text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge className="mb-6">
              🔐 Next-Gen Security Platform
            </SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-poppins leading-tight mb-6"
          >
            <span className="text-white">Building the </span>
            <span className="gradient-text-blue">Future</span>
            <br />
            <span className="text-white">of </span>
            <span className="gradient-text-green">Cybersecurity</span>
            <span className="text-white"> & </span>
            <span
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #f72585)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 h-10 font-medium"
          >
            <TypeAnimation
              sequence={[
                "Penetration Testing & Ethical Hacking",
                2000,
                "AI-Powered Threat Detection",
                2000,
                "Cybersecurity Education & Training",
                2000,
                "Web Security Consulting",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: "#00f0ff" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10"
          >
            Geetorus is a next-generation cybersecurity startup protecting, educating, and innovating
            for a safer digital world. Built by hackers. Trusted by builders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0a0a0a] transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                boxShadow: "0 0 30px rgba(0,240,255,0.3)",
              }}
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#00f0ff] transition-all duration-300 hover:scale-105 hover:bg-[rgba(0,240,255,0.05)]"
              style={{ border: "1px solid rgba(0,240,255,0.3)" }}
            >
              Our Services
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 md:mt-24 flex justify-center w-full z-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[#00f0ff] opacity-80 flex flex-col items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"
            >
              <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 cyber-grid opacity-30"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.04), transparent)",
          }}
        />
        <div className="relative z-10 section-container">
          <ScrollReveal className="text-center mb-16">
            <SectionBadge color="purple" className="mb-4">
              What We Do
            </SectionBadge>
            <h2 className="text-3xl md:text-5xl font-black font-poppins text-white mb-4">
              Security, AI &{" "}
              <span className="gradient-text-full">Education</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Three pillars. One mission. Protecting the digital world through expertise, technology, and knowledge.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureHighlights.map((feat, i) => {
              const c = colorMap[feat.color as keyof typeof colorMap];
              return (
                <ScrollReveal key={feat.title} delay={i * 0.08} direction="up">
                  <GlassCard
                    className="p-8 h-full"
                    glowColor={feat.color as "blue" | "green" | "purple"}
                  >
                    <div
                      className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                      style={{
                        background: c.glow,
                        border: `1px solid ${c.border}`,
                        color: c.text,
                        boxShadow: `0 0 20px ${c.glow}`,
                      }}
                    >
                      {feat.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 relative">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,240,255,0.03) 0%, transparent 100%)",
            borderTop: "1px solid rgba(0,240,255,0.06)",
            borderBottom: "1px solid rgba(0,240,255,0.06)",
          }}
        />
        <div className="relative z-10 section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <div
                  className="text-5xl md:text-6xl font-black font-poppins mb-2"
                  style={{
                    background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-gray-500 font-medium tracking-wide">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <SectionBadge color="green" className="mb-4">
              Our Products
            </SectionBadge>
            <h2 className="text-3xl md:text-5xl font-black font-poppins text-white mb-4">
              Tools Built for{" "}
              <span className="gradient-text-green">Defenders</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From AI-powered URL scanners to cybersecurity learning platforms — we build what security teams actually need.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => {
              const c = colorMap[product.color as keyof typeof colorMap];
              return (
                <ScrollReveal key={product.id} delay={i * 0.1}>
                  <Link href={`/products/${product.id}`}>
                    <GlassCard
                      className="p-8 h-full group cursor-pointer"
                      glowColor={product.color as "blue" | "green" | "purple"}
                    >
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-xl"
                          style={{
                            background: c.glow,
                            border: `1px solid ${c.border}`,
                            color: c.text,
                          }}
                        >
                          {productIconMap[product.id]}
                        </div>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: c.glow,
                            border: `1px solid ${c.border}`,
                            color: c.text,
                          }}
                        >
                          {product.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm mb-3" style={{ color: c.text }}>
                        {product.tagline}
                      </p>
                      <p className="text-sm text-gray-500 mb-5 leading-relaxed">{product.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.slice(0, 4).map((feat) => (
                          <div key={feat} className="flex items-center gap-2">
                            <Check size={12} style={{ color: c.text }} />
                            <span className="text-xs text-gray-500">{feat}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: c.text }}>
                        Learn More <ArrowRight size={14} />
                      </div>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#00f0ff] hover:bg-[rgba(0,240,255,0.05)] transition-all"
              style={{ border: "1px solid rgba(0,240,255,0.25)" }}
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 cyber-grid opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,240,255,0.03), transparent 70%)" }}
        />
        <div className="relative z-10 section-container">
          <ScrollReveal className="text-center mb-16">
            <SectionBadge color="blue" className="mb-4">
              Testimonials
            </SectionBadge>
            <h2 className="text-3xl md:text-5xl font-black font-poppins text-white mb-4">
              Trusted by{" "}
              <span className="gradient-text-blue">Professionals</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <GlassCard className="p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-600">{t.role}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(0,240,255,0.08), rgba(139,92,246,0.08))",
                border: "1px solid rgba(0,240,255,0.15)",
                boxShadow: "0 0 60px rgba(0,240,255,0.07), 0 0 120px rgba(139,92,246,0.05)",
              }}
            >
              <div
                className="absolute inset-0 cyber-grid opacity-30"
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black font-poppins text-white mb-4">
                  Ready to Secure Your{" "}
                  <span className="gradient-text-blue">Digital Future?</span>
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-8">
                  Let&apos;s talk about your security needs. Get a free consultation with our experts today.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl font-bold text-[#0a0a0a] hover:scale-105 transition-transform"
                    style={{
                      background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                      boxShadow: "0 0 30px rgba(0,240,255,0.3)",
                    }}
                  >
                    Start a Project
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 rounded-xl font-bold text-[#00f0ff] hover:bg-[rgba(0,240,255,0.05)] transition-all"
                    style={{ border: "1px solid rgba(0,240,255,0.3)" }}
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
