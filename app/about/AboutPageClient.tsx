"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Shield, Cpu, GraduationCap, Target, Zap, Globe, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { siteConfig } from "@/lib/constants";

const timeline = [
  { year: "2021", title: "Started B.Tech (IT)", desc: "Began engineering studies at Al Ameen Engineering College, Erode, Tamil Nadu.", color: "blue" },
  { year: "2022", title: "Discovered Cybersecurity", desc: "Self-taught ethical hacking, network security, and penetration testing. First CVE submission.", color: "purple" },
  { year: "2023", title: "Founded Geetorus", desc: "Launched Geetorus as a cybersecurity and AI startup. Began conducting workshops and building tools.", color: "green" },
  { year: "2024", title: "Launched Products", desc: "Released Secure Link Detection System and AI Threat Scanner beta. Grew the workshop to 500+ students.", color: "blue" },
  { year: "2025+", title: "Scaling Up", desc: "Expanding LearnHub platform, adding SOC services, and building AI-powered security automation tools.", color: "purple" },
];

const values = [
  { icon: <Shield size={24} />, title: "Security First", desc: "Every product and decision starts with security at the core — never an afterthought.", color: "blue" },
  { icon: <Target size={24} />, title: "Mission Driven", desc: "We exist to make cybersecurity accessible, affordable, and effective for everyone.", color: "green" },
  { icon: <Zap size={24} />, title: "Innovate Always", desc: "Combining AI, automation, and human expertise to stay ahead of evolving threats.", color: "purple" },
  { icon: <Globe size={24} />, title: "Global Impact", desc: "Built in India. Solving problems for the world. One CVE at a time.", color: "blue" },
];

