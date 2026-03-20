"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: "blue" | "green" | "purple";
};

function pickColors(color: Service["color"]) {
  switch (color) {
    case "green":
      return { text: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.15)" };
    case "purple":
      return { text: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.15)" };
    case "blue":
    default:
      return { text: "#6b7280", bg: "rgba(107,114,128,0.08)", border: "rgba(107,114,128,0.15)" };
  }
}

export default function ServicePageClient({ service }: { service: Service }) {
  const c = pickColors(service.color);

  return (
    <div className="pt-24 pb-20">
      <section className="section-container">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
          <div className="flex-1">
            <ScrollReveal>
              <SectionBadge color={service.color} className="mb-6">
                {service.title}
              </SectionBadge>
              <h1 className="text-4xl md:text-5xl font-black font-poppins text-white mb-6">
                {service.title}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-slate-600 to-indigo-600 hover:opacity-90 transition"
                >
                  Talk to an Expert
                  <ArrowLeft size={18} className="rotate-180" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition"
                >
                  Back to Services
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1">
            <ScrollReveal>
              <GlassCard className="p-10" glowColor={service.color}>
                <h2 className="text-2xl font-bold text-white mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-5 h-5 rounded-full"
                        style={{ background: c.bg, border: `1px solid ${c.border}` }}
                      >
                        <Check size={12} className="text-white" />
                      </span>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
