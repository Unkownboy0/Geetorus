export type ServiceColor = "blue" | "green" | "purple";

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: ServiceColor;
};

export const siteConfig = {
  name: "Geetorus",
  tagline: "Building the Future of Cybersecurity & AI",
  description:
    "Geetorus is a next-generation cybersecurity, AI tools, and education startup building secure digital solutions for the modern world.",
  url: "https://geetorus.netlify.app",
  founder: "Udhayakumar V",
  founderPortfolio: "https://udhayauk-2907.netlify.app/",
  founderTitle: "CEO & Founder",
  founderImage: "/founder.png",
  email: "Geetorus@gmail.com",
  location: "Erode, Tamil Nadu, India",
  socials: {
    github: "https://github.com/Unknownboy0",
    linkedin: "https://www.linkedin.com/company/geetorus",
    twitter: "https://twitter.com/geetorus",
    instagram: "https://instagram.com/_geetorus_",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "cybersecurity-consulting",
    icon: "Shield",
    title: "Cybersecurity Consulting",
    description:
      "Strategic security advisory to identify risks, design resilient architectures, and protect your digital assets from evolving threats.",
    color: "blue",
    features: ["Risk Assessment", "Security Architecture", "Compliance (ISO 27001, GDPR)", "Threat Modeling"],
  },
  {
    id: "ethical-hacking",
    icon: "Terminal",
    title: "Ethical Hacking",
    description:
      "Red-team exercises and penetration testing simulating real-world attackers to expose vulnerabilities before bad actors do.",
    color: "green",
    features: ["Web App Pentesting", "Network Pentesting", "API Security Testing", "Red Team Ops"],
  },
  {
    id: "web-security-testing",
    icon: "Globe",
    title: "Web Security Testing",
    description:
      "Comprehensive vulnerability assessments of your web applications covering OWASP Top 10 and beyond.",
    color: "purple",
    features: ["OWASP Top 10", "XSS & SQLi Testing", "Authentication Audits", "Security Hardening"],
  },
  {
    id: "ai-solutions",
    icon: "Brain",
    title: "AI Solutions",
    description:
      "Custom AI tools and automation pipelines — from intelligent threat detection to LLM-powered chatbots and predictive analytics.",
    color: "blue",
    features: ["AI Threat Detection", "LLM Integration", "Automation Tools", "ML Model Fine-tuning"],
  },
  {
    id: "training-workshops",
    icon: "GraduationCap",
    title: "Training & Workshops",
    description:
      "Hands-on cybersecurity workshops for students, developers, and organizations. From basics to advanced ethical hacking.",
    color: "green",
    features: ["Hands-on Labs", "CTF Competitions", "Corporate Training", "Online Courses"],
  },
  {
    id: "soc-as-a-service",
    icon: "Eye",
    title: "SOC as a Service",
    description:
      "24/7 Security Operations Center monitoring — real-time threat hunting, incident detection, and rapid response without the overhead.",
    color: "purple",
    features: ["24/7 Monitoring", "Threat Hunting", "Incident Response", "SIEM Integration"],
  },
];

export const products = [
  {
    id: "secure-link-detector",
    title: "Secure Link Detection System",
    tagline: "AI-Powered URL Threat Intelligence",
    description:
      "Real-time AI-powered URL analysis that detects phishing, malware, and malicious links before they harm your users.",
    icon: "Link",
    color: "blue",
    badge: "Flagship",
    features: [
      "Real-time URL scanning",
      "Phishing detection with 99.2% accuracy",
      "Malware link identification",
      "Browser extension compatible",
      "REST API for integration",
      "Detailed threat reports",
    ],
    status: "Live",
  },
  {
    id: "ai-threat-scanner",
    title: "AI Threat Scanner",
    tagline: "Intelligent Network Vulnerability Analysis",
    description:
      "Machine-learning driven network scanner that identifies misconfigurations, CVEs, and zero-day exposure vectors.",
    icon: "Cpu",
    color: "green",
    badge: "Beta",
    features: [
      "Network topology mapping",
      "CVE database matching",
      "Misconfiguration detection",
      "Automated reporting",
      "CI/CD integration",
      "CVSS scoring",
    ],
    status: "Beta",
  },
  {
    id: "geetorus-learnhub",
    title: "Geetorus LearnHub",
    tagline: "Cybersecurity Education Platform",
    description:
      "Interactive cybersecurity learning platform with hands-on labs, CTF challenges, and structured courses from beginner to expert.",
    icon: "BookOpen",
    color: "purple",
    badge: "New",
    features: [
      "50+ structured courses",
      "Live CTF challenges",
      "Browser-based lab environments",
      "Progress tracking",
      "Certificate awards",
      "Community forums",
    ],
    status: "Coming Soon",
  },
  {
    id: "pentest-toolkit",
    title: "Pentest Toolkit",
    tagline: "Open-Source Security Testing Suite",
    description:
      "A curated collection of ethical hacking and penetration testing tools packaged for security professionals.",
    icon: "Wrench",
    color: "blue",
    badge: "Open Source",
    features: [
      "Recon & OSINT tools",
      "Web vuln scanners",
      "Network analysis",
      "Exploit frameworks",
      "Report generators",
      "Docker deployable",
    ],
    status: "Live",
  },
];

export const stats = [
  { label: "Security Audits", value: 120, suffix: "+" },
  { label: "Vulnerabilities Prevented", value: 320, suffix: "+" },
  { label: "Clients Protected", value: 200, suffix: "+" },
  { label: "Workshop Students", value: 1500, suffix: "+" },
];

export const testimonials = [
  {
    name: "Arun M.",
    role: "CTO, TechStartup",
    text: "Geetorus found critical vulnerabilities in our web app within days. Their report was detailed, actionable, and professional. Highly recommend.",
    rating: 5,
  },
  {
    name: "Dharaneesh M.",
    role: "Security Engineer.",
    text: "The ethical hacking workshop by Udhayakumar was exceptional. Real-world scenarios, hands-on exercises — exactly what our team needed.",
    rating: 5,
  },
  {
    name: "Karthik S.",
    role: "Founder ",
    text: "Their AI threat scanner integrated seamlessly into our pipeline. We now catch vulnerabilities before deployment. Game changer.",
    rating: 5,
  },
];
