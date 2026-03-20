import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geetorus.com"),
  title: {
    default: "Geetorus — Cybersecurity, AI & Education",
    template: "%s | Geetorus",
  },
  description:
    "Geetorus is a next-generation cybersecurity, AI tools, and education startup. We protect, educate, and innovate — building the future of digital security.",
  keywords: [
    "Geetorus",
    "cybersecurity",
    "ethical hacking",
    "AI security",
    "penetration testing",
    "vulnerability assessment",
    "network security",
    "secure link scanning",
    "cybersecurity consulting",
    "cybersecurity training",
    "AI tools",
    "Ai security tools",
    "cybersecurity education",
    "security awareness",
    "threat detection",
    "development",
    "ai development",
    "security tools",
    "mechine learning",
    "deep learning",
    "natural language processing",
    "cybersecurity blog",
    "security news",
    "infosec news",
    "cybersecurity tips",
    "security best practices",
    "cybersecurity trends",
    "cybersecurity careers",
    "bug bounty tips",
    "penetration testing tools",
    "network security tools",
    "web application security",
    "cloud security",
    "zero trust security",
    "DevSecOps",
    "bug bounty",
    "infosec",
    "zero trust",
    "cloud security",
    "DevSecOps",
    "Udhayakumar",
    "Udhayakumar V",
    "Udhaya uk",
    "UDHAYA UK",
    "GEETORUS",
    "GEE",
    "TORUS",
    "Erode",
    "Tamil Nadu",
    "India",
  ],
  verification: {
    google: "0Ititoojv8iFBfoiZQbNsTyix42vJY9YQ0StYD_4Z6U",
  },
  authors: [{ name: "Geetorus", url: "https://geetorus.netlify.app/" }],
  creator: "Geetorus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geetorus.netlify.app/",
    siteName: "Geetorus",
    title: "Geetorus — Building the Future of Cybersecurity & AI",
    description:
      "Next-generation cybersecurity, AI tools, and education platform from India.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Geetorus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geetorus — Cybersecurity & AI",
    description: "Next-gen cybersecurity, AI tools, and education startup.",
    creator: "@geetorus",
  },
  robots: { index: true, follow: true },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
