"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Tag, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";

const posts = [
  {
    slug: "introduction-to-ethical-hacking",
    title: "Introduction to Ethical Hacking: A Complete Beginner's Guide",
    excerpt: "Learn the fundamentals of ethical hacking, the mindset of a penetration tester, and how to get started with your first security assessment.",
    category: "Ethical Hacking",
    tags: ["hacking", "pentesting", "beginner"],
    readTime: "8 min read",
    date: "Mar 15, 2026",
    color: "blue",
  },
  {
    slug: "top-ai-security-tools-2026",
    title: "Top AI Security Tools Transforming Cybersecurity in 2026",
    excerpt: "Artificial intelligence is revolutionizing how we detect threats. Here are the top AI-powered security tools every defender should know about.",
    category: "AI Security",
    tags: ["AI", "tools", "threat-detection"],
    readTime: "6 min read",
    date: "Mar 10, 2026",
    color: "purple",
  },
  {
    slug: "building-secure-web-apps",
    title: "Building Secure Web Applications: OWASP Top 10 Decoded",
    excerpt: "A practical deep-dive into the OWASP Top 10 vulnerabilities, with real examples and code-level fixes for developers.",
    category: "Web Security",
    tags: ["OWASP", "web", "developers"],
    readTime: "12 min read",
    date: "Mar 5, 2026",
    color: "green",
  },
  {
    slug: "phishing-detection-ai",
    title: "How AI Detects Phishing Links: Behind the Scenes",
    excerpt: "An inside look at how Geetorus's Secure Link Detection System uses machine learning to identify phishing URLs in real time.",
    category: "AI Security",
    tags: ["AI", "phishing", "ML"],
    readTime: "7 min read",
    date: "Feb 28, 2026",
    color: "blue",
  },
  {
    slug: "ctf-tips-beginners",
    title: "5 Essential Tips for Your First CTF Competition",
    excerpt: "Capture The Flag competitions are the fastest way to level up your hacking skills. Here's how to approach your first one.",
    category: "Education",
    tags: ["CTF", "competitions", "tips"],
    readTime: "5 min read",
    date: "Feb 20, 2026",
    color: "purple",
  },
  {
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals Every Developer Must Know",
    excerpt: "From firewalls to VPNs, understanding network security is essential for building production-ready applications.",
    category: "Web Security",
    tags: ["network", "fundamentals", "security"],
    readTime: "9 min read",
    date: "Feb 10, 2026",
    color: "green",
  },
];

const colorMap = {
  blue: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.2)" },
  green: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.2)" },
  purple: { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
};

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,240,255,0.06), transparent)" }} />
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionBadge color="blue" className="mb-6">Insights & Research</SectionBadge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
              The Geetorus{" "}
              <span className="gradient-text-blue">Blog</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
              Deep dives into cybersecurity, AI security tools, and ethical hacking — written by practitioners.
            </p>

            {/* Search bar */}
            <div className="max-w-lg mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/40 transition-colors text-sm backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.04)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section>
        <div className="section-container pt-20">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen size={48} className="mx-auto mb-4 text-gray-700" />
              <p className="text-gray-600">No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 auto-rows-fr">
              {filtered.map((post, i) => {
                const c = colorMap[post.color as keyof typeof colorMap];
                return (
                  <ScrollReveal key={post.slug} delay={i * 0.07} className="h-full">
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <GlassCard
                        className="p-8 h-full group cursor-pointer flex flex-col transition-transform hover:-translate-y-2"
                        glowColor={post.color as "blue" | "green" | "purple"}
                      >
                        {/* Category badge */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
                          >
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-600 flex items-center gap-1">
                            <Clock size={11} /> {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#00f0ff] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="flex items-center gap-1 text-xs text-gray-600">
                              <Tag size={10} /> {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                          <span className="text-xs text-gray-600">{post.date}</span>
                          <span
                            className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all"
                            style={{ color: c.text }}
                          >
                            Read More <ArrowRight size={12} />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.06), rgba(139,92,246,0.06))", border: "1px solid rgba(0,240,255,0.12)" }}
            >
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black font-poppins text-white mb-4">
                  Stay <span className="gradient-text-blue">Ahead</span> of Threats
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto mb-6">
                  Get the latest cybersecurity insights and tutorials delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00f0ff]/40 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  />
                  <button
                    className="px-6 py-3 rounded-xl font-bold text-[#0a0a0a] text-sm hover:scale-105 transition-transform flex items-center gap-2"
                    style={{ background: "linear-gradient(135deg, #00f0ff, #8b5cf6)" }}
                  >
                    Subscribe <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
