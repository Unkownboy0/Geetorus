"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, BookOpen } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";

const postContent: Record<string, {
  title: string; category: string; date: string; readTime: string;
  color: "blue" | "green" | "purple"; tags: string[];
  body: string;
}> = {
  "introduction-to-ethical-hacking": {
    title: "Introduction to Ethical Hacking: A Complete Beginner's Guide",
    category: "Ethical Hacking", date: "Mar 15, 2026", readTime: "8 min read",
    color: "blue", tags: ["hacking", "pentesting", "beginner"],
    body: `
## What is Ethical Hacking?

Ethical hacking — also known as penetration testing or white-hat hacking — is the authorized practice of probing computer systems, networks, and web applications to identify security vulnerabilities before malicious actors can exploit them.

## Why Ethical Hacking Matters

In 2025, the average cost of a data breach exceeded $4.5 million. Organizations spend billions on cybersecurity products, yet breaches keep happening. Why? Because most security tools only defend against known threats. Ethical hackers think like attackers — finding the gaps that automated tools miss.

## Core Mindset of an Ethical Hacker

1. **Think Offensively** — Always ask: "If I were an attacker, how would I get in?"
2. **Structured Methodology** — Follow frameworks like OWASP, PTES, or NIST
3. **Document Everything** — Detailed reports are as important as the findings themselves
4. **Stay Legal** — Never test without written authorization

## The 5 Phases of Penetration Testing

### 1. Reconnaissance
Gather information about the target using passive (OSINT) and active techniques. Tools: Shodan, theHarvester, Maltego.

### 2. Scanning & Enumeration
Identify open ports, services, and potential entry points. Tools: Nmap, Nikto, Nessus.

### 3. Exploitation
Attempt to exploit discovered vulnerabilities. Tools: Metasploit, Burp Suite, SQLMap.

### 4. Post-Exploitation
Maintain access, move laterally, escalate privileges. Tools: LinPEAS, BloodHound.

### 5. Reporting
Document all findings with risk ratings, proof-of-concept, and remediation advice.

## Getting Started

- Learn Linux fundamentals (Kali Linux is your best friend)
- Practice on legal platforms: HackTheBox, TryHackMe, PicoCTF
- Study certifications: CEH, OSCP, CompTIA Security+
- Join CTF competitions to sharpen real-world skills

Start with TryHackMe's free beginner rooms — you can complete your first "hack" in under an hour.
    `,
  },
  "top-ai-security-tools-2026": {
    title: "Top AI Security Tools Transforming Cybersecurity in 2026",
    category: "AI Security", date: "Mar 10, 2026", readTime: "6 min read",
    color: "purple", tags: ["AI", "tools", "threat-detection"],
    body: `
## The AI Revolution in Cybersecurity

Artificial intelligence is fundamentally changing how we detect, respond to, and prevent cyber threats. Traditional signature-based tools struggle against zero-day exploits and polymorphic malware. AI changes the game by learning patterns, not just signatures.

## Top AI Security Tools of 2026

### 1. Geetorus Secure Link Detection System
Our flagship product uses a fine-tuned ML model trained on 50M+ URLs to detect phishing and malware links in real time, achieving 99.2% accuracy.

### 2. Darktrace Enterprise
Uses unsupervised machine learning to model "normal" behavior across your network and detect anomalies in real time. Excellent for insider threat detection.

### 3. CrowdStrike Falcon
AI-powered endpoint detection that stops threats before they execute. Particularly effective against fileless malware.

### 4. SentinelOne Singularity
Autonomous AI that detects, prevents, and responds to threats across endpoints, cloud, and identity — without human intervention.

### 5. Microsoft Copilot for Security
Integrates GPT-4 with Microsoft's threat intelligence to help security analysts triage alerts faster and generate incident reports automatically.

## How to Choose the Right Tool

- **Team Size**: Enterprise tools like Darktrace are overkill for small teams
- **Budget**: Open-source alternatives (Wazuh + AI plugins) can cover most needs
- **Integration**: Ensure compatibility with your existing SIEM/SOAR stack
- **Explainability**: AI decisions in security must be auditable

## The Future

By 2027, 80% of SOC alerts will be triaged by AI. Human analysts will focus on strategy, threat hunting, and complex incident response — not alert fatigue.
    `,
  },
  "building-secure-web-apps": {
    title: "Building Secure Web Applications: OWASP Top 10 Decoded",
    category: "Web Security", date: "Mar 5, 2026", readTime: "12 min read",
    color: "green", tags: ["OWASP", "web", "developers"],
    body: `
## Why Developers Need to Care About Security

Security is not the security team's problem. Every developer who writes code that touches user data is responsible for the security of that data. The OWASP Top 10 is the definitive list of the most critical web application security risks — and every developer should know it by heart.

## OWASP Top 10 (2025)

### A01: Broken Access Control
The most common vulnerability. Users can access functionality or data they shouldn't. **Fix**: Implement role-based access control (RBAC), deny by default, and test permissions exhaustively.

### A02: Cryptographic Failures
Sensitive data exposed due to weak or missing encryption. **Fix**: Use TLS 1.3, bcrypt for passwords, AES-256 for data at rest.

### A03: Injection
SQL, NoSQL, OS, and LDAP injection. **Fix**: Use parameterized queries and ORMs. Never concatenate user input into queries.

\`\`\`javascript
// ❌ Vulnerable
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// ✅ Safe
const query = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
\`\`\`

### A04: Insecure Design
Security flaws in the architecture itself. **Fix**: Threat modeling during design phase, security requirements, secure design patterns.

### A05: Security Misconfiguration
Default credentials, unnecessary features enabled, verbose error messages. **Fix**: Automated configuration audits, security hardening guides.

### A06: Vulnerable and Outdated Components
Using libraries with known CVEs. **Fix**: Automate dependency updates (Dependabot, Renovate), monitor CVE databases.

### A07: Authentication & Session Failures
Weak passwords, no MFA, predictable session tokens. **Fix**: Enforce strong passwords, implement MFA, use secure, httpOnly cookies.

### A08: Software & Data Integrity Failures
Untrusted auto-updates, CI/CD pipeline attacks. **Fix**: Sign artifacts, verify checksums, protect your build pipeline.

### A09: Security Logging & Monitoring Failures
Breaches go undetected for months because there's no logging. **Fix**: Centralized logging, alerting on anomalies, SIEM integration.

### A10: Server-Side Request Forgery (SSRF)
Attacker tricks the server into making requests to internal services. **Fix**: Validate and whitelist destination URLs, block internal IP ranges.

## Quick Security Checklist

- [ ] All inputs validated and sanitized
- [ ] HTTPS everywhere, HSTS headers set
- [ ] Dependencies scanned with npm audit / Snyk
- [ ] Authentication uses MFA
- [ ] Error messages don't reveal stack traces
- [ ] Security headers (CSP, X-Frame-Options) configured
    `,
  },
};

