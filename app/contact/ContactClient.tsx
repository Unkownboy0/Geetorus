"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";
import { siteConfig } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  { icon: <Github size={20} />, label: "GitHub", href: siteConfig.socials.github },
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: siteConfig.socials.linkedin },
  { icon: <Twitter size={20} />, label: "Twitter", href: siteConfig.socials.twitter },
  { icon: <Instagram size={20} />, label: "Instagram", href: siteConfig.socials.instagram },
];

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters";

  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address";

  if (!data.phone.trim()) errors.phone = "Phone is required";
  else if (!/^[\d\s\-\+\(\)]{7,}$/.test(data.phone)) errors.phone = "Enter a valid phone number";

  if (!data.subject.trim()) errors.subject = "Subject is required";
  else if (data.subject.trim().length < 5) errors.subject = "Subject must be at least 5 characters";

  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 20) errors.message = "Message must be at least 20 characters";

  return errors;
}

export default function ContactClient() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none transition-all duration-200";
  const inputStyle = (field: keyof FormErrors): React.CSSProperties => ({
    background: "rgba(255,255,255,0.04)",
      border: `1px solid ${errors[field] ? "rgba(239,68,68,0.5)" : "rgba(107,114,128,0.2)"}`
  });
  const focusStyle = {
    boxShadow: "0 0 0 2px rgba(0,240,255,0.2)",
    borderColor: "rgba(0,240,255,0.4)",
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-25" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,240,255,0.06), transparent)" }} />
        <div className="relative z-10 section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionBadge color="blue" className="mb-6">Get in Touch</SectionBadge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text-blue">Secure</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Have a security challenge? Want to collaborate, or just say hi? We&apos;re always open to conversations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <GlassCard className="p-8">
                  <h2 className="text-xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(107,114,128,0.08)", border: "1px solid rgba(107,114,128,0.2)" }}>
                        <Mail size={20} className="text-[#6b7280]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2 font-medium">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-300 hover:text-[#6b7280] transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,255,159,0.08)", border: "1px solid rgba(0,255,159,0.2)" }}>
                        <MapPin size={18} className="text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Location</p>
                        <p className="text-sm text-gray-300">{siteConfig.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}>
                        <Phone size={18} className="text-[#6366f1]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-1">Response Time</p>
                        <p className="text-sm text-gray-300">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                {/* Social Links */}
                <GlassCard className="p-8 mt-6">
                  <h2 className="text-xl font-bold text-white mb-6">Follow Geetorus</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map(({ icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
                        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="group-hover:text-[#6b7280] transition-colors">{icon}</span>
                        <span className="text-sm">{label}</span>
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <GlassCard className="p-10">
                  <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>

                  {status === "success" ? (
                    <div
                      className="flex flex-col items-center justify-center py-16 text-center rounded-2xl"
                      style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}
                    >
                      <CheckCircle size={48} className="text-[#10b981] mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-500">Your mail has been successfully sended</p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#10b981] hover:bg-[rgba(16,185,129,0.05)] transition-all"
                        style={{ border: "1px solid rgba(16,185,129,0.3)" }}
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs text-gray-500 mb-2 font-medium">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputClass}
                            style={inputStyle("name")}
                            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                            onBlur={(e) => { e.target.style.boxShadow = ""; e.target.style.borderColor = errors.name ? "rgba(247,37,133,0.5)" : "rgba(255,255,255,0.08)"; }}
                          />
                          {errors.name && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "#f72585" }}><AlertCircle size={11} />{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-2 font-medium">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={inputClass}
                            style={inputStyle("email")}
                            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                            onBlur={(e) => { e.target.style.boxShadow = ""; e.target.style.borderColor = errors.email ? "rgba(247,37,133,0.5)" : "rgba(255,255,255,0.08)"; }}
                          />
                          {errors.email && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "#f72585" }}><AlertCircle size={11} />{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                          <label className="block text-xs text-gray-500 mb-2 font-medium">Mobile Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={inputClass}
                            style={inputStyle("phone")}
                            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                            onBlur={(e) => { e.target.style.boxShadow = ""; e.target.style.borderColor = errors.phone ? "rgba(247,37,133,0.5)" : "rgba(255,255,255,0.08)"; }}
                          />
                          {errors.phone && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "#f72585" }}><AlertCircle size={11} />{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-medium">Subject *</label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ ...inputStyle("subject"), appearance: "none" }}
                        >
                          <option value="" disabled style={{ background: "#0a0a0a" }}>Select a subject</option>
                          <option value="Cybersecurity Consulting" style={{ background: "#0a0a0a" }}>Cybersecurity Consulting</option>
                          <option value="Ethical Hacking / Pentest" style={{ background: "#0a0a0a" }}>Ethical Hacking / Pentest</option>
                          <option value="AI Solutions" style={{ background: "#0a0a0a" }}>AI Solutions</option>
                          <option value="Training / Workshops" style={{ background: "#0a0a0a" }}>Training / Workshops</option>
                          <option value="Product Inquiry" style={{ background: "#0a0a0a" }}>Product Inquiry</option>
                          <option value="Partnership / Collaboration" style={{ background: "#0a0a0a" }}>Partnership / Collaboration</option>
                          <option value="Other" style={{ background: "#0a0a0a" }}>Other</option>
                        </select>
                        {errors.subject && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "#f72585" }}><AlertCircle size={11} />{errors.subject}</p>}
                      </div>

                      <div>
                        <label className="block text-xs text-gray-500 mb-2 font-medium">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, challenge, or question..."
                          rows={6}
                          className={inputClass}
                          style={{ ...inputStyle("message"), resize: "none" }}
                          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                          onBlur={(e) => { e.target.style.boxShadow = ""; e.target.style.borderColor = errors.message ? "rgba(247,37,133,0.5)" : "rgba(255,255,255,0.08)"; }}
                        />
                        <div className="flex items-center justify-between mt-1.5">
                          {errors.message ? (
                            <p className="text-xs flex items-center gap-1" style={{ color: "#f72585" }}><AlertCircle size={11} />{errors.message}</p>
                          ) : <div />}
                          <p className="text-xs text-gray-700">{form.message.length}/500</p>
                        </div>
                      </div>

                      {status === "error" && (
                        <div
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm"
                          style={{ background: "rgba(247,37,133,0.05)", border: "1px solid rgba(247,37,133,0.2)", color: "#f72585" }}
                        >
                          <AlertCircle size={16} />
                          Try again So busy
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full py-4 rounded-xl font-bold text-[#0a0a0a] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: "linear-gradient(135deg, #6b7280, #6366f1)",
                          boxShadow: "0 0 25px rgba(0,240,255,0.25)",
                        }}
                      >
                        {status === "loading" ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <><Send size={16} /> Send Message</>
                        )}
                      </button>
                    </form>
                  )}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
