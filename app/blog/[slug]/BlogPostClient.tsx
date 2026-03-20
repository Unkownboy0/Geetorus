"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, BookOpen } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionBadge from "@/components/ui/SectionBadge";

const postContent: Record<string, {
  title: string; category: string; date: string; readTime: string;
  color: "blue" | "green" | "purple" | "red" | "yellow"; tags: string[];
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
AI-powered endpoint detection that stops threats before it executes. Particularly effective against fileless malware.

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
  "phishing-detection-ai": {
    title: "How AI Detects Phishing Links: Behind the Scenes",
    category: "AI Security",
    date: "Feb 28, 2026",
    readTime: "7 min read",
    color: "blue",
    tags: ["AI", "phishing", "ML"],
    body: `
## Why phishing is still the #1 attack vector

Phishing attacks rely on social engineering rather than technical vulnerabilities. Even the most hardened systems are only as secure as the people who use them.

## How ML models learn phishing behavior

Our Secure Link Detection System is trained on millions of labeled URLs, using features like:

- Domain age and registration patterns
- URL entropy and tokenization
- Redirect chains
- Page content similarity to known brand templates

By combining these signals, the model can predict whether a URL is malicious before a user clicks it.

## Real-time detection in action

When a user receives an email, the system checks links in milliseconds and flags suspicious ones. The model is continuously retrained on fresh data, so it adapts to emerging phishing techniques.

## What you can do today

- Use a browser extension that warns on risky links
- Educate your team to hover over links before clicking
- Implement multi-factor authentication to reduce impact

AI can't stop every phishing attempt, but it can dramatically reduce successful compromises by blocking the most sophisticated scams.
    `,
  },
  "ctf-tips-beginners": {
    title: "5 Essential Tips for Your First CTF Competition",
    category: "Education",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    color: "purple",
    tags: ["CTF", "competitions", "tips"],
    body: `
## Why CTFs are the best learning tool

Capture The Flag competitions provide hands-on challenges that mimic real-world security problems. They're the fastest way to learn hacking techniques and build confidence.

## Tip 1: Start with beginner-friendly challenges

Look for categories labeled "Beginner" or "Intro". These are designed to teach you the basics with a gentle learning curve.

## Tip 2: Learn to read the problem statement

CTF challenges are half puzzle, half code. Take time to understand what the challenge is asking before you start hacking.

## Tip 3: Master the toolchain

These tools will become your best friends:

- **Burp Suite** — for web hacking
- **GDB / pwndbg** — for binary exploitation
- **Wireshark** — for network analysis
- **Python** — for scripting and automation

## Tip 4: Don’t be afraid to ask for hints

Most CTF platforms have a chat or help system. Use it when you’re stuck — just don’t expect full solutions.

## Tip 5: Practice consistently

Solve at least one challenge per week. Over time, problems that once seemed impossible will become second nature.
    `,
  },
  "network-security-fundamentals": {
    title: "Network Security Fundamentals Every Developer Must Know",
    category: "Web Security",
    date: "Feb 10, 2026",
    readTime: "9 min read",
    color: "green",
    tags: ["network", "fundamentals", "security"],
    body: `
## Why developers need network security knowledge

Modern applications run on interconnected networks. Understanding how those networks work is critical to building secure systems.

## Firewall basics

Firewalls control traffic based on rules. At minimum, you should:

- Allow only required ports (e.g., 80/443)
- Deny all incoming traffic by default
- Use network segmentation to isolate sensitive systems

## VPNs and secure tunnels

A VPN encrypts traffic over untrusted networks. Use VPNs for:

- Remote access to internal systems
- Secure site-to-site connections

## TLS is non-negotiable

Always use HTTPS with strong cipher suites. Never allow mixed content.

## Common network vulnerabilities

### Open ports
Run \`nmap\` to discover exposed services and close anything unnecessary.

### Weak authentication
Avoid default credentials and enforce MFA for admin access.

### Insecure protocols
Replace FTP/HTTP/SMTP with SFTP/HTTPS/SMTPS where possible.

## Build security into your deployment pipeline

- Scan your infrastructure as code for misconfigurations
- Use automated tools to detect open ports and weak ciphers
- Monitor traffic for anomalies and suspicious connections
    `,
  },
  "zero-trust-architecture": {
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    category: "Cybersecurity",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    color: "blue",
    tags: ["zero-trust", "network", "security"],
    body: `

## What is Zero Trust?

Zero Trust is a security model based on one simple rule:

**"Never trust, always verify."**

No user or system is trusted by default — even inside the network.

---

## Why Traditional Security Fails

- Perimeter-based security is outdated  
- Remote work increased attack surface  
- Insider threats are rising  

---

## Core Principles

- Verify every request  
- Least privilege access  
- Continuous monitoring  

---

## Key Components

- Identity & Access Management (IAM)  
- Multi-Factor Authentication (MFA)  
- Micro-segmentation  
- Device trust  

---

## Benefits

- Reduces attack surface  
- Prevents lateral movement  
- Improves visibility  

---

## Final Thought

Zero Trust is not a product — it's a **mindset and architecture**.
`,
  },
  "bug-bounty-hunting-guide": {
    title: "Bug Bounty Hunting: How to Earn by Hacking Legally",
    category: "Ethical Hacking",
    date: "Mar 17, 2026",
    readTime: "9 min read",
    color: "purple",
    tags: ["bugbounty", "hacking", "income"],
    body: `

## What is Bug Bounty?

Companies pay hackers to find vulnerabilities in their systems.

---

## Platforms to Start

- HackerOne  
- Bugcrowd  
- Intigriti  

---

## Skills Required

- Web security  
- Recon techniques  
- Automation  

---

## Common Vulnerabilities

- XSS  
- SQL Injection  
- IDOR  
- CSRF  

---

## Beginner Strategy

1. Pick one platform  
2. Choose one program  
3. Do deep recon  
4. Focus on logic bugs  

---

## Pro Tips

- Read writeups  
- Automate recon  
- Be consistent  

---

## Final Thought

Bug bounty is not luck — it's **persistence + skill**.
`,
  },
  "linux-for-hackers": {
    title: "Linux for Hackers: Essential Commands You Must Know",
    category: "Fundamentals",
    date: "Mar 16, 2026",
    readTime: "7 min read",
    color: "green",
    tags: ["linux", "commands", "basics"],
    body: `

## Why Linux?

Linux is the backbone of cybersecurity.

---

## Must-Know Commands

- ls → list files  
- cd → navigate  
- chmod → change permissions  
- grep → search text  
- netstat → network info  

---

## Networking Commands

- ifconfig  
- ping  
- traceroute  
- nmap  

---

## File Handling

- cat  
- nano  
- rm  
- cp  
- mv  

---

## Pro Tip

Master terminal — GUI is optional, CLI is power.

---

## Final Thought

Linux is not optional for hackers — it's **mandatory**.
`,
  },
  "social-engineering-attacks": {
    title: "Social Engineering Attacks: The Human Side of Hacking",
    category: "Cybersecurity",
    date: "Mar 14, 2026",
    readTime: "6 min read",
    color: "red",
    tags: ["social-engineering", "phishing", "human-hacking"],
    body: `

## What is Social Engineering?

Manipulating people to reveal sensitive information.

---

## Common Attacks

- Phishing  
- Pretexting  
- Baiting  
- Tailgating  

---

## Why It Works

Humans are the weakest link.

---

## Prevention Tips

- Awareness training  
- Verify requests  
- Use MFA  

---

## Real Example

Fake email from "bank" asking credentials.

---

## Final Thought

Hackers don’t hack systems —  
they hack **people**.
`,
  },
  "password-security-guide": {
    title: "Password Security: How to Create and Manage Strong Passwords",
    category: "Security Basics",
    date: "Mar 13, 2026",
    readTime: "5 min read",
    color: "yellow",
    tags: ["password", "security", "basics"],
    body: `

## Why Passwords Matter

Weak passwords = easy hacks.

---

## Common Mistakes

- Using "123456"  
- Reusing passwords  
- No MFA  

---

## Strong Password Rules

- 12+ characters  
- Mix of symbols, numbers  
- Avoid personal info  

---

## Best Practices

- Use password manager  
- Enable MFA  
- Change periodically  

---

## Final Thought

Your password is your **first defense**.
`,
  },
  "career-roadmap-cybersecurity": {
    title: "Cybersecurity Career Roadmap: From Beginner to Expert",
    category: "Career",
    date: "Mar 12, 2026",
    readTime: "10 min read",
    color: "blue",
    tags: ["career", "roadmap", "cybersecurity"],
    body: `

## Step 1: Basics

- Networking  
- Linux  
- Programming  

---

## Step 2: Intermediate

- Web security  
- Tools (Burp, Nmap)  
- CTFs  

---

## Step 3: Advanced

- Exploitation  
- Red Team / Blue Team  
- Cloud security  

---

## Step 4: Specialization

- Pentesting  
- SOC Analyst  
- Malware Analysis  

---

## Certifications

- Security+  
- CEH  
- OSCP  

---

## Final Thought

Consistency > Talent.
`,
  },
  "api-security-best-practices": {
    title: "API Security Best Practices Every Developer Should Follow",
    category: "Web Security",
    date: "Mar 11, 2026",
    readTime: "8 min read",
    color: "green",
    tags: ["api", "security", "backend"],
    body: `

## Why API Security Matters

APIs expose your backend logic.

---

## Common Risks

- Broken authentication  
- Data exposure  
- Rate limit abuse  

---

## Best Practices

- Use authentication (JWT/OAuth)  
- Validate input  
- Rate limiting  
- HTTPS only  

---

## Tools

- Postman  
- Burp Suite  
- OWASP ZAP  

---

## Final Thought

Secure API = Secure application.
`,
  },
  "malware-types-explained": {
    title: "Types of Malware Explained: From Viruses to Ransomware",
    category: "Cybersecurity",
    date: "Mar 09, 2026",
    readTime: "7 min read",
    color: "red",
    tags: ["malware", "threats"],
    body: `

## What is Malware?

Malicious software designed to harm systems.

---

## Types

- Virus  
- Worm  
- Trojan  
- Ransomware  
- Spyware  

---

## How It Spreads

- Email attachments  
- Downloads  
- USB devices  

---

## Prevention

- Antivirus  
- Updates  
- Avoid suspicious links  

---

## Final Thought

Awareness is the best protection.
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
  blue: { text: "#6b7280", bg: "rgba(107,114,128,0.08)", border: "rgba(107,114,128,0.2)" },
  green: { text: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  purple: { text: "#6366f1", bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.2)" },
  red: { text: "#f87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.2)" },
  yellow: { text: "#facc15", bg: "rgba(250,204,21,0.08)", border: "rgba(250,204,21,0.2)" },
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const post = postContent[slug];
  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <BookOpen size={48} className="mx-auto mb-4 text-gray-700" />
        <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
        <p className="text-gray-500 mb-6">This article doesn&apos;t exist or has been moved.</p>
        <Link href="/blog" className="text-gray-500 hover:underline flex items-center gap-2 justify-center">
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