const colorMap = {
  blue: { text: "#00f0ff", bg: "rgba(0,240,255,0.08)", border: "rgba(0,240,255,0.2)" },
  green: { text: "#00ff9f", bg: "rgba(0,255,159,0.08)", border: "rgba(0,255,159,0.2)" },
  purple: { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = postContent[slug];
  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <BookOpen size={48} className="mx-auto mb-4 text-gray-700" />
        <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
        <p className="text-gray-500 mb-6">This article doesn&apos;t exist or has been moved.</p>
        <Link href="/blog" className="text-[#00f0ff] hover:underline flex items-center gap-2 justify-center">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const c = colorMap[post.color];
  const paragraphs = post.body.split(/\n\n+/g).filter(Boolean);

  return (
    <div className="pt-24 pb-20">
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="relative z-10 section-container max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <SectionBadge color={post.color} className="mb-4">{post.category}</SectionBadge>
            <h1 className="text-3xl md:text-4xl font-black font-poppins text-white mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
              <span>{post.date}</span>
              <div className="flex gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="flex items-center gap-1"><Tag size={10} />{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div className="section-container max-w-3xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="prose-custom space-y-5">
              {paragraphs.map((p, i) => {
                if (p.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4" style={{ color: "#fff" }}>{p.replace("## ", "")}</h2>;
                }
                if (p.startsWith("### ")) {
                  return <h3 key={i} className="text-lg font-bold mb-3 mt-6" style={{ color: c.text }}>{p.replace("### ", "")}</h3>;
                }
                if (p.startsWith("```")) {
                  const code = p.replace(/```\w*\n?/, "").replace(/```$/, "");
                  return (
                    <pre key={i} className="p-5 rounded-xl overflow-x-auto text-xs leading-relaxed" style={{ background: "rgba(0,0,0,0.4)", border: `1px solid ${c.border}`, color: "#d4d4d4" }}>
                      <code>{code}</code>
                    </pre>
                  );
                }
                if (p.startsWith("- ") || p.startsWith("* ")) {
                  const items = p.split("\n").filter((l) => l.startsWith("- ") || l.startsWith("* "));
                  return (
                    <ul key={i} className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.text }} />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^[-*]\s/, "").replace(/\*\*(.*?)\*\*/g, `<strong style="color: ${c.text}">$1</strong>`) }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (p.trim().startsWith("- [ ]")) {
                  const items = p.split("\n").filter(Boolean);
                  return (
                    <ul key={i} className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-4 h-4 rounded border flex items-center justify-center shrink-0" style={{ borderColor: c.border }} />
                          {item.replace("- [ ] ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (p.includes(". ") && /^\d+\./.test(p.trim())) {
                  const items = p.split("\n").filter(Boolean);
                  return (
                    <ol key={i} className="space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="shrink-0 font-bold" style={{ color: c.text }}>{j + 1}.</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, `<strong style="color: #fff">$1</strong>`) }} />
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-sm text-gray-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, `<strong style="color: #fff">$1</strong>`) }}
                  />
                );
              })}
            </div>
          </GlassCard>

          <div className="mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
