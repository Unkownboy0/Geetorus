export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  color: "blue" | "green" | "purple" | "red" | "yellow";
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "introduction-to-ethical-hacking",
    title: "Introduction to Ethical Hacking: A Complete Beginner's Guide",
    excerpt:
      "Learn the fundamentals of ethical hacking, the mindset of a penetration tester, and how to get started with your first security assessment.",
    category: "Ethical Hacking",
    tags: ["hacking", "pentesting", "beginner"],
    readTime: "8 min read",
    date: "Mar 15, 2026",
    color: "blue",
  },
  {
    slug: "top-ai-security-tools-2026",
    title: "Top AI Security Tools Transforming Cybersecurity in 2026",
    excerpt:
      "Artificial intelligence is revolutionizing how we detect threats. Here are the top AI-powered security tools every defender should know about.",
    category: "AI Security",
    tags: ["AI", "tools", "threat-detection"],
    readTime: "6 min read",
    date: "Mar 10, 2026",
    color: "purple",
  },
  {
    slug: "building-secure-web-apps",
    title: "Building Secure Web Applications: OWASP Top 10 Decoded",
    excerpt:
      "A practical deep-dive into the OWASP Top 10 vulnerabilities, with real examples and code-level fixes for developers.",
    category: "Web Security",
    tags: ["OWASP", "web", "developers"],
    readTime: "12 min read",
    date: "Mar 5, 2026",
    color: "green",
  },
  {
    slug: "phishing-detection-ai",
    title: "How AI Detects Phishing Links: Behind the Scenes",
    excerpt:
      "An inside look at how Geetorus's Secure Link Detection System uses machine learning to identify phishing URLs in real time.",
    category: "AI Security",
    tags: ["AI", "phishing", "ML"],
    readTime: "7 min read",
    date: "Feb 28, 2026",
    color: "blue",
  },
  {
    slug: "ctf-tips-beginners",
    title: "5 Essential Tips for Your First CTF Competition",
    excerpt:
      "Capture The Flag competitions are the fastest way to level up your hacking skills. Here's how to approach your first one.",
    category: "Education",
    tags: ["CTF", "competitions", "tips"],
    readTime: "5 min read",
    date: "Feb 20, 2026",
    color: "purple",
  },
  {
    slug: "network-security-fundamentals",
    title: "Network Security Fundamentals Every Developer Must Know",
    excerpt:
      "From firewalls to VPNs, understanding network security is essential for building production-ready applications.",
    category: "Web Security",
    tags: ["network", "fundamentals", "security"],
    readTime: "9 min read",
    date: "Feb 10, 2026",
    color: "green",
  },
  {
    slug: "zero-trust-architecture",
    title: "Zero Trust Architecture: The Future of Cybersecurity",
    excerpt:
      "Zero Trust is a modern security approach. In this guide, learn why perimeter-based defense fails and how to build trust through verification.",
    category: "Cybersecurity",
    tags: ["zero-trust", "network", "security"],
    readTime: "8 min read",
    date: "Mar 18, 2026",
    color: "blue",
  },
  {
    slug: "bug-bounty-hunting-guide",
    title: "Bug Bounty Hunting: How to Earn by Hacking Legally",
    excerpt:
      "Discover bug bounty platforms, tools, and strategies to find real paydays while staying legal and ethical.",
    category: "Ethical Hacking",
    tags: ["bugbounty", "hacking", "income"],
    readTime: "9 min read",
    date: "Mar 17, 2026",
    color: "purple",
  },
  {
    slug: "linux-for-hackers",
    title: "Linux for Hackers: Essential Commands You Must Know",
    excerpt:
      "The core Linux command set every security engineer should master, from networking to file forensics.",
    category: "Fundamentals",
    tags: ["linux", "commands", "basics"],
    readTime: "7 min read",
    date: "Mar 16, 2026",
    color: "green",
  },
  {
    slug: "social-engineering-attacks",
    title: "Social Engineering Attacks: The Human Side of Hacking",
    excerpt:
      "Learn common social engineering techniques and how to defend users and organizations from human-targeted threats.",
    category: "Cybersecurity",
    tags: ["social-engineering", "phishing", "human-hacking"],
    readTime: "6 min read",
    date: "Mar 14, 2026",
    color: "red",
  },
  {
    slug: "password-security-guide",
    title: "Password Security: How to Create and Manage Strong Passwords",
    excerpt:
      "Learn practical rules and tools to stop password reuse and weak credentials from being your biggest security hole.",
    category: "Security Basics",
    tags: ["password", "security", "basics"],
    readTime: "5 min read",
    date: "Mar 13, 2026",
    color: "yellow",
  },
  {
    slug: "career-roadmap-cybersecurity",
    title: "Cybersecurity Career Roadmap: From Beginner to Expert",
    excerpt:
      "A structured path through skills, certifications, and experience for aspiring cyber defenders and pentesters.",
    category: "Career",
    tags: ["career", "roadmap", "cybersecurity"],
    readTime: "10 min read",
    date: "Mar 12, 2026",
    color: "blue",
  },
  {
    slug: "api-security-best-practices",
    title: "API Security Best Practices Every Developer Should Follow",
    excerpt:
      "Fundamental API risk controls for modern applications: auth, validation, rate limiting, and TLS.",
    category: "Web Security",
    tags: ["api", "security", "backend"],
    readTime: "8 min read",
    date: "Mar 11, 2026",
    color: "green",
  },
  {
    slug: "malware-types-explained",
    title: "Types of Malware Explained: From Viruses to Ransomware",
    excerpt:
      "A practical taxonomy of malware families and defense strategies to reduce risk.",
    category: "Cybersecurity",
    tags: ["malware", "threats"],
    readTime: "7 min read",
    date: "Mar 09, 2026",
    color: "red",
  },
];