const colorMap = {
  blue: { text: "#6b7280", bg: "rgba(107,114,128,0.08)", border: "rgba(107,114,128,0.2)" },
  green: { text: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  purple: { text: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
};

export default function AboutPageClient() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 cyber-grid opacity-30"
          style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(107,114,128,0.06), transparent)" }}
        />
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionBadge color="blue" className="mb-6">About Geetorus</SectionBadge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
              Built by a{" "}
              <span className="gradient-text-blue">Hacker</span>
              <br />
              for the{" "}
              <span className="gradient-text-green">World</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Geetorus was born from a student&apos;s passion for cybersecurity and a vision to make the digital world safer, smarter, and more educated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div
                  className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-2xl relative overflow-hidden"
                  style={{ border: "1px solid rgba(107,114,128,0.2)", boxShadow: "none" }}
                >
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.05), rgba(139,92,246,0.05))" }}
                  >
                    <div className="w-32 h-32 rounded-full mb-4 overflow-hidden border-2" style={{ borderColor: "rgba(107,114,128,0.2)" }}>
                      <Image
                        src={siteConfig.founderImage}
                        alt={`Photo of ${siteConfig.founder}`}
                        width={128}
                        height={128}
                        className="object-cover"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{siteConfig.founder}</h3>
                    <p className="text-sm text-[#6b7280]">{siteConfig.founderTitle}</p>
                    <p className="text-xs text-gray-600 mt-1">{siteConfig.location}</p>
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#6b7280] rounded-tl-xl opacity-40" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#6b7280] rounded-tr-xl opacity-40" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#6366f1] rounded-bl-xl opacity-40" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#6366f1] rounded-br-xl opacity-40" />
                </div>
                {/* Floating skill badges */}
                {["Ethical Hacker", "AI Builder", "Startup CEO"].map((skill, i) => (
                  <motion.div
                    key={skill}
                    className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold glass"
                    style={{
                      color: ["#6b7280", "#10b981", "#6366f1"][i],
                      border: `1px solid ${["rgba(107,114,128,0.3)", "rgba(16,185,129,0.3)", "rgba(99,102,241,0.3)"][i]}`,
                      top: `${[15, 65, 80][i]}%`,
                      left: i === 1 ? "auto" : `${i === 0 ? -10 : -10}%`,
                      right: i === 1 ? "-5%" : "auto",
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + i * 0.5, delay: i * 0.3 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <SectionBadge color="green" className="mb-4">Founder Story</SectionBadge>
              <h2 className="text-3xl md:text-4xl font-black font-poppins text-white mb-4">
                From Student to{" "}
                <span className="gradient-text-blue">Security Expert</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Udhayakumar V — known online as <span className="text-[#6b7280] font-medium">Unknownboy0</span> — is a B.Tech (IT) student and the CEO & Founder of Geetorus. Based in Erode, Tamil Nadu, he began his cybersecurity journey during his first year of engineering.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                A self-taught ethical hacker, he has discovered and responsibly disclosed multiple CVEs, conducted cybersecurity workshops for 1500+ students, and built AI-powered security tools — all while still pursuing his degree.
              </p>
              
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 leading-relaxed mb-4">
                      Currently studying at <span className="text-white font-medium">Al-Ameen Engineering College</span>, Udhayakumar is an ambitious multidomain expert identifying as a future CISO, experienced network engineer, InfoSec researcher, data engineer, and AI explorer.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-4">
                      He is the driving force behind <span className="text-[#10b981] font-medium">Geetorus LearnHub</span>, an exclusive digital ecosystem equipping the next generation of tech leaders with a &quot;Security-First&quot; mindset, bridging the crucial gap between traditional software development and advanced proactive cybersecurity.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      Geetorus is the ultimate culmination of this vision: a platform that combines cutting-edge security services, AI tooling, and powerful accessible education to create the next generation of cyber defenders.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isExpanded ? (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="flex items-center gap-2 text-[#6b7280] font-semibold text-sm mb-6 hover:text-white transition-colors cursor-pointer"
                >
                  Read More
                  <ChevronDown size={16} />
                </button>
              ) : (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-[#6b7280] font-semibold text-sm mb-6 hover:text-white transition-colors cursor-pointer"
                >
                  Read Less
                  <motion.div animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={16} />
                  </motion.div>
                </button>
              )}

              <div className="flex gap-4">
                {[
                  { href: siteConfig.socials.github, icon: <Github size={18} /> },
                  { href: siteConfig.socials.linkedin, icon: <Linkedin size={18} /> },
                  { href: siteConfig.socials.twitter, icon: <Twitter size={18} /> },
                ].map(({ href, icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-xl text-gray-400 hover:text-[#6b7280] transition-all hover:scale-110"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <SectionBadge color="purple" className="mb-4">Journey</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-white mb-4">
              The <span className="gradient-text-full">Geetorus</span> Timeline
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Center line */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
              style={{ background: "linear-gradient(180deg, #6b7280, #6366f1, #10b981)" }}
            />
            <div className="space-y-12">
              {timeline.map((item, i) => {
                const c = colorMap[item.color as keyof typeof colorMap];
                return (
                  <ScrollReveal key={item.year} delay={i * 0.1}>
                    <div className={`flex gap-8 md:gap-0 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      {/* Content */}
                      <div className="flex-1 pl-16 md:pl-0 md:pr-12 md:text-right">
                        {i % 2 !== 0 && <div className="md:hidden" />}
                        <div className={i % 2 === 0 ? "md:text-right" : "md:text-left"}>
                          <GlassCard className="p-6 inline-block text-left">
                            <span className="text-xs font-bold mb-2 block" style={{ color: c.text }}>
                              {item.year}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </GlassCard>
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="absolute left-4 md:static md:flex-none md:w-4 mt-6 flex items-start justify-center">
                        <div
                          className="w-4 h-4 rounded-full border-2"
                          style={{ background: c.bg, borderColor: c.text, boxShadow: `0 0 12px ${c.bg}` }}
                        />
                      </div>
                      {/* Empty side */}
                      <div className="hidden md:block flex-1 md:pl-12" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="section-container">
          <ScrollReveal className="text-center mb-16">
            <SectionBadge color="blue" className="mb-4">Our Purpose</SectionBadge>
            <h2 className="text-3xl md:text-4xl font-black font-poppins text-white mb-4">
              Vision & <span className="gradient-text-blue">Mission</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="left">
              <GlassCard className="p-10 h-full" glowColor="blue">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(107,114,128,0.1)", border: "1px solid rgba(107,114,128,0.2)" }}>
                  <Cpu size={22} className="text-[#6b7280]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-500 leading-relaxed">
                  A world where every organization — regardless of size — has access to world-class cybersecurity tools, education, and expertise. A world where the next generation of defenders is trained, equipped, and empowered to protect the digital frontier.
                </p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <GlassCard className="p-10 h-full" glowColor="green">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  <GraduationCap size={22} className="text-[#10b981]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed">
                  To deliver cutting-edge cybersecurity services and AI tools while making security education accessible to students and professionals. We build, teach, and protect — one CVE, one workshop, one product at a time.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const c = colorMap[v.color as keyof typeof colorMap];
              return (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <GlassCard className="p-6 h-full text-center" glowColor={v.color as "blue" | "green" | "purple"}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}>
                      {v.icon}
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
